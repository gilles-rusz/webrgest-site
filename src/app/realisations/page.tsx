import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Demos from "@/components/Demos";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Réalisations — Sites web créés par Web RG Est",
  description:
    "Découvrez les sites web créés par Web RG Est : sites vitrines, e-commerce, applications web pour artisans et PME dans le Grand Est.",
  alternates: {
    canonical: "https://www.webrgest.fr/realisations",
  },
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
