"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Search, Clock, Smartphone, ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: Globe,
    problem: "Votre site ne vous rapporte aucun contact ?",
    solution:
      "Je crée des sites pensés pour convertir : formulaires visibles, appels à l'action clairs, parcours optimisé.",
    cta: "Site Vitrine",
    href: "/tarifs",
  },
  {
    icon: Search,
    problem: "Votre entreprise n'apparaît pas sur Google ?",
    solution:
      "Optimisation SEO dès la conception : structure technique, mots-clés locaux, vitesse de chargement.",
    cta: "Référencement SEO",
    href: "/services",
  },
  {
    icon: Clock,
    problem: "Vous perdez du temps avec des tâches répétitives ?",
    solution:
      "Automatisation de vos flux : emails, factures, notifications, synchronisation entre vos outils.",
    cta: "Automatisation",
    href: "/automatisation",
  },
  {
    icon: Smartphone,
    problem: "Votre ancien site ne fonctionne pas sur mobile ?",
    solution:
      "Refonte responsive et moderne : votre site s'adapte à tous les écrans, du smartphone au desktop.",
    cta: "Refonte de site",
    href: "/tarifs",
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(232, 184, 75, 0.04), transparent 50%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vous vous reconnaissez{" "}
            <span
              className="text-teal-400"
              style={{
                fontFamily: "var(--font-satisfy), cursive",
                fontWeight: 400,
              }}
            >
              ?
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Ces situations sont fréquentes chez les artisans, indépendants et
            PME. J&apos;y apporte des solutions concrètes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-6 bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {item.solution}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      {item.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
