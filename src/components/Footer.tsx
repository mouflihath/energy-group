import { Zap, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
      <div className="container mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="bg-gradient-gold p-2 rounded-lg">
                <Zap className="w-5 h-5 text-gold-foreground fill-gold-foreground" />
              </div>
              <div className="font-display font-bold leading-none">
                <div className="text-xl tracking-tight">ENERGY</div>
                <div className="text-[0.65rem] tracking-[0.3em] text-gold font-sans font-semibold">GROUP</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed text-sm">
              Votre expert en installation et dépannage électrique & plomberie partout au Bénin —
              Cotonou, Calavi, Porto-Novo, Abomey, Bohicon, Parakou et environs. Travail soigné, certifié et garanti.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-5 text-gold">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li><a href="#accueil" className="hover:text-gold transition-smooth">Accueil</a></li>
              <li><a href="#services" className="hover:text-gold transition-smooth">Services</a></li>
              <li><a href="#apropos" className="hover:text-gold transition-smooth">À propos</a></li>
              <li><a href="#realisations" className="hover:text-gold transition-smooth">Réalisations</a></li>
              <li><a href="#contact" className="hover:text-gold transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-5 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><a href="tel:+2290140894906" className="hover:text-gold">+229 01 40 89 49 06</a></li>
              <li className="flex items-start gap-2"><MessageCircle className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><a href="https://wa.me/2290197038615" className="hover:text-gold">+229 01 97 03 86 15</a></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><a href="mailto:Energygroup03@gmail.com" className="hover:text-gold break-all">Energygroup03@gmail.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><span>Calavi, Tokan 1er Von</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Energy Group. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
