"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const techSkills = [
  "React / Next.js",
  "Node.js / Express",
  "TypeScript / JavaScript",
  "HTML5 / CSS3",
  "Tailwind CSS",
  "MySQL / MongoDB",
  "Git / GitHub",
  "API REST / WebSocket",
  "Responsive Design",
  "SEO Technique",
  "Docker",
  "Figma / UI Design",
];

export default function About() {
  return (
    <section id="apropos" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            À propos de{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              moi
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/portrait.webp"
            alt="Gilles Ruszczycki - Fondateur de Web RG Est"
            width={200}
            height={200}
            className="rounded-full border-2 border-navy-700 object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5">
              <p className="text-lg text-slate-300 leading-relaxed">
                Je suis{" "}
                <span className="text-teal-400 font-medium">Gilles Ruszczycki</span>,
                développeur web certifié Full-Stack et ancien Team Leader Logistique.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Pendant{" "}
                <span className="text-gold-400 font-medium">22 ans chez Stellantis</span>,
                j&apos;ai géré des modules logistiques d&apos;une dizaine de personnes, parfois plusieurs simultanément, optimisé des flux logistiques
                et appliqué les méthodes Lean au quotidien. Aujourd&apos;hui, je mets
                cette rigueur et cette vision business au service de vos projets web.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Basé dans l&apos;
                <span className="text-gold-400 font-medium">Est de la France</span>,
                titulaire d&apos;un{" "}
                <span className="text-teal-400 font-medium">
                  Titre Professionnel de Développeur Web et Web Mobile
                </span>
                , je crée des solutions digitales sur mesure avec une approche que peu de
                développeurs peuvent offrir :{" "}
                <span className="text-white font-medium">
                  la compréhension concrète de votre activité
                </span>.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                <h4 className="font-semibold text-white mb-1">Un profil hybride</h4>
                <p className="text-sm text-slate-400">
                  Développeur web certifié avec 22 ans d&apos;expérience en management industriel. Je ne code pas juste un site — je comprends votre métier.
                </p>
              </div>
              <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                <h4 className="font-semibold text-white mb-1">La rigueur industrielle au service du web</h4>
                <p className="text-sm text-slate-400">
                  Les méthodes Lean, l&apos;optimisation des flux et la résolution de problèmes que j&apos;appliquais en usine, je les applique maintenant à vos projets digitaux.
                </p>
              </div>
              <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                <h4 className="font-semibold text-white mb-1">Fiabilité et engagement</h4>
                <p className="text-sm text-slate-400">
                  22 ans chez un leader mondial de l&apos;automobile, c&apos;est la preuve d&apos;un engagement sur le long terme. Vos projets méritent la même constance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl p-8 lg:p-10 bg-navy-900/40 border border-navy-700/50">
              <h3 className="text-xl font-bold text-white mb-6">
                Compétences techniques
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-navy-700/50">
                <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
                  Stack préférée
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Express"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-md text-sm font-medium bg-navy-800 text-teal-400 border border-navy-700"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
