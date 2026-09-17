/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://www.webrgest.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Web RG Est | Création de site web à Maizières-lès-Metz",
  description:
    "Développeur web basé à Maizières-lès-Metz (57). Sites vitrines, e-commerce et SEO local pour artisans et PME à Metz, Thionville et en Moselle. Devis gratuit.",
  keywords: [
    "création site internet Maizières-lès-Metz",
    "développeur web Maizières-lès-Metz",
    "création site web Metz",
    "site internet Thionville",
    "développeur web Moselle",
    "création site internet Moselle",
    "site vitrine artisan Metz",
    "SEO local Metz",
    "Web RG Est",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web RG Est | Création de site web à Maizières-lès-Metz",
    description:
      "Web RG Est crée votre site internet à Maizières-lès-Metz, Metz et Thionville. Sites professionnels, sans abonnement imposé, optimisés SEO.",
    url: BASE_URL,
    siteName: "Web RG Est",
    type: "website",
    locale: "fr_FR",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  name: "Web RG Est",
  description:
    "Création de sites internet, e-commerce et SEO local pour artisans, indépendants et PME à Maizières-lès-Metz, Metz, Thionville et en Moselle.",
  url: BASE_URL,
  image: `${BASE_URL}/logo.png`,
  founder: {
    "@type": "Person",
    name: "Gilles Ruszczycki",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Rue de la Division Leclerc",
    addressLocality: "Maizières-lès-Metz",
    postalCode: "57280",
    addressRegion: "Moselle",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.2117,
    longitude: 6.1594,
  },
  areaServed: [
    { "@type": "City", name: "Maizières-lès-Metz" },
    { "@type": "City", name: "Metz" },
    { "@type": "City", name: "Thionville" },
    { "@type": "AdministrativeArea", name: "Moselle" },
    { "@type": "AdministrativeArea", name: "Grand Est" },
  ],
  priceRange: "€€",
  sameAs: ["https://www.linkedin.com/in/gilles-ruszczycki/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            });
            gtag('js', new Date());
            gtag('config', 'G-DD380PLJ90');
            gtag('config', 'AW-18139009744');
          `}
        </Script>
      </body>
    </html>
  );
}
