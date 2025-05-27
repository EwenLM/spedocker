import React from "react";

type Field =
  | { type: "text" | "email" | "tel"; label: string; name: string; placeholder?: string }
  | { type: "select"; label: string; name: string; options: string[] };

interface GenericFormProps {
  fields: Field[];
  onSubmit: (data: Record<string, string>) => void;
  buttonLabel?: string;
}

export default function GenericForm({ fields, onSubmit, buttonLabel = "Ajouter" }: GenericFormProps) {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, index) => {
        if (field.type === "select") {
          return (
            <div key={index}>
              <label className="label">{field.label}</label>
              <select
                className="select select-bordered w-full"
                name={field.name}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="">Choisir une option</option>
                {field.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={index}>
            <label className="label">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="input input-bordered w-full"
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          </div>
        );
      })}

      <button type="submit" className="btn btn-primary w-full">
        {buttonLabel}
      </button>
    </form>
  );
}
