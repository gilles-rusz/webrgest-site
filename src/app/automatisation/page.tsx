import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Link2, RefreshCw, Settings, Clock, ShieldCheck, ArrowRightLeft, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation avec n8n & IA | Web RG Est",
  description:
    "Automatisez vos tâches répétitives grâce à n8n et l'intelligence artificielle. Emails, formulaires, CRM, notifications — gagnez du temps et réduisez les erreurs. Devis gratuit.",
  keywords: [
    "automatisation n8n",
    "agent IA automatisation",
    "automatisation tâches entreprise",
    "n8n workflow",
    "automatisation PME",
    "automatisation Grand Est",
  ],
};

export default function AutomatisationPage() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-300">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(45, 212, 191, 0.1), transparent 25rem), radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.06), transparent 20rem)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <Link
            href="/"
            className="text-teal-400 hover:text-teal-300 transition-colors text-sm mb-8 inline-block"
          >
            &larr; Retour au site
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Automatisation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Et si vos tâches répétitives se faisaient{" "}
                <span
                  className="text-teal-400"
                  style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
                >
                  toutes seules
                </span>
                {" "}?
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Comprendre <strong className="text-teal-400">n8n</strong> et
                l&apos;automatisation en 5 points. Moins de tâches manuelles, moins
                d&apos;erreurs, plus de temps pour votre activité.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(45,212,191,0.25)]"
              >
                Demander un devis gratuit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/automatisation/slide-1-intro.png"
                alt="Automatisation avec n8n - WEB RG EST"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section: C'est quoi n8n */}
      <div className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/automatisation/slide-2-cest-quoi.png"
                alt="C'est quoi n8n - Explication visuelle"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-white mb-6">
                C&apos;est quoi{" "}
                <span className="text-teal-400">n8n</span> ?
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Un outil qui <strong className="text-white">automatise des actions</strong>{" "}
                entre vos applications. Il connecte vos outils, déclenche des
                actions automatiques et évite les tâches répétitives.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Link2,
                    title: "Connecte vos outils",
                    desc: "Formulaire, email, CRM, tableur, API...",
                  },
                  {
                    icon: Zap,
                    title: "Déclenche des actions",
                    desc: "Quand un événement se produit, le scénario démarre.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Évite les tâches répétitives",
                    desc: "Moins de copier-coller, moins d'oubli.",
                  },
                  {
                    icon: Settings,
                    title: "S'adapte à votre métier",
                    desc: "Chaque automatisation peut être personnalisée.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-navy-900/50 border border-navy-700/50"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Exemple concret */}
      <div className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Automatisation
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Exemple{" "}
              <span
                className="text-teal-400"
                style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
              >
                concret
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              Voici comment une automatisation peut fonctionner :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "1",
                title: "Formulaire reçu",
                desc: "Un prospect remplit un formulaire sur votre site.",
                color: "teal",
              },
              {
                step: "2",
                title: "Notification envoyée",
                desc: "Vous êtes alerté immédiatement.",
                color: "teal",
              },
              {
                step: "3",
                title: "Ajout au CRM",
                desc: "Le contact est enregistré automatiquement.",
                color: "teal",
              },
              {
                step: "4",
                title: "Email de confirmation",
                desc: "Le client reçoit un message sans attente.",
                color: "teal",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl bg-navy-900/50 border border-teal-500/15 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mx-auto mb-4 text-teal-400 font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
                {i < 3 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-teal-500/40 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-300">
              Tout cela <strong className="text-teal-400">sans intervention manuelle</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Pourquoi automatiser */}
      <div className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Pourquoi{" "}
                <span
                  className="text-teal-400"
                  style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
                >
                  automatiser
                </span>
                {" "}?
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                L&apos;automatisation vous aide à vous concentrer sur l&apos;essentiel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Clock,
                    title: "Gagner du temps",
                    desc: "Moins d'actions manuelles au quotidien.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Réduire les erreurs",
                    desc: "Les informations circulent automatiquement.",
                  },
                  {
                    icon: ArrowRightLeft,
                    title: "Être plus réactif",
                    desc: "Vos clients reçoivent une réponse plus vite.",
                  },
                  {
                    icon: Users,
                    title: "Mieux suivre vos contacts",
                    desc: "Chaque demande est traitée plus facilement.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-navy-900/50 border border-navy-700/50 hover:border-teal-500/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Image
                src="/automatisation/slide-4-pourquoi.png"
                alt="Pourquoi automatiser - Avantages"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Par où commencer */}
      <div className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/automatisation/slide-5-commencer.png"
                alt="Par où commencer avec l'automatisation"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Par où{" "}
                <span
                  className="text-teal-400"
                  style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
                >
                  commencer
                </span>
                {" "}?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Identifiez une tâche répétitive",
                    desc: "Emails, relances, saisie de données, notifications...",
                  },
                  {
                    step: "02",
                    title: "Mesurez le temps perdu",
                    desc: "Si vous la faites souvent, elle peut sûrement être automatisée.",
                  },
                  {
                    step: "03",
                    title: "Mettez en place un workflow utile",
                    desc: "Simple, fiable et adapté à votre activité.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-navy-900/50 border border-navy-700/50"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration robot + CTA */}
      <div className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                <span className="text-white">WEB RG EST </span>
                <span
                  className="text-teal-400"
                  style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}
                >
                  vous accompagne
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Pour imaginer et mettre en place vos automatisations avec n8n.
                Emails, formulaires, CRM, notifications... gagnez du temps et
                réduisez les erreurs.
              </p>
              <div className="p-5 rounded-xl bg-navy-900/50 border border-teal-500/15 mb-8">
                <h3 className="font-bold text-white mb-3">
                  Offre Automatisation — à partir de 190€
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    Audit de vos process actuels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    Création de workflows n8n
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    Intégration d&apos;agents IA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    Formation &amp; documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span>
                    Support 30 jours inclus
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(45,212,191,0.25)]"
                >
                  Discutons de votre projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#tarifs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-navy-600 text-slate-300 font-semibold hover:border-teal-500/50 hover:text-teal-400 transition-colors"
                >
                  Voir tous les tarifs
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/automatisation/illustration-robot.png"
                alt="Automatisation IA - Robot assistant WEB RG EST"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="py-8 border-t border-white/5 text-center">
        <Link
          href="/"
          className="text-teal-400 hover:text-teal-300 transition-colors text-sm"
        >
          &larr; Retour au site principal
        </Link>
      </div>
    </div>
  );
}
