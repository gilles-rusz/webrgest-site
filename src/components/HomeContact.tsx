"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeContact() {
  return (
    <section className="relative py-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Prêt à rendre votre site plus{" "}
              <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
                utile
              </span>{" "}
              ?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Décrivez votre projet, je vous réponds sous 24h.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {["Devis gratuit", "Sans engagement", "Réponse sous 24h"].map((proof, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                {proof}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(45,212,191,0.25)] whitespace-nowrap"
          >
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
