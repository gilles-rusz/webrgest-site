import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Devis gratuit — Création site internet Grand Est",
  description:
    "Demandez votre devis gratuit pour la création de votre site internet. Réponse personnalisée sous 24h. Développeur web freelance dans le Grand Est.",
  alternates: {
    canonical: "https://www.webrgest.fr/devis-gratuit",
  },
};

export default function DevisGratuitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense>{children}</Suspense>;
}
