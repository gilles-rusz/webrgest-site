"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services: { title: string; description: string; image: string; link?: string }[] = [
  {
    title: "Sites Vitrines",
    description:
      "Des sites web élégants et performants pour présenter votre entreprise, vos services et votre savoir-faire.",
    image: "/services/site-vitrine.jpg",
  },
  {
    title: "E-Commerce",
    description:
      "Boutiques en ligne complètes avec paiement sécurisé, gestion des stocks et interface d'administration.",
    image: "/services/ecommerce.jpg",
  },
  {
    title: "Applications Web",
    description:
      "Applications sur mesure : dashboards, CRM, outils internes, plateformes collaboratives.",
    image: "/services/application-web.jpg",
  },
  {
    title: "Référencement SEO",
    description:
      "Optimisation pour les moteurs de recherche, référencement local et stratégie de visibilité en ligne.",
    image: "/services/seo.jpg",
  },
  {
    title: "Maintenance & Support",
    description:
      "Mises à jour, sécurité et support technique pour la sérénité de votre site au quotidien.",
    image: "/services/maintenance.png",
  },
  {
    title: "Automatisation",
    description:
      "Automatisez vos tâches répétitives : notifications, factures, emails, synchronisation entre outils.",
    image: "/services/automatisation.jpg",
    link: "/automatisation",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0c1220]" />
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(45, 212, 191, 0.06), transparent 60%)" }} />
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
            Mes{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              services
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Des solutions complètes pour votre présence en ligne, du design à la
            mise en production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy-950/40" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 mt-3 font-medium transition-colors"
                  >
                    En savoir plus &rarr;
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
