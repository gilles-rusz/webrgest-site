"use client";

import { useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="produits"
      className="relative py-14"
      style={{
        backgroundImage: "url('/demos/vignoble-alsace.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#FAF5EF]/85" />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#3C2415]">Nos produits du terroir</h2>
          <p className="mt-2 text-[#5C3D2E]/70">
            Sélectionnés avec soin auprès de nos artisans locaux
          </p>
        </div>

        <div id="categories" className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#3C2415] text-amber-100 shadow-md"
                  : "bg-white/90 text-[#5C3D2E] border border-amber-200 hover:border-amber-400 hover:bg-amber-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
