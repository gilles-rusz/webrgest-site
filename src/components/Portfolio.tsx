"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Boulangerie Artisanale",
    category: "Site Vitrine",
    description:
      "Site vitrine moderne pour une boulangerie artisanale avec galerie photo, carte interactive et commande en ligne.",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
    gradient: "from-teal-500/20 to-teal-600/20",
    accent: "teal",
  },
  {
    title: "Boutique Mode en Ligne",
    category: "E-Commerce",
    description:
      "Boutique e-commerce complète avec panier, paiement sécurisé, gestion des tailles et espace client.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    gradient: "from-gold-400/20 to-gold-500/20",
    accent: "gold",
  },
  {
    title: "Dashboard Gestion PME",
    category: "Application Web",
    description:
      "Tableau de bord de gestion avec suivi des ventes, facturation automatique et reporting en temps réel.",
    tags: ["React", "Express", "PostgreSQL", "Charts"],
    gradient: "from-teal-400/20 to-gold-400/20",
    accent: "teal",
  },
  {
    title: "Cabinet Médical",
    category: "Site Vitrine + Booking",
    description:
      "Site professionnel avec prise de rendez-vous en ligne, présentation de l'équipe et informations pratiques.",
    tags: ["Next.js", "PHP", "MySQL", "SEO"],
    gradient: "from-gold-500/20 to-teal-500/20",
    accent: "gold",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
    <section id="realisations" className="relative py-24 sm:py-32">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Mes{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Découvrez quelques exemples de projets réalisés pour des clients
            satisfaits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group glass rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-500"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-dots opacity-30" />
                <div className="relative text-center">
                  <div
                    className={`text-6xl font-bold ${
                      project.accent === "teal"
                        ? "text-teal-400/30"
                        : "text-gold-400/30"
                    }`}
                  >
                    0{i + 1}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      project.accent === "teal"
                        ? "text-teal-400"
                        : "text-gold-400"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-9 h-9 rounded-full bg-navy-950/80 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-navy-950/80 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                    <GitBranch className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-navy-700 text-slate-300 border border-navy-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">
            Vous avez un projet similaire en tête ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold hover:from-gold-500 hover:to-gold-600 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/25 hover:scale-105"
          >
            Discutons de votre projet
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
