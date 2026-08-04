import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Combien coûte un site internet pour artisan ? | Web RG Est",
  description:
    "Budget, formules et ce qui est inclus ou non : le guide complet des tarifs d'un site web professionnel pour artisan en 2025. Plombier, électricien, menuisier...",
  keywords: [
    "prix site internet artisan",
    "coût site web artisan",
    "tarif site vitrine artisan",
    "combien coûte un site internet",
    "budget site web 2025",
    "création site artisan prix",
  ],
  alternates: {
    canonical: "https://webrgest.fr/blog/combien-coute-un-site-internet-pour-artisan",
  },
  openGraph: {
    title: "Combien coûte vraiment un site internet pour un artisan ?",
    description:
      "Budget, formules et ce qui est inclus ou non : le guide complet des tarifs d'un site web professionnel pour artisan en 2025.",
    type: "article",
    locale: "fr_FR",
    publishedTime: "2025-01-15",
  },
};

export default function ArticleCoutSiteArtisan() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Combien coûte vraiment un site internet pour un artisan ?",
    "description":
      "Budget, formules et ce qui est inclus ou non : le guide complet des tarifs d'un site web professionnel pour artisan en 2025.",
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "url": "https://webrgest.fr/blog/combien-coute-un-site-internet-pour-artisan",
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
      "@id": "https://webrgest.fr/blog/combien-coute-un-site-internet-pour-artisan",
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

          <span className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300 mb-4">
            Création web
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Combien coûte vraiment un site internet pour un artisan ?
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-10 border-b border-navy-700/50 pb-8">
            <span>15 janvier 2025</span>
            <span>·</span>
            <span>6 min de lecture</span>
            <span>·</span>
            <span>Par Gilles Ruszczycki</span>
          </div>

          <div className="space-y-10 text-sm leading-relaxed">
            <p className="text-base text-slate-300 leading-relaxed">
              Plombier, électricien, menuisier, peintre ou couvreur : l&apos;une des premières questions que vous posez quand vous envisagez un site web, c&apos;est : <strong className="text-white">combien ça coûte ?</strong> Et la réponse honnête, c&apos;est : ça dépend. Mais dans cet article, on va démystifier les prix et vous donner des repères concrets.
            </p>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Pourquoi les prix varient autant d&apos;un prestataire à l&apos;autre ?
              </h2>
              <p className="mb-4">
                Un site internet peut coûter 200€ comme 5 000€. Cette fourchette s&apos;explique par plusieurs facteurs :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong className="text-white">Le type de prestataire</strong> : agence, freelance, plateforme DIY (Wix, Squarespace) ou développeur spécialisé
                </li>
                <li>
                  <strong className="text-white">Le nombre de pages</strong> : un site 3 pages ne coûte pas le même prix qu&apos;un site 15 pages avec blog et e-commerce
                </li>
                <li>
                  <strong className="text-white">Le niveau de personnalisation</strong> : template modifié ou design sur mesure
                </li>
                <li>
                  <strong className="text-white">Les fonctionnalités</strong> : formulaire de contact simple, galerie photo, système de réservation en ligne...
                </li>
                <li>
                  <strong className="text-white">L&apos;optimisation SEO</strong> : incluse ou non, basique ou avancée
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Les différentes formules et leurs tarifs
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white">Les plateformes DIY (Wix, Squarespace)</h3>
                    <span className="text-gold-400 font-bold text-sm">15 - 50€/mois</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">
                    Vous faites tout vous-même avec des templates prêts à l&apos;emploi.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-300 mb-1">Avantages</p>
                      <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                        <li>Coût mensuel faible</li>
                        <li>Simple à prendre en main</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-300 mb-1">Inconvénients</p>
                      <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                        <li>Temps important à y consacrer</li>
                        <li>SEO très limité</li>
                        <li>Résultat souvent peu professionnel</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white">Automatisation</h3>
                    <span className="text-gold-400 font-bold text-sm">À partir de 190€</span>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Gagner du temps sur vos tâches répétitives : emails, notifications, formulaires, connexions entre outils.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-teal-500/10 border border-teal-500/30">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white">Site Vitrine</h3>
                    <span className="text-teal-400 font-bold text-sm">À partir de 590€</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">
                    Un site professionnel pour présenter votre entreprise, rassurer vos visiteurs et leur donner envie de vous contacter. SEO de base inclus.
                  </p>
                  <p className="text-xs text-teal-300 font-semibold">Le plus demandé</p>
                </div>

                <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white">E-commerce</h3>
                    <span className="text-gold-400 font-bold text-sm">À partir de 1 490€</span>
                  </div>
                  <p className="text-slate-400 text-xs">
                    Boutique en ligne professionnelle avec catalogue produits, panier et paiement sécurisé.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Ce qui est inclus (et ce qui ne l&apos;est pas)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg p-4 bg-teal-500/10 border border-teal-500/30">
                  <h4 className="font-semibold text-teal-400 mb-2 text-sm">Généralement inclus</h4>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li>Design sur mesure responsive</li>
                    <li>Formulaire de contact</li>
                    <li>Optimisation SEO de base</li>
                    <li>Mise en ligne</li>
                    <li>Formation à la mise à jour</li>
                  </ul>
                </div>
                <div className="rounded-lg p-4 bg-navy-900/40 border border-navy-700/50">
                  <h4 className="font-semibold text-slate-300 mb-2 text-sm">Souvent en supplément</h4>
                  <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                    <li>Hébergement (~10 - 15€/mois)</li>
                    <li>Nom de domaine (~15€/an)</li>
                    <li>Maintenance mensuelle</li>
                    <li>Contenu rédactionnel</li>
                    <li>Photos professionnelles</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Les fausses économies à éviter
              </h2>
              <p className="mb-4">
                Certains artisans sont tentés par des offres à 99€ ou par des plateformes gratuites. Attention aux pièges :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong className="text-white">Les sites gratuits</strong> affichent souvent la pub du prestataire et ne se référencent presque pas sur Google
                </li>
                <li>
                  <strong className="text-white">Les offres très basses</strong> utilisent des templates génériques mal optimisés, ou sous-traitent à l&apos;étranger sans suivi
                </li>
                <li>
                  <strong className="text-white">Sans SEO local</strong>, votre site sera invisible sur Google, et un site invisible ne sert à rien
                </li>
                <li>
                  <strong className="text-white">Sans formation</strong>, vous dépendrez toujours de quelqu&apos;un pour la moindre modification
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Comment faire le bon choix ?
              </h2>
              <p className="mb-4">
                Voici les questions à poser à tout prestataire avant de signer :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-400">
                <li>Est-ce que le site sera optimisé pour Google localement dans ma zone ?</li>
                <li>Est-ce que je serai propriétaire du site et du nom de domaine ?</li>
                <li>Y a-t-il une formation pour que je puisse faire les mises à jour moi-même ?</li>
                <li>Quel est le délai de livraison et que se passe-t-il si ce n&apos;est pas respecté ?</li>
                <li>Le site sera-t-il bien affiché sur mobile (responsive design) ?</li>
              </ol>
              <p className="mt-4">
                Un bon site web d&apos;artisan est un investissement qui se rentabilise rapidement : <strong className="text-white">un seul chantier supplémentaire par mois</strong> grâce à votre site couvre largement son coût annuel.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl p-8 bg-navy-900/40 border border-teal-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Obtenez un devis précis pour votre site
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Chaque projet est unique. Décrivez-moi votre activité et vos besoins, je vous réponds sous 24h avec une estimation détaillée, sans engagement.
            </p>
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-7 py-3.5 text-sm font-black text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
            >
              Demander un devis gratuit
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
