"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import { Star, Send, Loader2, CheckCircle2 } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function LaisserUnAvisPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !rating || !message) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, rating, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setCompany("");
        setRating(0);
        setMessage("");
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Laisser un{" "}
              <span
                className="text-teal-400"
                style={{
                  fontFamily: "var(--font-satisfy), cursive",
                  fontWeight: 400,
                }}
              >
                avis
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Vous avez travaillé avec moi ? Votre retour est précieux et aide
              d&apos;autres clients à me faire confiance.
            </p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl p-10 bg-navy-900/40 border border-teal-500/30 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                Merci pour votre avis !
              </h3>
              <p className="text-slate-400">
                Votre témoignage sera publié après vérification. Merci pour
                votre confiance !
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-8 bg-navy-900/40 border border-navy-700/50 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Votre nom *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Entreprise{" "}
                  <span className="text-slate-500">(optionnel)</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="Mon Entreprise"
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Votre note *
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      disabled={isSubmitting}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110 disabled:opacity-50"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoverRating || rating)
                            ? "text-gold-400 fill-gold-400"
                            : "text-slate-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating === 0 && (
                  <p className="text-xs text-slate-500 mt-1">
                    Cliquez pour noter
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Votre avis *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  minLength={10}
                  placeholder="Décrivez votre expérience..."
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !name || !rating || !message}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer mon avis
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </PageShell>
  );
}
