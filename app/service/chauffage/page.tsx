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
          description: "Profitez de l'énergie de la terre pour chauffer votre maison. Nos systèmes géothermiques sont efficaces et respectueux de l'environnement.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Aérothermie",
          description: "Exploitez l'air extérieur pour chauffer votre intérieur. Nos solutions aérothermiques sont idéales pour une maison éco-énergétique.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Gestion intelligente",
          description: "Automatisez votre chauffage avec des systèmes connectés. Contrôlez la température de votre maison depuis votre smartphone pour un confort optimal.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Chauffage au sol",
          description: "Découvrez le confort du chauffage au sol. Une solution discrète et efficace pour une chaleur douce et homogène dans toute votre maison.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
        ]}
    />
  );
}
