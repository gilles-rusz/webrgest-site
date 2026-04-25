import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web RG Est | Création Web & Solutions Digitales",
  description:
    "Web RG Est - Votre partenaire pour la création de sites web, applications et solutions digitales dans l'Est de la France. Développement full-stack sur mesure.",
  keywords: [
    "création web",
    "développeur web",
    "full-stack",
    "Est de la France",
    "site internet",
    "application web",
    "Web RG Est",
  ],
  openGraph: {
    title: "Web RG Est | Création Web & Solutions Digitales",
    description:
      "Votre partenaire pour la création de sites web et solutions digitales dans l'Est de la France.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
