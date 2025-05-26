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
    };

interface FormProps {
  title: string;
  description: string;
  fields: Field[];
}

export default function Form({ title, description, fields }: FormProps) {
  //Etat du select
  const [selectedObjet, setSelectedObjet] = useState("");

  return (
    <div className="hero bg-blue-400 h-[400px] md:h-[300px]">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl relative lg:top-[-100px]">
        {/* Titre et description */}
        <div className="text-center lg:text-left mb-6 lg:mb-0 lg:me-10">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="py-6 text-gray-600">{description}</p>
        </div>

        {/* Formulaire */}
        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
          <div className="card-body md:p-20">
            <fieldset className="fieldset">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field, index) => {
                  if (field.type === "select") return null; // on le sort du grid
                  return (
                    <div key={index} className="py-2">
                      <label className="label">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="input w-full bg-base-200 border-none focus:inset-shadow-sm/10 focus:outline-none focus:ring-0"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Sélection (hors grid) */}
              {fields.map((field, index) =>
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

              {/* Bouton */}
               <button
                className={`btn mt-6 w-full ${
                  selectedObjet === ""
                    ? "btn-disabled"
                    : "btn-primary"
                }`}
              >
                Suivant
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
