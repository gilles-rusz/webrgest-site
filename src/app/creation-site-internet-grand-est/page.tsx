import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création de site internet dans le Grand Est | Web RG Est",
  description:
    "Création de sites web professionnels pour artisans, indépendants et PME dans le Grand Est : Moselle, Meurthe-et-Moselle, Alsace, Lorraine. Devis gratuit.",
  keywords: [
    "création site internet Grand Est",
    "développeur web Grand Est",
    "site web Moselle",
    "site internet Lorraine",
    "création site web Alsace",
    "site web PME Grand Est",
  ],
};

export default function CreationSiteGrandEst() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          href="/"
          className="text-teal-400 hover:text-teal-300 transition-colors text-sm mb-8 inline-block"
        >
          &larr; Retour au site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Création de site internet dans le Grand Est
        </h1>

        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Vous êtes artisan, indépendant ou dirigeant de PME dans le Grand Est ?
          Je crée des sites web professionnels, modernes et pensés pour générer
          des contacts dans votre zone géographique.
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Un développeur web local, basé en Moselle
            </h2>
            <p>
              Basé à <strong className="text-white">Maizières-lès-Metz (57)</strong>,
              je travaille avec des entreprises de toute la région Grand Est :
              Moselle, Meurthe-et-Moselle, Meuse, Vosges, Bas-Rhin, Haut-Rhin.
              La proximité géographique permet des échanges plus simples et une
              meilleure compréhension de votre marché local.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Des sites pensés pour les entreprises locales
            </h2>
            <p className="mb-4">
              Chaque site que je crée est conçu pour répondre aux besoins
              spécifiques des entreprises du Grand Est :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-white">Référencement local</strong> —
                votre site apparaît quand on recherche vos services dans votre
                ville ou département
              </li>
              <li>
                <strong className="text-white">Site responsive</strong> — adapté
                à tous les écrans (mobile, tablette, desktop)
              </li>
              <li>
                <strong className="text-white">Vitesse optimisée</strong> — un
                site rapide, c&apos;est un meilleur classement Google et plus de
                visiteurs qui restent
              </li>
              <li>
                <strong className="text-white">Formulaire de contact</strong> —
                pour convertir vos visiteurs en prospects
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Mon approche : la rigueur industrielle au service du web
            </h2>
            <p>
              Avec <strong className="text-white">22 ans d&apos;expérience en management
              industriel chez Stellantis</strong> et un titre professionnel de
              développeur web, j&apos;apporte une approche unique : je comprends vos
              contraintes métier avant de proposer une solution technique.
              Pas de jargon inutile, pas de fonctionnalités superflues — juste
              un site efficace qui travaille pour votre activité.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Tarifs clairs et transparents
            </h2>
            <p className="mb-4">
              Des offres adaptées à chaque besoin et chaque budget :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-gold-400">Site Express</strong> — à
                partir de 490€
              </li>
              <li>
                <strong className="text-gold-400">Site Vitrine complet</strong>{" "}
                — à partir de 990€
              </li>
              <li>
                <strong className="text-gold-400">E-Commerce</strong> — à partir
                de 1 490€
              </li>
              <li>
                <strong className="text-gold-400">Application Web</strong> — à
                partir de 2 500€
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Zones d&apos;intervention
            </h2>
            <p>
              J&apos;interviens dans tout le Grand Est, notamment : Metz,
              Nancy, Strasbourg, Mulhouse, Thionville, Épinal, Bar-le-Duc,
              Colmar, Haguenau, Sarreguemines, Forbach, et toutes les communes
              environnantes. Le travail se fait principalement à distance, avec
              des rendez-vous en visio ou en personne selon votre préférence.
            </p>
          </section>

          <div className="mt-12 rounded-xl p-6 bg-navy-900/40 border border-navy-700/50 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Prêt à créer votre site web ?
            </h3>
            <p className="text-slate-400 mb-4">
              Devis gratuit et sans engagement — réponse sous 24h.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors duration-200"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
