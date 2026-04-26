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
      { title: "Energy Group — Électricien à Cotonou & Calavi | Installation, Dépannage" },
      {
        name: "description",
        content:
          "Energy Group : électricien certifié à Cotonou et Calavi. Installation, dépannage urgent, mise aux normes, éclairage. Devis gratuit, intervention 7j/7.",
      },
      { property: "og:title", content: "Energy Group — Expert électricien Cotonou & Calavi" },
      {
        property: "og:description",
        content: "Installation, dépannage et éclairage à Cotonou. Une équipe rapide, fiable et certifiée à votre service.",
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
