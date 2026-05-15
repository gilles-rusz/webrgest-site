import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "À propos — Gilles Ruszczycki, développeur web Metz",
  description:
    "Développeur web freelance basé à Maizières-lès-Metz. 22 ans d'expérience industrielle chez Stellantis, certifié développeur Full-Stack. Je crée des sites qui génèrent des contacts.",
  alternates: {
    canonical: "https://www.webrgest.fr/a-propos",
  },
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
