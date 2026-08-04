import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo La Table d'Or | Site restaurant | Web RG Est",
  description:
    "Démonstration d'un site web pour restaurant créé par Web RG Est. Design sur mesure, menu interactif et réservation en ligne.",
  robots: { index: false, follow: false },
};

export default function RestaurantDemo() {
  return (
    <>
      <h1 className="sr-only">La Table d&apos;Or, démo site restaurant par Web RG Est</h1>
      <iframe
        src="/demos/restaurant-static/index.html"
        title="La Table d'Or - Démo restaurant"
        className="w-full h-screen border-0"
        style={{ minHeight: "100vh" }}
      />
    </>
  );
}
