import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "À propos | Développeur web à Maizières-lès-Metz (57) | Web RG Est",
  description:
    "Gilles Ruszczycki, développeur web Full-Stack basé à Maizières-lès-Metz près de Metz. 22 ans de management industriel au service de votre site internet.",
};

export default function AProposPage() {
  return (
    <PageShell>
      <div className="py-12 sm:py-16">
        <About />
        <WhyChooseUs />
      </div>
    </PageShell>
  );
}
