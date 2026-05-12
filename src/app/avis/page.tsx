"use client";

import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AvisPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Avis{" "}
              <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
                clients
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ce que disent les clients qui m&apos;ont fait confiance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-10 bg-navy-900/40 border border-navy-700/50 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/15 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Les premiers avis arrivent bientôt !
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              WEB RG EST est un service récent. Les premiers témoignages clients
              seront publiés ici dès qu&apos;ils seront disponibles.
            </p>

            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-gold-400 fill-gold-400" />
              ))}
            </div>

            <p className="text-sm text-slate-400 mb-6">
              Vous avez travaillé avec moi ? Votre retour est précieux !
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200"
            >
              Laisser un avis
            </Link>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
