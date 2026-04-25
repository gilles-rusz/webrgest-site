"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots"
    >
      <FloatingOrb
        className="w-96 h-96 bg-teal-500 -top-20 -left-20"
        delay={0}
      />
      <FloatingOrb
        className="w-80 h-80 bg-gold-400 top-1/3 -right-10"
        delay={2}
      />
      <FloatingOrb
        className="w-72 h-72 bg-teal-400 bottom-10 left-1/4"
        delay={4}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/90 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6">
                Développeur Full-Stack &bull; Est de la France
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Donnez vie à </span>
              <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                vos projets
              </span>
              <br />
              <span className="text-white">digitaux</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Sites web modernes, applications sur mesure et solutions digitales
              pour propulser votre activité.{" "}
              <span className="text-gold-400">Qualité, créativité et performance.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105"
              >
                Démarrer un projet
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#processus"
                className="px-8 py-4 rounded-full border border-navy-600 text-slate-300 font-semibold text-lg hover:border-teal-500/50 hover:text-teal-400 transition-all duration-300 hover:scale-105"
              >
                Mon approche
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-gold-400/20 rounded-full blur-3xl" />
              <div className="animate-float relative">
                <Image
                  src="/logo.png"
                  alt="Web RG Est - Création Web"
                  width={400}
                  height={400}
                  className="rounded-2xl drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "100%", label: "Sur mesure" },
            { number: "24/7", label: "Support réactif" },
            { number: "SEO", label: "Optimisé" },
            { number: "Mobile", label: "First" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">
                {stat.number}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
