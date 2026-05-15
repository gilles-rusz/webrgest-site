import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Table d'Or | Démo Restaurant WebRGEST",
  description:
    "Restaurant gastronomique au cœur de l'Alsace. Démo réalisée par Web RG Est.",
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
