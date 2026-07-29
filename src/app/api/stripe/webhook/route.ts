import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, PHASE1_ITERATIONS } from "@/lib/stripe";

// Le webhook a besoin du corps brut pour vérifier la signature Stripe.
export const dynamic = "force-dynamic";

/**
 * Transforme un abonnement fraîchement créé en échéancier (subscription
 * schedule) à 2 phases :
 *   phase 1 : 12 mensualités au tarif de création (avec engagement) ;
 *   phase 2 : tarif de maintenance/hébergement, sans engagement (illimité,
 *             résiliable à tout moment par le client).
 */
async function scheduleTwoPhases(subscription: Stripe.Subscription) {
  const stripe = getStripe();

  // Ignorer les abonnements qui ne viennent pas de nos formules échelonnées
  // ou déjà rattachés à un échéancier.
  const phase2Price = subscription.metadata?.phase2_price;
  if (!phase2Price || subscription.schedule) {
    return;
  }

  const phase1Price = subscription.items.data[0]?.price.id;
  if (!phase1Price) {
    return;
  }

  const schedule = await stripe.subscriptionSchedules.create({
    from_subscription: subscription.id,
  });

  await stripe.subscriptionSchedules.update(schedule.id, {
    end_behavior: "release",
    phases: [
      {
        items: [{ price: phase1Price, quantity: 1 }],
        iterations: PHASE1_ITERATIONS,
        start_date: schedule.phases[0].start_date,
      },
      {
        items: [{ price: phase2Price, quantity: 1 }],
      },
    ],
  });
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!webhookSecret || !signature) {
    return NextResponse.json(
      { error: "Configuration webhook manquante." },
      { status: 400 }
    );
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Signature invalide.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    if (event.type === "customer.subscription.created") {
      await scheduleTwoPhases(event.data.object);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur webhook.";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
