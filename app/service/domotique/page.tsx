import React from "react";
import Service from "@/app/component/client/Service";
import { Lightbulb, Lock, BatteryCharging, Camera } from "lucide-react";

export default function Page() {
  return (
    <main className=" mt-20 lg:mt-35">
      <Service
        title="Domotique"
        description="Intégrez la domotique dans votre foyer pour un confort et une sécurité accrus. Nous installons des systèmes intelligents pour contrôler l'éclairage, le chauffage et plus encore depuis votre smartphone."
        cards={[
          {
          title: "Commandes centralisées",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Sonorisation",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Alarmes",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Vidéosurveillance",
          description: "Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
        ]}
      />
    </main>
  );
}
