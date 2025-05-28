import Service from "@/app/component/client/Service";
import { Plug2 } from "lucide-react";

export default function Page() {
  return (
    <Service
      title="Électricité"
      description="Tous vos travaux d'électricité, rénovation, installation, mise aux normes..."
      cards={[
        {
          title: "Rénovation",
          icon: Plug2,
          color: "yellow",
          items: ["Maisons", "Appartements", "Locaux professionnels"],
          button: "En savoir +",
          buttonLink: "/services/realisations"
        },
        {
          title: "Remise aux normes",
          icon: Plug2,
          color: "yellow",
          items: ["Mise aux normes", "Sécurité électrique", "Conformité"],
          button: "En savoir +",
          buttonLink: "/services/realisations"
        },
        {
          title: "Maison connectée",
          icon: Plug2,
          color: "yellow",
          items: ["Domotique", "Gestion intelligente", "Sécurité"],
          button: "En savoir +",
          buttonLink: "/services/realisations"
        },
        {
          title: "Ventilation",
          icon: Plug2,
          color: "yellow",
          items: ["Systèmes de ventilation", "Qualité de l'air", "Confort thermique"],
          button: "En savoir +",
          buttonLink: "/services/realisations"
        }
      ]}
    />
  );
}