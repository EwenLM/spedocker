import React from "react";
import Service from "../../component/client/Service";
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
          description: "Contrôlez tous vos appareils depuis une seule interface. Nos solutions de domotique vous permettent de gérer l'éclairage, le chauffage et la sécurité de votre maison en toute simplicité.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Sonorisation",
          description: "Sonorisez votre espace avec des systèmes audio intégrés. Profitez d'une expérience sonore immersive dans chaque pièce de votre maison.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Alarmes",
          description: "Protégez votre maison avec nos systèmes d'alarme intelligents. Recevez des notifications en temps réel et gérez la sécurité de votre foyer depuis votre smartphone.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
          {
          title: "Vidéosurveillance",
          description: "Surveillez votre propriété à distance avec nos systèmes de vidéosurveillance. Accédez aux caméras en direct et enregistrez des séquences pour une sécurité renforcée.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
          },
        ]}
      />
    </main>
  );
}
