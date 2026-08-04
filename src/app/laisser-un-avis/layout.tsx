import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laisser un avis | Web RG Est",
  description:
    "Partagez votre expérience avec Web RG Est. Laissez un avis sur la création de votre site internet.",
  alternates: {
    canonical: "https://www.webrgest.fr/laisser-un-avis",
  },
};

export default function LaisserUnAvisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
