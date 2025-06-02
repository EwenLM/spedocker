import React from "react";
import Service from "@/app/component/client/Service";
import {} from "lucide-react";

export default function page() {
  return (
    <main>
      <Service
        title="Plomberie"
        description="Découvrez nos services de plomberie pour une installation et un entretien de qualité."
        cards={[
          {
            title: "Rénovations",
            description:
              "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
          {
            title: "Chauffe-eau",
            description:
              "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
          {
            title: "Maison Neuve",
            description:
              "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
          {
            title: "Accesibilité PMR",
            description:
              "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
        ]}
      />
    </main>
  );
}
