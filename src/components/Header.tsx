"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-1.5 sm:py-3" : "py-2 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl sm:rounded-3xl border px-2.5 transition-all duration-300 sm:px-4 ${
            isScrolled
              ? "border-white/10 bg-navy-950/86 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
              : "border-white/8 bg-white/[0.035] backdrop-blur-md"
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 py-1.5 sm:gap-3 sm:py-2.5"
            aria-label="Retour à l'accueil Web RG Est"
          >
            <span className="relative flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-teal-300/20 bg-navy-900/70 shadow-[0_0_30px_rgba(45,212,191,0.10)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <Image src="/logo.png" alt="Web RG Est" width={42} height={42} className="rounded-lg sm:rounded-xl" priority />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-black tracking-wide text-white">WEB RG EST</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-gold-400">
                Création Web
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-navy-950/50 p-1.5 backdrop-blur-xl lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-teal-400/15 ring-1 ring-teal-300/20"
                      transition={{ type: "spring", stiffness: 430, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/devis-gratuit"
              className="group inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-5 py-3 text-sm font-black text-white shadow-[0_14px_36px_rgba(20,184,166,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-[0_18px_48px_rgba(45,212,191,0.32)]"
            >
              Devis gratuit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] lg:hidden"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex flex-col gap-1">
              <span
                className={`block h-0.5 w-4 sm:w-5 rounded-full bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 sm:w-5 rounded-full bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 sm:w-5 rounded-full bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-navy-950/95 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-base font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-teal-400/10 text-teal-300"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/devis-gratuit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-6 py-3.5 font-black text-white transition-colors hover:bg-teal-400"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
