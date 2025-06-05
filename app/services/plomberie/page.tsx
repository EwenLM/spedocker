import React from "react";
import Service from "@/app/component/client/Service";
import {} from "lucide-react";

export default function Page() {
  return (
    <main>
      <Service
        title="Plomberie"
        description="Découvrez nos services de plomberie pour une installation et un entretien de qualité."
        cards={[
          {
            title: "Rénovations",
            description:
              "Réalisez vos travaux de rénovation de plomberie avec nos experts. Que ce soit pour une salle de bain, une cuisine ou un système de chauffage, nous sommes là pour vous accompagner.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
          {
            title: "Chauffe-eau",
            description:
              "Installez ou remplacez votre chauffe-eau avec nos services professionnels. Nous vous garantissons une installation conforme et efficace pour un confort optimal.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
          {
            title: "Maison Neuve",
            description:
              "Pour les constructions neuves, nous proposons des services de plomberie sur mesure. De la conception à l'installation, nous assurons une plomberie fiable et durable.",
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
          {
            title: "Accesibilité PMR",
            description:
              "Nous nous engageons à rendre votre salle de bain accessible aux personnes à mobilité réduite. Nos solutions incluent des barres d'appui, des douches à l'italienne et des toilettes adaptées.",      
            image: "normes.jpg",
            alt: "normes électriques tournevis compteur",
            buttonLink: "/realisations",
          },
        ]}
      />
    </main>
  );
}
