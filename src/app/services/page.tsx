import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";
import PainPoints from "@/components/PainPoints";

export const metadata: Metadata = {
  title: "Services de création web — Sites, E-commerce, SEO, Automatisation",
  description:
    "Sites vitrines dès 990€, e-commerce, applications web, SEO local et automatisation. Tous les services Web RG Est pour développer votre activité en ligne dans le Grand Est.",
  alternates: {
    canonical: "https://www.webrgest.fr/services",
  },
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
