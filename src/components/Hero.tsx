"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const floatingDots = [
  { left: "8%", top: "18%", delay: 0, size: "h-2 w-2" },
  { left: "18%", top: "72%", delay: 1.4, size: "h-1.5 w-1.5" },
  { left: "44%", top: "12%", delay: 0.8, size: "h-1.5 w-1.5" },
  { left: "77%", top: "30%", delay: 1.9, size: "h-2 w-2" },
  { left: "88%", top: "78%", delay: 0.5, size: "h-1.5 w-1.5" },
];


function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.16),transparent_32rem),radial-gradient(circle_at_80%_10%,rgba(232,184,75,0.10),transparent_28rem),linear-gradient(180deg,#0D1117_0%,#101426_48%,#0D1117_100%)]" />
      <motion.div
        className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        animate={{ x: [0, 55, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-8 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
        animate={{ x: [0, -45, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-grid absolute inset-0 opacity-[0.22]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950 via-navy-950/70 to-transparent" />
      {floatingDots.map((dot) => (
        <motion.span
          key={`${dot.left}-${dot.top}`}
          className={`absolute ${dot.size} rounded-full bg-teal-300/70 shadow-[0_0_18px_rgba(45,212,191,0.7)]`}
          style={{ left: dot.left, top: dot.top }}
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -16, 0] }}
          transition={{ duration: 5, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function FounderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="mb-8 inline-flex max-w-full items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-3 pr-5 text-left shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className="relative shrink-0">
        <Image
          src="/portrait-gilles.png"
          alt="Gilles Ruszczycki - Web RG Est"
          width={88}
          height={88}
          priority
          className="h-20 w-20 rounded-2xl border border-teal-300/30 object-cover shadow-[0_0_35px_rgba(45,212,191,0.16)] sm:h-[88px] sm:w-[88px]"
        />
        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-navy-950 bg-emerald-400">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
        </span>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-bold text-white">Gilles Ruszczycki</p>
          <span className="rounded-full bg-teal-400/10 px-2.5 py-1 text-[11px] font-semibold text-teal-300">
            Disponible
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-teal-300">Développeur Web Full-Stack</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">
          Sites modernes, rapides et pensés pour générer des demandes de devis.
        </p>
      </div>
    </motion.div>
  );
}

function MonHistoire() {
  const stats = [
    { value: "22 ans", label: "expérience", accent: "rgba(45,212,191,1)" },
    { value: "Grand Est & Luxembourg", label: "France & Luxembourg", accent: "rgba(232,184,75,1)" },
    { value: "×1", label: "interlocuteur", accent: "rgba(52,211,153,1)" },
  ];

  return (
    <div
      className="relative mx-auto w-full max-w-[520px]"
      style={{ perspective: "1600px", paddingBottom: "120px" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ipadFloat {
          0%,  100% { transform: rotateX(12deg)  rotateY(-18deg) translateY(0px); }
          25%        { transform: rotateX(4deg)   rotateY(-7deg)  translateY(-36px); }
          55%        { transform: rotateX(8deg)   rotateY(-13deg) translateY(-20px); }
          78%        { transform: rotateX(16deg)  rotateY(-24deg) translateY(-8px); }
        }
        @keyframes ipadShadow {
          0%,  100% { transform: scaleX(1)    scaleY(1);    opacity: 0.62; }
          25%        { transform: scaleX(0.50) scaleY(0.38); opacity: 0.09; }
          55%        { transform: scaleX(0.70) scaleY(0.52); opacity: 0.20; }
          78%        { transform: scaleX(0.86) scaleY(0.68); opacity: 0.36; }
        }
        @keyframes ipadShine {
          0%, 22%  { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          36%      { opacity: 1; }
          58%, 100%{ transform: translateX(170%)  skewX(-18deg); opacity: 0; }
        }
      ` }} />

      {/* ── 3D floating wrapper ─────────────────────────────── */}
      <div
        style={{
          transformStyle: "preserve-3d",
          animation: "ipadFloat 8s ease-in-out infinite",
          willChange: "transform",
          position: "relative",
        }}
      >
        {/* Back face — simulates ~7 mm device thickness */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "56px",
            transform: "translateZ(-7px)",
            background: "linear-gradient(160deg, #1a1a1c 0%, #0e0e10 100%)",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.92)",
            pointerEvents: "none",
          }}
        />

        {/* ── Aluminum body ──────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(200deg, #5c5c5e 0%, #4a4a4c 7%, #3c3c3e 20%, #2e2e30 44%, #242426 68%, #1c1c1e 100%)",
            borderRadius: "56px",
            padding: "30px 14px 112px",
            boxShadow: [
              "inset 0 1px 0 rgba(255,255,255,0.24)",
              "inset 0 -1px 0 rgba(0,0,0,0.42)",
              "inset 0 0 0 1px rgba(255,255,255,0.07)",
              "0 0 0 1.5px rgba(0,0,0,0.92)",
              "0 80px 160px rgba(0,0,0,0.88)",
              "0 40px 80px rgba(0,0,0,0.58)",
              "0 16px 36px rgba(0,0,0,0.38)",
              "0 0 120px rgba(20,184,166,0.12)",
            ].join(", "),
            position: "relative",
            overflow: "visible",
          }}
        >
          {/* Chamfer highlight — top-left → bottom-right diagonal */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "56px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 38%, transparent 62%, rgba(0,0,0,0.09) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* ── Front camera + status LED ─────────────────────── */}
          <div
            style={{
              position: "absolute",
              top: "13px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 32% 32%, #262628 30%, #080809 100%)",
                boxShadow: "0 0 0 2px rgba(0,0,0,0.95), 0 0 0 4px rgba(255,255,255,0.04), inset 0 0 5px rgba(0,140,220,0.28)",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #22c55e 0%, #15803d 100%)",
                boxShadow: "0 0 8px rgba(34,197,94,0.85)",
              }}
            />
          </div>

          {/* ── Home button (bottom center) ──────────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: "26px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "58px",
              height: "58px",
              borderRadius: "50%",
              background: "linear-gradient(145deg, #3e3e40 0%, #28282a 55%, #1c1c1e 100%)",
              boxShadow: [
                "0 0 0 2px rgba(0,0,0,0.85)",
                "0 0 0 4.5px rgba(255,255,255,0.058)",
                "inset 0 2px 3px rgba(255,255,255,0.15)",
                "inset 0 -2px 3px rgba(0,0,0,0.52)",
                "0 4px 10px rgba(0,0,0,0.55)",
              ].join(", "),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #323234 0%, #1e1e20 100%)",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.72), inset 0 -1px 2px rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            />
          </div>

          {/* ── Power button — right side ────────────────────── */}
          <div
            style={{
              position: "absolute",
              right: "-7px",
              top: "106px",
              width: "7px",
              height: "74px",
              borderRadius: "4px 0 0 4px",
              background: "linear-gradient(90deg, #3c3c3e 0%, #2e2e30 100%)",
              boxShadow: "inset -1px 0 0 rgba(0,0,0,0.6), 1px 0 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          />

          {/* ── Volume up — left side ────────────────────────── */}
          <div
            style={{
              position: "absolute",
              left: "-7px",
              top: "90px",
              width: "7px",
              height: "58px",
              borderRadius: "0 4px 4px 0",
              background: "linear-gradient(90deg, #2e2e30 0%, #3c3c3e 100%)",
              boxShadow: "inset 1px 0 0 rgba(0,0,0,0.6), -1px 0 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          />

          {/* ── Volume down — left side ──────────────────────── */}
          <div
            style={{
              position: "absolute",
              left: "-7px",
              top: "162px",
              width: "7px",
              height: "58px",
              borderRadius: "0 4px 4px 0",
              background: "linear-gradient(90deg, #2e2e30 0%, #3c3c3e 100%)",
              boxShadow: "inset 1px 0 0 rgba(0,0,0,0.6), -1px 0 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          />

          {/* ── Screen ──────────────────────────────────────── */}
          <div
            style={{
              background: "#0D1117",
              borderRadius: "42px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Ambient screen glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 22% 0%, rgba(45,212,191,0.22) 0%, transparent 46%), radial-gradient(circle at 90% 18%, rgba(232,184,75,0.12) 0%, transparent 38%), radial-gradient(circle at 50% 100%, rgba(99,102,241,0.07) 0%, transparent 55%)",
                pointerEvents: "none",
              }}
            />

            {/* Diagonal shine sweep */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-30%",
                width: "52%",
                height: "100%",
                background: "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.04) 44%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 56%, transparent 100%)",
                transform: "skewX(-15deg)",
                animation: "ipadShine 9s ease-in-out infinite",
                pointerEvents: "none",
                zIndex: 11,
              }}
            />

            {/* Top-left corner glare */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "46%",
                background: "linear-gradient(155deg, rgba(255,255,255,0.068) 0%, rgba(255,255,255,0.022) 35%, transparent 62%)",
                borderRadius: "42px 42px 0 0",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />

            {/* Screen content */}
            <div style={{ position: "relative", zIndex: 1, padding: "26px 22px 24px" }}>

              {/* Label */}
              <p style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(45,212,191,0.82)",
                marginBottom: "9px",
              }}>
                Mon histoire
              </p>

              {/* Title */}
              <h3 style={{
                fontSize: "19px",
                fontWeight: 900,
                lineHeight: 1.28,
                color: "#fff",
                marginBottom: "19px",
                letterSpacing: "-0.03em",
              }}>
                Pourquoi j&apos;ai tout quitté pour créer des sites web
              </h3>

              {/* Founder mini-card */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 14px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "17px",
              }}>
                <Image
                  src="/portrait-gilles.png"
                  alt="Gilles"
                  width={46}
                  height={46}
                  style={{
                    borderRadius: "12px",
                    border: "1px solid rgba(45,212,191,0.22)",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "16px", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
                    Gilles Ruszczycki
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(45,212,191,0.85)", marginTop: "3px" }}>
                    Maizières-lès-Metz
                  </p>
                </div>
                <span style={{
                  flexShrink: 0,
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "rgba(52,211,153,0.12)",
                  color: "#34d399",
                  border: "1px solid rgba(52,211,153,0.18)",
                  whiteSpace: "nowrap",
                }}>
                  Disponible
                </span>
              </div>

              {/* Body text */}
              <div style={{
                fontSize: "14px",
                lineHeight: 1.65,
                color: "rgba(148,163,184,0.9)",
                marginBottom: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}>
                <p>
                  Après 22 ans en entreprise, j&apos;accompagne artisans et TPE du Grand Est avec ce que les agences facturent 3× plus cher.
                </p>
                <p>
                  Contact direct, sans intermédiaire, du brief à la mise en ligne.
                </p>
              </div>

              {/* Quote */}
              <div style={{
                padding: "12px 15px",
                borderRadius: "15px",
                border: "1px solid rgba(45,212,191,0.18)",
                background: "rgba(45,212,191,0.055)",
                marginBottom: "19px",
              }}>
                <p style={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  color: "rgba(204,251,241,0.88)",
                  lineHeight: 1.55,
                }}>
                  &ldquo;Un seul interlocuteur du brief à la mise en ligne.&rdquo;
                </p>
              </div>

              {/* Stat cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: "14px 8px",
                      borderRadius: "15px",
                      background: "rgba(255,255,255,0.038)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                      textAlign: "center",
                    }}
                  >
                    <p style={{
                      fontSize: "16px",
                      fontWeight: 900,
                      color: "#fff",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}>
                      {s.value}
                    </p>
                    <p style={{
                      fontSize: "11px",
                      color: "rgba(148,163,184,0.75)",
                      marginTop: "4px",
                      lineHeight: 1.3,
                    }}>
                      {s.label}
                    </p>
                    <div style={{
                      width: "19px",
                      height: "3px",
                      borderRadius: "2px",
                      background: s.accent,
                      margin: "7px auto 0",
                      opacity: 0.65,
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Ombre portée pulsante + reflet ambiant ─────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        {/* ombre principale — pulse avec la lévitation */}
        <div
          style={{
            position: "absolute",
            width: "72%",
            height: "56px",
            borderRadius: "50%",
            animation: "ipadShadow 8s ease-in-out infinite",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.36) 42%, transparent 70%)",
            filter: "blur(14px)",
          }}
        />
        {/* ombre secondaire — étalement doux */}
        <div
          style={{
            position: "absolute",
            width: "88%",
            height: "40px",
            top: "8px",
            borderRadius: "50%",
            animation: "ipadShadow 8s ease-in-out infinite",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.28) 0%, transparent 70%)",
            filter: "blur(22px)",
          }}
        />
        {/* reflet teal ambiant */}
        <div
          style={{
            position: "absolute",
            width: "54%",
            height: "34px",
            top: "4px",
            borderRadius: "50%",
            animation: "ipadShadow 8s ease-in-out infinite",
            background: "radial-gradient(ellipse at center, rgba(20,184,166,0.22) 0%, transparent 70%)",
            filter: "blur(22px)",
          }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen flex-col overflow-hidden pt-20">
      <HeroBackground />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <FounderCard />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200"
              >
                <Sparkles className="h-4 w-4" />
                Création web — France, Grand Est &amp; Luxembourg
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="text-4xl font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
              >
                Un site web qui donne envie de vous contacter.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
              >
                Je conçois des sites rapides, élégants et orientés conversion pour transformer vos visiteurs en demandes de devis, appels et rendez-vous qualifiés.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Link
                  href="/devis-gratuit"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-teal-500 px-7 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(20,184,166,0.26)] transition-all duration-300 hover:-translate-y-1 hover:bg-teal-400 hover:shadow-[0_22px_60px_rgba(45,212,191,0.34)]"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/realisations"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:text-gold-400"
                >
                  Voir les réalisations
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.48 }}
                className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-300 lg:justify-start"
              >
                {[
                  "Réponse rapide",
                  "Devis clair",
                  "Site pensé conversion",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/[0.035] px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-300" />
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.56 }}
                className="mt-9 grid gap-3 text-left sm:grid-cols-3"
              >
                {[
                  { icon: Briefcase, text: "22 ans d’expérience terrain" },
                  { icon: Wrench, text: "Développement sur mesure" },
                  { icon: Zap, text: "Méthode simple et efficace" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm">
                      <Icon className="mb-3 h-5 w-5 text-gold-400" />
                      <p className="text-sm font-semibold leading-relaxed text-slate-200">{item.text}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div className="lg:pl-4">
              <MonHistoire />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
    </section>
  );
}
