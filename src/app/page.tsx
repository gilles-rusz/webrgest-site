import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import PainPoints from "@/components/PainPoints";
import HomeBenefits from "@/components/HomeBenefits";
import HomeMethodRealisations from "@/components/HomeMethodRealisations";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div style={{ background: "#0b1628" }}>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <PainPoints />
        <SectionDivider />
        <HomeBenefits />
        <SectionDivider />
        <HomeMethodRealisations />
        <SectionDivider />
        <HomeContact />
      </main>
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </div>
  );
}
