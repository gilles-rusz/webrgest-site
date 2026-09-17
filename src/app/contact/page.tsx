import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Développeur web Maizières-lès-Metz | Web RG Est",
  description:
    "Contactez Web RG Est à Maizières-lès-Metz pour un devis gratuit et sans engagement. Réponse sous 24h. Création de sites web et SEO local à Metz et en Moselle.",
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
