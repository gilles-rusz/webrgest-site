"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Wrench, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm font-medium text-teal-400 mb-4 tracking-wide">
                Développeur Full-Stack &bull; Grand Est de la France
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              <span className="text-white">Sites web modernes pour </span>
              <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive" }}>
                artisans, indépendants
              </span>
              <span className="text-white"> &amp; PME</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Des sites modernes, rapides et pensés pour générer des contacts.
              Je ne construis pas juste un site — je comprends votre métier
              et je crée un outil utile pour votre activité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg bg-teal-500 text-white font-semibold text-lg hover:bg-teal-400 transition-colors duration-200"
              >
                Démarrer un projet
              </a>
              <a
                href="#realisations"
                className="px-8 py-4 rounded-lg border border-navy-600 text-slate-300 font-semibold text-lg hover:border-teal-500/50 hover:text-teal-400 transition-colors duration-200"
              >
                Voir mes réalisations
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: Briefcase,
                  text: "22 ans de management industriel",
                },
                {
                  icon: Wrench,
                  text: "Développeur Full-Stack certifié",
                },
                {
                  icon: Zap,
                  text: "Méthodes Lean appliquées au web",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg p-3 bg-navy-900/40 border border-navy-700/50"
                  >
                    <Icon className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Web RG Est - Création Web"
              width={350}
              height={350}
              className="rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
