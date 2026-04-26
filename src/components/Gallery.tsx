import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const items = [
  { img: w1, title: "Tableau électrique", cat: "Installation" },
  { img: w2, title: "Salon LED design", cat: "Éclairage" },
  { img: w3, title: "Éclairage extérieur", cat: "Villa" },
  { img: w4, title: "Câblage commercial", cat: "Bureau" },
  { img: w5, title: "Diagnostic complet", cat: "Dépannage" },
  { img: w6, title: "Cuisine moderne", cat: "Éclairage" },
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
    <section id="realisations" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
              Nos réalisations
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quelques projets <span className="italic text-primary">livrés</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="précédent"
              onClick={() => emblaApi?.scrollPrev()}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="suivant"
              onClick={() => emblaApi?.scrollNext()}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-5 lg:px-10 container mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%] group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-soft hover:shadow-elegant transition-smooth">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-70 group-hover:opacity-90 transition-smooth" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-smooth">
                  <span className="inline-block text-[0.65rem] tracking-widest uppercase text-gold font-semibold mb-2">
                    {it.cat}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{it.title}</h3>
                  <div className="h-0.5 w-0 group-hover:w-12 bg-gold mt-3 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="container mx-auto px-5 lg:px-10 mt-10 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`aller à ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              selected === i ? "w-10 bg-primary" : "w-5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
