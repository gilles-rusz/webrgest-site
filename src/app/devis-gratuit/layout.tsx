import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Devis Gratuit | Web RG Est - Création Web & Solutions Digitales",
  description:
    "Demandez votre devis gratuit pour la création de votre site web, refonte, e-commerce, automatisation ou application web sur mesure. Réponse rapide, sans engagement.",
  openGraph: {
    title: "Devis Gratuit | Web RG Est",
    description:
      "Demandez votre devis gratuit — Création de site web, refonte, e-commerce, automatisation ou application web sur mesure. Réponse rapide, sans engagement.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense>{children}</Suspense>;
}
