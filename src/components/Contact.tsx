"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURATION : remplace par ton ID de formulaire Formspree
// Crée ton formulaire gratuit sur https://formspree.io
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
            message: formData.message,
            _subject: `[Web RG Est] Nouveau message de ${formData.name} — ${formData.subject}`,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
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
    <section id="contact" className="relative py-24 sm:py-32 bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gold-400/10 text-gold-400 border border-gold-400/20 mb-4">
            Parlons de votre projet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Me{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
              Contacter
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Une idée, un projet ? N&apos;hésitez pas à me contacter pour un devis
            gratuit et sans engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
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

            <div className="glass rounded-2xl p-6">
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 space-y-6"
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all disabled:opacity-50"
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all disabled:opacity-50"
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all disabled:opacity-50"
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
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all appearance-none disabled:opacity-50"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="Site Vitrine">Site Vitrine</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Application Web">Application Web</option>
                    <option value="Refonte de Site">Refonte de Site</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Parlez-moi de votre projet, vos objectifs, votre budget estimé..."
                  className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer ma demande
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <p className="text-teal-400 font-medium">
                    Merci pour votre message ! Je vous recontacte très vite.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 font-medium">
                    Une erreur est survenue. Veuillez réessayer ou m&apos;envoyer un
                    email directement.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
