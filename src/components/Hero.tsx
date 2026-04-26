import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Experts certifiés au Bénin",
    title: "L'électricité,",
    accent: "en toute confiance",
    desc: "Installation, dépannage et mise aux normes. Une équipe à votre écoute 24/7 pour des interventions rapides et soignées.",
  },
  {
    image: hero2,
    eyebrow: "Éclairage sur-mesure",
    title: "Donnez vie",
    accent: "à vos espaces",
    desc: "Des solutions d'éclairage élégantes et économiques pour mettre en valeur chaque pièce de votre maison ou bureau.",
  },
  {
    image: hero3,
    eyebrow: "Dépannage express",
    title: "Une panne ?",
    accent: "On arrive vite.",
    desc: "Diagnostic précis, intervention rapide. Notre équipe résout vos urgences électriques avec professionnalisme.",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 35 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="accueil" className="relative h-screen min-h-[640px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, i) => (
            <div className="embla__slide relative flex-[0_0_100%] h-full" key={i}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.eyebrow}
                  className={`w-full h-full object-cover ${selected === i ? "animate-ken-burns" : ""}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-5 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-medium tracking-widest uppercase text-gold">
                  {slides[selected].eyebrow}
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
                {slides[selected].title}{" "}
                <span className="block bg-gradient-gold bg-clip-text text-transparent italic">
                  {slides[selected].accent}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed">
                {slides[selected].desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+2290140894906"
                  className="group inline-flex items-center gap-3 bg-gradient-gold text-gold-foreground px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-105 transition-smooth"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-smooth" />
                  Appeler maintenant
                </a>
                <a
                  href="https://wa.me/2290197038615"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-smooth"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        <button
          aria-label="précédent"
          onClick={() => emblaApi?.scrollPrev()}
          className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-gold hover:text-gold-foreground hover:border-gold transition-smooth"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selected === i ? "w-10 bg-gold" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          aria-label="suivant"
          onClick={() => emblaApi?.scrollNext()}
          className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-gold hover:text-gold-foreground hover:border-gold transition-smooth"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
