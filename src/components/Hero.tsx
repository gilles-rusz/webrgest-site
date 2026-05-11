"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Wrench, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <div className="relative w-full">
        <Image
          src="/hero-banner.png"
          alt="Web RG Est - Création Web - Gilles Ruszczycki"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
      </div>

      <div className="flex-1 bg-navy-950 flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto"
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
              className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
            >
              Des sites modernes, rapides et pensés pour générer des contacts.
              Je ne construis pas juste un site — je comprends votre métier
              et je crée un outil utile pour votre activité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
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
        </div>
      </div>
    </section>
  );
}
