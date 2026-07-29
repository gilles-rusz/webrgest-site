"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Zap,
  Monitor,
  RefreshCw,
  Wrench,
  Settings,
  CheckCircle2,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ────────────────────────────────────────
   STRIPE — Liens de paiement en plusieurs fois
   Renseigner ici les Payment Links créés dans le tableau de bord
   Stripe « Web RG Est » (format https://buy.stripe.com/...).
   Laisser une chaîne vide masque le bouton « Payer en plusieurs fois ».
   ──────────────────────────────────────── */

const STRIPE_PAYMENT_LINKS: Record<"vitrine" | "ecommerce", string> = {
  vitrine: "",
  ecommerce: "",
};

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

interface Plan {
  title: string;
  subtitle: string;
  badge?: string;
  price: string;
  unit?: string;
  period?: string;
  installment?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  stripeKey?: keyof typeof STRIPE_PAYMENT_LINKS;
  installmentLabel?: string;
  icon: LucideIcon;
  featured?: boolean;
}

const mainPlans: Plan[] = [
  {
    title: "Site Vitrine",
    subtitle: "Présenter votre activité et générer des demandes de devis",
    badge: "Le plus populaire",
    price: "49",
    unit: "€",
    period: "/ mois pendant 12 mois",
    installment:
      "Soit 12 mensualités de 49 € · Coût total\u00a0: 588 € (ou 590 € en paiement unique par virement)",
    description:
      "Un site professionnel sur-mesure pour présenter votre activité, rassurer vos prospects et générer des demandes de devis qualifiées.",
    features: [
      "Design moderne, responsive (mobile & tablette)",
      "1 à 5 pages sur-mesure (Accueil, Services, À propos, Contact, Devis)",
      "Formulaire de contact / demande de devis dynamique",
      "Optimisation SEO de base & référencement Google",
      "Intégration de vos réseaux sociaux & Google Maps",
      "Hébergement, nom de domaine & certificat SSL inclus",
      "Mise en ligne accompagnée & formation à la prise en main",
    ],
    cta: "Demander mon devis",
    ctaHref: "/devis-gratuit?offre=Site+Vitrine",
    stripeKey: "vitrine",
    installmentLabel: "Payer en 12× de 49 €",
    icon: Globe,
    featured: true,
  },
  {
    title: "Site E-Commerce",
    subtitle: "Vendre vos produits en ligne 24h/24",
    price: "124",
    unit: "€",
    period: "/ mois pendant 12 mois",
    installment:
      "Soit 12 mensualités de 124 € · Coût total\u00a0: 1 488 € (ou 1 490 € en paiement unique par virement)",
    description:
      "Une boutique en ligne complète et sécurisée pour vendre vos produits et développer votre chiffre d'affaires 24h/24.",
    features: [
      "Tout ce qui est inclus dans le site Vitrine",
      "Catalogue produits avec gestion des catégories & stocks",
      "Panier d'achat & paiement sécurisé (Stripe / CB / PayPal)",
      "Espace client & gestion des commandes",
      "SEO e-commerce optimisé",
      "Formation complète à la gestion de boutique en ligne",
    ],
    cta: "Démarrer mon projet e-commerce",
    ctaHref: "/devis-gratuit?offre=E-commerce",
    stripeKey: "ecommerce",
    installmentLabel: "Payer en 12× de 124 €",
    icon: ShoppingCart,
  },
  {
    title: "Sur-Mesure & Application Web",
    subtitle: "Fonctionnalités avancées et outils métier",
    price: "Sur devis",
    installment: "Étude personnalisée de votre cahier des charges",
    description:
      "Des fonctionnalités avancées ou un outil métier développé sur-mesure pour répondre à des besoins spécifiques.",
    features: [
      "Analyse approfondie du besoin & cahier des charges",
      "Développement sur-mesure (React, Node, etc.)",
      "Espace utilisateur / tableau de bord administrateur",
      "Connexion base de données & API",
      "Tests, recette & accompagnement continu",
    ],
    cta: "Parler de mon projet",
    ctaHref: "/devis-gratuit?offre=Application+Web",
    icon: Monitor,
  },
];

const refonteFeatures = [
  "Audit de l\u2019existant",
  "Nouveau design moderne",
  "Amélioration de la lisibilité",
  "Optimisation des performances",
  "Responsive et SEO",
];

interface Option {
  title: string;
  price: string;
  unit: string;
  description: string;
  note?: string;
  icon: LucideIcon;
}

const options: Option[] = [
  {
    title: "Maintenance",
    price: "39",
    unit: "€/mois",
    description:
      "Mises à jour, sauvegardes, sécurité et petits ajustements pour garder votre site propre et fonctionnel.",
    note: "Optionnelle, sans obligation.",
    icon: Settings,
  },
  {
    title: "Modification ponctuelle",
    price: "50",
    unit: "€",
    description:
      "Pour une petite modification, une correction, un ajout simple ou une amélioration ponctuelle sur votre site.",
    icon: Wrench,
  },
];

/* ────────────────────────────────────────
   CARD COMPONENT
   ──────────────────────────────────────── */

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const Icon = plan.icon;
  const stripeLink = plan.stripeKey ? STRIPE_PAYMENT_LINKS[plan.stripeKey] : "";

  const inner = (
    <div className="relative z-[1] flex h-full flex-col rounded-2xl bg-[#0f1e35] p-7">
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap rounded-md bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-950">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
          <Icon className="h-5 w-5 text-teal-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold leading-tight text-white">{plan.title}</h3>
          <span className="text-xs text-slate-400">{plan.subtitle}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-1.5">
          <span className={`text-3xl font-bold ${plan.featured ? "offer-price-gold-v7" : "text-gold-400"}`}>
            {plan.price}{plan.unit ? <>&nbsp;{plan.unit}</> : null}
          </span>
          {plan.period && (
            <span className="text-sm font-medium text-slate-400">{plan.period}</span>
          )}
        </div>
        {plan.installment && (
          <p className="mt-2 text-xs leading-relaxed text-slate-400/80">
            {plan.installment}
          </p>
        )}
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-400">{plan.description}</p>

      <ul className="mb-5 flex-1 space-y-2.5">
        {plan.features.map((f, j) => (
          <li key={j} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
            <span className="text-slate-300">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-2.5">
        <Link
          href={plan.ctaHref}
          className={`block rounded-lg py-3 text-center text-sm font-semibold transition-colors duration-200 ${
            plan.featured
              ? "bg-teal-500 text-white hover:bg-teal-400"
              : "border border-teal-500/30 bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-white"
          }`}
        >
          {plan.cta}
        </Link>

        {stripeLink && (
          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-navy-600 py-2.5 text-center text-xs font-semibold text-slate-300 transition-colors duration-200 hover:border-teal-500/40 hover:text-teal-400"
          >
            <CreditCard className="h-4 w-4" />
            {plan.installmentLabel ?? "Payer en plusieurs fois"}
          </a>
        )}
      </div>
    </div>
  );

  if (plan.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className="tarif-neon-wrap p-[2px]"
      >
        <div className="tarif-neon-border" />
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-2xl border border-navy-700/50 transition-all duration-200 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
    >
      {inner}
    </motion.div>
  );
}

/* ────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────── */

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0c1220]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(45,212,191,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Des tarifs{" "}
            <span
              className="text-teal-400"
              style={{
                fontFamily: "var(--font-satisfy), cursive",
                fontWeight: 400,
              }}
            >
              simples
            </span>
            , adaptés à votre projet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Chaque activité est différente. Ces tarifs servent de base pour vous
            aider à vous situer. Le devis final est toujours adapté à vos
            besoins réels.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400/70">
            Pas de mauvaise surprise&nbsp;: vous savez où vous allez dès le
            départ. Paiement en plusieurs fois possible, sans frais cachés.
          </p>
        </motion.div>

        {/* ── 3 OFFRES PRINCIPALES ── */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainPlans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

        {/* ── BANDEAU AUTOMATISATION ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-6 rounded-2xl border border-navy-700/50 bg-navy-900/40 p-8 sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
              <Zap className="h-5 w-5 text-teal-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Besoin d&apos;automatiser vos processus&nbsp;?
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-400">
                Gagnez du temps au quotidien en connectant vos outils (emails,
                formulaires, CRM, notifications). Solutions d&apos;automatisation
                sur-mesure à partir de&nbsp;190&nbsp;€.
              </p>
            </div>
          </div>
          <Link
            href="/devis-gratuit?offre=Automatisation"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-6 py-3 text-sm font-semibold text-teal-400 transition-colors duration-200 hover:bg-teal-500 hover:text-white"
          >
            En savoir plus sur l&apos;automatisation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* ── REFONTE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-navy-700/50 bg-navy-900/40 p-8 text-center"
        >
          <RefreshCw className="mx-auto mb-4 h-8 w-8 text-teal-400" />
          <h3 className="text-xl font-bold text-white">
            Vous avez déjà un site&nbsp;?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-400">
            Je peux moderniser votre site actuel, améliorer son design, sa
            lisibilité, ses performances et ses appels à l&apos;action.
          </p>
          <ul className="mx-auto mt-5 flex flex-wrap justify-center gap-3">
            {refonteFeatures.map((f) => (
              <li
                key={f}
                className="flex items-center gap-1.5 rounded-lg border border-navy-700 bg-navy-800 px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/devis-gratuit?offre=Refonte+de+site"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-6 py-3 text-sm font-semibold text-teal-400 transition-colors duration-200 hover:bg-teal-500 hover:text-white"
          >
            Demander un devis
          </Link>
        </motion.div>

        {/* ── OPTIONS ET ACCOMPAGNEMENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Options et accompagnement
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
            Pour garder votre site à jour ou intervenir ponctuellement selon vos
            besoins.
          </p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-navy-700/50 bg-navy-900/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-500/30"
              >
                <div className="mb-3 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
                    <Icon className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-bold text-white">{opt.title}</h4>
                      <div className="text-right">
                        <span className="text-xs text-slate-400">
                          à partir de{" "}
                        </span>
                        <span className="text-lg font-bold text-gold-400">
                          {opt.price}&nbsp;{opt.unit}
                        </span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">
                      {opt.description}
                    </p>
                    {opt.note && (
                      <p className="mt-2 text-xs font-medium text-teal-400">
                        {opt.note}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA FINAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Vous ne savez pas quelle offre choisir&nbsp;?
          </h3>
          <p className="mx-auto mb-6 mt-3 max-w-xl text-slate-400">
            Expliquez-moi simplement votre activité et votre besoin. Je vous
            réponds avec une proposition claire, adaptée à votre projet.
          </p>
          <Link
            href="/devis-gratuit"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-teal-400"
          >
            Demander un devis gratuit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
