import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Energy Group,%0A%0AJe suis ${encodeURIComponent(form.name)} (${encodeURIComponent(form.phone)}).%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/2290197038615?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Contactez-nous
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Parlons de <span className="italic text-primary">votre projet</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Devis gratuit, réponse rapide. Nous sommes à votre écoute 7j/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, title: "Téléphone", value: "+229 01 40 89 49 06", href: "tel:+2290140894906" },
              { icon: MessageCircle, title: "WhatsApp", value: "+229 01 97 03 86 15", href: "https://wa.me/2290197038615" },
              { icon: Mail, title: "Email", value: "Energygroup03@gmail.com", href: "mailto:Energygroup03@gmail.com" },
              { icon: MapPin, title: "Adresse", value: "Calavi, Tokan 1er Von, après le carrefour Tokan", href: "https://maps.google.com/?q=Calavi+Tokan+Benin" },
            ].map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-gold hover:shadow-soft transition-smooth"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <info.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {info.title}
                  </div>
                  <div className="font-medium text-foreground mt-1">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-56 shadow-soft">
              <iframe
                title="Energy Group localisation"
                src="https://www.google.com/maps?q=Calavi+Tokan+Benin&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-gradient-hero text-white rounded-3xl p-8 lg:p-12 shadow-elegant relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
            <div className="relative space-y-5">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Demandez votre devis gratuit
              </h3>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                  Votre nom
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/40 focus:border-gold focus:outline-none transition-smooth"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                  Téléphone
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/40 focus:border-gold focus:outline-none transition-smooth"
                  placeholder="+229 ..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                  Votre besoin
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/40 focus:border-gold focus:outline-none transition-smooth resize-none"
                  placeholder="Décrivez brièvement votre projet ou problème..."
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-gold text-gold-foreground px-7 py-4 rounded-xl font-semibold shadow-gold hover:scale-[1.02] transition-smooth"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Message envoyé !
                  </>
                ) : (
                  <>
                    Envoyer via WhatsApp
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
