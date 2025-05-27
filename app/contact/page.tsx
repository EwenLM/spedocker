import React from "react";
import Link from "next/link";
import FormSteps from "../component/client/FormSteps";

export default function Page() {
  return (
    <>
      <header className="pt-40 text-center">
        <h1 className="text-6xl font-bold">Contact</h1>
      </header>
      <main className=" mt-20 lg:mt-35">
        <FormSteps
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
              description: "Merci de renseigner vos informations",
            },
            step2: {
              "Demande de devis": {
                title: "Détails du projet",
                description: "Précisez votre besoin. Vous pouvez joindre des photos, plans, etc...",
              },
              Candidature: {
                title: "Votre candidature",
                description: "Ajoutez vos documents et informations",
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
