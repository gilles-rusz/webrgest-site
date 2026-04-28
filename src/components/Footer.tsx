"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Web RG Est"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-lg font-bold text-white tracking-wide">
                  WEB RG EST
                </span>
                <span className="block text-xs text-gold-400 tracking-[0.2em] uppercase">
                  Création Web
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Votre partenaire pour la création de sites web et solutions
              digitales sur mesure dans l&apos;Est de la France.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#services", label: "Services" },
                { href: "#apropos", label: "À propos" },
                { href: "#realisations", label: "Réalisations" },
                { href: "#processus", label: "Mon approche" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Sites Vitrines",
                "E-Commerce",
                "Applications Web",
                "Refonte de Sites",
                "SEO & Référencement",
                "Maintenance",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Web RG Est. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
