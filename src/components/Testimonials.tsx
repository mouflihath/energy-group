import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariam K.",
    role: "Particulier — Calavi",
    text: "Intervention ultra rapide pour une panne en pleine nuit. Diagnostic clair, prix juste, travail soigné. Je recommande Energy Group sans hésiter !",
    rating: 5,
  },
  {
    name: "Jean-Baptiste A.",
    role: "Restaurateur — Cotonou",
    text: "Nous avons confié toute l'installation électrique de notre nouveau restaurant à l'équipe. Professionnels, ponctuels et le résultat est impeccable.",
    rating: 5,
  },
  {
    name: "Aïcha D.",
    role: "Architecte — Akpakpa",
    text: "Un partenaire de confiance pour mes chantiers. Toujours à l'écoute, propositions intelligentes, finitions parfaites.",
    rating: 5,
  },
  {
    name: "Olivier M.",
    role: "Propriétaire — Tokan",
    text: "Mise aux normes complète de ma maison après leur audit. Equipe polie, propre, et un vrai sens du service. Bravo !",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
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
    <section id="temoignages" className="py-28 lg:py-36 bg-gradient-hero text-white relative overflow-hidden">
      {/* decorative shapes */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Ils nous font confiance
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            La voix de <span className="italic text-gold">nos clients</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div className="flex-[0_0_100%]" key={i}>
                <div className="max-w-3xl mx-auto text-center px-4">
                  <Quote className="w-14 h-14 text-gold mx-auto mb-6 opacity-80" />
                  <AnimatePresence mode="wait">
                    {selected === i && (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="font-display text-2xl md:text-3xl leading-relaxed italic mb-8 text-white/95">
                          « {t.text} »
                        </p>
                        <div className="flex justify-center gap-1 mb-4">
                          {Array.from({ length: t.rating }).map((_, k) => (
                            <Star key={k} className="w-5 h-5 fill-gold text-gold" />
                          ))}
                        </div>
                        <div className="font-semibold text-lg">{t.name}</div>
                        <div className="text-sm text-white/60">{t.role}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selected === i ? "w-10 bg-gold" : "w-5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
