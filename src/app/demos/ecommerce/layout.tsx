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
      <div
        className="min-h-screen flex flex-col relative"
        style={{
          background:
            "linear-gradient(135deg, #F5E6D3 0%, #EDE0CF 30%, #F0E4D4 60%, #E8D8C4 100%)",
        }}
      >
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5' fill='none' stroke='%232D5016' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M20 30 Q25 20 30 30 Q25 40 20 30' fill='none' stroke='%232D5016' stroke-width='0.5' opacity='0.12'/%3E%3Cpath d='M40 35 Q45 25 50 35 Q45 45 40 35' fill='none' stroke='%232D5016' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}
