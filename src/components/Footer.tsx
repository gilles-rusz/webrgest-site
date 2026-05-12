"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
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
              digitales sur mesure dans le Grand Est.
            </p>
            <div className="mt-4 space-y-1 text-xs text-slate-500">
              <p>SIRET : 989 861 869 00018</p>
              <p>17 Rue de la Division Leclerc, 57280 Maizières-lès-Metz</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com/in/gilles-ruszczycki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/a-propos", label: "À propos" },
                { href: "/realisations", label: "Réalisations" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/avis", label: "Avis" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
                "Automatisation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Web RG Est. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/mentions-legales"
              className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
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
