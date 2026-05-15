"use client";

import AlsaceIllustration from "./AlsaceIllustration";

export default function About() {
  return (
    <section id="apropos" className="py-14">
      <div className="mb-8 px-4">
        <AlsaceIllustration />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#3C2415] uppercase tracking-wide">
          Qui sommes-nous ?
        </h2>
        <p className="mt-5 text-[#5C3D2E]/80 max-w-2xl mx-auto leading-relaxed text-lg">
          Terroir d&apos;Alsace, entreprise située à Kaysersberg, en plein
          c&oelig;ur du vignoble alsacien, sur la Route des Vins d&apos;Alsace, a
          le plaisir de vous faire découvrir et partager des spécialités
          alsaciennes issues de son terroir riche, gourmand et généreux&nbsp;!
        </p>
        <p className="mt-3 text-[#5C3D2E]/70 max-w-2xl mx-auto leading-relaxed">
          Tous les produits en vente sur ce site sont fabriqués en Alsace par des
          artisans et petits producteurs qui vous proposent des produits
          authentiques garantis d&apos;origine et de qualité.
        </p>
        <a
          href="#produits"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            document.getElementById("produits")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block mt-8 px-8 py-3 rounded-full bg-[#3C2415] text-amber-100 font-semibold hover:bg-[#2D1A0F] transition-colors shadow-md"
        >
          Je découvre
        </a>
      </div>
    </section>
  );
}
