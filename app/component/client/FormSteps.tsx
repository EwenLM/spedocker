"use client";

import React, { useState } from "react";

type Field =
  | {
      type: "text" | "email" | "tel";
      label: string;
      placeholder?: string;
      name: string;
    }
  | {
      type: "select";
      label: string;
      name: string;
      options: string[];
    }
  | {
      type: "radio";
      label: string;
      name: string;
      options: string[];
    };

interface FormProps {
  title: string;
  description: string;
  fields: Field[];
}

// Formulaires secondaires selon l’objet
const secondForms: Record<string, Field[]> = {
  "Demande de devis": [
    {
      type: "radio",
      label: "Type de travaux",
      name: "travaux",
      options: ["Électricité", "Plomberie", "Chauffage", "Domotique"],
    },
    {
      type: "radio",
      label: "Type d'habitation",
      name: "habitation",
      options: ["Neuf", "Rénovation"],
    },
    {
      type: "text",
      label: "Nombre de pièces",
      placeholder: "Ex : 4",
      name: "pieces",
    },
    {
      type: "text",
      label: "Ville",
      placeholder: "Ex : Pontivy",
      name: "ville",
    },
  ],

  Candidature: [
    {
      type: "text",
      label: "Poste souhaité",
      placeholder: "Électricien, plombier…",
      name: "poste",
    },
    {
      type: "email",
      label: "Email professionnel",
      placeholder: "votre@email.fr",
      name: "emailpro",
    },
  ],
  Renseignement: [
    {
      type: "text",
      label: "Sujet",
      placeholder: "Votre question",
      name: "sujet",
    },
  ],
  Autre: [
    {
      type: "text",
      label: "Message",
      placeholder: "Détaillez votre besoin",
      name: "autre_message",
    },
  ],
};

export default function FormSteps({ title, description, fields }: FormProps) {
  const [selectedObjet, setSelectedObjet] = useState("");
  const [step, setStep] = useState<1 | 2>(1);

  // Formulaire affiché selon étape
  const currentFields = step === 1 ? fields : secondForms[selectedObjet] ?? [];

  return (
    <div className="relative">
      {/* Bande de fond bleue centrée */}
      <div className="absolute top-[200px] lg:top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-indigo-200 z-0" />

      <div className="relative z-10">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto py-20 lg:py-0 transition-all duration-500">
          {/* Titre + description */}
          <div className="text-center lg:text-left mb-6 lg:mb-0 lg:me-10">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="py-6 text-gray-600">{description}</p>
          </div>

          {/* Form */}
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
            <div className="card-body md:p-25">
              <fieldset className="fieldset">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentFields.map((field, index) => {
                    if (field.type === "select") return null;
                    {
                      currentFields.map((field, index) => {
                        if (field.type === "select") return null;

                        // 👉 Cas RADIO
                        if (field.type === "radio") {
                          return (
                            <div key={index} className="mb-2">
                              <label className="label">{field.label}</label>
                              <div className="flex flex-wrap gap-4">
                                {field.options.map((option, i) => (
                                  <label
                                    key={i}
                                    className="label cursor-pointer"
                                  >
                                    <input
                                      type="radio"
                                      name={field.name}
                                      value={option}
                                      className="radio checked:bg-primary"
                                    />
                                    <span className="ml-2">{option}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // 👉 Cas INPUT classique
                        return (
                          <div key={index} className="mb-2">
                            <label className="label">{field.label}</label>
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              className="input w-full bg-base-200 border-none focus:outline-none focus:ring-0"
                            />
                          </div>
                        );
                      });
                    }
                    return (
                      <div key={index} className="mb-2">
                        <label className="label">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={
                            "placeholder" in field ? field.placeholder : ""
                          }
                          className="input w-full bg-base-200 border-none focus:outline-none focus:ring-0"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Sélection (seulement à l'étape 1) */}
                {step === 1 &&
                  fields.map((field, index) =>
                    field.type === "select" ? (
                      <div className="mt-4" key={`select-${index}`}>
                        <label className="label">{field.label}</label>
                        <select
                          name={field.name}
                          className="select select-bordered w-full bg-base-200 border-none focus:outline-none focus:ring-0"
                          value={selectedObjet}
                          onChange={(e) => setSelectedObjet(e.target.value)}
                        >
                          <option value="">Sélectionner un objet</option>
                          {field.options.map((opt, i) => (
                            <option key={i} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : null
                  )}

                {/* Boutons */}
                <div className="flex flex-col gap-4 mt-8">
                  {step === 2 && (
                    <button
                      onClick={() => setStep(1)}
                      className="btn btn-outline w-full"
                    >
                      Retour
                    </button>
                  )}
                  <button
                    className={`btn w-full ${
                      step === 1 && selectedObjet === ""
                        ? "btn-disabled"
                        : "btn-primary"
                    }`}
                    onClick={() => {
                      if (step === 1 && selectedObjet !== "") {
                        setStep(2);
                      }
                    }}
                  >
                    {step === 1 ? "Suivant" : "Envoyer"}
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
