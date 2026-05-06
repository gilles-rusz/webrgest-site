"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket, ShieldCheck, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Échange & Analyse",
    description:
      "On discute de votre projet, vos objectifs et votre budget. Je vous propose une solution adaptée avec un devis clair et détaillé.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Maquette & Design",
    description:
      "Je crée une maquette visuelle de votre site pour valider le design, les couleurs et la structure avant de coder.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Développement",
    description:
      "Je développe votre site avec les technologies les plus modernes. Code propre, responsive et optimisé pour le SEO.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Mise en Ligne",
    description:
      "Tests, optimisations et mise en production. Votre site est en ligne, rapide et prêt à accueillir vos visiteurs.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Formation & Prise en Main",
    description:
      "Je vous forme à la gestion de votre site. Vous êtes autonome pour modifier vos contenus en toute simplicité.",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Suivi & Maintenance",
    description:
      "Je reste disponible après la livraison. Mises à jour, évolutions et support technique pour votre tranquillité.",
  },
];

export default function Portfolio() {
  return (
    <section id="processus" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Comment je travaille
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Un processus simple et transparent, de la première discussion
            jusqu&apos;à la mise en ligne de votre projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-8 bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-5xl font-bold text-navy-700/50">
                    {step.number}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-teal-500/10">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
