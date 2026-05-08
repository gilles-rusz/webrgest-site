"use client";

import { ShoppingBasket, CalendarDays, Truck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: ShoppingBasket,
    title: "Préparez votre panier",
    text: "Je prépare et valide mon panier avec les produits de mon choix.",
  },
  {
    icon: CalendarDays,
    title: "Choisissez votre jour de livraison",
    text: "Je sélectionne la date à laquelle je souhaite être livré, entre le mardi et le samedi.",
  },
  {
    icon: Truck,
    title: "Livraison à domicile ou en point relais",
    text: "Ma commande est préparée puis expédiée la veille de mon jour de livraison par camion frigorifique.",
  },
  {
    icon: PartyPopper,
    title: "Recevez et dégustez",
    text: "Je suis informé par mail/sms de l\u2019arrivée de mon colis.",
  },
];

export default function HowToOrder() {
  return (
    <section id="commande" className="py-14">
      <div className="bg-white rounded-3xl border border-amber-100 shadow-sm p-8 sm:p-12">
        <div className="space-y-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#3C2415]/20 flex items-center justify-center bg-[#FAF5EF]">
                  <Icon className="w-7 h-7 text-[#3C2415]/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3C2415]">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-1 text-[#5C3D2E]/70 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#produits"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document.getElementById("produits")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-8 py-3 rounded-full bg-[#3C2415] text-amber-100 font-semibold hover:bg-[#2D1A0F] transition-colors shadow-md"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
