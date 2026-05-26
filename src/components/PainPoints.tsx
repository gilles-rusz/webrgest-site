"use client";

import Link from "next/link";

const painPoints = [
  {
    icon: "ti-world",
    question: "Votre site ne vous rapporte aucun contact ?",
    answer: "Je crée des sites pensés pour convertir : formulaires visibles, appels à l'action clairs, parcours optimisé.",
    link: { href: "/services#site-vitrine", label: "Site Vitrine →" },
  },
  {
    icon: "ti-search",
    question: "Votre entreprise n'apparaît pas sur Google ?",
    answer: "Optimisation SEO dès la conception : structure technique, mots-clés locaux, vitesse de chargement.",
    link: { href: "/services#seo", label: "Référencement SEO →" },
  },
  {
    icon: "ti-clock",
    question: "Vous perdez du temps avec des tâches répétitives ?",
    answer: "Automatisation de vos flux : emails, factures, notifications, synchronisation entre vos outils.",
    link: { href: "/automatisation", label: "Automatisation →" },
  },
  {
    icon: "ti-device-mobile",
    question: "Votre ancien site ne fonctionne pas sur mobile ?",
    answer: "Refonte responsive et moderne : votre site s'adapte à tous les écrans, du smartphone au desktop.",
    link: { href: "/refonte-site-internet", label: "Refonte de site →" },
  },
];

export default function PainPoints() {
  return (
    <section className="section-reveal mx-auto max-w-[1200px] px-6 py-[72px] sm:px-12" id="s-pain">
      <p className="mb-2 text-[15px] italic text-gold-400" style={{ fontFamily: "var(--font-playfair)" }}>
        Vous vous reconnaissez ?
      </p>
      <h2 className="mb-9 text-[clamp(22px,2.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em] text-slate-300">
        Ces situations sont fréquentes chez les artisans, indépendants et PME.
      </h2>

      <div className="pain-grid-v7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {painPoints.map((item, i) => (
          <div
            key={i}
            className="rounded-[10px] border border-navy-800 bg-navy-900 p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#0a2540] text-[19px] text-blue-400">
              <i className={`ti ${item.icon}`} aria-hidden="true" />
            </div>
            <p className="mb-2 text-sm font-medium leading-[1.4] text-slate-200">
              {item.question}
            </p>
            <p className="mb-3.5 text-[13px] leading-[1.65] text-slate-500">
              {item.answer}
            </p>
            <Link href={item.link.href} className="text-xs text-gold-400 hover:text-gold-500">
              {item.link.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
