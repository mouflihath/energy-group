import { motion } from "framer-motion";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";
import about from "@/assets/hero-1.jpg";

const stats = [
  { icon: Award, value: "10+", label: "Années d'expertise" },
  { icon: Users, value: "500+", label: "Clients satisfaits" },
  { icon: Clock, value: "24/7", label: "Service d'urgence" },
  { icon: ShieldCheck, value: "100%", label: "Travaux garantis" },
];

export function About() {
  return (
    <section id="apropos" className="py-28 lg:py-36 bg-secondary/40 relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={about} alt="Équipe Energy Group" className="w-full h-[520px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-4 lg:-right-10 bg-gradient-gold rounded-2xl p-6 shadow-gold max-w-[220px]"
            >
              <div className="font-display text-4xl font-bold text-gold-foreground">A+</div>
              <div className="text-xs text-gold-foreground/80 font-medium mt-1">
                Note moyenne sur 500+ interventions à Cotonou
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold rounded-full opacity-40" />
          </motion.div>

          {/* content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
              À propos d'Energy Group
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre partenaire <span className="italic text-primary">électrique</span> à Cotonou
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Depuis plus de 10 ans, Energy Group accompagne particuliers et professionnels dans tous leurs projets électriques. Notre équipe d'électriciens certifiés intervient avec sérieux, transparence et matériel de qualité.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Notre engagement : des installations sûres, durables et conformes aux normes, livrées dans les délais convenus.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-5 border border-border hover:border-gold transition-smooth"
                >
                  <s.icon className="w-7 h-7 text-gold mb-3" />
                  <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
