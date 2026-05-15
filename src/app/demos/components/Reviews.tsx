"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Marie-Claire D.",
    date: "02/05/2026",
    rating: 5,
    text: "Des produits d\u2019une qualité exceptionnelle ! Le Munster fermier est absolument divin, et le Kouglof m\u2019a rappelé celui de ma grand-mère. Livraison rapide et soignée.",
  },
  {
    name: "Claude L.",
    date: "19/04/2026",
    rating: 4,
    text: "Parfait sauf charcuterie. Les vins sont excellents, surtout le Gewurztraminer. Je recommande vivement pour tous les amateurs de terroir alsacien.",
  },
  {
    name: "Jean-Pierre M.",
    date: "15/04/2026",
    rating: 5,
    text: "Je commande régulièrement pour offrir à mes collègues parisiens. Ils adorent ! Le coffret découverte est un super cadeau. Emballage impeccable.",
  },
  {
    name: "Isabelle R.",
    date: "08/04/2026",
    rating: 5,
    text: "Enfin un site qui propose de vrais produits d\u2019Alsace et pas des imitations industrielles. La confiture de quetsches est un délice pur.",
  },
  {
    name: "François B.",
    date: "28/03/2026",
    rating: 4,
    text: "Très satisfait de ma commande. Le Riesling Grand Cru est remarquable. Seul petit bémol : j\u2019aurais aimé plus de choix en fromages.",
  },
  {
    name: "Martine K.",
    date: "22/03/2026",
    rating: 5,
    text: "Service client au top ! J\u2019avais un souci de livraison et tout a été résolu en quelques heures. Les produits sont frais et authentiques.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section id="avis" className="py-14">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#3C2415]">Avis de nos clients</h2>
        <p className="mt-2 text-[#5C3D2E]/70">
          Ce que nos clients pensent de nos produits
        </p>
      </div>

      <div className="relative max-w-xl mx-auto">
        {/* Navigation arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full bg-white border border-amber-200 shadow-sm flex items-center justify-center text-[#3C2415]/60 hover:text-[#3C2415] hover:border-amber-400 transition-colors z-10"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full bg-white border border-amber-200 shadow-sm flex items-center justify-center text-[#3C2415]/60 hover:text-[#3C2415] hover:border-amber-400 transition-colors z-10"
          aria-label="Avis suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Review card */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-md p-8 text-center transition-all duration-300">
          <StarRating rating={review.rating} />

          <p className="mt-5 text-[#5C3D2E]/80 italic leading-relaxed text-lg">
            &ldquo;{review.text}&rdquo;
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3C2415]/10 flex items-center justify-center">
              <span className="text-sm font-bold text-[#3C2415]">
                {review.name.charAt(0)}
              </span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#3C2415]">{review.name}</p>
              <p className="text-xs text-[#5C3D2E]/50">Le {review.date}</p>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
              Acheteur authentifié
            </span>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === current
                  ? "bg-[#3C2415] scale-110"
                  : "bg-[#3C2415]/20 hover:bg-[#3C2415]/40"
              }`}
              aria-label={`Avis ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
