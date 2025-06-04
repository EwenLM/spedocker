import React, { useState, ChangeEvent, FormEvent } from "react";

type ObjetType = "Demande de devis" | "Candidature" | "Renseignement";

interface Field {
  type: "text" | "textarea" | "file" | "checkbox" | "radio";
  label: string;
  name: string;
  options?: string[];
  placeholder?: string;
}

interface StepTwoFormProps {
  selectedObjet: ObjetType;
  onPrevious: () => void;
  onSubmit: (data: Record<string, any>) => Promise<void>;
}

const secondForms: Record<ObjetType, Field[]> = {
  "Demande de devis": [
    { type: "checkbox", label: "Type de travaux", name: "travaux", options: ["Électricité", "Plomberie", "Chauffage", "Domotique"] },
    { type: "radio", label: "Type d'habitation", name: "habitation", options: ["Neuf", "Rénovation"] },
    { type: "text", label: "Nombre de pièces", placeholder: "Ex : 4", name: "pieces" },
    { type: "text", label: "Ville", placeholder: "Ex : Pontivy", name: "ville" },
    { type: "textarea", label: "Votre Message", name: "message", placeholder: "Décrivez votre besoin en quelques mots..." },
    { type: "file", label: "Ajoutez des fichiers (plans, photos…)", name: "fichiers" },
  ],
  Candidature: [
    { type: "text", label: "Poste souhaité", placeholder: "Électricien, plombier…", name: "poste" },
    { type: "file", label: "CV", name: "cv" },
    { type: "file", label: "Lettre de motivation", name: "lettre" },
    { type: "textarea", label: "Votre message", name: "message", placeholder: "Exprimez-vous librement…" },
  ],
  Renseignement: [
    { type: "text", label: "Sujet", placeholder: "Votre question", name: "sujet" },
    { type: "textarea", label: "Votre message", name: "message", placeholder: "Détaillez votre question..." },
  ],
};

export default function StepTwoForm({ selectedObjet, onPrevious, onSubmit }: StepTwoFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked ? [...(prev[name] || []), value] : [...(prev[name] || [])].filter((item: string) => item !== value)
      }));
    } else if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      setFormData(prev => ({ ...prev, [name]: files }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    const currentFields = secondForms[selectedObjet];

    currentFields.forEach(field => {
      if (field.type !== "file" && !formData[field.name]) {
        newErrors[field.name] = `${field.label} est requis`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await onSubmit(formData);
    }
  };

  const currentFields = secondForms[selectedObjet];

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentFields.map((field, index) => {
          if (field.type === "checkbox" || field.type === "radio") {
            return (
              <div key={index} className="mb-2 md:col-span-2">
                <label className="label">{field.label}</label>
                <div className="flex flex-wrap gap-4">
                  {field.options?.map((option, i) => (
                    <label key={i} className="label cursor-pointer">
                      <input
                        type={field.type}
                        name={field.name}
                        value={option}
                        className={field.type === "checkbox" ? "checkbox checkbox-primary" : "radio checked:bg-primary"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
                {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
              </div>
            );
          } else if (field.type === "textarea") {
            return (
              <div key={index} className="mb-2 md:col-span-2">
                <label className="label">{field.label}</label>
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  className="textarea w-full bg-base-200"
                  onChange={handleChange}
                />
                {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
              </div>
            );
          } else if (field.type === "file") {
            return (
              <div key={index} className="mb-2 md:col-span-2">
                <label className="label">{field.label}</label>
                <input
                  type="file"
                  name={field.name}
                  className="file-input file-input-bordered w-full"
                  onChange={handleChange}
                />
              </div>
            );
          } else {
            return (
              <div key={index} className="mb-2">
                <label className="label">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="input w-full bg-base-200 border-none focus:outline-none focus:inset-shadow-sm/10 focus:ring-0"
                  onChange={handleChange}
                />
                {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <button type="button" onClick={onPrevious} className="btn btn-outline w-full">
          Retour
        </button>
        <button type="submit" className="btn btn-primary w-full">
          Envoyer
        </button>
      </div>
    </form>
  );
}
