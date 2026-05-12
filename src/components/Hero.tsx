"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Wrench, Zap, PhoneCall, TrendingUp, Users, BarChart3 } from "lucide-react";

function DashboardMockup() {
  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
      }}
    >
      {/* 3D tilted dashboard */}
      <motion.div
        initial={{ opacity: 0, rotateY: -20, x: 40 }}
        animate={{ opacity: 1, rotateY: -8, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-2xl overflow-hidden border border-teal-500/20 bg-navy-900/90 backdrop-blur-xl shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(45,212,191,0.08)]"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <span className="text-sm font-bold text-white">Tableau de bord</span>
          <span className="text-[11px] text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">webrgest.fr</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {[
            { icon: Users, value: "127", change: "+24%", label: "Nouveaux contacts" },
            { icon: BarChart3, value: "32", change: "+18%", label: "Demandes de devis" },
            { icon: TrendingUp, value: "5,8%", change: "+12%", label: "Taux de conversion" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="rounded-xl bg-navy-800/80 border border-white/5 p-3 text-center">
                <Icon className="w-4 h-4 text-teal-400 mx-auto mb-1" />
                <div className="text-xl font-extrabold text-white">
                  {stat.value}
                  <span className="text-[10px] text-emerald-400 ml-1">{stat.change}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Chart area */}
        <div className="mx-4 mb-4 rounded-xl bg-navy-800/50 border border-white/5 p-3">
          <div className="text-[10px] text-slate-400 mb-2">Évolution des contacts</div>
          <svg viewBox="0 0 300 60" className="w-full h-12">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(45, 212, 191, 0.3)" />
                <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
              </linearGradient>
            </defs>
            <path d="M0,50 Q30,45 60,38 T120,30 T180,20 T240,15 T300,8" fill="none" stroke="#2dd4bf" strokeWidth="2" />
            <path d="M0,50 Q30,45 60,38 T120,30 T180,20 T240,15 T300,8 L300,60 L0,60 Z" fill="url(#chartGrad)" />
          </svg>
        </div>
      </motion.div>

      {/* Floating badge top-right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-navy-900/95 border border-teal-500/25 backdrop-blur-sm shadow-lg text-xs font-semibold"
      >
        <span className="mr-1">📈</span>
        <span className="text-teal-400">+42% contacts</span>
      </motion.div>

      {/* Floating badge bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.5 }}
        className="absolute -bottom-2 -left-6 px-3 py-2 rounded-xl bg-navy-900/95 border border-teal-500/25 backdrop-blur-sm shadow-lg text-xs font-semibold flex items-center gap-1"
      >
        <span>⭐</span>
        <span className="text-slate-200">Ils nous font confiance</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(45, 212, 191, 0.08), transparent 30rem), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.06), transparent 28rem)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column: text */}
            <div className="text-center lg:text-left">
              {/* Portrait + badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
              >
                <Image
                  src="/portrait-gilles.png"
                  alt="Gilles Ruszczycki - Web RG Est"
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-teal-500/40 shadow-lg"
                />
                <div>
                  <p className="text-sm font-semibold text-white">Gilles Ruszczycki</p>
                  <p className="text-xs text-teal-400 tracking-wide">
                    Développeur Full-Stack &bull; Grand Est
                  </p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              >
                <span className="text-white">Sites web modernes pour </span>
                <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive" }}>
                  artisans, indépendants
                </span>
                <span className="text-white"> &amp; PME</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
              >
                Des sites rapides, élégants et pensés pour générer des contacts
                et développer votre activité.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-500 text-white font-semibold text-lg hover:bg-teal-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(45,212,191,0.25)]"
                >
                  Demander un devis gratuit
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-navy-600 text-slate-300 font-semibold text-lg hover:border-teal-500/50 hover:text-teal-400 transition-all duration-200"
                >
                  <PhoneCall className="w-5 h-5" />
                  Être rappelé
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { icon: Briefcase, text: "22 ans de management industriel" },
                  { icon: Wrench, text: "Développeur Full-Stack certifié" },
                  { icon: Zap, text: "Méthodes Lean appliquées au web" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 bg-navy-900/50 border border-navy-700/50 text-sm"
                    >
                      <Icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-slate-300">{item.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right column: 3D dashboard mockup */}
            <div className="hidden lg:block">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
