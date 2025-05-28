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
      type: "radio" | "checkbox";
      label: string;
      name: string;
      options: string[];
    }
  | {
      type: "file";
      label: string;
      name: string;
    }
  | {
      type: "textarea";
      label: string;
      name: string;
      placeholder?: string;
    };

interface FormStepsProps {
  fields: Field[];
  steps: {
    step1: { title: string; description: string };
    step2: Record<string, { title: string; description: string }>;
  };
onSubmit: (data: { email: string, formData: Record<string, any> }) => Promise<void>;
}

// Formulaires secondaires selon l’objet
const secondForms: Record<string, Field[]> = {
  "Demande de devis": [
    {
      type: "checkbox", // mutlti selection
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
      name: "pieces1",
    },
    {
      type: "text",
      label: "Ville",
      placeholder: "Ex : Pontivy",
      name: "ville1",
    },
    {
      type: "textarea",
      label: "Votre Message",
      name: "message",
      placeholder: "Décrivez votre besoin en quelques mots...",
    },
    {
      type: "file",
      label: "Ajoutez des fichiers (plans, photos…)",
      name: "fichiers",
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
      type: "file",
      label: "CV",
      name: "cv",
    },
    {
      type: "file",
      label: "Lettre de motivation",
      name: "lettre",
    },
    {
      type: "textarea",
      label: "Votre message",
      name: "message",
      placeholder: "Exprimez-vous librement…",
    },
  ],
  Renseignement: [
    {
      type: "text",
      label: "Sujet",
      placeholder: "Votre question",
      name: "sujet",
    },
    {
      type: "textarea",
      label: "Votre message",
      name: "message",
      placeholder: "Détaillez votre question...",
    },
  ],
};

export default function FormSteps({ fields, steps, onSubmit }: FormStepsProps) {
  const [selectedObjet, setSelectedObjet] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const currentTitle =
    step === 1
      ? steps.step1.title
      : steps.step2[selectedObjet]?.title || "Étape 2";

  const currentDescription =
    step === 1
      ? steps.step1.description
      : steps.step2[selectedObjet]?.description || "";

  // Formulaire affiché selon étape
  const currentFields =
    step === 1 ? fields : (secondForms[selectedObjet] ?? []);

  // Données de l'étape 1
  const [step1Data, setStep1Data] = useState<Record<string, any>>({});

  //Envoi du formulaire
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    const jsonData: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (jsonData[key]) {
        jsonData[key] = Array.isArray(jsonData[key])
          ? [...jsonData[key], value]
          : [jsonData[key], value];
      } else {
        jsonData[key] = value;
      }
    });

    // Fusionne avec les données de l’étape 1
    const allData = { ...step1Data, ...jsonData };
    const email = allData.email;

    try {
      console.log(email, allData);
      console.log("formData:", formData);
      await onSubmit({ email, formData: allData });

      setIsSubmitted(true);
      setMessage(
        "Votre message a bien été envoyé. Un email de confirmation vous a été envoyé."
      );
      formElement.reset();
    } catch (error) {
      setMessage("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  return (
    <div className="relative ">
      {/* Bande de fond bleue centrée */}
      <div className="absolute top-[200px] lg:top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-indigo-200 z-0" />

      <div className="relative z-2 mb-10 md:mb-30">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto py-20 lg:py-0 transition-all duration-500">
          {/* Titre + description */}
          <div className="text-center lg:text-left mb-6 lg:mb-0 lg:me-10">
            <h2 className="text-4xl font-bold">{currentTitle}</h2>
            <p className="py-6 text-gray-600">{currentDescription}</p>
          </div>

          {/* Form */}
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
            <div className="card-body md:p-25">
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentFields
                      .filter((field) => field.type !== "select")
                      .map((field, index) => {
                        // CASE : checkbox
                        if (field.type === "checkbox") {
                          return (
                            <div key={index} className="mb-2 md:col-span-2">
                              <label className="label">{field.label}</label>
                              <div className="flex flex-wrap gap-4">
                                {field.options.map((option, i) => (
                                  <label
                                    key={i}
                                    className="label cursor-pointer"
                                  >
                                    <input
                                      type="checkbox"
                                      name={field.name}
                                      value={option}
                                      className="checkbox checkbox-primary"
                                    />
                                    <span className="ml-2">{option}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // CASE : radio
                        if (field.type === "radio") {
                          return (
                            <div key={index} className="mb-2 md:col-span-2">
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
                                      required
                                    />
                                    <span className="ml-2">{option}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // CASE : textarea
                        if (field.type === "textarea") {
                          return (
                            <div key={index} className="mb-2 md:col-span-2">
                              <label className="label">{field.label}</label>
                              <textarea
                                name={field.name}
                                placeholder={
                                  "placeholder" in field
                                    ? field.placeholder
                                    : ""
                                }
                                className="textarea w-full bg-base-200 border-none focus:outline-none focus:inset-shadow-sm/10 focus:ring-0"
                                rows={4}
                              />
                            </div>
                          );
                        }

                        // CASE : fichier
                        if (field.type === "file") {
                          return (
                            <div key={index} className="mb-2 md:col-span-2">
                              <label className="label">{field.label}</label>
                              <input
                                type="file"
                                name={field.name}
                                className="file-input file-input-bordered w-full"
                              />
                            </div>
                          );
                        }

                        // CASE : input classique (text, email, tel)
                        return (
                          <div key={index} className="mb-2">
                            <label className="label">{field.label}</label>
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={
                                "placeholder" in field ? field.placeholder : ""
                              }
                              className="input w-full bg-base-200 border-none focus:outline-none focus:inset-shadow-sm/10 focus:ring-0"
                              required
                              autoComplete="off"
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

                  {/* Input pour piéger les bots, invisble pour les utilisateurs */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />

                  {/* Boutons */}
                  <div className="flex flex-col gap-4 mt-8">
                    {step === 2 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn btn-outline w-full"
                        >
                          Retour
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary w-full"
                        >
                          Envoyer
                        </button>
                      </>
                    )}

                    {step === 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (selectedObjet !== "") {
                            // Récupère les données du formulaire de l’étape 1
                            const form = document.querySelector("form");
                            if (form) {
                              const formData = new FormData(form);
                              const data: Record<string, any> = {};
                              formData.forEach((value, key) => {
                                data[key] = value;
                              });
                              setStep1Data(data);
                            }
                            setStep(2);
                          }
                        }}
                        className={`btn w-full ${selectedObjet === "" ? "btn-disabled" : "btn-primary"}`}
                      >
                        Suivant
                      </button>
                    )}
                  </div>
                  {message && (
                    <p className="text-center text-green-600 my-3">{message}</p>
                  )}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
