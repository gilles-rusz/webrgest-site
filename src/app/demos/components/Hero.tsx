"use client";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, #3C2415 0%, #5C3D2E 40%, #2D5016 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <span className="inline-block text-5xl mb-4">🏡</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50 leading-tight">
          Saveurs authentiques <br className="hidden sm:inline" />
          du terroir alsacien
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-amber-200/90 max-w-2xl mx-auto leading-relaxed">
          Du producteur à votre table &mdash; découvrez notre sélection de
          spécialités locales, fabriquées avec passion dans nos villages
          d&apos;Alsace.
        </p>
        <a
          href="#produits"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("produits")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block mt-8 px-8 py-3.5 rounded-full bg-amber-500 text-[#3C2415] font-bold hover:bg-amber-400 transition-colors shadow-lg"
        >
          Découvrir nos produits
        </a>
      </div>
    </section>
  );
}
