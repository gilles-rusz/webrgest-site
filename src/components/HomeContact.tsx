"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
      <div
        style={{
          background: "#0f1e35",
          border: "0.5px solid rgba(201,137,58,0.2)",
          borderRadius: "12px",
          padding: "48px 36px",
          textAlign: "center",
        }}
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
          Pr&ecirc;t &agrave; vous lancer ?
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 2.5vw, 30px)",
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#f0f6ff",
            marginBottom: "12px",
          }}
        >
          Pr&ecirc;t &agrave; simplifier votre pr&eacute;sence en ligne ?
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#6a90aa",
            lineHeight: 1.6,
            maxWidth: "540px",
            margin: "0 auto 28px",
          }}
        >
          Parlez-moi de votre activit&eacute; ou de votre site actuel. Je vous
          r&eacute;ponds avec une premi&egrave;re analyse claire, gratuite et
          sans engagement.
        </p>
        <Link
          href="/devis-gratuit"
          className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-[0_18px_48px_rgba(45,212,191,0.32)]"
        >
          Demander un devis gratuit
        </Link>
      </div>
    </section>
  );
}
