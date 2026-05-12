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
    image: "/processus/analyse.jpg",
  },
  {
    icon: Palette,
    number: "02",
    title: "Maquette & Design",
    description:
      "Je crée une maquette visuelle de votre site pour valider le design, les couleurs et la structure avant de coder.",
    image: "/processus/maquette.jpg",
  },
  {
    icon: Code2,
    number: "03",
    title: "Développement",
    description:
      "Je développe votre site avec les technologies les plus modernes. Code propre, responsive et optimisé pour le SEO.",
    image: "/processus/developpement.jpg",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Mise en Ligne",
    description:
      "Tests, optimisations et mise en production. Votre site est en ligne, rapide et prêt à accueillir vos visiteurs.",
    image: "/processus/mise-en-ligne.jpg",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Formation & Prise en Main",
    description:
      "Je vous forme à la gestion de votre site. Vous êtes autonome pour modifier vos contenus en toute simplicité.",
    image: "/processus/formation.jpg",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Suivi & Maintenance",
    description:
      "Je reste disponible après la livraison. Mises à jour, évolutions et support technique pour votre tranquillité.",
    image: "/processus/suivi.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="processus" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 40% 40%, rgba(99, 102, 241, 0.04), transparent 50%)" }} />
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
            Comment je{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              travaille
            </span>
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
                className="rounded-2xl bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200 relative overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-4xl font-bold text-white/20">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-teal-500/10">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
