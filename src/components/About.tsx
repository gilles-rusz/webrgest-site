"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users, TrendingUp, Wrench, Shield, Award, Factory } from "lucide-react";

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

const businessSkills = [
  { icon: Users, title: "Management d'équipe", desc: "25 collaborateurs encadrés pendant 22 ans" },
  { icon: TrendingUp, title: "Lean Management", desc: "Amélioration continue et optimisation des process" },
  { icon: Wrench, title: "Résolution de problèmes", desc: "Analyse, diagnostic et solutions concrètes" },
  { icon: Factory, title: "Environnement industriel", desc: "Logistique, flux de production, qualité" },
];

const values = [
  {
    title: "Un profil hybride unique",
    description:
      "Développeur web certifié avec 22 ans d'expérience en management industriel. Je ne code pas juste un site — je comprends votre métier.",
    accent: "teal" as const,
  },
  {
    title: "La rigueur industrielle au service du web",
    description:
      "Les méthodes Lean, l'optimisation des flux et la résolution de problèmes que j'appliquais en usine, je les applique maintenant à vos projets digitaux.",
    accent: "gold" as const,
  },
  {
    title: "Fiabilité et engagement",
    description:
      "22 ans chez un leader mondial de l'automobile, c'est la preuve d'un engagement sur le long terme. Vos projets méritent la même constance.",
    accent: "teal" as const,
  },
];

export default function About() {
  return (
    <section id="apropos" className="relative py-24 sm:py-32 bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4">
            Qui suis-je
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Plus qu&apos;un développeur,{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              un partenaire
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            22 ans de management industriel + une certification Full-Stack = un profil unique
            qui comprend autant votre métier que la technologie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-gold-400/30 rounded-full blur-lg" />
                <Image
                  src="/portrait.webp"
                  alt="Gilles Ruszczycki - Fondateur de Web RG Est"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-teal-500/30 shadow-2xl object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                Je suis{" "}
                <span className="text-teal-400 font-medium">Gilles Ruszczycki</span>,
                développeur web certifié Full-Stack et ancien Team Leader Logistique.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Pendant{" "}
                <span className="text-gold-400 font-semibold">22 ans chez Stellantis</span>,
                j&apos;ai géré une équipe de 25 personnes, optimisé des flux logistiques
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

            <div className="space-y-4">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass rounded-2xl p-5 hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      value.accent === "teal"
                        ? "bg-teal-500/10"
                        : "bg-gold-400/10"
                    }`}>
                      <span className={`font-bold text-sm ${
                        value.accent === "teal" ? "text-teal-400" : "text-gold-400"
                      }`}>
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 mb-2">
              {[
                { stat: "22+", label: "Ans d'expérience", icon: Award },
                { stat: "25", label: "Collaborateurs gérés", icon: Users },
                { stat: "100%", label: "Engagement", icon: Shield },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass rounded-2xl p-4 text-center"
                  >
                    <Icon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-teal-400">{item.stat}</div>
                    <div className="text-xs text-slate-400 mt-1">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Business skills */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Factory className="w-5 h-5 text-gold-400" />
                Expertise métier &amp; management
              </h3>
              <div className="space-y-4">
                {businessSkills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{skill.title}</div>
                        <div className="text-xs text-slate-400">{skill.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Tech skills */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-5">
                Compétences techniques
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-navy-700">
                <h4 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">
                  Stack préférée
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Express"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-navy-700 text-teal-400 border border-navy-600"
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
