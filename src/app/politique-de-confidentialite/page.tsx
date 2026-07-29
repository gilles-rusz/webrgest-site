import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Web RG Est",
  description: "Politique de confidentialité du site webrgest.fr — Web RG Est.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          href="/"
          className="text-teal-400 hover:text-teal-300 transition-colors text-sm mb-8 inline-block"
        >
          &larr; Retour au site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Gilles Ruszczycki</strong> — Web RG Est</li>
              <li>17 Rue de la Division Leclerc, 57280 Maizières-lès-Metz</li>
              <li>Email : <a href="mailto:contact@webrgest.fr" className="text-teal-400 hover:text-teal-300">contact@webrgest.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Données collectées
            </h2>
            <p>Les données personnelles collectées via le formulaire de contact sont :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Nom complet</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Type de projet</li>
              <li>Contenu du message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Finalité du traitement
            </h2>
            <p>
              Vos données sont collectées uniquement pour répondre à votre demande
              de contact ou de devis. Elles ne sont utilisées à aucune autre fin
              (pas de prospection commerciale, pas de newsletter non sollicitée).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Durée de conservation
            </h2>
            <p>
              Les données du formulaire de contact sont conservées pour la durée
              nécessaire au traitement de votre demande, et au maximum 3 ans après
              le dernier contact.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Partage des données
            </h2>
            <p>
              Vos données ne sont ni vendues, ni louées, ni transmises à des tiers
              à des fins commerciales. Le formulaire de contact utilise le service
              Formspree pour la transmission sécurisée des messages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Cookies et mesure d&apos;audience
            </h2>
            <p>
              Ce site utilise <strong className="text-white">Google Analytics</strong> pour
              analyser la fréquentation du site de manière anonyme. Google Analytics
              utilise des cookies qui collectent des informations telles que :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Pages visitées</li>
              <li>Durée de la visite</li>
              <li>Source de trafic</li>
              <li>Localisation géographique approximative</li>
            </ul>
            <p className="mt-3">
              Ce site utilise également <strong className="text-white">Google Ads</strong> afin
              de mesurer les conversions et l&apos;efficacité de nos campagnes publicitaires.
              Ces cookies ne sont déposés qu&apos;après votre consentement via le bandeau cookies.
            </p>
            <p className="mt-3">
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur
              ou installer l&apos;extension{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300"
              >
                Google Analytics Opt-out
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Vos droits
            </h2>
            <p>
              Conformément au RGPD (Règlement Général sur la Protection des Données)
              et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-white">Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong className="text-white">Droit de rectification :</strong> corriger vos données</li>
              <li><strong className="text-white">Droit de suppression :</strong> demander l&apos;effacement de vos données</li>
              <li><strong className="text-white">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez :{" "}
              <a href="mailto:contact@webrgest.fr" className="text-teal-400 hover:text-teal-300">
                contact@webrgest.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Réclamation
            </h2>
            <p>
              Si vous estimez que le traitement de vos données ne respecte pas la
              réglementation en vigueur, vous pouvez adresser une réclamation à la{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300"
              >
                CNIL (Commission Nationale de l&apos;Informatique et des Libertés)
              </a>.
            </p>
          </section>

          <p className="text-xs text-slate-500 pt-8 border-t border-navy-800/50">
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </div>
    </div>
  );
}
