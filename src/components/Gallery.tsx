import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Droplets, HardHat } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpeg";
import w4 from "@/assets/work-4.jpeg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import p1 from "@/assets/plumb-1.jpg";
import p2 from "@/assets/plumb-2.jpg";
import p3 from "@/assets/plumb-3.jpg";
import s1 from "@/assets/site-1.jpg";
import s2 from "@/assets/site-2.jpg";
import s3 from "@/assets/site-3.jpeg";

type Item = { img: string; title: string; cat: string };

const categories: { key: string; label: string; icon: typeof Zap; items: Item[] }[] = [
  {
    key: "elec",
    label: "Électricité",
    icon: Zap,
    items: [
      { img: w1, title: "Tableau électrique", cat: "Installation" },
      { img: w2, title: "Salon LED design", cat: "Éclairage" },
      { img: w3, title: "Éclairage extérieur", cat: "Villa" },
      { img: w4, title: "Câblage commercial", cat: "Bureau" },
      { img: w5, title: "Diagnostic complet", cat: "Dépannage" },
      { img: w6, title: "Cuisine moderne", cat: "Éclairage" },
    ],
  },
  {
    key: "plomb",
    label: "Plomberie",
    icon: Droplets,
    items: [
      { img: p1, title: "Robinetterie chic", cat: "Salle de bain" },
      { img: p2, title: "Réparation cuivre", cat: "Dépannage" },
      { img: p3, title: "Chauffe-eau & réseau", cat: "Installation" },
      { img: p1, title: "Mitigeur design", cat: "Sur-mesure" },
      { img: p3, title: "Tuyauterie soignée", cat: "Neuf" },
      { img: p2, title: "Fuite & étanchéité", cat: "Urgence" },
    ],
  },
  {
    key: "chantier",
    label: "Chantiers",
    icon: HardHat,
    items: [
      { img: s1, title: "Bâtiment R+2", cat: "Cotonou" },
      { img: s2, title: "Coordination équipe", cat: "Calavi" },
      { img: s3, title: "Réseaux techniques", cat: "Porto-Novo" },
      { img: s1, title: "Suivi de gros œuvre", cat: "Abomey-Calavi" },
      { img: s3, title: "Pré-câblage", cat: "Parakou" },
      { img: s2, title: "Étude de plans", cat: "Bohicon" },
    ],
  },
];

function CategoryCarousel({ items }: { items: Item[] }) {
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
    <div>
      <div className="container mx-auto px-5 lg:px-10 flex justify-end gap-3 mb-6">
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
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="realisations" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Nos réalisations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Quelques projets <span className="italic text-primary">livrés au Bénin</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Électricité, plomberie et coordination de chantiers — partout au Bénin.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-smooth border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-soft"
                    : "bg-card text-foreground border-border hover:border-gold"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-gold" : "text-primary"}`} />
                {c.label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 bg-gold rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <CategoryCarousel items={current.items} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
