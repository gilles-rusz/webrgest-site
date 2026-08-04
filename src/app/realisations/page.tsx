import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Demos from "@/components/Demos";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Réalisations | Web RG Est | Sites web créés",
  description:
    "Découvrez les projets réalisés par Web RG Est : sites vitrines, e-commerce, automatisation. Des démonstrations concrètes de ce que nous pouvons créer pour vous.",
};

export default function RealisationsPage() {
  return (
    <PageShell>
      <div className="py-12 sm:py-16">
        <Demos />
        <Portfolio />
      </div>
    </PageShell>
  );
}
