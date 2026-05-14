"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
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

const tabletStats = [
  { icon: Users, value: "+38%", label: "contacts qualifiés", tone: "text-teal-300" },
  { icon: MousePointerClick, value: "4,8%", label: "conversion devis", tone: "text-gold-400" },
  { icon: CalendarCheck, value: "12", label: "RDV ce mois-ci", tone: "text-emerald-300" },
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

function ConversionTablet() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[560px]" style={{ perspective: "1400px" }}>
      <motion.div
        initial={{ opacity: 0, y: 26, rotateX: 10, rotateY: -18 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0 }
            : {
                opacity: 1,
                y: [0, -10, 0],
                rotateX: [8, 6, 8],
                rotateY: [-15, -10, -15],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.7, delay: 0.25 }
            : { opacity: { duration: 0.7, delay: 0.25 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" } }
        }
        className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-slate-700/60 via-navy-950 to-black p-2.5 shadow-[0_50px_110px_rgba(0,0,0,0.62),0_0_90px_rgba(20,184,166,0.16)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute left-1/2 top-3 z-20 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="tablet-shine pointer-events-none absolute inset-0 rounded-[2rem]" />

        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-navy-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_18rem),radial-gradient(circle_at_95%_20%,rgba(232,184,75,0.12),transparent_18rem)]" />

          <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            </div>
            <div className="hidden rounded-full border border-white/10 bg-navy-900/80 px-4 py-1.5 text-[11px] font-medium text-slate-300 sm:block">
              webrgest.fr/dashboard-client
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
              LIVE
            </span>
          </div>

          <div className="relative p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80">
                  Tableau de conversion
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Votre site génère des prospects
                </h3>
              </div>
              <div className="rounded-2xl border border-teal-300/20 bg-teal-300/10 px-4 py-3 text-right">
                <p className="text-[11px] text-slate-400">Objectif mensuel</p>
                <p className="text-xl font-black text-teal-300">32 devis</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {tabletStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
                  >
                    <Icon className={`mb-3 h-4 w-4 ${stat.tone}`} />
                    <p className="text-lg font-black text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-[10px] leading-tight text-slate-400 sm:text-xs">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-300">Demandes entrantes</p>
                  <span className="rounded-full bg-teal-400/10 px-2.5 py-1 text-[10px] font-bold text-teal-300">
                    +8 cette semaine
                  </span>
                </div>
                <svg viewBox="0 0 320 120" className="h-32 w-full" role="img" aria-label="Courbe de croissance des demandes de devis">
                  <defs>
                    <linearGradient id="heroChart" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(45,212,191,0.35)" />
                      <stop offset="100%" stopColor="rgba(45,212,191,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0 100 C42 92 49 72 84 78 C125 86 127 42 169 50 C210 58 215 28 252 30 C282 31 294 18 320 14 L320 120 L0 120 Z" fill="url(#heroChart)" />
                  <motion.path
                    d="M0 100 C42 92 49 72 84 78 C125 86 127 42 169 50 C210 58 215 28 252 30 C282 31 294 18 320 14"
                    fill="none"
                    stroke="#2DD4BF"
                    strokeLinecap="round"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
                  />
                  {[84, 169, 252, 320].map((x, index) => (
                    <motion.circle
                      key={x}
                      cx={x}
                      cy={[78, 50, 30, 14][index]}
                      r="4"
                      fill="#E8B84B"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.12 }}
                    />
                  ))}
                </svg>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Projet artisan", status: "Devis envoyé", icon: Rocket },
                  { title: "Refonte PME", status: "RDV planifié", icon: CalendarCheck },
                  { title: "SEO local", status: "Brief reçu", icon: ShieldCheck },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/70 p-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.status}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 26, y: 18 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ opacity: { duration: 0.5, delay: 0.9 }, x: { duration: 0.5, delay: 0.9 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -right-2 top-8 hidden rounded-2xl border border-white/10 bg-navy-950/85 p-4 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/10 text-teal-300">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-black text-white">+42% contacts</p>
            <p className="text-xs text-slate-400">après refonte</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24, y: -14 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 0.5, delay: 1.05 }, x: { duration: 0.5, delay: 1.05 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-gold-400/20 bg-navy-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
          Site clair, rapide, rentable
        </div>
      </motion.div>
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
                Création web moderne dans le Grand Est
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
              <ConversionTablet />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
    </section>
  );
}
