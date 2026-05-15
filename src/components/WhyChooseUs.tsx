"use client";

import { motion } from "framer-motion";
import { Factory, Code2, Gauge, Headset, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "22 ans en industrie",
    description:
      "Je comprends les contraintes des entreprises. Mon exp\u00e9rience chez Stellantis m\u2019a appris \u00e0 livrer dans les d\u00e9lais et \u00e0 travailler avec rigueur.",
  },
  {
    icon: Code2,
    title: "D\u00e9veloppeur Full-Stack",
    description:
      "Pas de sous-traitance. Je code moi-m\u00eame votre site de A \u00e0 Z avec les technologies les plus modernes (React, Next.js, Node.js).",
  },
  {
    icon: Gauge,
    title: "M\u00e9thodes Lean",
    description:
      "J\u2019applique les m\u00e9thodes d\u2019optimisation industrielle au web : pas de superflu, que de l\u2019efficace.",
  },
  {
    icon: Headset,
    title: "Interlocuteur unique",
    description:
      "Vous parlez directement avec le d\u00e9veloppeur. Pas d\u2019agence, pas d\u2019interm\u00e9diaire, des r\u00e9ponses rapides.",
  },
  {
    icon: Shield,
    title: "Tarifs transparents",
    description:
      "Pas de mauvaise surprise. Devis gratuit sous 24h, prix fix\u00e9s d\u00e8s le d\u00e9part, aucun co\u00fbt cach\u00e9.",
  },
  {
    icon: TrendingUp,
    title: "Un site qui travaille pour vous",
    description:
      "Je ne cr\u00e9e pas juste un site \u2014 je cr\u00e9e un outil qui g\u00e9n\u00e8re des contacts et fait cro\u00eetre votre activit\u00e9.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0c1220]" />
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(45, 212, 191, 0.05), transparent 50%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pourquoi choisir{" "}
            <span
              className="text-teal-400"
              style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
            >
              WEB RG EST
            </span>
            {" "}?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Un d\u00e9veloppeur qui comprend votre m\u00e9tier, pas juste votre cahier des charges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-teal-500/10 mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
