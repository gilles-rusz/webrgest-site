"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#3C2415]">Contactez-nous</h2>
        <p className="mt-2 text-[#5C3D2E]/70">
          Une question, une commande spéciale ? N&apos;hésitez pas !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3C2415]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#3C2415]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#3C2415]">Adresse</h3>
              <p className="text-sm text-[#5C3D2E]/70">
                12 rue des Vignerons<br />
                67000 Strasbourg, Alsace
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3C2415]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#3C2415]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#3C2415]">Téléphone</h3>
              <p className="text-sm text-[#5C3D2E]/70">03 88 00 00 00</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3C2415]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#3C2415]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#3C2415]">Email</h3>
              <p className="text-sm text-[#5C3D2E]/70">
                contact@terroir-alsace.fr
              </p>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-[#3C2415]/5 border border-amber-200/50">
            <h3 className="font-semibold text-[#3C2415] mb-2">Horaires</h3>
            <div className="text-sm text-[#5C3D2E]/70 space-y-1">
              <p>Lundi - Vendredi : 9h00 - 18h00</p>
              <p>Samedi : 9h00 - 13h00</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <span className="inline-block text-5xl mb-4">🎉</span>
              <h3 className="text-xl font-bold text-[#3C2415]">
                Message envoyé !
              </h3>
              <p className="mt-2 text-[#5C3D2E]/70">
                Merci, nous vous répondrons dans les plus brefs délais.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-full bg-[#3C2415] text-amber-100 text-sm font-semibold hover:bg-[#2D1A0F] transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="demo-name"
                    className="block text-sm font-medium text-[#3C2415] mb-1"
                  >
                    Nom
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-[#FAF5EF] text-[#3C2415] placeholder-[#5C3D2E]/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-email"
                    className="block text-sm font-medium text-[#3C2415] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    placeholder="votre@email.fr"
                    className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-[#FAF5EF] text-[#3C2415] placeholder-[#5C3D2E]/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="demo-subject"
                  className="block text-sm font-medium text-[#3C2415] mb-1"
                >
                  Sujet
                </label>
                <input
                  id="demo-subject"
                  type="text"
                  required
                  placeholder="Commande, question, partenariat..."
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-[#FAF5EF] text-[#3C2415] placeholder-[#5C3D2E]/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="demo-message"
                  className="block text-sm font-medium text-[#3C2415] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="demo-message"
                  rows={5}
                  required
                  placeholder="Décrivez votre demande..."
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-[#FAF5EF] text-[#3C2415] placeholder-[#5C3D2E]/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3C2415] text-amber-100 font-semibold hover:bg-[#2D1A0F] transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
