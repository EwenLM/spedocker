"use client";
import React from "react";
import FormSteps from "../component/client/FormSteps";
import { stringifyError } from "next/dist/shared/lib/utils";

export default function Page() {
  const handleForSubmit = async (data: {
    email: string;
    formData: Record<string, any>;
  }) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Lève une erreur pour que le catch du composant affiche le bon message
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur pendant envoi");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <header className="pt-40 text-center">
        <h1 className="text-6xl font-bold">Contactez-nous</h1>
      </header>
      <main className=" mt-20 lg:mt-35">
        <FormSteps
          onSubmit={handleForSubmit}
          fields={[
            {
              type: "text",
              label: "Nom",
              placeholder: "Dupont",
              name: "nom",
            },
            {
              type: "text",
              label: "Prénom",
              placeholder: "Claire",
              name: "prenom",
            },
            {
              type: "tel",
              label: "Téléphone",
              placeholder: "00.11.22.33.44",
              name: "telephone",
            },
            {
              type: "email",
              label: "Email",
              placeholder: "exemple@domaine.fr",
              name: "email",
            },
            {
              type: "select",
              label: "Objet",
              name: "objet",
              options: ["Demande de devis", "Renseignement", "Candidature"],
            },
          ]}
          steps={{
            step1: {
              title: "Coordonnées",
              description: "Renseigner vos informations",
            },
            step2: {
              "Demande de devis": {
                title: "Détails du projet",
                description:
                  "Précisez votre besoin. Vous pouvez joindre des photos, plans, etc...",
              },
              Candidature: {
                title: "Votre candidature",
                description: "Précisez le poste voulu et ajouter vos documents",
              },
              Renseignement: {
                title: "Posez votre question",
                description: "On vous répondra le plus rapidemment possible !",
              },
            },
          }}
        />
      </main>
    </>
  );
}
