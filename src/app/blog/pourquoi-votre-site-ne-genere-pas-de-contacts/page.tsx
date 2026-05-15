import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pourquoi votre site ne génère pas de contacts | Web RG Est",
  description:
    "Votre site web existe mais votre téléphone reste silencieux ? Découvrez les 5 raisons les plus courantes et les solutions concrètes pour générer plus de contacts.",
  keywords: [
    "site web sans contacts",
    "site internet pas de clients",
    "améliorer conversion site web",
    "site web qui génère des contacts",
    "optimiser site artisan",
    "appels à l'action site web",
  ],
  alternates: {
    canonical: "https://webrgest.fr/blog/pourquoi-votre-site-ne-genere-pas-de-contacts",
  },
  openGraph: {
    title: "Pourquoi votre site ne génère pas de contacts (et comment y remédier)",
    description:
      "Votre site web existe mais votre téléphone reste silencieux ? Découvrez les 5 raisons les plus courantes.",
    type: "article",
    locale: "fr_FR",
    publishedTime: "2025-02-10",
  },
};

export default function ArticleSiteNeGeneresPasContacts() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Pourquoi votre site ne génère pas de contacts (et comment y remédier)",
    "description":
      "Votre site web existe mais votre téléphone reste silencieux ? Découvrez les 5 raisons les plus courantes et les solutions concrètes.",
    "datePublished": "2025-02-10",
    "dateModified": "2025-02-10",
    "url": "https://webrgest.fr/blog/pourquoi-votre-site-ne-genere-pas-de-contacts",
    "author": {
      "@type": "Person",
      "name": "Gilles Ruszczycki",
      "url": "https://webrgest.fr/a-propos",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Web RG Est",
      "url": "https://webrgest.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webrgest.fr/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://webrgest.fr/blog/pourquoi-votre-site-ne-genere-pas-de-contacts",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-navy-950 text-slate-300">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <Link
            href="/blog"
            className="text-teal-400 hover:text-teal-300 transition-colors text-sm mb-8 inline-block"
          >
            ← Retour au blog
          </Link>

          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300 mb-4">
            Stratégie digitale
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Pourquoi votre site ne génère pas de contacts (et comment y remédier)
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-10 border-b border-navy-700/50 pb-8">
            <span>10 février 2025</span>
            <span>·</span>
            <span>7 min de lecture</span>
            <span>·</span>
            <span>Par Gilles Ruszczycki</span>
          </div>

          <div className="space-y-10 text-sm leading-relaxed">
            <p className="text-base text-slate-300 leading-relaxed">
              Vous avez investi dans un site web, mais votre téléphone reste silencieux et vos demandes de devis se font rares ? Vous n&apos;êtes pas seul. <strong className="text-white">La majorité des sites d&apos;artisans et de TPE ne convertissent pas</strong> — non pas parce que le site est moche, mais pour des raisons précises et corrigeables. Voici les 5 problèmes les plus fréquents.
            </p>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 font-black text-sm shrink-0">1</span>
                <h2 className="text-lg font-bold text-white">
                  Votre site n&apos;est pas optimisé pour mobile
                </h2>
              </div>
              <p className="mb-3">
                Aujourd&apos;hui, <strong className="text-white">plus de 65% des recherches locales se font sur smartphone</strong>. Si votre site s&apos;affiche mal sur mobile — textes trop petits, boutons trop rapprochés, images coupées — les visiteurs repartent aussitôt.
              </p>
              <div className="rounded-lg p-4 bg-navy-900/40 border border-navy-700/50">
                <p className="text-xs font-semibold text-slate-300 mb-2">Comment vérifier ?</p>
                <p className="text-xs text-slate-400">
                  Ouvrez votre site sur votre téléphone maintenant. Pouvez-vous lire facilement ? Le numéro de téléphone est-il cliquable ? Le formulaire est-il facile à remplir ? Si vous hésitez, vos visiteurs, eux, ne s&apos;embarrassent pas : ils ferment et appellent le concurrent.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 font-black text-sm shrink-0">2</span>
                <h2 className="text-lg font-bold text-white">
                  Votre site se charge trop lentement
                </h2>
              </div>
              <p className="mb-3">
                Google l&apos;a prouvé : <strong className="text-white">53% des visiteurs abandonnent un site qui met plus de 3 secondes à charger</strong>. Les sites WordPress surchargés de plugins, ou les sites avec des images non compressées, sont particulièrement touchés.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                <li>Images trop lourdes (photos de chantier non optimisées)</li>
                <li>Hébergement bas de gamme partagé avec des centaines de sites</li>
                <li>Trop de scripts et plugins inutiles</li>
                <li>Pas de mise en cache configurée</li>
              </ul>
              <p className="mt-3">
                Testez votre site sur <strong className="text-white">PageSpeed Insights</strong> (gratuit, par Google). Un score inférieur à 70 en mobile est un signal d&apos;alarme.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 font-black text-sm shrink-0">3</span>
                <h2 className="text-lg font-bold text-white">
                  Vos appels à l&apos;action ne sont pas clairs
                </h2>
              </div>
              <p className="mb-3">
                Un visiteur ne devrait jamais se demander <em className="text-slate-300">&ldquo;Qu&apos;est-ce que je dois faire maintenant ?&rdquo;</em>. Si votre numéro de téléphone est caché dans le pied de page, si le bouton de contact se fond dans la page, si vous n&apos;avez pas de formulaire de demande de devis évident — vous perdez des clients.
              </p>
              <div className="rounded-lg p-4 bg-teal-500/10 border border-teal-500/30">
                <p className="text-xs font-semibold text-teal-300 mb-2">Ce qui doit être visible immédiatement</p>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Votre numéro de téléphone cliquable en haut de page</li>
                  <li>Un bouton &ldquo;Demander un devis&rdquo; bien visible, en couleur</li>
                  <li>Un formulaire court sur chaque page (nom, email, message)</li>
                  <li>Votre zone d&apos;intervention clairement mentionnée</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 font-black text-sm shrink-0">4</span>
                <h2 className="text-lg font-bold text-white">
                  Votre contenu ne parle pas à vos clients
                </h2>
              </div>
              <p className="mb-3">
                Les textes génériques ne convertissent pas. &ldquo;Nous offrons des services de qualité depuis X années&rdquo; ne dit rien à un client potentiel. Ce qu&apos;il veut savoir, c&apos;est :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong className="text-white">Est-ce que vous intervenez dans ma ville ?</strong> Mentionnez vos zones d&apos;intervention explicitement
                </li>
                <li>
                  <strong className="text-white">Avez-vous déjà fait ce type de chantier ?</strong> Montrez des photos de réalisations similaires
                </li>
                <li>
                  <strong className="text-white">Pouvez-vous venir rapidement ?</strong> Indiquez vos délais d&apos;intervention
                </li>
                <li>
                  <strong className="text-white">Puis-je vous faire confiance ?</strong> Affichez des avis clients, certifications, années d&apos;expérience
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 font-black text-sm shrink-0">5</span>
                <h2 className="text-lg font-bold text-white">
                  Vous n&apos;êtes pas visible sur Google localement
                </h2>
              </div>
              <p className="mb-3">
                Avoir un site web ne suffit pas : encore faut-il qu&apos;on le trouve. Si vous n&apos;apparaissez pas quand quelqu&apos;un tape <em className="text-slate-300">&ldquo;plombier Metz urgence&rdquo;</em> ou <em className="text-slate-300">&ldquo;électricien Thionville&rdquo;</em>, votre site n&apos;existe pas pour lui.
              </p>
              <p>
                Le référencement local demande un travail spécifique : <strong className="text-white">Google Business Profile optimisé</strong>, mots-clés locaux dans les textes, balises titre et méta description soignées, et idéalement des <strong className="text-white">avis clients Google</strong> réguliers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Par où commencer ?
              </h2>
              <p>
                Si vous reconnaissez plusieurs de ces problèmes dans votre site actuel, la bonne nouvelle c&apos;est qu&apos;ils sont tous corrigeables. Parfois une simple refonte ou une optimisation technique suffit à <strong className="text-white">multiplier par 3 ou 4 le nombre de contacts</strong> générés. L&apos;important, c&apos;est d&apos;agir plutôt que de laisser un site sous-performant vous coûter des clients chaque jour.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl p-8 bg-navy-900/40 border border-teal-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Faites auditer votre site gratuitement
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              J&apos;analyse votre site actuel et vous dis précisément ce qui bloque vos conversions. Audit gratuit, sans engagement, réponse sous 24h.
            </p>
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-7 py-3.5 text-sm font-black text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
            >
              Demander un audit gratuit
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-navy-700/50">
            <Link
              href="/blog"
              className="text-teal-400 hover:text-teal-300 transition-colors text-sm"
            >
              ← Retour au blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
