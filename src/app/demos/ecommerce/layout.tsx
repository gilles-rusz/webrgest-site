import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Démo E-Commerce | WebRGEST",
  description:
    "Exemple de boutique en ligne moderne réalisée avec Next.js, React et Tailwind.",
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
