"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Globe, Sparkles, ArrowRight } from "lucide-react";

const offers = [
  {
    icon: Zap,
    title: "Site Express",
    description: "Un site essentiel, rapide et efficace pour lancer votre activité.",
    features: ["1 à 3 pages", "Design sur mesure", "Optimisé SEO & mobile"],
    price: "690",
    href: "/tarifs",
  },
  {
    icon: Globe,
    title: "Site Vitrine",
    description: "Un site professionnel pour valoriser votre savoir-faire et vos services.",
    features: ["Pages illimitées", "SEO avancé", "Formulaire & intégrations"],
    price: "1 490",
    href: "/tarifs",
    highlighted: true,
  },
  {
    icon: Sparkles,
    title: "Automatisation",
    description: "Gagnez du temps avec des outils sur mesure pour votre quotidien.",
    features: ["Automatisation des tâches", "CRM & suivi des contacts", "Tableaux de bord personnalisés"],
    price: null,
    priceLabel: "Sur devis",
    href: "/automatisation",
  },
];

export default function HomeOffers() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-7 bg-navy-900/40 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${
                  offer.highlighted
                    ? "border-teal-500/25 hover:border-teal-500/40"
                    : "border-navy-700/50 hover:border-teal-500/25"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {offer.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {offer.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-teal-400 text-xs">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={offer.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  {offer.price ? `À partir de ${offer.price} €` : offer.priceLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
