import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog : conseils création web & SEO local | Web RG Est",
  description:
    "Conseils pratiques pour artisans et TPE/PME : création de site web, SEO local, automatisation, refonte... Lisez les guides de Web RG Est pour booster votre présence en ligne.",
  keywords: [
    "blog création web",
    "conseils site internet artisan",
    "SEO local Grand Est",
    "automatisation TPE PME",
    "refonte site internet",
    "blog Web RG Est",
  ],
  alternates: {
    canonical: "https://webrgest.fr/blog",
  },
  openGraph: {
    title: "Blog : conseils création web & SEO local | Web RG Est",
    description:
      "Conseils pratiques pour artisans et TPE/PME : création de site web, SEO local, automatisation, refonte...",
    type: "website",
    locale: "fr_FR",
  },
};

const articles = [
  {
    slug: "combien-coute-un-site-internet-pour-artisan",
    category: "Création web",
    title: "Combien coûte vraiment un site internet pour un artisan ?",
    excerpt:
      "Budget, options, ce qui est inclus ou non... On fait le point sur les tarifs d&apos;un site web professionnel pour les artisans en 2025.",
    date: "15 janvier 2025",
    readTime: "6 min",
  },
  {
    slug: "pourquoi-votre-site-ne-genere-pas-de-contacts",
    category: "Stratégie digitale",
    title: "Pourquoi votre site ne génère pas de contacts (et comment y remédier)",
    excerpt:
      "Vous avez un site web mais votre téléphone ne sonne pas ? Voici les 5 raisons les plus courantes et les solutions concrètes.",
    date: "10 février 2025",
    readTime: "7 min",
  },
  {
    slug: "automatisation-n8n-artisan-pme",
    category: "Automatisation",
    title: "Comment N8N peut transformer votre quotidien d'artisan ou de TPE/PME",
    excerpt:
      "Devis automatiques, relances clients, sync d&apos;agenda... Automatisez les tâches répétitives de votre entreprise sans coder.",
    date: "5 mars 2025",
    readTime: "8 min",
  },
  {
    slug: "5-signes-refonte-site-internet",
    category: "Refonte",
    title: "5 signes qu'il est temps de refaire votre site internet",
    excerpt:
      "Design daté, non responsive, lent... Ces signaux ne trompent pas. Découvrez quand une refonte s&apos;impose et ce qu&apos;elle change.",
    date: "2 avril 2025",
    readTime: "5 min",
  },
  {
    slug: "seo-local-google-metz",
    category: "SEO & Référencement",
    title: "SEO local à Metz et dans le Grand Est : comment apparaître en premier sur Google",
    excerpt:
      "Google Business Profile, mots-clés locaux, avis clients... Le guide complet pour dominer les résultats de recherche dans votre zone.",
    date: "8 mai 2025",
    readTime: "9 min",
  },
];

const categoryColors: Record<string, string> = {
  "Création web": "bg-teal-500/15 text-teal-300 border-teal-500/30",
  "Stratégie digitale": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Automatisation": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "Refonte": "bg-orange-500/15 text-orange-300 border-orange-500/30",
  "SEO & Référencement": "bg-green-500/15 text-green-300 border-green-500/30",
};

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Web RG Est",
    "url": "https://webrgest.fr/blog",
    "description": "Conseils pratiques pour artisans et TPE/PME sur la création web, le SEO local et l'automatisation.",
    "publisher": {
      "@type": "Organization",
      "name": "Web RG Est",
      "url": "https://webrgest.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webrgest.fr/logo.png",
      },
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
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(circle at 50% 0%, black 0%, transparent 70%)",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300 mb-6">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Conseils & astuces pour votre{" "}
              <span className="text-teal-400">présence en ligne</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-slate-400 leading-relaxed">
              Guides pratiques pour artisans, TPE et PME du Grand Est qui veulent un site web qui travaille vraiment pour eux.
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-700/60 bg-navy-900/40 p-6 hover:border-teal-500/30 hover:bg-navy-900/70 transition-all duration-300"
              >
                <span
                  className={`self-start mb-4 rounded-full border px-3 py-1 text-xs font-semibold ${
                    categoryColors[article.category] ??
                    "bg-slate-700/40 text-slate-300 border-slate-600/40"
                  }`}
                >
                  {article.category}
                </span>
                <h2 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-teal-300 transition-colors duration-200">
                  {article.title}
                </h2>
                <p
                  className="text-sm text-slate-400 leading-relaxed flex-1 mb-5"
                  dangerouslySetInnerHTML={{ __html: article.excerpt }}
                />
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-500">
                    {article.date} · {article.readTime} de lecture
                  </span>
                  <span className="text-teal-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                    Lire →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Besoin d&apos;un accompagnement personnalisé ?
            </h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Les articles donnent des pistes, mais chaque projet est unique. Obtenez un devis gratuit et des conseils adaptés à votre situation.
            </p>
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-7 py-3.5 text-sm font-black text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
