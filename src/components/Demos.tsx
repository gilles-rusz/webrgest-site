"use client";

import { motion } from "framer-motion";
import { ExternalLink, UtensilsCrossed, ShoppingCart } from "lucide-react";

const demos = [
  {
    title: "La Table d'Or",
    subtitle: "Restaurant Gastronomique",
    type: "Site Vitrine",
    description:
      "Site complet pour un restaurant étoilé en Alsace. Carte interactive, réservation en ligne, galerie photo, avis clients et design premium.",
    features: ["Carte interactive", "Réservation en ligne", "Galerie photo", "Avis clients", "Design responsive"],
    url: "https://out-qnvstzzv.devinapps.com",
    icon: UtensilsCrossed,
    emoji: "🍽️",
    gradient: "from-amber-500 to-orange-600",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/20",
  },
  {
    title: "Terroir d'Alsace",
    subtitle: "Produits Locaux & Artisanaux",
    type: "E-Commerce",
    description:
      "Boutique en ligne de produits du terroir alsacien. Catalogue avec filtres, panier fonctionnel, fiches produits détaillées et paiement sécurisé.",
    features: ["Catalogue produits", "Panier interactif", "Filtres & recherche", "Fiches détaillées", "Paiement sécurisé"],
    url: "https://out-nqvrddxq.devinapps.com",
    icon: ShoppingCart,
    emoji: "🌿",
    gradient: "from-emerald-500 to-teal-600",
    accentBg: "bg-teal-500/10",
    accentText: "text-teal-400",
    accentBorder: "border-teal-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Demos() {
  return (
    <section id="realisations" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gold-400/10 text-gold-400 border border-gold-400/20 mb-4">
            Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Exemples de{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
              sites web
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Découvrez des exemples de sites que je peux créer pour vous.
            Chaque projet est unique, responsive et optimisé.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group glass rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-500"
              >
                <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${demo.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="text-8xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                    {demo.emoji}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white`}>
                      {demo.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${demo.accentBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${demo.accentText}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                      <p className="text-sm text-slate-400">{demo.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {demo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {demo.features.map((feature, j) => (
                      <span
                        key={j}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${demo.accentBg} ${demo.accentText} border ${demo.accentBorder}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${demo.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Voir la démo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
