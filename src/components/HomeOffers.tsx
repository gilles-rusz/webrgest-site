"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const offers = [
  {
    name: "Portfolio / CV",
    target: "Indépendants, auto-entrepreneurs",
    price: "150 \u20AC",
    priceSub: "forfait fixe",
    desc: "1 à 2 pages soignées, mobile-first. Pour se lancer avec un budget maîtrisé.",
    link: "/tarifs",
    linkText: "Voir le détail \u2192",
  },
  {
    name: "Site Vitrine",
    target: "Artisans, commerçants, TPE",
    price: "990 \u20AC",
    priceSub: "forfait fixe",
    desc: "Pages illimitées, SEO local, formulaire de contact. Votre outil de prospection principal.",
    link: "/tarifs",
    linkText: "Voir le détail \u2192",
    featured: true,
    badge: "Le plus demandé",
  },
  {
    name: "E-Commerce",
    target: "Boutiques en ligne",
    price: "sur devis",
    priceSub: "\u00A0",
    desc: "Paiement sécurisé, gestion des stocks, interface simple au quotidien.",
    link: "/contact",
    linkText: "Prendre contact \u2192",
  },
  {
    name: "Automatisation",
    target: "Gagner du temps",
    price: "sur devis",
    priceSub: "\u00A0",
    desc: "Emails, devis, CRM, synchronisation d\u2019outils. Moins de tâches manuelles.",
    link: "/contact",
    linkText: "Prendre contact \u2192",
  },
];

function OfferCard({
  offer,
}: {
  offer: (typeof offers)[number];
}) {
  const inner = (
    <div
      className="flex flex-col h-full"
      style={{
        background: "#0f1e35",
        borderRadius: "10px",
        padding: "22px 18px",
        position: "relative" as const,
        zIndex: 1,
      }}
    >
      {offer.badge && (
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "12px",
            color: "#c9893a",
            marginBottom: "8px",
          }}
        >
          {offer.badge}
        </span>
      )}
      <div style={{ fontSize: "15px", fontWeight: 700, color: "#f0f6ff", marginBottom: "4px" }}>
        {offer.name}
      </div>
      <div style={{ fontSize: "12px", color: "#4a7090", marginBottom: "16px", lineHeight: 1.4 }}>
        {offer.target}
      </div>
      <div
        className={offer.featured ? "offer-price-gold-v7" : ""}
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: offer.featured ? undefined : "#f0f6ff",
          marginTop: "auto",
          marginBottom: "8px",
        }}
      >
        {offer.price}
        <small style={{ fontSize: "11px", color: "#4a7090", display: "block", fontWeight: 400 }}>
          {offer.priceSub}
        </small>
      </div>
      <div style={{ fontSize: "12px", color: "#5a8aaa", lineHeight: 1.55, marginBottom: "16px" }}>
        {offer.desc}
      </div>
      <Link
        href={offer.link}
        className="mt-auto"
        style={{
          fontSize: "12px",
          color: offer.featured ? "#c9893a" : "#38bdf8",
          display: "inline-block",
        }}
      >
        {offer.linkText}
      </Link>
    </div>
  );

  if (offer.featured) {
    return (
      <div className="offer-neon-wrap-v7 offer-featured-v7" id="tarifs">
        <div className="offer-neon-border-v7" />
        {inner}
      </div>
    );
  }

  return (
    <div
      className="transition-transform duration-200 hover:-translate-y-1 h-full"
      style={{
        background: "#0f1e35",
        border: "0.5px solid #1a3050",
        borderRadius: "10px",
        padding: "22px 18px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "15px", fontWeight: 700, color: "#f0f6ff", marginBottom: "4px" }}>
        {offer.name}
      </div>
      <div style={{ fontSize: "12px", color: "#4a7090", marginBottom: "16px", lineHeight: 1.4 }}>
        {offer.target}
      </div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#f0f6ff", marginTop: "auto", marginBottom: "8px" }}>
        {offer.price}
        <small style={{ fontSize: "11px", color: "#4a7090", display: "block", fontWeight: 400 }}>
          {offer.priceSub}
        </small>
      </div>
      <div style={{ fontSize: "12px", color: "#5a8aaa", lineHeight: 1.55, marginBottom: "16px" }}>
        {offer.desc}
      </div>
      <Link
        href={offer.link}
        className="mt-auto"
        style={{ fontSize: "12px", color: "#38bdf8", display: "inline-block" }}
      >
        {offer.linkText}
      </Link>
    </div>
  );
}

export default function HomeOffers() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("v7-visible");
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="v7-section"
      style={{ padding: "72px 48px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "15px",
          color: "#c9893a",
          marginBottom: "8px",
        }}
      >
        Ce que je propose
      </p>
      <h2
        style={{
          fontSize: "clamp(22px, 2.5vw, 30px)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: "#f0f6ff",
          marginBottom: "36px",
        }}
      >
        Des offres claires, du plus simple au plus complet.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        {offers.map((offer) =>
          offer.featured ? (
            <OfferCard key={offer.name} offer={offer} />
          ) : (
            <OfferCard key={offer.name} offer={offer} />
          ),
        )}
      </div>
      <p style={{ fontSize: "11px", color: "#2a4a6a", marginTop: "14px" }}>
        Maintenance et suivi disponibles en option sur toutes les offres.{" "}
        <Link href="/tarifs" style={{ color: "#c9893a" }}>
          Voir tous les tarifs &rarr;
        </Link>
      </p>
    </section>
  );
}
