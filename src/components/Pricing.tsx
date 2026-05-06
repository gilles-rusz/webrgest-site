"use client";

import { motion } from "framer-motion";
import {
  User, Rocket, Zap, Globe, RefreshCw, ShoppingCart,
  Monitor, Sparkles, Wrench, Settings, CheckCircle2, ArrowRight
} from "lucide-react";

const plans = [
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
    accent: "teal" as const,
    popular: false,
  },
  {
    icon: Zap,
    title: "Site Express",
    subtitle: "Coachs, artisans, indépendants",
    price: "350",
    unit: "",
    description: "Le site pro accessible à tous. Idéal pour les coachs, artisans, thérapeutes et auto-entrepreneurs qui veulent une présence en ligne rapide et efficace.",
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
    accent: "gold" as const,
    popular: false,
  },
  {
    icon: Rocket,
    title: "Landing Page",
    subtitle: "Conversion",
    price: "350",
    unit: "",
    description: "Page d'atterrissage optimisée pour convertir vos visiteurs en clients.",
    features: [
      "Design haute conversion",
      "Copywriting optimisé",
      "Responsive mobile-first",
      "Formulaire / CTA intégrés",
      "SEO de base",
      "Hébergement 1ère année inclus",
    ],
    accent: "teal" as const,
    popular: false,
  },
  {
    icon: Globe,
    title: "Site Vitrine",
    subtitle: "Multi-pages",
    price: "350",
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
    accent: "teal" as const,
    popular: true,
  },
  {
    icon: RefreshCw,
    title: "Refonte de Site",
    subtitle: "Modernisation",
    price: "450",
    unit: "",
    description: "Votre site actuel fait vieillot ? On le remet au goût du jour.",
    features: [
      "Audit de l'existant",
      "Nouveau design moderne",
      "Migration du contenu",
      "Optimisation performances",
      "Responsive & SEO",
      "Redirection des anciennes URLs",
    ],
    accent: "gold" as const,
    popular: false,
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
    accent: "teal" as const,
    popular: false,
  },
  {
    icon: Monitor,
    title: "Application Web",
    subtitle: "Sur mesure",
    price: "2 000",
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
    accent: "gold" as const,
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Automatisation",
    subtitle: "Workflows & n8n",
    price: "190",
    unit: "",
    description: "Automatisez vos tâches répétitives et gagnez du temps. Notifications, factures, emails, synchronisation — tout en automatique.",
    features: [
      "Audit de vos process actuels",
      "Création de workflows n8n",
      "Notifications automatiques (SMS, email)",
      "Connexion à vos outils existants",
      "Formation & documentation",
      "Support 30 jours inclus",
    ],
    idealFor: ["E-commerce", "Restaurant", "PME", "Logistique", "Immobilier"],
    accent: "teal" as const,
    popular: false,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gold-400/10 text-gold-400 border border-gold-400/20 mb-4">
            Tarifs transparents
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Des prix{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
              clairs et adaptés
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Pas de mauvaise surprise. Chaque projet est unique, ces tarifs sont
            des bases qui s&apos;adaptent à vos besoins.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`relative glass rounded-3xl p-7 transition-all duration-500 ${
                  plan.popular
                    ? "border-teal-500/40 shadow-lg shadow-teal-500/10"
                    : "hover:border-teal-500/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg">
                      Le plus demandé
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      plan.accent === "teal"
                        ? "bg-teal-500/10"
                        : "bg-gold-400/10"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        plan.accent === "teal"
                          ? "text-teal-400"
                          : "text-gold-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {plan.title}
                    </h3>
                    <span className="text-xs text-slate-400">{plan.subtitle}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">
                    À partir de
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-bold ${
                        plan.accent === "teal"
                          ? "text-teal-400"
                          : "text-gold-400"
                      }`}
                    >
                      {plan.price}€
                    </span>
                    {plan.unit && (
                      <span className="text-sm text-slate-400">{plan.unit}</span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-5">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.accent === "teal"
                            ? "text-teal-400"
                            : "text-gold-400"
                        }`}
                      />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {"idealFor" in plan && plan.idealFor && (
                  <div className="mb-5 pt-4 border-t border-white/5">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                      Idéal pour
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {plan.idealFor.map((item: string, j: number) => (
                        <span
                          key={j}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            plan.accent === "teal"
                              ? "bg-teal-500/10 text-teal-300"
                              : "bg-gold-400/10 text-gold-300"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 hover:shadow-lg hover:shadow-teal-500/25"
                      : plan.accent === "teal"
                      ? "border border-teal-500/30 text-teal-400 hover:bg-teal-500/10"
                      : "border border-gold-400/30 text-gold-400 hover:bg-gold-400/10"
                  }`}
                >
                  Demander un devis
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {extras.map((extra, i) => {
            const Icon = extra.icon;
            return (
              <div
                key={i}
                className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="font-bold text-white">{extra.title}</h4>
                    <div className="text-right">
                      <span className="text-xs text-slate-500">à partir de </span>
                      <span className="text-lg font-bold text-teal-400">
                        {extra.price}€
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Chaque projet est unique. Contactez-moi pour un devis personnalisé
            et gratuit, adapté à vos besoins.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105"
          >
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
