"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trees, HeartHandshake, Languages, ShieldCheck, ClipboardList, AppWindow, KeyRound } from "lucide-react";
import Link from "next/link";

const demos = [
  {
    title: "Oli'Wood",
    subtitle: "Artisan menuisier · Structures bois",
    type: "Site Vitrine",
    description:
      "Site complet pour un artisan menuisier du Jura. Galerie de réalisations, demande de devis en ligne et back-office sur mesure pour gérer les photos et les demandes.",
    features: ["Galerie de réalisations", "Demande de devis", "Back-office sur mesure", "Notifications mobiles", "Design responsive"],
    url: "https://oliwood-jura.fr",
    icon: Trees,
    image: "/demos/oliwood-jura.jpg",
    internal: false,
  },
  {
    title: "Les Capés du Bide",
    subtitle: "Soutien stomie & maladie de Crohn",
    type: "Site Communautaire",
    description:
      "Site d'entraide en style bande dessinée pour les personnes stomisées ou atteintes de la maladie de Crohn et leurs proches. Épisodes illustrés pour comprendre la maladie, journal, espace questions et soutien.",
    features: ["Design bande dessinée", "Épisodes illustrés", "Journal", "Formulaire de questions", "Design responsive"],
    url: "https://burovia.eu",
    icon: HeartHandshake,
    image: "/demos/capes-du-bide.jpg",
    internal: false,
  },
];

const apps = [
  {
    title: "Web RG Est / Traduction",
    description:
      "Assistant de traduction pour le service après-vente : écrire ou dicter en français, envoyer dans la langue du client, comprendre les messages reçus.",
    access: "Code RG2026",
    url: "https://webrgest-traduction.vercel.app",
    icon: Languages,
    image: "/demos/app-traduction.jpg",
  },
  {
    title: "Web RG Est / Habilitations",
    description:
      "Suivi des habilitations par opérateur et par poste, audits et papiers signés, planning de rotation généré selon les personnes présentes.",
    access: "Code RG2026",
    url: "https://webrgest-habilitations.vercel.app",
    icon: ShieldCheck,
    image: "/demos/app-habilitations.png",
  },
  {
    title: "Web RG Est / Logistique",
    description:
      "Le rituel terrain Lean sur le téléphone : tableau kanban, rituel SQCDP de 5 minutes, plan d'actions et KPI automatiques.",
    access: "Accès libre",
    url: "https://webrgest-logistique.vercel.app",
    icon: ClipboardList,
    image: "/demos/app-logistique.jpg",
  },
];

export default function Demos() {
  return (
    <section id="realisations" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#0c1220]" />
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 60% 20%, rgba(45, 212, 191, 0.05), transparent 60%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mes dernières{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              réalisations
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Ces démonstrations montrent le type de site que je peux concevoir pour votre activité.
            Chaque projet est unique, responsive et optimisé.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-navy-900/40 border border-navy-700/50 hover:border-teal-500/30 transition-colors duration-200"
              >
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center overflow-hidden">
                  {demo.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={demo.image} alt={demo.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-navy-900/30" />
                    </>
                  ) : (
                    <Icon className="w-16 h-16 text-teal-400/30" />
                  )}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {demo.type}
                    </span>
                    {demo.internal ? (
                      <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-gold-400/10 text-gold-400 border border-gold-400/20">
                        Démo fictive
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Site en ligne
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    {demo.internal ? (
                      <Link
                        href={demo.url}
                        className="w-10 h-10 rounded-lg bg-navy-800/80 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-navy-800/80 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {demo.title}
                      </h3>
                      <span className="text-sm text-slate-400">
                        {demo.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-5 leading-relaxed">
                    {demo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {demo.features.map((feature, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-navy-800 text-slate-300 border border-navy-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {demo.internal ? (
                    <Link
                      href={demo.url}
                      className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                    >
                      Voir le site
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                    >
                      Voir le site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl bg-navy-900/40 border border-navy-700/50 p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <AppWindow className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-white">Applications d&apos;entreprise</h3>
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Démo en ligne
                  </span>
                </div>
                <span className="text-sm text-slate-400">Outils métier conçus par Web RG Est, à tester sur ordinateur ou smartphone</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-lg bg-gold-400/10 border border-gold-400/20 text-gold-400 text-sm font-semibold">
              <KeyRound className="w-4 h-4" />
              Code d&apos;accès démo : RG2026 (24 h)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apps.map((app) => {
              const AppIcon = app.icon;
              return (
                <div key={app.title} className="rounded-xl overflow-hidden bg-navy-800/50 border border-navy-700 flex flex-col">
                  <div className="relative h-36 bg-navy-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={app.image} alt={app.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AppIcon className="w-4 h-4 text-teal-400" />
                      <h4 className="font-bold text-white">{app.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{app.description}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-medium bg-navy-800 text-slate-300 border border-navy-700">
                        {app.access}
                      </span>
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                      >
                        Tester
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
