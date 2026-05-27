"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ShieldCheck, MapPin, User } from "lucide-react";

const reassurance = [
  { icon: Clock, text: "Réponse sous 24h" },
  { icon: ShieldCheck, text: "Audit gratuit et sans engagement" },
  { icon: MapPin, text: "Site conçu en France" },
  { icon: User, text: "Un seul interlocuteur" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden">
      <Image
        src="/hero-bg-clean.png"
        alt="Gilles Ruszczycki — développeur web Web RG Est"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1628]/90 via-[#0b1628]/60 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="max-w-xl">
          <h1
            className="hero-slide-in text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white"
            style={{ animationDelay: "0s" }}
          >
            Des sites web qui vous{" "}
            <span
              className="text-teal-400"
              style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
            >
              simplifient
            </span>{" "}
            la vie.
          </h1>

          <p
            className="hero-slide-in mt-5 text-base sm:text-lg text-slate-300 leading-relaxed"
            style={{ animationDelay: "0.12s" }}
          >
            Des sites professionnels, sans abonnement imposé, pensés pour
            présenter votre activité et générer des demandes de devis.
          </p>

          <div
            className="hero-slide-in mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="/devis-gratuit?type=audit"
              className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-[0_18px_48px_rgba(45,212,191,0.32)]"
            >
              Demander un audit gratuit
            </Link>
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Obtenir un devis gratuit
            </Link>
          </div>

          <p
            className="hero-slide-in mt-5 text-xs sm:text-sm text-slate-400 leading-relaxed"
            style={{ animationDelay: "0.36s" }}
          >
            Vous avez déjà un site ? Je vous indique ce qui peut être amélioré.
            Vous partez de zéro ? Je vous propose une solution claire et adaptée.
          </p>

          <div
            className="hero-slide-in mt-8 flex flex-wrap gap-x-5 gap-y-3"
            style={{ animationDelay: "0.48s" }}
          >
            {reassurance.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/20">
                    <Icon className="h-3.5 w-3.5 text-teal-400" />
                  </div>
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <h1 className="sr-only">
        Des sites web qui vous simplifient la vie.
      </h1>
    </section>
  );
}
