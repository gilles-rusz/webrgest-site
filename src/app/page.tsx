import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import Demos from "@/components/Demos";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <WhyChooseUs />
        <Services />
        <About />
        <Demos />
        <Pricing />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <CookieBanner />
    </>
  );
}
