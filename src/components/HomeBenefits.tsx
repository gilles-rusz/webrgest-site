"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Search, MessageSquareMore, KeyRound, Users } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Plus de visibilité",
    desc: "Un site structuré pour mieux présenter votre activité, améliorer votre présence en ligne et aider vos futurs clients à vous trouver plus facilement.",
  },
  {
    icon: MessageSquareMore,
    title: "Plus de demandes de contact",
    desc: "Des pages pensées pour guider vos visiteurs vers une action simple\u00a0: vous appeler, vous écrire ou demander un devis.",
  },
  {
    icon: KeyRound,
    title: "Un site qui vous appartient",
    desc: "Pas de plateforme fermée ni de location imposée. Vous gardez une solution claire, durable et adaptée à votre activité.",
  },
  {
    icon: Users,
    title: "Un accompagnement humain de A à Z",
    desc: "Vous échangez avec un seul interlocuteur, capable de gérer votre projet dans son ensemble\u00a0: structure, design, développement, mise en ligne et accompagnement.",
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
      { threshold: 0.08 },
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
      <div className="text-center mb-10">
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
            marginBottom: "8px",
          }}
        >
          Ce que Web RG Est apporte &agrave; votre entreprise
        </h2>
        <p className="mx-auto max-w-xl text-sm text-slate-400 leading-relaxed">
          Un site web ne doit pas seulement exister. Il doit vous rendre
          visible, rassurer vos clients et leur donner envie de vous contacter.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="benefit-card-v7 group relative overflow-hidden rounded-2xl border border-white/[0.06] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35),0_0_20px_rgba(45,212,191,0.06)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(15,30,53,0.95) 0%, rgba(11,22,40,0.98) 100%)",
                backdropFilter: "blur(12px)",
                animationDelay: `${i * 0.12}s`,
              }}
            >
              {/* Shine sweep */}
              <div className="benefit-shine pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl" />

              <div className="relative z-[1]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/15 shadow-[0_0_16px_rgba(45,212,191,0.08)]">
                  <Icon className="h-5 w-5 text-teal-400" />
                </div>
                <h3 className="mb-2 text-[15px] font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/tarifs"
          className="text-sm font-medium text-gold-400 transition-colors hover:text-gold-500"
        >
          Voir les tarifs &rarr;
        </Link>
      </div>
    </section>
  );
}
