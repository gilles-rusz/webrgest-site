"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MerciPaiementPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-white">
      <header className="glass border-b border-teal-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Web RG Est"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white tracking-wide">
                  WEB RG EST
                </span>
                <span className="block text-xs text-gold-400 tracking-[0.2em] uppercase">
                  Création Web
                </span>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au site
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="w-10 h-10 text-teal-400" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Paiement{" "}
            <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
              confirmé !
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Merci, votre abonnement est bien enregistré. Vous allez recevoir un
            e-mail de Stripe avec le détail de votre échéancier&nbsp;: 12
            mensualités pour la création, puis un tarif de maintenance réduit et
            sans engagement.
          </p>

          <p className="mt-4 text-slate-500">
            Je reviens vers vous très rapidement pour lancer votre projet.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:from-teal-400 hover:to-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            >
              <Home className="w-4 h-4" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/realisations"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-teal-500/20 text-teal-400 font-medium hover:bg-teal-500/10 transition-colors"
            >
              Voir mes réalisations
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-navy-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Web RG Est. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
