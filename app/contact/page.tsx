"use client";
import React from "react";
import FormSteps from "../component/client/FormSteps";
import { Main } from "next/document";

export default function Page() {
  const handleForSubmit = async (data: { email: string; formData: Record<string, any> }) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur pendant l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      throw error;
    }
  };

  const fields = [
    { type: "text" as const, label: "Nom", placeholder: "Dupont", name: "nom" },
    { type: "text" as const, label: "Prénom", placeholder: "Claire", name: "prenom" },
    { type: "tel" as const, label: "Téléphone", placeholder: "00.11.22.33.44", name: "telephone" },
    { type: "email" as const, label: "Email", placeholder: "exemple@domaine.fr", name: "email" },
    { type: "select" as const, label: "Objet", name: "objet", options: ["Demande de devis", "Candidature", "Renseignement"] },
  ];

  const steps = {
    step1: { title: "Coordonnées", description: "Renseignez vos informations" },
    step2: {
      "Demande de devis": { title: "Demande de devis", description: "Précisez vos besoins pour le devis" },
      Candidature: { title: "Votre candidature", description: "Précisez le poste voulu et ajoutez vos documents" },
      Renseignement: { title: "Posez votre question", description: "On vous répondra le plus rapidement possible !" },
    },
  };

  return (
    <>
      <header className="pt-40 text-center">
        <h1 className="text-6xl font-bold">Contactez-nous</h1>
      </header>
      <main className="mt-20 lg:mt-35">
        <FormSteps onSubmit={handleForSubmit} fields={fields} steps={steps} />
      </main>
    </>
  );
}
