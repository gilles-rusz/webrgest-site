import type { Metadata } from "next";
import { CartProvider } from "../components/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terroir d'Alsace | Démo E-Commerce WebRGEST",
  description:
    "Boutique en ligne de produits du terroir alsacien. Démo réalisée par Web RG Est.",
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF5EF]">
        <Header />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
