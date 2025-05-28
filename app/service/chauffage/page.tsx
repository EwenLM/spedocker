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
          icon: Earth, // Replace with actual icon import
          color: "blue",
          items: [
            "Installation de pompes à chaleur",
            "Économie d'énergie",
            "Confort thermique",
          ],
          button: "En savoir +",
          buttonLink: "/services/realisations",
        },
        {
          title: "Aérothermie",
          icon: Wind, // Replace with actual icon import
          color: "green",
          items: [
            "Systèmes aérothermiques",
            "Efficacité énergétique",
            "Confort toute l'année",
          ],
          button: "En savoir +",
          buttonLink: "/services/realisations",
        },
        {
          title: "Gestion intelligente",
          icon: Smartphone, // Replace with actual icon import
          color: "purple",
          items: [
            "Thermostats connectés",
            "Contrôle à distance",
            "Optimisation de la consommation",
          ],
          button: "En savoir +",
          buttonLink: "/services/realisations",
        },
        {
          title: "Chauffage au sol",
          icon: SquareRoundCorner, // Replace with actual icon import
          color: "orange",
          items: [
            "Installation de chauffage au sol",
            "Confort thermique",
            "Économie d'espace",
          ],
          button: "En savoir +",
          buttonLink: "/services/realisations",
        },
      ]}
    />
  );
}
