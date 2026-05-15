import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";
import PainPoints from "@/components/PainPoints";

export const metadata: Metadata = {
  title: "Services | Web RG Est — Création Web & Automatisation",
  description:
    "Sites vitrines, e-commerce, applications web, SEO, maintenance et automatisation. Découvrez tous les services de Web RG Est pour développer votre activité en ligne.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="py-12 sm:py-16">
        <Services />
        <PainPoints />
      </div>
    </PageShell>
  );
}
