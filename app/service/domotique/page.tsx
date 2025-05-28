import React from "react";
import Service from "@/app/component/client/Service";
import { Lightbulb, Lock, BatteryCharging, Camera } from "lucide-react";

export default function Page() {
  return (
    <main className=" mt-20 lg:mt-35">
      <Service
        title="Domotique"
        description="Intégrez la domotique dans votre quotidien pour une maison intelligente et connectée."
        cards={[
          {
            title: "Contrôle d'accès",
            icon: Lock,
            color: "blue",
            items: [
              "Serrures connectées",
              "Contrôle à distance",
              "Sécurité renforcée",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
          {
            title: "Éclairage intelligent",
            icon: Lightbulb,
            color: "yellow",
            items: [
              "Ampoules connectées",
              "Scénarios d'éclairage",
              "Économie d'énergie",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
          {
            title: "Gestion de l'énergie",
            icon: BatteryCharging,
            color: "green",
            items: [
              "Suivi de consommation",
              "Optimisation énergétique",
              "Panneaux solaires",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
          {
            title: "Sécurité et surveillance",
            icon: Camera,
            color: "red",
            items: [
              "Caméras connectées",
              "Alarmes intelligentes",
              "Détection de mouvement",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
        ]}
      />
    </main>
  );
}
