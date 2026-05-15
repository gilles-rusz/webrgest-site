import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis clients — Web RG Est",
  description:
    "Découvrez les avis de clients satisfaits de Web RG Est. Sites vitrines, e-commerce et applications web créés pour artisans et PME dans le Grand Est.",
  alternates: {
    canonical: "https://www.webrgest.fr/avis",
  },
};

export default function AvisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
