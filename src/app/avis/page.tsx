"use client";

import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Star, MessageSquare, Quote } from "lucide-react";
import Link from "next/link";

interface Avis {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  message: string;
  created_at: string;
}

export default function AvisPage() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/avis")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setAvis(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const averageRating =
    avis.length > 0
      ? (avis.reduce((sum, a) => sum + a.rating, 0) / avis.length).toFixed(1)
      : null;

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
              <span
                className="text-teal-400"
                style={{
                  fontFamily: "var(--font-satisfy), cursive",
                  fontWeight: 400,
                }}
              >
                clients
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ce que disent les clients qui m&apos;ont fait confiance.
            </p>

            {averageRating && (
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-navy-900/60 border border-navy-700/50">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i <= Math.round(Number(averageRating))
                          ? "text-gold-400 fill-gold-400"
                          : "text-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-bold">{averageRating}/5</span>
                <span className="text-slate-400 text-sm">
                  ({avis.length} avis)
                </span>
              </div>
            )}
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : avis.length > 0 ? (
            <div className="space-y-6 mb-12">
              {avis.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl p-6 sm:p-8 bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/15 flex items-center justify-center flex-shrink-0">
                      <Quote className="w-5 h-5 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= item.rating
                                  ? "text-gold-400 fill-gold-400"
                                  : "text-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-3">
                        {item.message}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {item.name}
                        </span>
                        {item.company && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm text-slate-400">
                              {item.company}
                            </span>
                          </>
                        )}
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-500">
                          {new Date(item.created_at).toLocaleDateString(
                            "fr-FR",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-10 bg-navy-900/40 border border-navy-700/50 text-center mb-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/15 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Les premiers avis arrivent bientôt !
              </h3>
              <p className="text-slate-400 max-w-lg mx-auto">
                WEB RG EST est un service récent. Les premiers témoignages
                clients seront publiés ici dès qu&apos;ils seront disponibles.
              </p>
            </motion.div>
          )}

          <div className="text-center">
            <p className="text-slate-400 mb-4">
              Vous avez travaillé avec moi ? Votre retour est précieux !
            </p>
            <Link
              href="/laisser-un-avis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200"
            >
              Laisser un avis
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
