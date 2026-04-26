import { motion } from "framer-motion";
import { Plug, Wrench, ShieldCheck, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Plug,
    title: "Installation électrique",
    desc: "Câblage, tableaux, prises et points lumineux pour neuf et rénovation, dans les règles de l'art.",
  },
  {
    icon: Wrench,
    title: "Dépannage urgent",
    desc: "Panne, court-circuit, disjoncteur qui saute ? Intervention rapide à Cotonou et environs.",
  },
  {
    icon: ShieldCheck,
    title: "Mise aux normes",
    desc: "Audit complet et mise en conformité de votre installation pour une sécurité totale.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage & décoration",
    desc: "Solutions LED, éclairage intérieur et extérieur élégant et économique sur-mesure.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Nos prestations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Un savoir-faire <span className="italic text-primary">complet</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            De la simple prise au tableau général, nous prenons en charge tous vos besoins électriques avec rigueur et passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition-smooth overflow-hidden"
            >
              {/* gradient hover */}
              <div className="absolute inset-0 bg-gradient-blue opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                  <s.icon className="w-7 h-7 text-gold-foreground" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-white transition-smooth">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/80 transition-smooth">
                  {s.desc}
                </p>
                <div className="mt-6 h-0.5 w-10 bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
