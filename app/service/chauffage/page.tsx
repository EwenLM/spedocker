import React from "react";
import Service from "@/app/component/client/Service";
import { Earth, Wind, Smartphone, SquareRoundCorner } from "lucide-react";

export default function Page() {
  return (
    <Service
      title="Chauffage"
      description="Optimisez votre confort thermique avec nos solutions de chauffage adaptées à vos besoins."
      cards={[
          {
          title: "Géothermie",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Aérothermie",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Gestion intelligente",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Chauffage au sol",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
        ]}
    />
  );
}
