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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

interface Plan {
  title: string;
  subtitle: string;
  badge?: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  icon: LucideIcon;
  featured?: boolean;
}

const mainPlans: Plan[] = [
  {
    title: "Site Vitrine",
    subtitle: "Présenter votre activité et recevoir des demandes de contact",
    badge: "Le plus demandé",
    price: "590",
    unit: "€",
    description:
      "Un site professionnel pour présenter votre entreprise, rassurer vos visiteurs et leur donner envie de vous contacter.",
    features: [
      "Design moderne et responsive",
      "1 à 3 pages selon le besoin",
      "Formulaire de contact",
      "SEO de base",
      "Intégration réseaux sociaux",
      "Mise en ligne accompagnée",
    ],
    cta: "Recevoir un devis",
    ctaHref: "/devis-gratuit?offre=Site+Vitrine",
    icon: Globe,
    featured: true,
  },
  {
    title: "E-commerce",
    subtitle: "Vendre vos produits en ligne",
    price: "1 490",
    unit: "€",
    description:
      "Une boutique en ligne professionnelle pour vendre vos produits avec une solution claire, moderne et sécurisée.",
    features: [
      "Catalogue produits",
      "Panier et paiement sécurisé",
      "Pages essentielles",
      "Responsive mobile",
      "SEO e-commerce de base",
      "Formation à la gestion",
    ],
    cta: "Recevoir un devis",
    ctaHref: "/devis-gratuit?offre=E-commerce",
    icon: ShoppingCart,
  },
  {
    title: "Automatisation",
    subtitle: "Gagner du temps sur vos tâches répétitives",
    price: "190",
    unit: "€",
    description:
      "Des automatisations simples pour réduire les tâches manuelles : emails, notifications, formulaires, suivis ou connexions entre outils.",
    features: [
      "Analyse du besoin",
      "Création d\u2019un workflow simple",
      "Connexion entre outils existants",
      "Notifications automatiques",
      "Test et mise en route",
      "Explication claire du fonctionnement",
    ],
    cta: "Recevoir un devis",
    ctaHref: "/devis-gratuit?offre=Automatisation",
    icon: Zap,
  },
  {
    title: "Application Web",
    subtitle: "Projet sur mesure",
    price: "2 500",
    unit: "€",
    description:
      "Une solution web développée sur mesure pour répondre à un besoin métier spécifique.",
    features: [
      "Analyse du besoin",
      "Cahier des charges simplifié",
      "Développement sur mesure",
      "Interface administrateur si nécessaire",
      "Base de données si nécessaire",
      "Tests et accompagnement",
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
        <span className="text-xs text-slate-400">À partir de</span>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-bold ${plan.featured ? "offer-price-gold-v7" : "text-gold-400"}`}>
            {plan.price}&nbsp;{plan.unit}
          </span>
        </div>
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

      <Link
        href={plan.ctaHref}
        className={`mt-auto block rounded-lg py-3 text-center text-sm font-semibold transition-colors duration-200 ${
          plan.featured
            ? "bg-teal-500 text-white hover:bg-teal-400"
            : "border border-teal-500/30 bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-white"
        }`}
      >
        {plan.cta}
      </Link>
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
            départ.
          </p>
        </motion.div>

        {/* ── 4 OFFRES PRINCIPALES ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mainPlans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

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
