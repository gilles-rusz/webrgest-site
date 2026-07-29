import { NextResponse } from "next/server";
import { getStripe, getPlanPriceIds, type PlanKey } from "@/lib/stripe";

function getBaseUrl(request: Request): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/+$/, "");
  const origin = request.headers.get("origin");
  if (origin) return origin.replace(/\/+$/, "");
  return "https://webrgest.fr";
}

function isPlanKey(value: unknown): value is PlanKey {
  return value === "vitrine" || value === "ecommerce";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const plan = (body as { plan?: unknown })?.plan;
  if (!isPlanKey(plan)) {
    return NextResponse.json({ error: "Formule inconnue." }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const { phase1Price, phase2Price } = getPlanPriceIds(plan);
    const baseUrl = getBaseUrl(request);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: phase1Price, quantity: 1 }],
      // Ces métadonnées sont lues par le webhook pour transformer l'abonnement
      // en échéancier 2 phases (12 mensualités puis maintenance).
      subscription_data: {
        metadata: {
          plan,
          phase2_price: phase2Price,
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: "required",
      success_url: `${baseUrl}/merci-paiement?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/tarifs`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Impossible de créer la session de paiement." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur inconnue.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
