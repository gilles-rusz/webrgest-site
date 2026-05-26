"use client";

import Link from "next/link";

export default function HomeOffers() {
  return (
    <section className="section-reveal mx-auto max-w-[1200px] px-6 py-[72px] sm:px-12" id="s-offers">
      <p className="mb-2 font-[var(--font-playfair)] text-[15px] italic text-gold-400" style={{ fontFamily: "var(--font-playfair)" }}>
        Ce que je propose
      </p>
      <h2 className="mb-9 text-[clamp(22px,2.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em] text-slate-300">
        Des offres claires, du plus simple au plus complet.
      </h2>

      <div className="offers-grid-v7 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Portfolio / CV */}
        <div className="flex h-full flex-col rounded-[10px] border border-navy-800 bg-navy-900 p-[22px_18px] transition-transform hover:-translate-y-1">
          <div className="mb-1 text-[15px] font-bold text-slate-300">Portfolio / CV</div>
          <div className="mb-4 text-xs leading-[1.4] text-slate-500">Indépendants, auto-entrepreneurs</div>
          <div className="mt-auto mb-2 text-[22px] font-bold text-slate-300">
            290 €<small className="block text-[11px] font-normal text-slate-500">forfait fixe</small>
          </div>
          <p className="mb-4 text-xs leading-[1.55] text-[#5a8aaa]">
            1 à 2 pages soignées, mobile-first. Pour se lancer avec un budget maîtrisé.
          </p>
          <Link href="/tarifs" className="mt-auto text-xs text-blue-400 hover:text-slate-300">
            Voir le détail →
          </Link>
        </div>

        {/* Site Vitrine - Featured */}
        <div className="offer-neon-wrap" id="tarifs">
          <div className="offer-neon-border" />
          <div className="offer-neon-inner">
            <div className="mb-2 text-xs italic text-gold-400" style={{ fontFamily: "var(--font-playfair)" }}>
              Le plus demandé
            </div>
            <div className="mb-1 text-[15px] font-bold text-slate-300">Site Vitrine</div>
            <div className="mb-4 text-xs leading-[1.4] text-slate-500">Artisans, commerçants, TPE</div>
            <div className="price-gold mt-auto mb-2">
              990 €<small>forfait fixe</small>
            </div>
            <p className="mb-4 text-xs leading-[1.55] text-[#5a8aaa]">
              Pages illimitées, SEO local, formulaire de contact. Votre outil de prospection principal.
            </p>
            <Link href="/tarifs" className="mt-auto text-xs text-gold-400 hover:text-gold-500">
              Voir le détail →
            </Link>
          </div>
        </div>

        {/* E-Commerce */}
        <div className="flex h-full flex-col rounded-[10px] border border-navy-800 bg-navy-900 p-[22px_18px] transition-transform hover:-translate-y-1">
          <div className="mb-1 text-[15px] font-bold text-slate-300">E-Commerce</div>
          <div className="mb-4 text-xs leading-[1.4] text-slate-500">Boutiques en ligne</div>
          <div className="mt-auto mb-2 text-[22px] font-bold text-slate-300">
            sur devis<small className="block text-[11px] font-normal text-slate-500">&nbsp;</small>
          </div>
          <p className="mb-4 text-xs leading-[1.55] text-[#5a8aaa]">
            Paiement sécurisé, gestion des stocks, interface simple au quotidien.
          </p>
          <Link href="/contact" className="mt-auto text-xs text-blue-400 hover:text-slate-300">
            Prendre contact →
          </Link>
        </div>

        {/* Automatisation */}
        <div className="flex h-full flex-col rounded-[10px] border border-navy-800 bg-navy-900 p-[22px_18px] transition-transform hover:-translate-y-1">
          <div className="mb-1 text-[15px] font-bold text-slate-300">Automatisation</div>
          <div className="mb-4 text-xs leading-[1.4] text-slate-500">Gagner du temps</div>
          <div className="mt-auto mb-2 text-[22px] font-bold text-slate-300">
            sur devis<small className="block text-[11px] font-normal text-slate-500">&nbsp;</small>
          </div>
          <p className="mb-4 text-xs leading-[1.55] text-[#5a8aaa]">
            Emails, devis, CRM, synchronisation d&apos;outils. Moins de tâches manuelles.
          </p>
          <Link href="/contact" className="mt-auto text-xs text-blue-400 hover:text-slate-300">
            Prendre contact →
          </Link>
        </div>
      </div>

      <p className="mt-3.5 text-[11px] text-navy-600">
        Maintenance et suivi disponibles en option sur toutes les offres.{" "}
        <Link href="/tarifs" className="text-gold-400 hover:text-gold-500">
          Voir tous les tarifs →
        </Link>
      </p>
    </section>
  );
}
