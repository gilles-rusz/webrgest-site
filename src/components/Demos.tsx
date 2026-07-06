"use client";

import { motion } from "framer-motion";
import { ExternalLink, UtensilsCrossed, ShoppingCart } from "lucide-react";
import Link from "next/link";

const demos = [
  {
    title: "La Table d'Or",
    subtitle: "Restaurant Gastronomique",
    type: "Site Vitrine",
    description:
      "Site complet pour un restaurant étoilé en Alsace. Carte interactive, réservation en ligne, galerie photo, avis clients et design premium.",
    features: ["Carte interactive", "Réservation en ligne", "Galerie photo", "Avis clients", "Design responsive"],
    url: "/demos/restaurant",
    icon: UtensilsCrossed,
    image: "/demos/restaurant-gastronomique.jpg",
    internal: true,
  },
  {
    title: "Burovia",
    subtitle: "Accessoires de Télétravail",
    type: "E-Commerce",
    description:
      "Boutique en ligne d'accessoires pour le télétravail. Catalogue produits, panier interactif, fiches détaillées et paiement sécurisé.",
    features: ["Catalogue produits", "Panier interactif", "Fiches détaillées", "Paiement sécurisé", "Design responsive"],
    url: "https://burovia.eu",
    icon: ShoppingCart,
    image: "/demos/burovia.jpg",
    internal: false,
  },
];

export default function Demos() {
  return (
    <section id="realisations" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0c1220]" />
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 60% 20%, rgba(45, 212, 191, 0.05), transparent 60%)" }} />
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
            Mes{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              réalisations
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Ces démonstrations montrent le type de site que je peux concevoir pour votre activité.
            Chaque projet est unique, responsive et optimisé.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200"
              >
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center overflow-hidden">
                  {demo.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={demo.image} alt={demo.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-navy-900/30" />
                    </>
                  ) : (
                    <Icon className="w-16 h-16 text-teal-400/30" />
                  )}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {demo.type}
                    </span>
                    {demo.internal ? (
                      <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-gold-400/10 text-gold-400 border border-gold-400/20">
                        Démo fictive
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Site en ligne
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    {demo.internal ? (
                      <Link
                        href={demo.url}
                        className="w-10 h-10 rounded-lg bg-navy-800/80 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-navy-800/80 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {demo.title}
                      </h3>
                      <span className="text-sm text-slate-400">
                        {demo.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-5 leading-relaxed">
                    {demo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {demo.features.map((feature, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-navy-800 text-slate-300 border border-navy-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {demo.internal ? (
                    <Link
                      href={demo.url}
                      className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                    >
                      Voir le site
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                    >
                      Voir le site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
