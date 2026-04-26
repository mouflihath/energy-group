import { useState, useEffect } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-10 flex items-center justify-between h-20">
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-smooth" />
            <div className="relative bg-gradient-blue p-2 rounded-lg">
              <Zap className="w-5 h-5 text-gold fill-gold" strokeWidth={2.5} />
            </div>
          </div>
          <div className={`font-display font-bold leading-none ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="text-lg tracking-tight">ENERGY</div>
            <div className="text-[0.65rem] tracking-[0.3em] text-gold font-sans font-semibold">GROUP</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium relative transition-smooth hover:text-gold ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="tel:+2290140894906"
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-gold hover:scale-105 transition-smooth"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground font-medium py-2 border-b border-border/50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+2290140894906"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-gold-foreground px-5 py-3 rounded-full font-semibold mt-2"
              >
                <Phone className="w-4 h-4" /> Appeler maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
