"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Globe, Search, Clock, Smartphone } from "lucide-react";

const painPoints = [
  {
    icon: Globe,
    problem: "Votre site ne vous rapporte aucun contact ?",
    solution:
      "Je cr\u00e9e des sites pens\u00e9s pour convertir : formulaires visibles, appels \u00e0 l\u2019action clairs, parcours optimis\u00e9.",
    cta: "Site Vitrine \u2192",
    href: "/tarifs",
  },
  {
    icon: Search,
    problem: "Votre entreprise n\u2019appara\u00eet pas sur Google ?",
    solution:
      "Optimisation SEO d\u00e8s la conception : structure technique, mots-cl\u00e9s locaux, vitesse de chargement.",
    cta: "R\u00e9f\u00e9rencement SEO \u2192",
    href: "/services",
  },
  {
    icon: Clock,
    problem: "Vous perdez du temps avec des t\u00e2ches r\u00e9p\u00e9titives ?",
    solution:
      "Automatisation de vos flux : emails, factures, notifications, synchronisation entre vos outils.",
    cta: "Automatisation \u2192",
    href: "/automatisation",
  },
  {
    icon: Smartphone,
    problem: "Votre ancien site ne fonctionne pas sur mobile ?",
    solution:
      "Refonte responsive et moderne : votre site s\u2019adapte \u00e0 tous les \u00e9crans, du smartphone au desktop.",
    cta: "Refonte de site \u2192",
    href: "/refonte-site-internet",
  },
];

export default function PainPoints() {
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
        Vous vous reconnaissez ?
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
        Ces situations sont fr&eacute;quentes chez les artisans, ind&eacute;pendants et PME.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {painPoints.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.cta}
              className="transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: "#0f1e35",
                border: "0.5px solid #1a3050",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  background: "#0a2540",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <Icon style={{ width: "19px", height: "19px", color: "#38bdf8" }} />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#e2e8f0", marginBottom: "8px", lineHeight: 1.4 }}>
                {item.problem}
              </p>
              <p style={{ fontSize: "13px", color: "#4a7090", lineHeight: 1.65, marginBottom: "14px" }}>
                {item.solution}
              </p>
              <Link href={item.href} style={{ fontSize: "12px", color: "#c9893a" }}>
                {item.cta}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
