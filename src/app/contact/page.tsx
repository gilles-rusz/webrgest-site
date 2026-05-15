import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Web RG Est, développeur web Metz",
  description:
    "Contactez Gilles Ruszczycki, développeur web freelance à Maizières-lès-Metz. Réponse sous 24h. Devis gratuit pour votre projet de site internet.",
  alternates: {
    canonical: "https://www.webrgest.fr/contact",
  },
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
