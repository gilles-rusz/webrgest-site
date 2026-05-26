"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-bg.jpg"
        alt="Gilles Ruszczycki — développeur web Web RG Est"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,22,40,0.88) 30%, rgba(11,22,40,0.55) 60%, rgba(11,22,40,0.05) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[580px] px-6 sm:px-12">
        {/* Status badge */}
        <div
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-[rgba(13,42,66,0.9)] px-4 py-1.5"
          style={{ animation: "fadeUp .5s ease both" }}
        >
          <span className="h-[7px] w-[7px] rounded-full bg-gold-400" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
          <span className="text-xs italic text-gold-400">Disponible — Grand Est &amp; Luxembourg</span>
        </div>

        {/* Headline */}
        <h1
          className="mb-5 text-[clamp(32px,4vw,46px)] font-bold leading-[1.07] tracking-[-0.03em] text-slate-300"
          style={{ animation: "fadeUp .5s .15s ease both", opacity: 0 }}
        >
          Votre activité mérite<br />
          un site <span className="text-gold-400">qui vous appartient.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-8 max-w-[440px] text-base font-light leading-[1.75] text-[#8bafc9]"
          style={{ animation: "fadeUp .5s .3s ease both", opacity: 0 }}
        >
          J&apos;accompagne artisans et TPE du Grand Est et du Luxembourg pour transformer leur site en véritable outil de prospection.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-3.5"
          style={{ animation: "fadeUp .5s .44s ease both", opacity: 0 }}
        >
          <Link
            href="/devis-gratuit"
            className="rounded-[5px] bg-gold-400 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:opacity-88"
          >
            Devis gratuit →
          </Link>
          <Link
            href="/realisations"
            className="rounded-[5px] border border-navy-700 px-5 py-3 text-sm text-[#8bafc9] transition-all hover:border-gold-400 hover:text-slate-300"
          >
            Voir les réalisations
          </Link>
        </div>

        {/* Proof elements */}
        <div
          className="mt-6 flex flex-wrap gap-5 border-t border-navy-700/45 pt-5"
          style={{ animation: "fadeUp .5s .57s ease both", opacity: 0 }}
        >
          <span className="flex items-center gap-1.5 text-xs text-[#3d6a8a]">
            <span className="font-bold text-gold-400">✓</span> Réponse sous 24h
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#3d6a8a]">
            <span className="font-bold text-gold-400">✓</span> Sans engagement
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#3d6a8a]">
            <span className="font-bold text-gold-400">✓</span> Un seul interlocuteur
          </span>
        </div>
      </div>
    </section>
  );
}
