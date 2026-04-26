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
      { title: "Energy Group — Électricité & Plomberie à Cotonou & Calavi" },
      {
        name: "description",
        content:
          "Energy Group : électricien et plombier certifiés à Cotonou et Calavi. Installation, dépannage urgent, mise aux normes, éclairage, plomberie. Devis gratuit, intervention 7j/7.",
      },
      { property: "og:title", content: "Energy Group — Électricité & Plomberie Cotonou & Calavi" },
      {
        property: "og:description",
        content: "Installation électrique, plomberie, dépannage et éclairage à Cotonou. Une équipe rapide, fiable et certifiée.",
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
