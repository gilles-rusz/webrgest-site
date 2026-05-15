import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO local à Metz et Grand Est : apparaître en premier sur Google | Web RG Est",
  description:
    "Guide complet du référencement local à Metz, Thionville, Nancy et dans le Grand Est : Google Business Profile, mots-clés locaux, avis clients et citations pour dominer les résultats Google.",
  keywords: [
    "SEO local Metz",
    "référencement local Grand Est",
    "Google Business Profile Metz",
    "apparaître premier Google artisan",
    "SEO local artisan",
    "référencement local Nancy Thionville",
  ],
  alternates: {
    canonical: "https://webrgest.fr/blog/seo-local-google-metz",
  },
  openGraph: {
    title: "SEO local à Metz et dans le Grand Est : comment apparaître en premier sur Google",
    description:
      "Google Business Profile, mots-clés locaux, avis clients... Le guide complet pour dominer les résultats de recherche dans votre zone géographique.",
    type: "article",
    locale: "fr_FR",
    publishedTime: "2025-05-08",
  },
};

export default function ArticleSeoLocalMetz() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SEO local à Metz et dans le Grand Est : comment apparaître en premier sur Google",
    "description":
      "Guide complet du référencement local à Metz et dans le Grand Est : Google Business Profile, mots-clés locaux, avis clients et citations.",
    "datePublished": "2025-05-08",
    "dateModified": "2025-05-08",
    "url": "https://webrgest.fr/blog/seo-local-google-metz",
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
      "@id": "https://webrgest.fr/blog/seo-local-google-metz",
    },
    "about": {
      "@type": "Thing",
      "name": "SEO local",
      "description": "Référencement naturel local pour les entreprises de Metz et du Grand Est",
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

          <span className="inline-block rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300 mb-4">
            SEO & Référencement
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            SEO local à Metz et dans le Grand Est : comment apparaître en premier sur Google
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-10 border-b border-navy-700/50 pb-8">
            <span>8 mai 2025</span>
            <span>·</span>
            <span>9 min de lecture</span>
            <span>·</span>
            <span>Par Gilles Ruszczycki</span>
          </div>

          <div className="space-y-10 text-sm leading-relaxed">
            <p className="text-base text-slate-300 leading-relaxed">
              Quand quelqu&apos;un à Metz tape &ldquo;plombier urgence Metz&rdquo; ou &ldquo;électricien Thionville pas cher&rdquo; sur Google, les 3 premiers résultats captent <strong className="text-white">plus de 50% des clics</strong>. Si vous n&apos;y êtes pas, vos concurrents prennent vos clients. Le SEO local, c&apos;est précisément ce qui vous permet de figurer dans ces résultats — et ça ne s&apos;improvise pas.
            </p>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                Qu&apos;est-ce que le référencement local ?
              </h2>
              <p className="mb-4">
                Le SEO local regroupe toutes les actions qui améliorent votre visibilité sur Google pour des recherches géolocalisées. Contrairement au SEO classique (national ou global), l&apos;objectif est d&apos;apparaître dans les résultats de votre zone géographique : Metz, Thionville, Nancy, Forbach, ou n&apos;importe quelle ville du Grand Est où vous intervenez.
              </p>
              <p>
                Il y a deux types de résultats locaux sur Google : le <strong className="text-white">&ldquo;Pack Local&rdquo;</strong> (les 3 entreprises affichées sur une carte en haut des résultats) et les résultats organiques classiques. L&apos;idéal : apparaître dans les deux.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                1. Google Business Profile : votre premier levier
              </h2>
              <p className="mb-4">
                Votre fiche <strong className="text-white">Google Business Profile</strong> (ex-Google My Business) est la base du SEO local. C&apos;est elle qui apparaît dans le pack local et sur Google Maps. Beaucoup d&apos;entreprises la créent mais ne l&apos;optimisent pas — c&apos;est une erreur.
              </p>
              <div className="rounded-xl p-5 bg-navy-900/40 border border-navy-700/50">
                <p className="text-xs font-semibold text-slate-300 mb-3">Checklist d&apos;optimisation Google Business</p>
                <ul className="text-xs text-slate-400 space-y-1.5">
                  {[
                    "Catégorie principale correctement choisie (ex: \"Plombier\", \"Électricien\")",
                    "Adresse et zone de service renseignées avec précision",
                    "Numéro de téléphone et site web à jour",
                    "Horaires d'ouverture complets et corrects",
                    "Description de 750 caractères avec mots-clés locaux",
                    "Photos de qualité de vos réalisations (10 minimum)",
                    "Posts réguliers (actualités, offres, chantiers récents)",
                    "Réponses à tous les avis clients",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                2. Optimiser votre site pour le SEO local
              </h2>
              <p className="mb-4">
                Votre site web est le deuxième pilier. Sans optimisation locale, même un beau site restera invisible. Voici ce qui compte vraiment :
              </p>
              <ul className="list-disc list-inside space-y-3 text-slate-400">
                <li>
                  <strong className="text-white">Balises titre avec ville</strong> — chaque page doit avoir un titre qui inclut votre métier et votre ville : &ldquo;Plombier à Metz | Intervention rapide — Nom Entreprise&rdquo;
                </li>
                <li>
                  <strong className="text-white">Zones d&apos;intervention détaillées</strong> — créez une page ou une section qui liste toutes les villes où vous intervenez
                </li>
                <li>
                  <strong className="text-white">Contenu local</strong> — mentionnez Metz, les quartiers, les villes proches dans vos textes de façon naturelle
                </li>
                <li>
                  <strong className="text-white">Schema.org LocalBusiness</strong> — un code technique invisible que Google lit pour comprendre que vous êtes une entreprise locale
                </li>
                <li>
                  <strong className="text-white">Page de contact avec adresse</strong> — votre adresse complète, écrite en texte (pas uniquement dans une image ou une carte)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                3. Les citations locales
              </h2>
              <p className="mb-4">
                Une &ldquo;citation locale&rdquo;, c&apos;est toute mention de votre nom d&apos;entreprise, adresse et téléphone sur des sites tiers. Plus vous en avez sur des annuaires de qualité, plus Google vous considère comme une entreprise locale légitime.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  "PagesJaunes.fr",
                  "Yelp France",
                  "Kompass",
                  "Societe.com",
                  "Hotfrog",
                  "Alignable",
                  "Cylex France",
                  "Europages",
                  "Annuaire.com",
                ].map((site) => (
                  <div
                    key={site}
                    className="rounded-lg px-3 py-2 bg-navy-900/40 border border-navy-700/50 text-slate-400 text-center"
                  >
                    {site}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Important : votre nom, adresse et téléphone doivent être <strong className="text-slate-400">rigoureusement identiques</strong> sur tous ces annuaires et sur votre site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                4. Les avis clients Google : un signal de confiance majeur
              </h2>
              <p className="mb-4">
                Google prend en compte le <strong className="text-white">nombre d&apos;avis, leur note moyenne, et leur régularité</strong> pour classer les entreprises dans le pack local. Une entreprise avec 50 avis à 4,8 étoiles battra presque toujours une entreprise sans avis, même si cette dernière est plus ancienne.
              </p>
              <p className="mb-4">
                La stratégie la plus simple : après chaque chantier terminé à la satisfaction du client, envoyez-lui un lien direct vers votre fiche Google pour laisser un avis. Ce lien, vous pouvez le retrouver dans votre Google Business Profile.
              </p>
              <div className="rounded-lg p-4 bg-teal-500/10 border border-teal-500/30 text-xs">
                <p className="text-teal-300 font-semibold mb-1">Astuce automatisation</p>
                <p className="text-slate-300">
                  Avec N8N, vous pouvez automatiser l&apos;envoi de cette demande d&apos;avis 48h après chaque intervention. Résultat : vous collectez des avis régulièrement, sans y penser.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">
                5. Mesurer vos résultats
              </h2>
              <p className="mb-4">
                Le SEO local ne donne pas de résultats immédiats, mais en 3 à 6 mois avec un travail sérieux, vous devriez voir une amélioration mesurable. Voici comment suivre vos progrès :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <strong className="text-white">Google Search Console</strong> (gratuit) — pour voir les requêtes qui génèrent des impressions et des clics
                </li>
                <li>
                  <strong className="text-white">Tableau de bord Google Business</strong> — pour suivre les vues de fiche, appels téléphoniques et demandes d&apos;itinéraire
                </li>
                <li>
                  <strong className="text-white">Google Analytics</strong> — pour analyser d&apos;où viennent vos visiteurs et quelles pages convertissent
                </li>
              </ul>
              <p className="mt-4">
                Un indicateur simple à suivre : chaque mois, tapez &ldquo;[votre métier] [votre ville]&rdquo; dans Google en navigation privée. Notez votre position. Si elle progresse, vous avancez dans la bonne direction.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl p-8 bg-navy-900/40 border border-teal-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Dominez les résultats Google dans votre zone
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Je crée ou optimise votre site avec un SEO local intégré dès la conception, pour que vos clients vous trouvent à Metz, Thionville, Nancy et dans tout le Grand Est.
            </p>
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-7 py-3.5 text-sm font-black text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
            >
              Améliorer mon référencement local
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
