"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const FORMSPREE_FORM_ID = "xdayjojp";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    delai: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            _replyto: formData.email,
            email: formData.email,
            phone: formData.phone || "Non renseigné",
            subject: formData.subject,
            budget: formData.budget || "Non renseigné",
            delai: formData.delai || "Non renseigné",
            message: formData.message,
            _subject: `[Web RG Est] Nouveau message de ${formData.name} — ${formData.subject}`,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", budget: "", delai: "", message: "" });
        router.push("/merci");
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Parlons de votre{" "}
            <span className="text-teal-400" style={{ fontFamily: "var(--font-satisfy), cursive", fontWeight: 400 }}>
              projet
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Une idée, un projet ? N&apos;hésitez pas à me contacter pour un devis
            gratuit et sans engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Informations de contact
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@webrgest.fr",
                    href: "mailto:contact@webrgest.fr",
                  },
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: "Sur demande",
                    href: "#contact",
                  },
                  {
                    icon: MapPin,
                    label: "Localisation",
                    value: "Est de la France",
                    href: "#",
                  },
                  {
                    icon: Clock,
                    label: "Disponibilité",
                    value: "Lun - Ven, 9h - 18h",
                    href: "#",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-white font-medium group-hover:text-teal-400 transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl p-6 bg-navy-900/40 border border-navy-700/50">
              <h4 className="font-semibold text-white mb-2">
                Devis gratuit & sans engagement
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Décrivez votre projet et je vous recontacte sous 24h avec une
                proposition adaptée à vos besoins et votre budget.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 space-y-6 bg-navy-900/40 border border-navy-700/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="jean@exemple.fr"
                    className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Type de projet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none disabled:opacity-50"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="Site Vitrine">Site Vitrine</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Application Web">Application Web</option>
                    <option value="Refonte de Site">Refonte de Site</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Site Express">Site Express</option>
                    <option value="Portfolio / CV">Portfolio / CV</option>
                    <option value="Automatisation">Automatisation</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Budget approximatif
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none disabled:opacity-50"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="Moins de 500€">Moins de 500€</option>
                    <option value="500 – 1 000€">500 – 1 000€</option>
                    <option value="1 000 – 2 000€">1 000 – 2 000€</option>
                    <option value="2 000€ et plus">2 000€ et plus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Délai souhaité
                  </label>
                  <select
                    name="delai"
                    value={formData.delai}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none disabled:opacity-50"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="Urgent (moins de 2 semaines)">Urgent (moins de 2 semaines)</option>
                    <option value="1 à 2 mois">1 à 2 mois</option>
                    <option value="3 mois ou plus">3 mois ou plus</option>
                    <option value="Pas de deadline">Pas de deadline</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-teal-500 text-white font-semibold text-lg hover:bg-teal-400 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-teal-400 text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  Message envoyé avec succès ! Je vous recontacte rapidement.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5" />
                  Une erreur est survenue. Réessayez ou contactez-moi à contact@webrgest.fr.
                </div>
              )}

              <p className="text-xs text-slate-500 leading-relaxed">
                En soumettant ce formulaire, vous acceptez que vos données soient
                utilisées pour répondre à votre demande. Elles ne seront ni vendues
                ni transmises à des tiers. Consultez notre{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="text-teal-400 hover:text-teal-300 underline"
                >
                  politique de confidentialité
                </a>{" "}
                pour en savoir plus.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
