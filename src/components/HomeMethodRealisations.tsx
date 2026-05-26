"use client";

import { useEffect, useRef } from "react";

const steps = [
  { num: "01", title: "Brief", desc: "On comprend votre m\u00e9tier, vos objectifs et vos contraintes." },
  { num: "02", title: "Conception", desc: "Design sur mesure et structure pens\u00e9e pour convertir." },
  { num: "03", title: "D\u00e9veloppement", desc: "Site rapide, s\u00e9curis\u00e9 et optimis\u00e9 pour le r\u00e9f\u00e9rencement." },
  { num: "04", title: "Mise en ligne", desc: "Votre site est en ligne. On reste \u00e0 vos c\u00f4t\u00e9s." },
];

export default function HomeMethodRealisations() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("v7-visible");
            setTimeout(() => {
              if (lineRef.current) lineRef.current.style.width = "75%";
            }, 300);
          }
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
      id="realisations"
      className="v7-section scroll-mt-24"
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
        Notre m&eacute;thode
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
        Un processus clair, simple et efficace.
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-4"
        style={{ position: "relative", marginTop: "12px" }}
      >
        {/* Background line */}
        <div
          className="hidden sm:block"
          style={{
            position: "absolute",
            top: "18px",
            left: "12.5%",
            right: "12.5%",
            height: "1px",
            background: "#1a3050",
          }}
        />
        {/* Animated fill line */}
        <div
          ref={lineRef}
          className="hidden sm:block"
          style={{
            position: "absolute",
            top: "18px",
            left: "12.5%",
            width: "0",
            height: "1px",
            background: "linear-gradient(to right, #c9893a, #f5d07a)",
            transition: "width 1.4s ease",
            zIndex: 1,
          }}
        />
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 12px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#0f1e35",
                border: "1.5px solid #c9893a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#c9893a",
                marginBottom: "16px",
                flexShrink: 0,
              }}
            >
              {step.num}
            </div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#f0f6ff", marginBottom: "8px" }}>
              {step.title}
            </div>
            <div style={{ fontSize: "12px", color: "#4a7090", lineHeight: 1.55 }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
