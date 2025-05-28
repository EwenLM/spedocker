import React from 'react'
import Service from "@/app/component/client/Service";
import {  } from "lucide-react";

export default function page() {
  return (
    <main>
      <Service
        title="Plomberie"
        description="Découvrez nos services de plomberie pour une installation et un entretien de qualité."
        cards={[
          {
            title: "Installation de plomberie",
            icon: null, // Replace with actual icon import
            color: "blue",
            items: [
              "Réseaux d'eau potable",
              "Systèmes d'évacuation",
              "Appareils sanitaires",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
          {
            title: "Dépannage plomberie",
            icon: null, // Replace with actual icon import
            color: "green",
            items: [
              "Fuites d'eau",
              "Bouchons et obstructions",
              "Réparations urgentes",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
          {
            title: "Entretien de plomberie",
            icon: null, // Replace with actual icon import
            color: "purple",
            items: [
              "Nettoyage des canalisations",
              "Contrôle des installations",
              "Prévention des pannes",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
          {
            title: "Rénovation de salle de bain",
            icon: null, // Replace with actual icon import
            color: "orange",
            items: [
              "Installation de douches et baignoires",
              "Aménagements personnalisés",
              "Mise aux normes sanitaires",
            ],
            button: "En savoir +",
            buttonLink: "/services/realisations",
          },
        ]}
      />
    </main>
  )
}
