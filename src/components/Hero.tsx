"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-v7 relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt="Gilles Ruszczycki — développeur web Web RG Est"
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,22,40,0.88) 30%, rgba(11,22,40,0.55) 60%, rgba(11,22,40,0.05) 100%)",
        }}
      />
      <div className="relative z-10 px-6 sm:px-12 md:px-12 lg:px-12 max-w-[580px]">
        <h1 className="sr-only">
          Votre activit&eacute; m&eacute;rite un site qui vous appartient.
        </h1>
        <div
          className="hero-v7-btns flex gap-3.5 flex-wrap mt-[340px] sm:mt-[380px] md:mt-[400px]"
          style={{ animation: "fadeUpV7 0.5s 0.44s ease both", opacity: 0 }}
        >
          <Link
            href="/devis-gratuit"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#c9893a" }}
          >
            Devis gratuit &rarr;
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-md px-5 py-3.5 text-sm transition-colors"
            style={{
              color: "#8bafc9",
              border: "0.5px solid #1e4060",
            }}
          >
            Voir les r&eacute;alisations
          </Link>
        </div>
      </div>
    </section>
  );
}
