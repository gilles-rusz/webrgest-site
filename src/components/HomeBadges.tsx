"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Search, Headphones } from "lucide-react";

const badges = [
  { icon: Zap, title: "Performance", desc: "Des sites rapides pour une meilleure expérience." },
  { icon: Shield, title: "Sécurité", desc: "Hébergement fiable et protection des données." },
  { icon: Search, title: "SEO & Visibilité", desc: "Optimisés pour être trouvé sur Google." },
  { icon: Headphones, title: "Accompagnement", desc: "Un partenaire de confiance, sur le long terme." },
];

export default function HomeBadges() {
  return (
    <section className="relative py-12">
      {/* Lighter background */}
      <div className="absolute inset-0 bg-[#0c1220]" />
      {/* Top neon separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{badge.title}</h4>
                  <p className="text-xs text-slate-400 leading-snug">{badge.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
