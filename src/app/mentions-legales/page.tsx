import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Web RG Est",
  description: "Mentions légales du site webrgest.fr : Web RG Est, création de sites web dans le Grand Est.",
};

export default function MentionsLegales() {
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
          Mentions légales
        </h1>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong className="text-white">webrgest.fr</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Nom :</strong> Gilles Ruszczycki</li>
              <li><strong className="text-white">Statut :</strong> Entrepreneur individuel</li>
              <li><strong className="text-white">Nom commercial :</strong> Web RG Est</li>
              <li><strong className="text-white">SIREN :</strong> 989 861 869</li>
              <li><strong className="text-white">SIRET :</strong> 989 861 869 00018</li>
              <li><strong className="text-white">N° TVA intracommunautaire :</strong> FR71989861869</li>
              <li><strong className="text-white">Code APE :</strong> 6201Z (Programmation informatique)</li>
              <li><strong className="text-white">Adresse :</strong> 17 Rue de la Division Leclerc, 57280 Maizières-lès-Metz</li>
              <li><strong className="text-white">Email :</strong> contact@webrgest.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Directeur de la publication
            </h2>
            <p>Gilles Ruszczycki, contact@webrgest.fr</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Hébergement
            </h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Nom :</strong> Vercel Inc.</li>
              <li><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li><strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logo, code source)
              est la propriété exclusive de Web RG Est / Gilles Ruszczycki, sauf mention
              contraire. Toute reproduction, représentation, modification ou adaptation,
              totale ou partielle, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Données personnelles
            </h2>
            <p>
              Les données collectées via le formulaire de contact (nom, email, téléphone,
              message) sont uniquement utilisées pour répondre à votre demande. Elles ne
              sont ni vendues, ni transmises à des tiers.
            </p>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et
              à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression et d&apos;opposition sur vos données personnelles.
            </p>
            <p className="mt-2">
              Pour exercer ces droits, contactez : <a href="mailto:contact@webrgest.fr" className="text-teal-400 hover:text-teal-300">contact@webrgest.fr</a>
            </p>
            <p className="mt-2">
              Pour en savoir plus, consultez notre{" "}
              <Link href="/politique-de-confidentialite" className="text-teal-400 hover:text-teal-300">
                politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Cookies
            </h2>
            <p>
              Ce site utilise Google Analytics pour mesurer l&apos;audience. Google Analytics
              utilise des cookies pour collecter des données anonymes sur la navigation.
              Vous pouvez désactiver ces cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Limitation de responsabilité
            </h2>
            <p>
              Web RG Est s&apos;efforce de fournir des informations exactes et à jour sur ce
              site. Toutefois, des erreurs ou omissions peuvent survenir. Web RG Est ne
              saurait être tenu responsable de l&apos;utilisation qui serait faite des
              informations présentes sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français.
              Tout litige relatif à l&apos;utilisation de ce site sera de la compétence
              exclusive des tribunaux français.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
