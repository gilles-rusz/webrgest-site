import Stripe from "stripe";

function getEnv(key: string): string {
  return process.env[key] || "";
}

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = getEnv("STRIPE_SECRET_KEY");
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY manquante.");
    }
    _stripe = new Stripe(key.trim());
  }
  return _stripe;
}

/**
 * Formules payables en plusieurs fois.
 * phase1Price : prix récurrent facturé pendant les 12 premiers mois (création).
 * phase2Price : prix récurrent de maintenance/hébergement (sans engagement) qui
 *               prend le relais automatiquement après les 12 mensualités.
 */
export const PHASE1_ITERATIONS = 12;

export type PlanKey = "vitrine" | "ecommerce";

export function getPlanPriceIds(plan: PlanKey): {
  phase1Price: string;
  phase2Price: string;
} {
  const phase2Price = getEnv("STRIPE_PRICE_MAINTENANCE");
  const phase1Price =
    plan === "vitrine"
      ? getEnv("STRIPE_PRICE_VITRINE")
      : getEnv("STRIPE_PRICE_ECOMMERCE");

  if (!phase1Price || !phase2Price) {
    throw new Error(
      `Identifiants de prix Stripe manquants pour la formule "${plan}".`
    );
  }
  return { phase1Price, phase2Price };
}
