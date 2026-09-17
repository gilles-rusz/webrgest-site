import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";
import PainPoints from "@/components/PainPoints";

export const metadata: Metadata = {
  title: "Services | Création de site web à Metz et Moselle | Web RG Est",
  description:
    "Sites vitrines, e-commerce, SEO local et automatisation pour artisans et PME à Maizières-lès-Metz, Metz, Thionville et en Moselle. Devis gratuit sous 24h.",
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
