import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import HomeOffers from "@/components/HomeOffers";
import PainPoints from "@/components/PainPoints";
import HomeMethodRealisations from "@/components/HomeMethodRealisations";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <HomeOffers />
        <SectionDivider />
        <PainPoints />
        <SectionDivider />
        <HomeMethodRealisations />
        <SectionDivider />
        <HomeContact />
      </main>
      <Footer />
      <ChatWidget />
      <CookieBanner />
      <ScrollReveal />
    </>
  );
}
