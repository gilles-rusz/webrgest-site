"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-300 backdrop-blur-lg sm:px-12 ${
        isScrolled
          ? "border-b border-gold-400/15 bg-[rgba(7,15,28,0.97)] py-3"
          : "border-b border-gold-400/20 bg-[rgba(11,22,40,0.55)] py-4"
      }`}
    >
      <Link href="/" className="text-[15px] font-bold tracking-[0.04em] text-slate-300">
        WEB RG<span className="text-gold-400">.</span>EST
      </Link>

      <ul className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-[13px] transition-colors duration-200 ${
                pathname === link.href ? "text-slate-300" : "text-[#8bafc9] hover:text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/devis-gratuit"
        className="hidden rounded-[5px] bg-gold-400 px-5 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-85 md:inline-block"
      >
        Devis gratuit
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full border-b border-navy-800 bg-[rgba(7,15,28,0.97)] px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-[#8bafc9] transition-colors hover:text-slate-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/devis-gratuit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block rounded-[5px] bg-gold-400 px-5 py-2.5 text-sm font-medium text-white"
                >
                  Devis gratuit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
