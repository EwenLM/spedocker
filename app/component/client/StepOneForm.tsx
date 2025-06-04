import React, { useState, ChangeEvent, FormEvent } from "react";

type ObjetType = "Demande de devis" | "Candidature" | "Renseignement";

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

interface StepOneFormProps {
  fields: Field[];
  onNext: (data: Record<string, any>) => void;
  setSelectedObjet: React.Dispatch<React.SetStateAction<ObjetType | "">>;
  formData: Record<string, any>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export default function StepOneForm({ fields, onNext, setSelectedObjet, formData, setFormData }: StepOneFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    fields.forEach((field) => {
      if (!("options" in field) && !formData[field.name]) {
        newErrors[field.name] = `${field.label} est requis`;
        isValid = false;
      }
    });

    if (formData["telephone"] && !/^\d+$/.test(formData["telephone"])) {
      newErrors["telephone"] = "Le numéro de téléphone doit contenir uniquement des chiffres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <div key={index} className="mb-2">
            <label className="label">{field.label}</label>
            {field.type === "select" ? (
              <select
                name={field.name}
                className="select select-bordered w-full bg-base-200"
                onChange={(e) => {
                  handleChange(e);
                  setSelectedObjet(e.target.value as ObjetType);
                }}
                value={formData[field.name] || ""}
                required
              >
                <option value="">Sélectionner un objet</option>
                {field.options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="input w-full bg-base-200"
                onChange={handleChange}
                value={formData[field.name] || ""}
                required
              />
            )}
            {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <button type="submit" className="btn btn-primary w-full">
          Suivant
        </button>
      </div>
    </form>
  );
}
