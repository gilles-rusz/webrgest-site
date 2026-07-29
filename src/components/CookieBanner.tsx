"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "webrgest_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  function enableAnalytics() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  }

  function disableAnalytics() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    enableAnalytics();
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(CONSENT_KEY, "refused");
    disableAnalytics();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto rounded-2xl bg-navy-900/95 backdrop-blur-md border border-navy-700/50 p-6 shadow-2xl shadow-navy-950/80">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-500/10 flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-teal-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    Ce site utilise des cookies
                  </h3>
                  <button
                    onClick={handleRefuse}
                    className="text-slate-400 hover:text-white transition-colors p-1"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Nous utilisons Google Analytics et Google Ads pour mesurer l&apos;audience de notre site, suivre nos campagnes et am&eacute;liorer votre exp&eacute;rience.
                  Aucune donn&eacute;e personnelle n&apos;est vendue ou partag&eacute;e avec des tiers.
                  Consultez notre{" "}
                  <a
                    href="/politique-de-confidentialite"
                    className="text-teal-400 hover:text-teal-300 underline"
                  >
                    politique de confidentialit&eacute;
                  </a>{" "}
                  pour en savoir plus.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2.5 rounded-lg bg-teal-500 text-white font-semibold text-sm hover:bg-teal-400 transition-colors duration-200"
                  >
                    Accepter
                  </button>
                  <button
                    onClick={handleRefuse}
                    className="px-6 py-2.5 rounded-lg border border-navy-600 text-slate-300 font-semibold text-sm hover:border-teal-500/50 hover:text-teal-400 transition-colors duration-200"
                  >
                    Refuser
                  </button>
                  <a
                    href="/politique-de-confidentialite"
                    className="px-6 py-2.5 rounded-lg text-slate-400 font-medium text-sm hover:text-teal-400 transition-colors duration-200 text-center"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
