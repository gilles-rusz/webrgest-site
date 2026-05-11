"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  Mail,
  Globe,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Shield,
  Clock,
  FileText,
} from "lucide-react";

const FORMSPREE_FORM_ID = "xdayjojp";
const RECAPTCHA_SITE_KEY = "6Ld3cuQsAAAAAINY43cOVBifxmEVHOGhqYuczZ5B";

type FormStatus = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function DevisGratuitPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const getRecaptchaToken = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error("reCAPTCHA not loaded"));
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "submit_devis" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const utmSource = searchParams.get("utm_source") || "";
    const utmMedium = searchParams.get("utm_medium") || "";
    const utmCampaign = searchParams.get("utm_campaign") || "";

    try {
      const recaptchaToken = await getRecaptchaToken();

      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            _replyto: formData.email,
            email: formData.email,
            phone: formData.phone || "Non renseigné",
            subject: formData.subject,
            budget: formData.budget || "Non renseigné",
            message: formData.message,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            "g-recaptcha-response": recaptchaToken,
            _subject: `[Devis Landing] Nouveau devis de ${formData.name} — ${formData.subject}`,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          budget: "",
          message: "",
        });
        router.push("/merci");
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isSubmitting = status === "submitting";

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50";
  const selectClasses =
    "w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none disabled:opacity-50";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-2";

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-white">
      {/* Header */}
      <header className="border-b border-teal-500/10 bg-navy-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Web RG Est"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white tracking-wide">
                  WEB RG EST
                </span>
                <span className="block text-xs text-gold-400 tracking-[0.2em] uppercase">
                  Création Web
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@webrgest.fr"
                className="hidden sm:flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@webrgest.fr
              </a>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-500/30 text-sm font-medium text-teal-400 hover:bg-teal-500/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Visiter le site
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Demandez votre{" "}
                <span
                  className="text-teal-400"
                  style={{
                    fontFamily: "var(--font-satisfy), cursive",
                    fontWeight: 400,
                  }}
                >
                  devis gratuit
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Création de site web, refonte, e-commerce, landing page ou
                automatisation : décrivez votre besoin et recevez une réponse
                personnalisée.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  Réponse rapide
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  Devis gratuit
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400" />
                  Sans engagement
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form section */}
        <section className="relative pb-20 sm:pb-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl p-6 sm:p-8 mb-8 bg-navy-900/60 border border-navy-700/50">
                <p className="text-slate-300 leading-relaxed">
                  Vous êtes{" "}
                  <strong className="text-white">
                    artisan, indépendant, commerçant, entrepreneur ou dirigeant
                    de PME
                  </strong>{" "}
                  ? WEB RG EST vous accompagne dans la création de sites web
                  modernes, professionnels et adaptés à votre activité.
                </p>
                <p className="mt-3 text-slate-400 text-sm">
                  Expliquez-moi votre besoin en quelques lignes. Je vous
                  recontacte rapidement pour échanger sur votre projet et vous
                  proposer une solution adaptée.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 sm:p-8 space-y-6 bg-navy-900/40 border border-navy-700/50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Nom / Prénom *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Jean Dupont"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="jean@exemple.fr"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="06 12 34 56 78"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Type de projet *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={selectClasses}
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="Site Vitrine">Site Vitrine</option>
                      <option value="Refonte de Site">Refonte de site</option>
                      <option value="E-Commerce">E-commerce</option>
                      <option value="Landing Page">Landing page</option>
                      <option value="Automatisation n8n">
                        Automatisation n8n
                      </option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Budget approximatif</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={selectClasses}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="Moins de 500€">Moins de 500€</option>
                    <option value="500 – 1 000€">500 – 1 000€</option>
                    <option value="1 000 – 2 000€">1 000 – 2 000€</option>
                    <option value="2 000€ et plus">2 000€ et plus</option>
                  </select>
                </div>

                <div>
                  <label className={labelClasses}>Votre message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-teal-500 text-white font-semibold text-lg hover:bg-teal-400 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma demande de devis
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-teal-400 text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    Demande envoyée avec succès ! Je vous recontacte rapidement.
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5" />
                    Une erreur est survenue. Réessayez ou contactez-moi à
                    contact@webrgest.fr.
                  </div>
                )}

                <p className="text-xs text-slate-500 leading-relaxed">
                  En soumettant ce formulaire, vous acceptez que vos données
                  soient utilisées pour répondre à votre demande. Elles ne
                  seront ni vendues ni transmises à des tiers. Consultez notre{" "}
                  <a
                    href="/politique-de-confidentialite"
                    className="text-teal-400 hover:text-teal-300 underline"
                  >
                    politique de confidentialité
                  </a>{" "}
                  pour en savoir plus.
                </p>

                <p className="text-xs text-slate-500/70 leading-relaxed">
                  Ce site est protégé par reCAPTCHA et les{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-400"
                  >
                    règles de confidentialité
                  </a>{" "}
                  et{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-slate-400"
                  >
                    conditions d&apos;utilisation
                  </a>{" "}
                  de Google s&apos;appliquent.
                </p>
              </form>

              {/* Secondary CTA */}
              <div className="mt-10 text-center">
                <p className="text-slate-400 text-sm">
                  Vous souhaitez d&apos;abord découvrir mes services ?
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 mt-3 px-6 py-3 rounded-lg border border-teal-500/20 text-teal-400 font-medium hover:bg-teal-500/10 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Visiter le site WEB RG EST
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <a
              href="mailto:contact@webrgest.fr"
              className="hover:text-teal-400 transition-colors"
            >
              contact@webrgest.fr
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link
              href="/"
              className="hover:text-teal-400 transition-colors"
            >
              webrgest.fr
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Web RG Est. Tous droits réservés.
            {" "}
            <a
              href="/mentions-legales"
              className="hover:text-teal-400 transition-colors"
            >
              Mentions légales
            </a>
            {" | "}
            <a
              href="/politique-de-confidentialite"
              className="hover:text-teal-400 transition-colors"
            >
              Politique de confidentialité
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
