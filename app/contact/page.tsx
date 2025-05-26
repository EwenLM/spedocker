import React from "react";
import Link from "next/link";
import FormSteps from "../component/client/FormSteps";

export default function Page() {
  return (
    <>
      <header className="pt-40 text-center">
        <h1 className="text-6xl font-bold">Contact</h1>
      </header>
      <main className="h-screen mt-20 lg:mt-35">
        <FormSteps
          title="Vos coordonnées"
          description="Commencez par renseigner vos coordonnées et l'objet de votre demande."
          fields={[
            {
              type: "text",
              label: "Nom",
              placeholder: "Doe",
              name: "nom",
            },
            {
              type: "text",
              label: "Prénom",
              placeholder: "John",
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
              placeholder: "john@doe.fr",
              name: "email",
            },
            {
              type: "select",
              label: "Objet",
              name: "objet",
              options: [
                "Demande de devis",
                "Renseignement",
                "Candidature",
                "Autre",
              ],
            },
          ]}
        />
      </main>
    </>
  );
}
