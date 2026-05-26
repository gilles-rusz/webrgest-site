"use client";

import Link from "next/link";

export default function HomeContact() {
  return (
    <section className="section-reveal mx-auto max-w-[1200px] px-6 py-[72px] sm:px-12" id="s-cta">
      <div className="cta-block-v7 grid items-center gap-7 rounded-xl border border-gold-400/20 bg-navy-900 p-8 sm:grid-cols-[1fr_auto_auto] sm:p-9">
        <div>
          <div className="mb-2 text-xs italic text-gold-400" style={{ fontFamily: "var(--font-playfair)" }}>
            Prêt à démarrer ?
          </div>
          <div className="mb-2 text-[22px] font-bold leading-[1.3] text-slate-300">
            Parlons de votre <em className="italic text-gold-400">projet</em>
          </div>
          <p className="text-[13px] leading-[1.6] text-[#6a90aa]">
            Un projet en tête ? Décrivez votre besoin et recevez une réponse personnalisée, claire et sans engagement.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { label: "Réponse rapide", sub: "sous 24h" },
            { label: "Devis gratuit", sub: "sans engagement" },
            { label: "Accompagnement", sub: "personnalisé" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="mt-0.5 shrink-0 text-base text-gold-400">
                <i className="ti ti-circle-check" aria-hidden="true" />
              </span>
              <div>
                <strong className="block text-xs text-slate-300">{item.label}</strong>
                <span className="text-[11px] text-slate-500">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <Link
            href="/devis-gratuit"
            className="whitespace-nowrap rounded-[5px] bg-gold-400 px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Obtenir mon devis gratuit →
          </Link>
        </div>
      </div>
    </section>
  );
}
