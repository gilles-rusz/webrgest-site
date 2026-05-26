"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function HomeContact() {
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
      <div className="cta-block-v7">
        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "12px",
              color: "#c9893a",
              marginBottom: "8px",
            }}
          >
            Pr&ecirc;t &agrave; d&eacute;marrer ?
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#f0f6ff",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            Parlons de votre <em style={{ fontStyle: "italic", color: "#c9893a" }}>projet</em>
          </div>
          <div style={{ fontSize: "13px", color: "#6a90aa", lineHeight: 1.6 }}>
            Un projet en t&ecirc;te ? D&eacute;crivez votre besoin et recevez une r&eacute;ponse
            personnalis&eacute;e, claire et sans engagement.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { label: "R\u00e9ponse rapide", sub: "sous 24h" },
            { label: "Devis gratuit", sub: "sans engagement" },
            { label: "Accompagnement", sub: "personnalis\u00e9" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "12px",
              }}
            >
              <CheckCircle2
                style={{
                  width: "16px",
                  height: "16px",
                  color: "#c9893a",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              />
              <div>
                <strong style={{ color: "#f0f6ff", display: "block", fontSize: "12px" }}>
                  {item.label}
                </strong>
                <span style={{ color: "#4a7090", fontSize: "11px" }}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            href="/devis-gratuit"
            style={{
              background: "#c9893a",
              color: "#fff",
              borderRadius: "5px",
              padding: "13px 26px",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Obtenir mon devis gratuit &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
