"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Send,
  Mail,
  Globe,
  Loader2,
  AlertCircle,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  ArrowLeft,
  Monitor,
  RefreshCw,
  ShoppingCart,
  Plus,
  Wrench,
  ShoppingBag,
  Building2,
  Briefcase,
  Check,
} from "lucide-react";

const FORMSPREE_FORM_ID = "xdayjojp";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface WizardData {
  projectType: string;
  sector: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const PROJECT_OPTIONS: { value: string; label: string; desc: string; Icon: LucideIcon }[] = [
  { value: "Site vitrine",    label: "Site Vitrine",    desc: "Présentez votre activité en ligne",              Icon: Monitor      },
  { value: "E-commerce",      label: "E-commerce",      desc: "Vendez vos produits en ligne",                   Icon: ShoppingCart },
  { value: "Automatisation",  label: "Automatisation",  desc: "Gagnez du temps sur vos tâches répétitives",     Icon: RefreshCw    },
  { value: "Application Web", label: "Application Web", desc: "Projet sur mesure",                              Icon: Monitor      },
  { value: "Refonte",         label: "Refonte",         desc: "Modernisez votre site existant",                 Icon: RefreshCw    },
  { value: "Autre",           label: "Autre",           desc: "Autre type de projet",                           Icon: Plus         },
];

const SECTOR_OPTIONS: { value: string; label: string; desc: string; Icon: LucideIcon }[] = [
  { value: "Artisan",               label: "Artisan",               desc: "Bâtiment, artisanat, métiers de bouche…", Icon: Wrench      },
  { value: "Commerce",              label: "Commerce",              desc: "Boutique, magasin, restaurant…",          Icon: ShoppingBag },
  { value: "TPE / PME",             label: "TPE / PME",             desc: "Entreprise, société, start-up…",          Icon: Building2   },
  { value: "Profession libérale",   label: "Profession libérale",   desc: "Médecin, avocat, consultant…",            Icon: Briefcase   },
  { value: "Autre secteur",         label: "Autre secteur",         desc: "Autre type d'activité",                   Icon: Plus        },
];

const BUDGET_OPTIONS: { value: string; label: string; desc: string }[] = [
  { value: "Moins de 500 €",        label: "Moins de 500 €",        desc: "Automatisation ou projet simple"                  },
  { value: "500 – 1 000 €",         label: "500 – 1 000 €",         desc: "Site Vitrine professionnel"                       },
  { value: "1 000 – 2 000 €",       label: "1 000 – 2 000 €",       desc: "E-commerce ou projet avancé"                      },
  { value: "2 000 € +",             label: "2 000 € +",             desc: "Application web sur mesure"                       },
  { value: "Je ne sais pas encore", label: "Je ne sais pas encore", desc: "Conseillez-moi selon mon besoin"                  },
];

const STEPS = [
  { n: 1, label: "Projet"  },
  { n: 2, label: "Secteur" },
  { n: 3, label: "Budget"  },
  { n: 4, label: "Contact" },
];

const STEP_TITLES = [
  "Quel type de projet vous intéresse ?",
  "Quel est votre secteur d'activité ?",
  "Quel est votre budget estimé ?",
  "Vos coordonnées",
];

const STEP_SUBS = [
  "Choisissez ce qui correspond le mieux à votre besoin.",
  "Cela m'aide à vous proposer la solution la plus adaptée.",
  "Aucun engagement — juste pour calibrer ma proposition.",
  "Je vous recontacte sous 24 h.",
];

// ─── OptionCard ───────────────────────────────────────────────────────────────

function OptionCard({
  label,
  desc,
  selected,
  onClick,
  Icon,
}: {
  label: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
  Icon: LucideIcon;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 group ${
        selected
          ? "border-teal-500 bg-teal-500/10 shadow-[0_0_0_1px_rgba(20,184,166,0.15),0_8px_24px_rgba(20,184,166,0.08)]"
          : "border-navy-700/70 bg-navy-800/40 hover:border-teal-500/40 hover:bg-navy-800/70"
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className={`mt-0.5 p-2.5 rounded-lg flex-shrink-0 transition-colors ${
          selected
            ? "bg-teal-500/20 text-teal-400"
            : "bg-navy-700/60 text-slate-400 group-hover:text-slate-300"
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className={`font-semibold text-sm sm:text-base leading-tight transition-colors ${
              selected ? "text-white" : "text-slate-200"
            }`}>
              {label}
            </span>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
              selected ? "bg-teal-500 border-teal-500" : "border-navy-600"
            }`}>
              {selected && <Check className="w-3 h-3 text-white" />}
            </div>
          </div>
          <p className={`text-xs sm:text-sm mt-1 leading-relaxed transition-colors ${
            selected ? "text-teal-100/75" : "text-slate-500"
          }`}>
            {desc}
          </p>
        </div>
      </div>
    </button>
  );
}

// ─── BudgetCard ───────────────────────────────────────────────────────────────

function BudgetCard({
  label,
  desc,
  selected,
  onClick,
}: {
  label: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 group ${
        selected
          ? "border-teal-500 bg-teal-500/10 shadow-[0_0_0_1px_rgba(20,184,166,0.15),0_8px_24px_rgba(20,184,166,0.08)]"
          : "border-navy-700/70 bg-navy-800/40 hover:border-teal-500/40 hover:bg-navy-800/70"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className={`font-bold text-base sm:text-lg leading-tight transition-colors ${
            selected ? "text-white" : "text-slate-200"
          }`}>
            {label}
          </p>
          <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
            selected ? "text-teal-100/75" : "text-slate-500"
          }`}>
            {desc}
          </p>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          selected ? "bg-teal-500 border-teal-500" : "border-navy-600"
        }`}>
          {selected && <Check className="w-3 h-3 text-white" />}
        </div>
      </div>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DevisGratuitPage() {
  const router        = useRouter();
  const searchParams  = useSearchParams();

  const [step, setStep]   = useState(1);
  const [dir,  setDir]    = useState(1);
  const [honeypot, setHoneypot]   = useState("");
  const [formLoadTime]            = useState(() => Date.now());
  const [data, setData]   = useState<WizardData>({
    projectType: searchParams.get("offre") || "",
    sector:      "",
    budget:      "",
    name:        "",
    email:       "",
    phone:       "",
    message:     searchParams.get("objectif") === "rappel" ? "Souhait d'être rappelé" : "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam : honeypot + délai minimum avant envoi
    if (honeypot || Date.now() - formLoadTime < 3000) {
      setStatus("success");
      router.push("/merci");
      return;
    }

    setStatus("submitting");

    const utmSource   = searchParams.get("utm_source")   || "";
    const utmMedium   = searchParams.get("utm_medium")   || "";
    const utmCampaign = searchParams.get("utm_campaign") || "";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:                  data.name,
          _replyto:              data.email,
          email:                 data.email,
          phone:                 data.phone || "Non renseigné",
          subject:               data.projectType,
          sector:                data.sector,
          budget:                data.budget,
          message:               data.message,
          utm_source:            utmSource,
          utm_medium:            utmMedium,
          utm_campaign:          utmCampaign,
          _subject:              `[Devis] ${data.name} — ${data.projectType} — ${data.sector}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
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

  // ── Navigation ─────────────────────────────────────────────────────────────
  const canProceed =
    (step === 1 && !!data.projectType) ||
    (step === 2 && !!data.sector)      ||
    (step === 3 && !!data.budget);

  const goNext = () => { setDir(1);  setStep(s => Math.min(s + 1, 4)); };
  const goPrev = () => { setDir(-1); setStep(s => Math.max(s - 1, 1)); };
  const setField = (field: keyof WizardData) => (val: string) =>
    setData(d => ({ ...d, [field]: val }));

  // ── Styles ─────────────────────────────────────────────────────────────────
  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50";
  const labelCls = "block text-sm font-medium text-slate-300 mb-2";

  const slideVariants = {
    enter:  (d: number) => ({ x: d > 0 ? 52 : -52, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -52 : 52, opacity: 0 }),
  };

  const TOTAL = STEPS.length;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-white">

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-teal-500/10 bg-navy-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Web RG Est" width={48} height={48} className="rounded-lg" />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white tracking-wide">WEB RG EST</span>
                <span className="block text-xs text-gold-400 tracking-[0.2em] uppercase">Création Web</span>
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

      <main className="flex-1">

        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <section className="relative py-14 sm:py-20">
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
                  style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
                >
                  devis gratuit
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                2 minutes pour décrire votre projet, une réponse personnalisée sous 24 h.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />Réponse rapide
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />Devis gratuit
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400" />Sans engagement
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Wizard ──────────────────────────────────────────────────────────── */}
        <section className="relative pb-24 sm:pb-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >

              {/* ── Progress indicator ──────────────────────────────────────── */}
              <div className="mb-8">
                <div className="relative flex items-start justify-between">
                  {/* Track background */}
                  <div className="absolute top-[18px] left-[18px] right-[18px] h-px bg-navy-700" />
                  {/* Track fill */}
                  <div
                    className="absolute top-[18px] left-[18px] h-px bg-teal-500 transition-all duration-500 ease-out"
                    style={{ width: `calc((100% - 36px) * ${(step - 1) / (TOTAL - 1)})` }}
                  />
                  {STEPS.map((s) => (
                    <div key={s.n} className="relative z-10 flex flex-col items-center" style={{ flex: 1 }}>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                        step > s.n
                          ? "bg-teal-500 border-teal-500 text-white shadow-[0_0_14px_rgba(20,184,166,0.45)]"
                          : step === s.n
                          ? "bg-navy-900 border-teal-500 text-teal-400 shadow-[0_0_18px_rgba(20,184,166,0.28)]"
                          : "bg-navy-900 border-navy-600 text-slate-500"
                      }`}>
                        {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                      </div>
                      <span className={`mt-2 text-xs font-medium transition-colors ${
                        step >= s.n ? "text-slate-300" : "text-slate-600"
                      }`}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Wizard card ─────────────────────────────────────────────── */}
              <div className="rounded-2xl bg-navy-900/40 border border-navy-700/50 overflow-hidden">

                {/* Step header */}
                <div className="px-6 sm:px-8 pt-7 pb-1 border-b border-navy-700/40">
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                      key={`hdr-${step}`}
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-400/70 mb-1">
                        Étape {step} sur {TOTAL}
                      </p>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white pb-4">
                        {STEP_TITLES[step - 1]}
                      </h2>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Step body */}
                <div className="px-6 sm:px-8 py-6 min-h-[280px]">
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                      key={`body-${step}`}
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <p className="text-sm text-slate-400 mb-5">{STEP_SUBS[step - 1]}</p>

                      {/* Step 1 — Type de projet */}
                      {step === 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {PROJECT_OPTIONS.map(o => (
                            <OptionCard
                              key={o.value}
                              label={o.label}
                              desc={o.desc}
                              Icon={o.Icon}
                              selected={data.projectType === o.value}
                              onClick={() => setField("projectType")(o.value)}
                            />
                          ))}
                        </div>
                      )}

                      {/* Step 2 — Secteur */}
                      {step === 2 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SECTOR_OPTIONS.map(o => (
                            <OptionCard
                              key={o.value}
                              label={o.label}
                              desc={o.desc}
                              Icon={o.Icon}
                              selected={data.sector === o.value}
                              onClick={() => setField("sector")(o.value)}
                            />
                          ))}
                        </div>
                      )}

                      {/* Step 3 — Budget */}
                      {step === 3 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {BUDGET_OPTIONS.map(o => (
                            <BudgetCard
                              key={o.value}
                              label={o.label}
                              desc={o.desc}
                              selected={data.budget === o.value}
                              onClick={() => setField("budget")(o.value)}
                            />
                          ))}
                        </div>
                      )}

                      {/* Step 4 — Coordonnées */}
                      {step === 4 && (
                        <>
                          {/* Recap chips */}
                          <div className="flex flex-wrap gap-2 mb-6 pb-5 border-b border-navy-700/50">
                            {[data.projectType, data.sector, data.budget].filter(Boolean).map((v) => (
                              <span
                                key={v}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20"
                              >
                                {v}
                              </span>
                            ))}
                          </div>

                          <form id="devis-form" onSubmit={handleSubmit} className="space-y-5">
                            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} className="opacity-0 h-0 w-0 overflow-hidden">
                              <label htmlFor="_gotcha">Ne pas remplir</label>
                              <input
                                id="_gotcha"
                                type="text"
                                name="_gotcha"
                                value={honeypot}
                                onChange={e => setHoneypot(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div>
                                <label className={labelCls}>Nom / Prénom *</label>
                                <input
                                  type="text"
                                  required
                                  value={data.name}
                                  onChange={e => setField("name")(e.target.value)}
                                  disabled={status === "submitting"}
                                  placeholder="Jean Dupont"
                                  className={inputCls}
                                />
                              </div>
                              <div>
                                <label className={labelCls}>Email *</label>
                                <input
                                  type="email"
                                  required
                                  value={data.email}
                                  onChange={e => setField("email")(e.target.value)}
                                  disabled={status === "submitting"}
                                  placeholder="jean@exemple.fr"
                                  className={inputCls}
                                />
                              </div>
                            </div>

                            <div>
                              <label className={labelCls}>Téléphone</label>
                              <input
                                type="tel"
                                value={data.phone}
                                onChange={e => setField("phone")(e.target.value)}
                                disabled={status === "submitting"}
                                placeholder="06 12 34 56 78"
                                className={inputCls}
                              />
                            </div>

                            <div>
                              <label className={labelCls}>Votre message *</label>
                              <textarea
                                required
                                rows={4}
                                value={data.message}
                                onChange={e => setField("message")(e.target.value)}
                                disabled={status === "submitting"}
                                placeholder="Décrivez votre projet, vos besoins et vos objectifs…"
                                className={`${inputCls} resize-none`}
                              />
                            </div>

                            <button
                              type="submit"
                              disabled={status === "submitting"}
                              className="w-full py-4 rounded-xl bg-teal-500 text-white font-bold text-base hover:bg-teal-400 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_12px_36px_rgba(20,184,166,0.25)]"
                            >
                              {status === "submitting" ? (
                                <><Loader2 className="w-5 h-5 animate-spin" />Envoi en cours…</>
                              ) : (
                                <><Send className="w-5 h-5" />Envoyer ma demande de devis</>
                              )}
                            </button>

                            {status === "error" && (
                              <div className="flex items-center gap-2 text-red-400 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                Une erreur est survenue. Réessayez ou écrivez à contact@webrgest.fr.
                              </div>
                            )}

                            <p className="text-xs text-slate-500 leading-relaxed">
                              En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour répondre à votre demande.{" "}
                              <a href="/politique-de-confidentialite" className="text-teal-400 hover:text-teal-300 underline">
                                Politique de confidentialité
                              </a>.
                            </p>
                          </form>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* ── Navigation bar ──────────────────────────────────────── */}
                <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-navy-700/40">
                  <button
                    type="button"
                    onClick={goPrev}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-navy-600 text-sm font-medium text-slate-400 hover:text-white hover:border-navy-500 transition-colors ${
                      step === 1 ? "invisible pointer-events-none" : ""
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Précédent
                  </button>

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canProceed}
                      className="flex items-center gap-2 px-7 py-2.5 rounded-xl bg-teal-500 text-white text-sm font-bold hover:bg-teal-400 transition-all duration-200 disabled:opacity-35 disabled:cursor-not-allowed shadow-[0_8px_24px_rgba(20,184,166,0.22)]"
                    >
                      Suivant
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    /* Spacer so Précédent stays left-aligned on step 4 */
                    <div />
                  )}
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-10 text-center">
                <p className="text-slate-400 text-sm">Vous souhaitez d&apos;abord découvrir mes services ?</p>
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

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-navy-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <a href="mailto:contact@webrgest.fr" className="hover:text-teal-400 transition-colors">
              contact@webrgest.fr
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link href="/" className="hover:text-teal-400 transition-colors">webrgest.fr</Link>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Web RG Est. Tous droits réservés.{" "}
            <a href="/mentions-legales" className="hover:text-teal-400 transition-colors">Mentions légales</a>
            {" | "}
            <a href="/politique-de-confidentialite" className="hover:text-teal-400 transition-colors">
              Politique de confidentialité
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
