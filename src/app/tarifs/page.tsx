import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Tarifs création site internet — Site Express 490€, Vitrine 990€",
  description:
    "Prix clairs et transparents : Site Express dès 490€, Site Vitrine dès 990€, Automatisation dès 190€. Devis gratuit sous 24h. Développeur web Metz.",
  alternates: {
    canonical: "https://www.webrgest.fr/tarifs",
  },
};

export default function TarifsPage() {
  return (
    <PageShell>
      <div className="py-12 sm:py-16">
        <Pricing />
      </div>
    </PageShell>
  );
}
