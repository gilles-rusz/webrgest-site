import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refonte de site internet | Web RG Est",
  description:
    "Refonte de votre site web : design moderne, responsive, rapide et optimisé SEO. Transformez votre ancien site en un outil qui génère des contacts.",
  keywords: [
    "refonte site internet",
    "refonte site web",
    "moderniser site web",
    "refaire son site internet",
    "refonte site vitrine",
    "site web obsolète",
  ],
};

export default function RefonteSiteInternet() {
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
          Refonte de site internet : donnez un nouveau souffle à votre présence
          en ligne
        </h1>

        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Votre site a quelques années, il est lent, il ne s&apos;affiche pas
          bien sur mobile, ou il ne vous apporte plus de contacts ? Il est temps
          de le refaire, avec une approche moderne et orientée résultats.
        </p>

        <div className="space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Quand faut-il refaire son site ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                Votre site a <strong className="text-white">plus de 3-4 ans</strong> et
                son design fait daté
              </li>
              <li>
                Il <strong className="text-white">ne s&apos;affiche pas correctement
                sur mobile</strong> (plus de 60% du trafic web est mobile)
              </li>
              <li>
                Il est <strong className="text-white">lent à charger</strong> :
                chaque seconde de chargement fait perdre des visiteurs
              </li>
              <li>
                Il <strong className="text-white">n&apos;apparaît pas sur Google</strong>{" "}
                quand on recherche vos services
              </li>
              <li>
                Vous ne pouvez <strong className="text-white">pas le modifier
                facilement</strong> vous-même
              </li>
              <li>
                Il ne <strong className="text-white">génère aucun contact</strong> ou
                demande de devis
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Ce qu&apos;une refonte change concrètement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg p-4 bg-navy-900/40 border border-navy-700/50">
                <h4 className="font-semibold text-white mb-1">Avant</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                  <li>Design vieillissant</li>
                  <li>Non adapté au mobile</li>
                  <li>Chargement lent</li>
                  <li>Invisible sur Google</li>
                  <li>Pas de formulaire de contact</li>
                </ul>
              </div>
              <div className="rounded-lg p-4 bg-teal-500/10 border border-teal-500/30">
                <h4 className="font-semibold text-teal-400 mb-1">Après</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                  <li>Design moderne et professionnel</li>
                  <li>100% responsive (mobile, tablette, desktop)</li>
                  <li>Chargement rapide (&lt; 2 secondes)</li>
                  <li>Optimisé pour le référencement local</li>
                  <li>Formulaire de contact + appels à l&apos;action</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Comment se passe une refonte ?
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-400">
              <li>
                <strong className="text-white">Audit de votre site actuel</strong> :
                j&apos;analyse ce qui fonctionne, ce qui ne fonctionne pas et ce
                qui manque
              </li>
              <li>
                <strong className="text-white">Maquette du nouveau design</strong> :
                vous validez le visuel avant le développement
              </li>
              <li>
                <strong className="text-white">Développement</strong> : je
                construis le nouveau site avec les technologies les plus récentes
                (Next.js, React, Tailwind CSS)
              </li>
              <li>
                <strong className="text-white">Migration du contenu</strong> :
                vos textes, images et données sont transférés
              </li>
              <li>
                <strong className="text-white">Mise en ligne + formation</strong> :
                votre nouveau site est en ligne et vous savez le gérer
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Combien coûte une refonte ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-gold-400">Refonte simple</strong>{" "}
                (nouveau design, responsive, SEO) : à partir de{" "}
                <strong className="text-white">690€</strong>
              </li>
              <li>
                <strong className="text-gold-400">Refonte complète</strong>{" "}
                (restructuration, nouvelles fonctionnalités, e-commerce) : à
                partir de <strong className="text-white">1 490€</strong>
              </li>
            </ul>
            <p className="mt-4">
              Le prix dépend de la complexité de votre site actuel et des
              fonctionnalités souhaitées. Chaque projet est unique, demandez un
              devis pour une estimation précise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Pourquoi me choisir pour votre refonte ?
            </h2>
            <p>
              Avec <strong className="text-white">22 ans d&apos;expérience en
              management industriel</strong> et une certification développeur
              web Full-Stack, j&apos;apporte une double compétence rare : je
              comprends vos enjeux business et je maîtrise les technologies
              modernes du web. Votre nouveau site ne sera pas juste beau, il
              sera un véritable outil au service de votre activité.
            </p>
          </section>

          <div className="mt-12 rounded-xl p-6 bg-navy-900/40 border border-navy-700/50 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Prêt à moderniser votre site ?
            </h3>
            <p className="text-slate-400 mb-4">
              Audit gratuit de votre site actuel, réponse sous 24h.
            </p>
            <Link
              href="/devis-gratuit"
              className="inline-block px-8 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors duration-200"
            >
              Demander un audit gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
