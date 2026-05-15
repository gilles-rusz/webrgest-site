import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeOffers from "@/components/HomeOffers";
import HomeMethodRealisations from "@/components/HomeMethodRealisations";
import HomeBadges from "@/components/HomeBadges";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Création de site internet Metz & Grand Est | Web RG Est",
  description:
    "Développeur web freelance à Maizières-lès-Metz. Création de sites vitrines, e-commerce et applications web pour artisans et PME dans le Grand Est. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.webrgest.fr",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeOffers />
        <HomeMethodRealisations />
        <HomeBadges />
        <HomeContact />
      </main>
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  );
}
