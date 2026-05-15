"use client";

import { ShoppingCart } from "lucide-react";
import type { Product } from "../data/products";
import { useCart } from "./CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, setCartOpen } = useCart();

  const handleAdd = () => {
    addItem(product);
    setCartOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden bg-amber-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-[#3C2415] shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-[#2D5016] uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="mt-1 text-lg font-bold text-[#3C2415]">{product.name}</h3>
        <p className="mt-1 text-sm text-[#5C3D2E]/70 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-[#3C2415]">
            {product.price.toFixed(2)}&nbsp;&euro;
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3C2415] text-amber-100 text-sm font-semibold hover:bg-[#2D1A0F] transition-colors shadow-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
