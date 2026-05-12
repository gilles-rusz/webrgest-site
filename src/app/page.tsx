import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeOffers from "@/components/HomeOffers";
import HomeMethodRealisations from "@/components/HomeMethodRealisations";
import HomeBadges from "@/components/HomeBadges";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";

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
