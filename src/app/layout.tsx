/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital@1&family=Playfair+Display:wght@600;700&family=Satisfy&family=Sora:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
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
      </body>
    </html>
  );
}
