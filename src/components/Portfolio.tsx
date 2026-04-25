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
    accent: "teal" as const,
  },
  {
    icon: Palette,
    number: "02",
    title: "Maquette & Design",
    description:
      "Je crée une maquette visuelle de votre site pour valider le design, les couleurs et la structure avant de coder.",
    accent: "gold" as const,
  },
  {
    icon: Code2,
    number: "03",
    title: "Développement",
    description:
      "Je développe votre site avec les technologies les plus modernes. Code propre, responsive et optimisé pour le SEO.",
    accent: "teal" as const,
  },
  {
    icon: Rocket,
    number: "04",
    title: "Mise en Ligne",
    description:
      "Tests, optimisations et mise en production. Votre site est en ligne, rapide et prêt à accueillir vos visiteurs.",
    accent: "gold" as const,
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Formation & Prise en Main",
    description:
      "Je vous forme à la gestion de votre site. Vous êtes autonome pour modifier vos contenus en toute simplicité.",
    accent: "teal" as const,
  },
  {
    icon: Headphones,
    number: "06",
    title: "Suivi & Maintenance",
    description:
      "Je reste disponible après la livraison. Mises à jour, évolutions et support technique pour votre tranquillité.",
    accent: "gold" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function Portfolio() {
  return (
    <section id="processus" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4">
            Mon approche
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Comment{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              je travaille
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Un processus simple et transparent, de la première discussion
            jusqu&apos;à la mise en ligne de votre projet.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group glass rounded-3xl p-8 hover:border-teal-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-5xl font-bold ${
                      step.accent === "teal"
                        ? "text-teal-400/10"
                        : "text-gold-400/10"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    step.accent === "teal"
                      ? "bg-teal-500/10 group-hover:bg-teal-500/20"
                      : "bg-gold-400/10 group-hover:bg-gold-400/20"
                  } transition-colors duration-300`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      step.accent === "teal"
                        ? "text-teal-400"
                        : "text-gold-400"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105"
          >
            Démarrer mon projet
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
