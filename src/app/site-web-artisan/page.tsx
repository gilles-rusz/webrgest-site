import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site web pour artisan | Web RG Est",
  description:
    "Création de sites web professionnels pour artisans : plombier, électricien, menuisier, peintre, maçon... Un site qui vous ressemble et génère des contacts.",
  keywords: [
    "site web artisan",
    "site internet artisan",
    "création site artisan",
    "site web plombier",
    "site web électricien",
    "site web menuisier",
    "site internet professionnel artisan",
  ],
};

export default function SiteWebArtisan() {
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
          Un site web professionnel pour votre activité d&apos;artisan
        </h1>

        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Plombier, électricien, menuisier, peintre, maçon, couvreur...
          Votre savoir-faire mérite d&apos;être visible en ligne. Je crée des
          sites simples, efficaces et pensés pour générer des appels et des
          demandes de devis.
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Pourquoi un artisan a besoin d&apos;un site web ?
            </h2>
            <p className="mb-4">
              Aujourd&apos;hui, <strong className="text-white">97% des
              consommateurs recherchent un professionnel en ligne</strong> avant
              de le contacter. Sans site web, vous êtes invisible pour une
              grande partie de vos clients potentiels.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                Vos clients vous trouvent sur <strong className="text-white">Google</strong> quand
                ils cherchent un artisan dans votre zone
              </li>
              <li>
                Vous montrez vos <strong className="text-white">réalisations</strong> et
                votre savoir-faire en photos
              </li>
              <li>
                Vous recevez des <strong className="text-white">demandes de devis</strong>{" "}
                directement depuis votre site, 24h/24
              </li>
              <li>
                Vous inspirez <strong className="text-white">confiance</strong> :
                un site pro, c&apos;est un artisan sérieux
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Ce que je crée pour les artisans
            </h2>
            <p className="mb-4">
              Un site vitrine complet, clé en main, qui présente votre activité :
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-white">Page d&apos;accueil</strong> : votre
                métier, votre zone d&apos;intervention, vos points forts
              </li>
              <li>
                <strong className="text-white">Galerie de réalisations</strong> :
                photos de vos chantiers et projets
              </li>
              <li>
                <strong className="text-white">Page services</strong> : détail
                de vos prestations
              </li>
              <li>
                <strong className="text-white">Formulaire de contact</strong> :
                demande de devis simple et rapide
              </li>
              <li>
                <strong className="text-white">Référencement local</strong> :
                pour apparaître sur Google dans votre ville
              </li>
              <li>
                <strong className="text-white">Compatible mobile</strong> : votre
                site s&apos;affiche parfaitement sur smartphone
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Je comprends les contraintes des artisans
            </h2>
            <p>
              Ancien Team Leader en milieu industriel pendant{" "}
              <strong className="text-white">22 ans chez Stellantis</strong>,
              je connais le terrain. Vous n&apos;avez pas le temps de vous
              occuper d&apos;un site web, c&apos;est pour ça que je m&apos;occupe
              de tout : de la conception à la mise en ligne, avec une formation
              pour que vous puissiez le gérer seul ensuite. Pas de jargon
              technique, pas de complications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Combien ça coûte ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-gold-400">Site Vitrine</strong> : à partir de <strong className="text-white">590€</strong>
              </li>
              <li>
                <strong className="text-gold-400">E-commerce</strong> : à partir de <strong className="text-white">1 490€</strong>
              </li>
            </ul>
            <p className="mt-4">
              Formation incluse. Hébergement et nom de domaine à votre charge
              (environ 10-15€/mois). Maintenance optionnelle disponible.
            </p>
          </section>

          <div className="mt-12 rounded-xl p-6 bg-navy-900/40 border border-navy-700/50 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Votre site d&apos;artisan, prêt en 2 à 4 semaines
            </h3>
            <p className="text-slate-400 mb-4">
              Devis gratuit et sans engagement, réponse sous 24h.
            </p>
            <Link
              href="/devis-gratuit"
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
