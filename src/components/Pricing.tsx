"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  User, Rocket, Zap, Globe, RefreshCw, ShoppingCart,
  Monitor, Sparkles, Wrench, Settings, CheckCircle2, ArrowRight, ChevronDown, Star
} from "lucide-react";

const starPlans = [
  {
    icon: Zap,
    title: "Site Express",
    subtitle: "Coachs, artisans, indépendants",
    price: "490",
    unit: "",
    description: "Le site pro accessible à tous. Idéal pour les coachs, artisans, thérapeutes et auto-entrepreneurs.",
    features: [
      "1-2 pages sur mesure",
      "Design moderne & responsive",
      "Formulaire de contact",
      "SEO local optimisé",
      "Lien réseaux sociaux",
      "Hébergement 1ère année inclus",
      "Livraison en 5 jours",
    ],
    idealFor: ["Coach sportif", "Artisan", "Thérapeute", "Food truck", "Photographe", "Formateur"],
  },
  {
    icon: Globe,
    title: "Site Vitrine",
    subtitle: "Multi-pages",
    price: "990",
    unit: "",
    description: "Le site complet pour présenter votre activité et attirer de nouveaux clients.",
    features: [
      "Design sur mesure",
      "4-6 pages (Accueil, Services, À propos, Contact...)",
      "Responsive toutes tailles",
      "SEO optimisé",
      "Formulaire de contact",
      "Intégration réseaux sociaux",
      "Formation à la gestion",
    ],
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Automatisation",
    subtitle: "Agent IA & n8n",
    price: "190",
    unit: "",
    description: "Automatisez vos tâches répétitives grâce à l\u2019IA et aux workflows n8n.",
    features: [
      "Audit de vos process actuels",
      "Création de workflows n8n",
      "Intégration d\u2019agents IA",
      "Notifications automatiques (SMS, email)",
      "Connexion à vos outils existants",
      "Formation & documentation",
      "Support 30 jours inclus",
    ],
    idealFor: ["E-commerce", "Restaurant", "PME", "Logistique", "Immobilier"],
  },
];

const otherPlans = [
  {
    icon: User,
    title: "Portfolio / CV",
    subtitle: "Interactif",
    price: "150",
    unit: "",
    description: "Mettez en valeur votre profil avec un portfolio en ligne moderne et interactif.",
    features: [
      "Design personnalisé",
      "Page unique responsive",
      "Animations modernes",
      "Formulaire de contact",
      "Hébergement 1ère année inclus",
    ],
  },
  {
    icon: Rocket,
    title: "Landing Page",
    subtitle: "Conversion",
    price: "350",
    unit: "",
    description: "Page d\u2019atterrissage optimisée pour convertir vos visiteurs en clients.",
    features: [
      "Design haute conversion",
      "Copywriting optimisé",
      "Responsive mobile-first",
      "Formulaire / CTA intégrés",
      "SEO de base",
      "Hébergement 1ère année inclus",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refonte de Site",
    subtitle: "Modernisation",
    price: "690",
    unit: "",
    description: "Votre site actuel fait vieillot ? On le remet au goût du jour.",
    features: [
      "Audit de l\u2019existant",
      "Nouveau design moderne",
      "Migration du contenu",
      "Optimisation performances",
      "Responsive & SEO",
      "Redirection des anciennes URLs",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "Boutique en ligne",
    price: "1 490",
    unit: "",
    description: "Vendez en ligne avec une boutique professionnelle et sécurisée.",
    features: [
      "Catalogue produits complet",
      "Panier & paiement sécurisé",
      "Gestion des stocks",
      "Espace client",
      "Responsive mobile",
      "SEO e-commerce",
      "Formation à la gestion",
    ],
  },
  {
    icon: Monitor,
    title: "Application Web",
    subtitle: "Sur mesure",
    price: "2 500",
    unit: "",
    description: "Application web complète, développée sur mesure selon vos besoins métier.",
    features: [
      "Analyse & cahier des charges",
      "Développement Full-Stack",
      "Base de données",
      "Authentification & rôles",
      "Dashboard & statistiques",
      "API REST",
      "Tests & documentation",
    ],
  },
];

const extras = [
  {
    icon: Wrench,
    title: "Maintenance",
    price: "39",
    unit: "/mois",
    description: "Mises à jour, sauvegardes, sécurité et support technique continu.",
  },
  {
    icon: Settings,
    title: "Intervention ponctuelle",
    price: "60",
    unit: "",
    description: "Modification, ajout de fonctionnalité, correction de bug — à la demande.",
  },
];

interface Plan {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
  idealFor?: string[];
}

function PlanCard({ plan, index, featured }: { plan: Plan; index: number; featured?: boolean }) {
  const Icon = plan.icon;
  const isPopular = plan.popular;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`relative rounded-2xl p-7 bg-navy-900/40 border transition-colors duration-200 flex flex-col ${
        featured
          ? "border-teal-500/40 ring-1 ring-teal-500/20"
          : isPopular
            ? "border-teal-500/40"
            : "border-navy-700/50 hover:border-teal-500/30"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-md text-xs font-semibold bg-teal-500 text-white">
            Populaire
          </span>
        </div>
      )}

      {featured && !isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-md text-xs font-semibold bg-gold-500 text-navy-950 flex items-center gap-1">
            <Star className="w-3 h-3" />
            Recommandé
          </span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-500/10">
          <Icon className="w-5 h-5 text-teal-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">
            {plan.title}
          </h3>
          <span className="text-xs text-slate-400">{plan.subtitle}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs text-slate-400">
          À partir de
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gold-400">
            {plan.price}&euro;
          </span>
          {plan.unit && (
            <span className="text-sm text-slate-400">{plan.unit}</span>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-400 mb-5 leading-relaxed">
        {plan.description}
      </p>

      <ul className="space-y-2.5 mb-5 flex-1">
        {plan.features.map((feature, j) => (
          <li key={j} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.idealFor && (
        <div className="mb-5 pt-4 border-t border-navy-700/50">
          <span className="text-xs text-slate-400">
            Idéal pour
          </span>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {plan.idealFor.map((item, j) => (
              <span
                key={j}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-navy-800 text-slate-300 border border-navy-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href="/contact"
        className="block text-center py-3 rounded-lg font-semibold text-sm transition-colors duration-200 bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500 hover:text-white mt-auto"
      >
        Demander un devis
      </Link>
    </motion.div>
  );
}

export default function Pricing() {
  const [showOtherPlans, setShowOtherPlans] = useState(false);

  return (
    <section id="tarifs" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0c1220]" />
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(45, 212, 191, 0.05), transparent 60%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Des offres{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              simples
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Pas de mauvaise surprise. Chaque projet est unique, ces tarifs sont
            des bases qui s&apos;adaptent à vos besoins.
          </p>
        </motion.div>

        {/* 3 offres star */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {starPlans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} featured />
          ))}
        </div>

        {/* Autres offres (toggle) */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowOtherPlans(!showOtherPlans)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-navy-600 text-slate-300 font-semibold hover:border-teal-500/50 hover:text-teal-400 transition-colors duration-200"
          >
            {showOtherPlans ? "Masquer les autres offres" : "Voir toutes nos offres"}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showOtherPlans ? "rotate-180" : ""}`} />
          </button>
        </div>

        {showOtherPlans && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherPlans.map((plan, i) => (
                <PlanCard key={plan.title} plan={plan} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {extras.map((extra, i) => {
            const Icon = extra.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex items-start gap-4 bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="font-bold text-white">{extra.title}</h4>
                    <div className="text-right">
                      <span className="text-xs text-slate-400">à partir de </span>
                      <span className="text-lg font-bold text-gold-400">
                        {extra.price}&euro;
                      </span>
                      <span className="text-sm text-slate-400">{extra.unit}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{extra.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Chaque projet est unique. Contactez-moi pour un devis personnalisé
            et gratuit, adapté à vos besoins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-teal-500 text-white font-semibold text-lg hover:bg-teal-400 transition-colors duration-200"
          >
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
