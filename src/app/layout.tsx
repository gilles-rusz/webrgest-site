import type { Metadata } from "next";
import { Sora, Satisfy } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: "400",
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
      className={`${sora.variable} ${satisfy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DD380PLJ90"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
          });
          gtag('js', new Date());
          gtag('config', 'G-DD380PLJ90');
        `}
      </Script>
    </html>
  );
}
