"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Écoute", desc: "On comprend votre métier, vos objectifs et vos besoins." },
  { num: "02", title: "Conception", desc: "Nous créons un design sur mesure et une structure efficace." },
  { num: "03", title: "Développement", desc: "Un site rapide, sécurisé et optimisé pour le référencement." },
  { num: "04", title: "Mise en ligne", desc: "Votre site est en ligne, et nous restons à vos côtés." },
];

const projects = [
  {
    title: "La Table d'Or",
    type: "Site vitrine",
    image: "/demos/restaurant-gastronomique.jpg",
    href: "/demos/restaurant",
  },
  {
    title: "Terroir d'Alsace",
    type: "E-Commerce",
    image: "/demos/vignoble-alsace.png",
    href: "/demos/ecommerce",
  },
];

export default function HomeMethodRealisations() {
  return (
    <section id="realisations" className="relative py-14 sm:py-20 scroll-mt-24">
      {/* Dark background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(45, 212, 191, 0.05), transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(99, 102, 241, 0.04), transparent 50%)",
        }}
      />
      {/* Top neon separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Method column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-semibold text-teal-400 tracking-[3px] uppercase mb-3">
              Notre méthode
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 leading-tight">
              Un processus clair,{" "}
              <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
                simple
              </span>{" "}
              et efficace.
            </h2>

            <div className="relative">
              {/* Connection line */}
              <div className="hidden sm:block absolute top-5 left-5 right-5 h-0.5 bg-gradient-to-r from-teal-500 to-teal-500/20" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className="text-center relative">
                    <div className="w-10 h-10 rounded-full bg-teal-500/15 border-2 border-teal-500 flex items-center justify-center mx-auto mb-3 relative z-10 backdrop-blur-sm">
                      <span className="text-xs font-bold text-teal-400">{step.num}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-snug">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Réalisations column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-[10px] font-semibold text-teal-400 tracking-[3px] uppercase">
                Réalisations
              </p>
              <Link
                href="/realisations"
                className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
              >
                Voir toutes les réalisations
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight">
              Des projets qui parlent de{" "}
              <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
                résultats
              </span>
              .
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {projects.map((project, i) => (
                <Link
                  key={i}
                  href={project.href}
                  className="group rounded-2xl overflow-hidden relative aspect-[4/3] bg-navy-800"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-sm font-bold text-white">{project.title}</h4>
                    <span className="text-[11px] text-slate-400">{project.type}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
