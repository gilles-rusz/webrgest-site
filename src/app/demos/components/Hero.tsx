export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Saveurs du terroir alsacien
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto">
          Découvrez notre sélection de produits locaux et artisanaux,
          directement des producteurs d&apos;Alsace à votre table.
        </p>
        <a
          href="#produits"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
        >
          Voir les produits
        </a>
      </div>
    </section>
  );
}
