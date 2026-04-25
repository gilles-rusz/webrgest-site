"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "React / Next.js",
  "PHP / Laravel",
  "Node.js / Express",
  "TypeScript",
  "HTML5 / CSS3",
  "Tailwind CSS",
  "MySQL / PostgreSQL",
  "MongoDB",
  "Git / GitHub",
  "Responsive Design",
  "SEO Technique",
  "UI/UX Design",
];

const values = [
  {
    title: "Qualité",
    description:
      "Un code propre, maintenable et performant. Chaque projet est réalisé avec le souci du détail.",
  },
  {
    title: "Communication",
    description:
      "Un suivi transparent à chaque étape. Vous êtes toujours informé de l'avancement de votre projet.",
  },
  {
    title: "Réactivité",
    description:
      "Des délais respectés et une disponibilité pour répondre à vos questions et besoins.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="relative py-24 sm:py-32 bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4">
              Qui suis-je
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              À{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                propos
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Titulaire d&apos;un{" "}
              <span className="text-teal-400 font-medium">
                Titre Professionnel de Développeur Web et Web Mobile
              </span>{" "}
              (Full-Stack), je mets mes compétences au service de votre réussite
              digitale.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Basé dans l&apos;
              <span className="text-gold-400 font-medium">Est de la France</span>,
              je crée des solutions web sur mesure qui allient design moderne,
              performance technique et expérience utilisateur optimale.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Passionné par le développement web et les nouvelles technologies,
              je m&apos;engage à livrer des projets de qualité qui répondent
              précisément à vos objectifs.
            </p>

            <div className="space-y-4">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-400 font-bold text-sm">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-sm text-slate-400">{value.description}</p>
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
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Compétences techniques
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-navy-700">
                <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
                  Stack préférée
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PHP"].map(
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
