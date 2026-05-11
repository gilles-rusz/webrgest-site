"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Clock, Mail, Star, ChevronRight,
  UtensilsCrossed, Wine, Cake, Leaf, Menu, X,
  Camera, Globe, ArrowRight, Heart
} from "lucide-react";

/* ─── DATA ─── */
const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#carte", label: "Notre Carte" },
  { href: "#apropos", label: "Notre Histoire" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

const MENU_CATEGORIES = [
  { id: "entrees", label: "Entrées", icon: Leaf },
  { id: "plats", label: "Plats", icon: UtensilsCrossed },
  { id: "desserts", label: "Desserts", icon: Cake },
  { id: "vins", label: "Vins", icon: Wine },
];

const MENU_ITEMS: Record<string, { name: string; desc: string; price: string; tag?: string }[]> = {
  entrees: [
    { name: "Foie gras mi-cuit maison", desc: "Chutney de figues, brioche toastée", price: "18€", tag: "Signature" },
    { name: "Tartare de saumon", desc: "Avocat, agrumes, sésame torréfié", price: "16€" },
    { name: "Velouté de butternut", desc: "Crème de châtaignes, noisettes concassées", price: "12€", tag: "Végétarien" },
    { name: "Salade de chèvre chaud", desc: "Miel de lavande, noix, mesclun", price: "14€" },
  ],
  plats: [
    { name: "Filet de bœuf Rossini", desc: "Escalope de foie gras poêlée, jus truffé", price: "34€", tag: "Signature" },
    { name: "Suprême de volaille fermière", desc: "Morilles, crème à l'estragon, pommes grenailles", price: "26€" },
    { name: "Pavé de saumon label rouge", desc: "Risotto aux asperges, beurre blanc citronné", price: "24€" },
    { name: "Souris d'agneau confite", desc: "7 heures, purée à l'ancienne, jus corsé", price: "28€" },
  ],
  desserts: [
    { name: "Tarte Tatin revisitée", desc: "Pommes caramélisées, glace vanille bourbon", price: "12€", tag: "Signature" },
    { name: "Fondant au chocolat noir", desc: "Cœur coulant, crème anglaise", price: "11€" },
    { name: "Crème brûlée traditionnelle", desc: "Vanille de Madagascar", price: "10€" },
    { name: "Assiette de fromages affinés", desc: "Sélection du moment, confiture de cerises noires", price: "14€" },
  ],
  vins: [
    { name: "Riesling Grand Cru", desc: "Domaine Trimbach, Alsace 2021", price: "48€" },
    { name: "Gewurztraminer Vendanges Tardives", desc: "Domaine Zind-Humbrecht 2019", price: "62€" },
    { name: "Pinot Noir Réserve", desc: "Cave de Ribeauvillé 2020", price: "38€" },
    { name: "Crémant d'Alsace Brut", desc: "Maison Wolfberger", price: "32€" },
  ],
};

const GALLERY = [
  { emoji: "🍽️", title: "Salle principale", desc: "Ambiance chaleureuse" },
  { emoji: "🥘", title: "Filet de bœuf Rossini", desc: "Notre signature" },
  { emoji: "🌿", title: "Terrasse verdoyante", desc: "Été en plein air" },
  { emoji: "🍷", title: "Cave à vins", desc: "300+ références" },
  { emoji: "👨‍🍳", title: "En cuisine", desc: "L'art culinaire" },
  { emoji: "🎂", title: "Tarte Tatin", desc: "Dessert signature" },
];

const REVIEWS = [
  { name: "Marie L.", rating: 5, text: "Un repas inoubliable ! Le filet Rossini est une merveille. Cadre magnifique et service impeccable.", date: "Mars 2026" },
  { name: "Pierre D.", rating: 5, text: "Meilleur restaurant de la région. Les produits sont d'une fraîcheur incomparable. On revient chaque mois.", date: "Février 2026" },
  { name: "Sophie & Marc", rating: 5, text: "Soirée parfaite pour notre anniversaire. Le menu dégustation est un voyage culinaire extraordinaire.", date: "Janvier 2026" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/* ─── HEADER ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }

  const handleNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center gap-2">
            <span className="text-2xl">🍴</span>
            <div>
              <span className={`text-xl font-serif font-bold ${scrolled ? "text-stone-900" : "text-white"}`}>
                La Table d&apos;Or
              </span>
              <span className={`block text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-amber-600" : "text-amber-400"}`}>
                Restaurant Gastronomique
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                scrolled ? "text-stone-600" : "text-white/90"
              }`}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/25">
              Réserver
            </a>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" aria-label="Menu">
            {mobileOpen
              ? <X className={scrolled ? "text-stone-900" : "text-white"} />
              : <Menu className={scrolled ? "text-stone-900" : "text-white"} />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-6 space-y-4">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}
                  className="block text-lg text-stone-700 hover:text-amber-600">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}
                className="block text-center px-5 py-3 rounded-full bg-amber-600 text-white font-semibold">
                Réserver une table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900" />
      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute top-20 left-10 text-8xl opacity-10 animate-float">🍷</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>🍽️</div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-5 py-2 rounded-full border border-amber-400/30 text-amber-400 text-sm tracking-widest uppercase mb-8">
            ✦ Cuisine Gastronomique ✦
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
          La Table <span className="text-amber-400">d&apos;Or</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Une expérience culinaire d&apos;exception au cœur de l&apos;Alsace.
          Produits locaux, savoir-faire artisanal et passion de la gastronomie française.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-600 text-white font-semibold text-lg hover:bg-amber-700 transition-all hover:shadow-xl hover:shadow-amber-600/25 hover:scale-105">
            Réserver une table <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#carte" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
            Découvrir la carte
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-8 mt-16 text-stone-400">
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-amber-400">15</div>
            <div className="text-xs uppercase tracking-wider">Ans d&apos;expérience</div>
          </div>
          <div className="w-px h-10 bg-stone-600" />
          <div className="text-center">
            <div className="flex justify-center text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <div className="text-xs uppercase tracking-wider">4.9/5 — 200+ avis</div>
          </div>
          <div className="w-px h-10 bg-stone-600" />
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-amber-400">1</div>
            <div className="text-xs uppercase tracking-wider">Étoile Michelin</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-amber-400 rotate-90" />
      </div>
    </section>
  );
}

/* ─── MENU / CARTE ─── */
function MenuSection() {
  const [active, setActive] = useState("entrees");

  return (
    <section id="carte" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Saveurs & Créations</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mt-3">
            Notre <span className="text-amber-600">Carte</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            Des plats élaborés avec des produits frais et locaux, au fil des saisons.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  active === cat.id
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/25"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}>
                <Icon className="w-4 h-4" /> {cat.label}
              </button>
            );
          })}
        </div>

        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MENU_ITEMS[active].map((item, i) => (
            <div key={i} className="menu-card rounded-2xl p-6 flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
                  {item.tag && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.tag === "Signature" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                    }`}>
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
              <span className="text-xl font-serif font-bold text-amber-600 whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-stone-400 text-sm italic">
            Menu dégustation 5 services — 68€ | Menu accord mets & vins — 95€
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="apropos" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Depuis 2011</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mt-3 mb-6">
              Notre <span className="text-amber-600">Histoire</span>
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Nichée au cœur de l&apos;Alsace, <strong>La Table d&apos;Or</strong> est née de la passion du Chef
                Antoine Muller pour la gastronomie française et les produits de notre terroir exceptionnel.
              </p>
              <p>
                Chaque jour, nous sélectionnons les meilleurs produits auprès de nos producteurs locaux pour
                vous offrir une cuisine authentique, créative et généreuse. Nos légumes viennent du maraîcher
                à 5km, nos viandes de l&apos;éleveur du village voisin.
              </p>
              <p>
                Notre étoile Michelin, obtenue en 2018, couronne un engagement quotidien pour l&apos;excellence
                et le respect du produit.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: "🌿", title: "Local", desc: "Producteurs à -30km" },
                { icon: "⭐", title: "1 Étoile", desc: "Guide Michelin" },
                { icon: "🍽️", title: "Fait maison", desc: "100% artisanal" },
              ].map((v, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-white border border-stone-200">
                  <div className="text-3xl mb-2">{v.icon}</div>
                  <div className="font-semibold text-stone-900 text-sm">{v.title}</div>
                  <div className="text-xs text-stone-500 mt-1">{v.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-8 sm:p-12">
                <div className="text-center">
                  <div className="text-8xl mb-6">👨‍🍳</div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Chef Antoine Muller</h3>
                  <p className="text-amber-600 font-medium mb-4">Chef étoilé — Meilleur Ouvrier de France</p>
                  <p className="text-stone-600 text-sm leading-relaxed italic">
                    &quot;La cuisine, c&apos;est l&apos;art de transformer des produits simples en moments
                    extraordinaires. Chaque assiette raconte l&apos;histoire de notre terroir alsacien.&quot;
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center text-4xl shadow-lg">
                ⭐
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY ─── */
function Gallery() {
  return (
    <section id="galerie" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Ambiance & Saveurs</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mt-3">
            Notre <span className="text-amber-600">Galerie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 cursor-pointer ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl sm:text-8xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500">
                  {img.emoji}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white font-semibold">{img.title}</div>
                <div className="text-white/70 text-sm">{img.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ─── */
function Reviews() {
  return (
    <section className="py-24 sm:py-32 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Témoignages</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mt-3">
            Ce qu&apos;en disent nos <span className="text-amber-400">clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-stone-300 leading-relaxed mb-6 italic">&quot;{r.text}&quot;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium">{r.name}</span>
                </div>
                <span className="text-stone-500 text-sm">{r.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Réservation</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 mt-3">
            Réservez votre <span className="text-amber-600">table</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            Pour une expérience inoubliable, réservez directement en ligne ou contactez-nous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Adresse", value: "12 Rue des Vignes, 68000 Colmar, Alsace" },
                { icon: Phone, label: "Téléphone", value: "03 89 12 34 56" },
                { icon: Mail, label: "Email", value: "reservation@latabledoor.fr" },
                { icon: Clock, label: "Horaires", value: "Mar-Sam : 12h-14h / 19h-22h | Dim : 12h-14h" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs text-stone-400 uppercase tracking-wider">{item.label}</div>
                      <div className="text-stone-800 font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-stone-900">Événements privés</h4>
              </div>
              <p className="text-sm text-stone-600">
                Anniversaires, mariages, séminaires — notre salle privatisable accueille jusqu&apos;à 40 convives
                pour vos moments d&apos;exception.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Nom *</label>
                  <input type="text" required placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Téléphone *</label>
                  <input type="tel" required placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Date *</label>
                  <input type="date" required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Nombre de convives *</label>
                  <select required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                    <option value="">Sélectionnez</option>
                    <option>1 personne</option>
                    <option>2 personnes</option>
                    <option>3-4 personnes</option>
                    <option>5-6 personnes</option>
                    <option>7-10 personnes</option>
                    <option>10+ personnes</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Message (optionnel)</label>
                <textarea rows={3} placeholder="Allergies, occasion spéciale, demandes..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 rounded-xl bg-amber-600 text-white font-semibold text-lg hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-600/25">
                Réserver ma table
              </button>

              {submitted && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-medium p-3 rounded-xl bg-green-50 border border-green-200">
                  ✓ Demande envoyée ! Nous vous confirmons votre réservation sous 24h.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍴</span>
              <div>
                <span className="text-lg font-serif font-bold text-white">La Table d&apos;Or</span>
                <span className="block text-[10px] tracking-[0.3em] uppercase text-amber-500">Restaurant Gastronomique</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Cuisine gastronomique française au cœur de l&apos;Alsace. Produits locaux et de saison,
              dans un cadre chaleureux et élégant.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Camera className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Globe className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Horaires</h4>
            <div className="space-y-2 text-sm">
              <p>Mardi — Samedi : 12h-14h / 19h-22h</p>
              <p>Dimanche : 12h-14h</p>
              <p>Lundi : Fermé</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>12 Rue des Vignes, 68000 Colmar</p>
              <p>03 89 12 34 56</p>
              <p>reservation@latabledoor.fr</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">&copy; {new Date().getFullYear()} La Table d&apos;Or. Tous droits réservés.</p>
          <p className="text-xs text-stone-500">
            Démo créée par <a href="https://webrgest.fr" className="text-amber-500 hover:text-amber-400">Web RG Est</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        background: "#fafaf9",
        color: "#1c1917",
        ["--font-sans" as string]: "var(--font-inter)",
        ["--font-serif" as string]: "var(--font-playfair)",
      }}
    >
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
