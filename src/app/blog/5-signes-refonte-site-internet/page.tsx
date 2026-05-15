import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "5 signes qu'il faut refaire votre site internet | Web RG Est",
  description:
    "Design daté, non responsive, lent, invisible sur Google... Ces 5 signaux indiquent clairement qu'une refonte de site s'impose. Découvrez ce qu'elle peut changer pour vous.",
  keywords: [
    "signes refonte site internet",
    "refaire son site web",
    "site internet obsolète",
    "quand refaire son site",
    "moderniser site web",
    "refonte site artisan",
  ],
  alternates: {
    canonical: "https://webrgest.fr/blog/5-signes-refonte-site-internet",
  },
  openGraph: {
    title: "5 signes qu'il est temps de refaire votre site internet",
    description:
      "Design daté, non responsive, lent, invisible sur Google... Ces 5 signaux indiquent clairement qu'une refonte s'impose.",
    type: "article",
    locale: "fr_FR",
    publishedTime: "2025-04-02",
  },
};

export default function ArticleSignesRefonte() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "5 signes qu'il est temps de refaire votre site internet",
    "description":
      "Design daté, non responsive, lent, invisible sur Google... Ces 5 signaux indiquent clairement qu'une refonte de site s'impose.",
    "datePublished": "2025-04-02",
    "dateModified": "2025-04-02",
    "url": "https://webrgest.fr/blog/5-signes-refonte-site-internet",
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
      "@id": "https://webrgest.fr/blog/5-signes-refonte-site-internet",
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

          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300 mb-4">
            Refonte
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            5 signes qu&apos;il est temps de refaire votre site internet
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-10 border-b border-navy-700/50 pb-8">
            <span>2 avril 2025</span>
            <span>·</span>
            <span>5 min de lecture</span>
            <span>·</span>
            <span>Par Gilles Ruszczycki</span>
          </div>

          <div className="space-y-10 text-sm leading-relaxed">
            <p className="text-base text-slate-300 leading-relaxed">
              Votre site web a été créé il y a quelques années. À l&apos;époque, il vous semblait bien. Mais le web évolue vite, les standards changent, et ce qui était acceptable en 2018 peut aujourd&apos;hui vous faire <strong className="text-white">perdre des clients sans que vous le sachiez</strong>. Voici les 5 signaux d&apos;alarme à ne pas ignorer.
            </p>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 font-black text-lg shrink-0">
                  1
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Votre design fait daté
                  </h2>
                  <p>
                    Si vos visiteurs regardent votre site et pensent instinctivement <em className="text-slate-300">&ldquo;ce site fait années 2010&rdquo;</em>, c&apos;est un problème. <strong className="text-white">La perception visuelle impacte directement la confiance</strong>. Un site vieillissant envoie un signal négatif : est-ce que cette entreprise est encore active ? Est-elle sérieuse ?
                  </p>
                </div>
              </div>
              <div className="ml-14 rounded-lg p-3 bg-navy-900/40 border border-navy-700/50 text-xs text-slate-400">
                <strong className="text-slate-300">Signes concrets :</strong> fond blanc avec texte noir sans aucune mise en forme, images de stock génériques des années 2000, polices Times New Roman ou Comic Sans, menus déroulants complexes.
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 font-black text-lg shrink-0">
                  2
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Votre site n&apos;est pas adapté au mobile
                  </h2>
                  <p className="mb-3">
                    Les sites créés avant 2015 n&apos;étaient souvent pas &ldquo;responsive&rdquo; — c&apos;est-à-dire qu&apos;ils ne s&apos;adaptent pas à la taille de l&apos;écran. Résultat : sur smartphone, les textes sont minuscules, les boutons sont impossibles à cliquer, et l&apos;utilisateur doit zoomer en permanence.
                  </p>
                  <p>
                    Or depuis 2021, <strong className="text-white">Google pénalise les sites non-responsives dans ses résultats de recherche</strong>. Un site non adapté au mobile, c&apos;est une double peine : mauvaise expérience utilisateur et mauvais référencement.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 font-black text-lg shrink-0">
                  3
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Votre site est lent à charger
                  </h2>
                  <p className="mb-3">
                    Les vieux sites WordPress avec des dizaines de plugins, ou les sites avec des images non compressées, peuvent mettre 8 à 15 secondes à charger. C&apos;est une éternité. <strong className="text-white">Chaque seconde supplémentaire fait partir 10% des visiteurs.</strong>
                  </p>
                  <p>
                    Les technologies modernes (Next.js, Astro, hébergement optimisé) permettent d&apos;atteindre des temps de chargement inférieurs à 1 seconde — ce qui améliore à la fois l&apos;expérience utilisateur et votre positionnement sur Google.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 font-black text-lg shrink-0">
                  4
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Vous n&apos;apparaissez pas sur Google
                  </h2>
                  <p className="mb-3">
                    Tapez le nom de votre métier + votre ville dans Google. Apparaissez-vous dans les 5 premiers résultats ? Si non, vos concurrents captent les clients qui vous cherchent.
                  </p>
                  <p>
                    Un site non optimisé pour le SEO (pas de balises, contenus pauvres, pas de mentions de zone géographique) reste invisible même s&apos;il est beau. La refonte est l&apos;occasion de <strong className="text-white">reconstruire sur des bases SEO solides</strong> dès le départ.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 font-black text-lg shrink-0">
                  5
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    Votre site ne génère aucun contact
                  </h2>
                  <p className="mb-3">
                    C&apos;est le signe le plus parlant. Si votre site reçoit des visites (vérifiez dans Google Analytics ou Search Console) mais ne génère pas d&apos;appels ni d&apos;emails, c&apos;est qu&apos;il y a un problème de conversion.
                  </p>
                  <p>
                    Absence de formulaire de contact visible, numéro de téléphone non cliquable, textes qui ne donnent pas envie d&apos;appeler... <strong className="text-white">Un bon site doit être conçu pour convertir, pas seulement pour informer.</strong>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Vous reconnaissez votre site dans cette liste ?
              </h2>
              <p className="mb-4">
                Si vous cochez 2 signes ou plus, une refonte vaut très probablement l&apos;investissement. Un nouveau site bien conçu peut <strong className="text-white">multiplier par 3 à 5 le nombre de contacts générés</strong> par rapport à un ancien site qui sous-performe.
              </p>
              <p>
                La bonne nouvelle : contrairement à ce qu&apos;on imagine souvent, une refonte ne signifie pas partir de zéro. On garde votre contenu existant, vos textes, vos photos — et on reconstruit autour en optimisant tout ce qui pose problème.
              </p>
            </section>

            <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
              <h3 className="font-bold text-white mb-3 text-sm">Ce qu&apos;une refonte inclut chez Web RG Est</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  "Design moderne et sur mesure",
                  "100% responsive (mobile/tablette/desktop)",
                  "Optimisation de vitesse (score PageSpeed 90+)",
                  "SEO local intégré dès la conception",
                  "Migration de votre contenu actuel",
                  "Formation pour gérer votre site ensuite",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300">
                    <span className="text-teal-400 shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl p-8 bg-navy-900/40 border border-teal-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Prêt à moderniser votre site ?
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Audit gratuit de votre site actuel — je vous dis précisément ce qui pose problème et ce qu&apos;une refonte changerait pour vous. Réponse sous 24h.
            </p>
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-7 py-3.5 text-sm font-black text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
            >
              Demander un audit de mon site
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
