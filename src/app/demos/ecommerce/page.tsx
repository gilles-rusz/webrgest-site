import Hero from "../components/Hero";
import About from "../components/About";
import ProductGrid from "../components/ProductGrid";
import HowToOrder from "../components/HowToOrder";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

export default function EcommercePage() {
  return (
    <>
      <Hero />
      <About />
      <ProductGrid />
      <HowToOrder />
      <Reviews />
      <Contact />
    </>
  );
}
