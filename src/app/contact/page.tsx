import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Web RG Est — Devis gratuit sous 24h",
  description:
    "Contactez Web RG Est pour un devis gratuit et sans engagement. Réponse sous 24h. Création de sites web, automatisation, SEO dans le Grand Est.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="py-12 sm:py-16">
        <Contact />
      </div>
    </PageShell>
  );
}
