import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-600 text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {product.price.toFixed(2)}&nbsp;&euro;
          </span>
          <button
            type="button"
            className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
