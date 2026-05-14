"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeContact() {
  return (
    <section className="relative py-14">
      {/* Darker background with teal glow */}
      <div className="absolute inset-0 bg-navy-950" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(45, 212, 191, 0.06), transparent 60%)",
        }}
      />
      {/* Top neon separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-teal-500/15 bg-navy-900/30 backdrop-blur-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-[10px] font-semibold text-teal-400 tracking-[3px] uppercase mb-2">Prêt à démarrer ?</p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Parlons de votre{" "}
              <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
                projet
              </span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Un projet en tête ? Décrivez votre besoin et recevez une réponse personnalisée, claire et sans engagement.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            {[
              { label: "Réponse rapide", sub: "sous 24h" },
              { label: "Devis gratuit", sub: "sans engagement" },
              { label: "Accompagnement", sub: "personnalisé" },
            ].map((proof, i) => (
              <span key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-white block">{proof.label}</span>
                  <span className="text-slate-400">{proof.sub}</span>
                </span>
              </span>
            ))}
          </div>

          <Link
            href="/devis-gratuit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(45,212,191,0.25)] whitespace-nowrap"
          >
            Obtenir mon devis gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
