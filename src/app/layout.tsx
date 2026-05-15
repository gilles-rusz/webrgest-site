/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://www.webrgest.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Création de site internet Metz & Grand Est | Web RG Est",
    template: "%s | Web RG Est",
  },
  description:
    "Développeur web freelance à Maizières-lès-Metz. Création de sites vitrines, e-commerce et applications web pour artisans et PME dans le Grand Est. Devis gratuit sous 24h.",
  keywords: [
    "création site internet Metz",
    "développeur web Metz",
    "développeur web Moselle",
    "création site web Grand Est",
    "site internet artisan Metz",
    "site vitrine Moselle",
    "développeur freelance Metz",
    "création site internet Maizières-lès-Metz",
    "Web RG Est",
    "Gilles Ruszczycki",
  ],

  authors: [{ name: "Gilles Ruszczycki", url: BASE_URL }],
  creator: "Gilles Ruszczycki",
  publisher: "Web RG Est",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Web RG Est",
    title: "Création de site internet Metz & Grand Est | Web RG Est",
    description:
      "Développeur web freelance à Maizières-lès-Metz. Sites vitrines, e-commerce et applications web pour artisans et PME dans le Grand Est.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web RG Est — Création de sites internet dans le Grand Est",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Création de site internet Metz & Grand Est | Web RG Est",
    description:
      "Développeur web freelance à Maizières-lès-Metz. Sites vitrines, e-commerce et applications web pour artisans et PME dans le Grand Est.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "VOTRE_CLE_SEARCH_CONSOLE",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Web RG Est",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/portrait-gilles.png`,
      description:
        "Création de sites internet professionnels pour artisans et PME dans le Grand Est. Développement full-stack sur mesure, SEO local, automatisation.",
      telephone: "",
      email: "",
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 Rue de la Division Leclerc",
        addressLocality: "Maizières-lès-Metz",
        postalCode: "57280",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.2178,
        longitude: 6.1617,
      },
      areaServed: [
        "Metz",
        "Thionville",
        "Nancy",
        "Strasbourg",
        "Mulhouse",
        "Moselle",
        "Grand Est",
      ],
      priceRange: "€€",
      currenciesAccepted: "EUR",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://www.linkedin.com/in/gilles-ruszczycki/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de création web",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Site Express",
            description: "Site web essentiel 1 à 3 pages",
            price: "490",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Site Vitrine",
            description: "Site professionnel pages illimitées",
            price: "990",
            priceCurrency: "EUR",
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Gilles Ruszczycki",
      jobTitle: "Développeur Web Full-Stack",
      url: BASE_URL,
      image: `${BASE_URL}/portrait-gilles.png`,
      worksFor: { "@id": `${BASE_URL}/#business` },
      sameAs: ["https://www.linkedin.com/in/gilles-ruszczycki/"],
      knowsAbout: [
        "Développement web",
        "Next.js",
        "React",
        "SEO",
        "Automatisation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Web RG Est",
      publisher: { "@id": `${BASE_URL}/#business` },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&family=Satisfy&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
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
