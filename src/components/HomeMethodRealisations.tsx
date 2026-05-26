"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", title: "Brief", desc: "On comprend votre métier, vos objectifs et vos contraintes." },
  { num: "02", title: "Conception", desc: "Design sur mesure et structure pensée pour convertir." },
  { num: "03", title: "Développement", desc: "Site rapide, sécurisé et optimisé pour le référencement." },
  { num: "04", title: "Mise en ligne", desc: "Votre site est en ligne. On reste à vos côtés." },
];

export default function HomeMethodRealisations() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineWidth, setLineWidth] = useState("0%");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setLineWidth("75%"), 300);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-reveal mx-auto max-w-[1200px] px-6 py-[72px] sm:px-12"
      id="s-process"
    >
      <p className="mb-2 text-[15px] italic text-gold-400" style={{ fontFamily: "var(--font-playfair)" }}>
        Notre méthode
      </p>
      <h2 className="mb-9 text-[clamp(22px,2.5vw,30px)] font-bold leading-[1.2] tracking-[-0.02em] text-slate-300">
        Un processus clair, simple et efficace.
      </h2>

      <div className="process-track-v7 relative mt-3 grid grid-cols-2 gap-0 sm:grid-cols-4">
        {/* Background line */}
        <div className="process-line-bg absolute left-[12.5%] right-[12.5%] top-[18px] h-px bg-navy-800" />
        {/* Animated fill line */}
        <div
          className="process-line-fill"
          style={{ width: lineWidth }}
        />

        {steps.map((step) => (
          <div key={step.num} className="relative z-10 flex flex-col items-center px-3 text-center">
            <div className="mb-4 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold-400 bg-navy-900 text-xs font-bold text-gold-400">
              {step.num}
            </div>
            <div className="mb-2 text-[13px] font-semibold text-slate-300">{step.title}</div>
            <div className="text-xs leading-[1.55] text-slate-500">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
