"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-[#070f1c] px-6 pb-7 pt-12 sm:px-12">
      <div className="footer-grid-v7 mx-auto mb-8 grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-800 bg-navy-900 text-xs font-bold text-gold-400">
              WR
            </div>
            <div>
              <div className="text-[15px] font-bold text-slate-300">WEB RG EST</div>
              <div className="text-[11px] italic text-gold-400" style={{ fontFamily: "var(--font-playfair)" }}>
                Création Web
              </div>
            </div>
          </div>
          <p className="mb-3.5 text-xs leading-[1.75] text-slate-700">
            Votre partenaire pour la création de sites web et solutions digitales sur mesure dans le Grand Est.
          </p>
          <p className="text-xs text-slate-700">SIRET : 989 861 869 00018</p>
          <p className="text-xs text-slate-700">17 Rue de la Division Leclerc, 57280 Maizières-lès-Metz</p>
          <a
            href="https://www.linkedin.com/in/gilles-ruszczycki/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs text-gold-400 hover:text-gold-500"
          >
            LinkedIn
          </a>
        </div>

        {/* Navigation column */}
        <div>
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-300">
            Navigation
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-xs text-slate-700 hover:text-[#8bafc9]">Accueil</Link>
            <Link href="/realisations" className="text-xs text-slate-700 hover:text-[#8bafc9]">Réalisations</Link>
            <Link href="/tarifs" className="text-xs text-slate-700 hover:text-[#8bafc9]">Tarifs</Link>
            <Link href="/blog" className="text-xs text-slate-700 hover:text-[#8bafc9]">Blog</Link>
            <Link href="/avis" className="text-xs text-slate-700 hover:text-[#8bafc9]">Avis</Link>
            <Link href="/contact" className="text-xs text-slate-700 hover:text-[#8bafc9]">Contact</Link>
            <Link href="/devis-gratuit" className="text-xs text-gold-400 hover:text-gold-500">Devis gratuit</Link>
          </div>
        </div>

        {/* Services column */}
        <div>
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-300">
            Services
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/services#site-vitrine" className="text-xs text-slate-700 hover:text-[#8bafc9]">Sites Vitrines</Link>
            <Link href="/services#e-commerce" className="text-xs text-slate-700 hover:text-[#8bafc9]">E-Commerce</Link>
            <Link href="/refonte-site-internet" className="text-xs text-slate-700 hover:text-[#8bafc9]">Refonte de Sites</Link>
            <Link href="/services#seo" className="text-xs text-slate-700 hover:text-[#8bafc9]">SEO &amp; Référencement</Link>
            <Link href="/automatisation" className="text-xs text-slate-700 hover:text-[#8bafc9]">Automatisation</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 border-t border-navy-800 pt-5 sm:flex-row">
        <span className="text-[11px] text-navy-800">© {currentYear} Web RG Est. Tous droits réservés.</span>
        <div className="flex gap-4">
          <Link href="/mentions-legales" className="text-[11px] text-navy-800 hover:text-slate-700">Mentions légales</Link>
          <Link href="/politique-de-confidentialite" className="text-[11px] text-navy-800 hover:text-slate-700">Politique de confidentialité</Link>
          <Link href="/laisser-un-avis" className="text-[11px] text-navy-800 hover:text-slate-700">Laisser un avis</Link>
        </div>
      </div>
    </footer>
  );
}
