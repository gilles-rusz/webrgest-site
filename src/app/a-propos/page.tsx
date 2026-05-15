import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "À propos | Web RG Est — Gilles Ruszczycki, Développeur Full-Stack",
  description:
    "22 ans de management industriel chez Stellantis, développeur Full-Stack certifié. Découvrez le parcours et les compétences de Gilles Ruszczycki.",
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
