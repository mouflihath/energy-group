import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Energy Group — Électricité & Plomberie partout au Bénin" },
      {
        name: "description",
        content:
          "Energy Group : électriciens et plombiers certifiés au Bénin. Cotonou, Calavi, Porto-Novo, Abomey, Bohicon, Parakou. Installation, dépannage urgent, mise aux normes, éclairage, plomberie. Devis gratuit, 7j/7.",
      },
      { property: "og:title", content: "Energy Group — Électricité & Plomberie au Bénin" },
      {
        property: "og:description",
        content: "Installation électrique, plomberie, dépannage et éclairage partout au Bénin. Une équipe rapide, fiable et certifiée.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
