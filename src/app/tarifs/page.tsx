import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Tarifs | Web RG Est | Prix clairs et transparents",
  description:
    "Tarifs transparents : Site Vitrine dès 590€, Applications d'entreprise sur devis, Automatisation dès 190€. Devis gratuit sous 24h.",
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
