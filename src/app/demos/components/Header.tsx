"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "./CartContext";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#produits", label: "Produits" },
  { href: "#commande", label: "Commander" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items, totalCount, totalPrice, addItem, removeItem, clearCart, isCartOpen, setCartOpen } = useCart();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="bg-[#3C2415]/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-amber-900/30">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a
            href="#accueil"
            onClick={(e) => handleNavClick(e, "#accueil")}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-amber-100 tracking-wide">
              Terroir d&apos;Alsace
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-amber-200/80 hover:text-amber-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCartOpen(!isCartOpen)}
              className="relative p-2 text-amber-200/80 hover:text-amber-100 transition-colors"
              aria-label="Panier"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-amber-500 text-[#3C2415] text-[10px] font-bold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="md:hidden p-2 text-amber-200/80"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-amber-900/30 bg-[#3C2415]/95 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm font-medium text-amber-200/80 hover:text-amber-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setCartOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#FAF5EF] shadow-2xl flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-amber-200">
              <h2 className="text-lg font-bold text-[#3C2415]">
                Votre panier ({totalCount})
              </h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="p-1 text-[#3C2415]/60 hover:text-[#3C2415]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-[#5C3D2E]/60 py-12">
                  Votre panier est vide
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-amber-100"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#3C2415] truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-amber-700 font-medium">
                        {item.product.price.toFixed(2)} &euro;
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[#3C2415] hover:bg-amber-200"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium text-[#3C2415] w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => addItem(item.product)}
                          className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[#3C2415] hover:bg-amber-200"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-amber-200 space-y-3">
                <div className="flex justify-between text-[#3C2415]">
                  <span className="font-medium">Total</span>
                  <span className="text-lg font-bold">
                    {totalPrice.toFixed(2)} &euro;
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full py-3 rounded-xl bg-[#3C2415] text-amber-100 font-semibold hover:bg-[#2D1A0F] transition-colors"
                >
                  Commander
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full py-2 flex items-center justify-center gap-2 text-sm text-[#5C3D2E]/70 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Vider le panier
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
