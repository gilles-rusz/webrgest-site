import { Leaf, MapPin, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Local",
    text: "Chaque produit est sélectionné auprès de producteurs et artisans implantés en Alsace et dans le Grand Est.",
  },
  {
    icon: Heart,
    title: "Fait avec passion",
    text: "Nos partenaires perpétuent des savoir-faire transmis de génération en génération, loin de la production industrielle.",
  },
  {
    icon: MapPin,
    title: "Circuit court",
    text: "Du producteur à votre table, sans intermédiaire superflu. Vous savez d'où viennent vos produits.",
  },
  {
    icon: Award,
    title: "Qualité garantie",
    text: "AOP, IGP, labels fermiers… Nous ne proposons que des produits dont nous sommes fiers.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="py-14">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#3C2415]">Notre histoire</h2>
        <p className="mt-3 text-[#5C3D2E]/80 max-w-2xl mx-auto leading-relaxed">
          Terroir d&apos;Alsace est née d&apos;une conviction simple&nbsp;: les
          richesses de notre région méritent d&apos;être partagées. Installés au
          c&oelig;ur de l&apos;Alsace, nous parcourons les villages, les caves et
          les fermes du Grand Est pour dénicher les meilleurs produits du terroir
          &mdash; fromages affinés, vins d&apos;exception, pâtisseries
          traditionnelles et confitures artisanales.
        </p>
        <p className="mt-3 text-[#5C3D2E]/70 max-w-2xl mx-auto leading-relaxed">
          Chaque référence de notre catalogue raconte une histoire, celle d&apos;un
          artisan passionné qui perpétue un savoir-faire ancestral. Notre mission
          est de vous faire découvrir ces trésors, avec la garantie d&apos;une
          qualité irréprochable et d&apos;un approvisionnement en circuit court.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.title}
              className="bg-white rounded-2xl border border-amber-100 p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3C2415]/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-[#3C2415]" />
              </div>
              <h3 className="font-bold text-[#3C2415] mb-2">{v.title}</h3>
              <p className="text-sm text-[#5C3D2E]/70 leading-relaxed">
                {v.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
