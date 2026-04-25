"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Search,
  Wrench,
  Palette,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description:
      "Des sites web élégants et performants pour présenter votre entreprise, vos services et votre savoir-faire.",
    color: "teal",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Boutiques en ligne complètes avec paiement sécurisé, gestion des stocks et interface d'administration.",
    color: "gold",
  },
  {
    icon: Code2,
    title: "Applications Web",
    description:
      "Applications sur mesure : dashboards, CRM, outils internes, plateformes collaboratives.",
    color: "teal",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description:
      "Interfaces adaptées à tous les écrans : mobile, tablette et desktop. Mobile-first par défaut.",
    color: "gold",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description:
      "Optimisation pour les moteurs de recherche, référencement local et stratégie de visibilité en ligne.",
    color: "teal",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Contrats de maintenance, mises à jour, sécurité et support technique pour la sérénité de votre site.",
    color: "gold",
  },
  {
    icon: Palette,
    title: "Refonte de Sites",
    description:
      "Modernisation de votre site existant avec un design actuel, de meilleures performances et une UX optimisée.",
    color: "teal",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description:
      "Pages de conversion optimisées pour vos campagnes marketing, événements et lancements produits.",
    color: "gold",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gold-400/10 text-gold-400 border border-gold-400/20 mb-4">
            Ce que je propose
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Mes{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Des solutions complètes pour votre présence digitale, du design à la
            mise en ligne.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isTeal = service.color === "teal";
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-500 cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isTeal
                      ? "bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20"
                      : "bg-gold-400/10 text-gold-400 group-hover:bg-gold-400/20"
                  } transition-colors duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
