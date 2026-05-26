/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web RG Est | Création Web & Solutions Digitales",
  description:
    "Web RG Est - Création de sites web pour artisans et TPE du Grand Est et du Luxembourg. Sites vitrines, e-commerce, automatisation.",
  keywords: [
    "création web",
    "développeur web",
    "site internet artisan",
    "Grand Est",
    "Luxembourg",
    "site vitrine",
    "e-commerce",
    "Web RG Est",
  ],
  openGraph: {
    title: "Web RG Est | Création Web & Solutions Digitales",
    description:
      "Votre partenaire pour la création de sites web et solutions digitales dans le Grand Est et au Luxembourg.",
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
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body>
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
