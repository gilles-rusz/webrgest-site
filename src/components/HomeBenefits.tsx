"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Eye, Award, MessageSquare, Shield, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Un site clair pour vos clients",
    desc: "Vos visiteurs comprennent rapidement qui vous êtes, ce que vous proposez et comment vous contacter.",
  },
  {
    icon: Award,
    title: "Une image plus professionnelle",
    desc: "Un site moderne et soigné qui rassure vos futurs clients dès les premières secondes.",
  },
  {
    icon: MessageSquare,
    title: "Plus de demandes de contact",
    desc: "Des pages pensées pour guider vos visiteurs vers une demande de devis, un appel ou un message.",
  },
  {
    icon: Shield,
    title: "Moins de dépendance aux plateformes",
    desc: "Un site professionnel, sans location imposée, avec une solution plus durable et adaptée à votre activité.",
  },
  {
    icon: Handshake,
    title: "Un accompagnement simple",
    desc: "Vous échangez avec un seul interlocuteur, de la première idée jusqu\u2019à la mise en ligne.",
  },
];

export default function HomeBenefits() {
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
        Pourquoi me faire confiance
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
        Ce que Web RG Est vous apporte
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
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
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#f0f6ff", marginBottom: "8px", lineHeight: 1.4 }}>
                {item.title}
              </p>
              <p style={{ fontSize: "13px", color: "#4a7090", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Link
          href="/tarifs"
          style={{
            fontSize: "14px",
            color: "#c9893a",
            fontWeight: 500,
          }}
        >
          Voir les tarifs &rarr;
        </Link>
      </div>
    </section>
  );
}
