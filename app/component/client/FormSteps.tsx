import React, { useState } from "react";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";

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

interface FormStepsProps {
  fields: Field[];
  steps: {
    step1: { title: string; description: string };
    step2: Record<ObjetType, { title: string; description: string }>;
  };
  onSubmit: (data: { email: string; formData: Record<string, any> }) => Promise<void>;
}

export default function FormSteps({ fields, steps, onSubmit }: FormStepsProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedObjet, setSelectedObjet] = useState<ObjetType | "">("");
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = (data: Record<string, any>) => {
    setFormData(data);
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = async (data: Record<string, any>) => {
    setIsLoading(true);
    const allData = { ...formData, ...data };
    try {
      await onSubmit({ email: allData.email, formData: allData });
      setMessage({
        text: `Votre message a bien été transmis. Un mail de confirmation vous a été envoyé à l'adresse ${allData.email}.`,
        isError: false
      });
    } catch (error) {
      setMessage({
        text: "Votre message n'a pas pu être envoyé.",
        isError: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentTitle = step === 1 ? steps.step1.title : selectedObjet ? steps.step2[selectedObjet].title : "Étape 2";
  const currentDescription = step === 1 ? steps.step1.description : selectedObjet ? steps.step2[selectedObjet].description : "";

  return (
    <div className="relative">
      <div className="absolute top-[200px] lg:top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-indigo-200 z-0" />
      <div className="relative z-2 mb-10 md:mb-30">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto py-20 lg:py-0 transition-all duration-500">
          <div className="text-center lg:text-left mb-6 lg:mb-0 lg:me-10 w-full max-w-lg">
            <h2 className="text-4xl font-bold">{currentTitle}</h2>
            <p className="py-6 text-gray-600">{currentDescription}</p>
          </div>
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
            <div className="card-body md:p-25 transition-all duration-700 min-h-[600px] justify-center">
              {step === 1 ? (
                <StepOneForm fields={fields} onNext={handleNextStep} setSelectedObjet={setSelectedObjet} formData={formData} setFormData={setFormData} />
              ) : selectedObjet ? (
                <StepTwoForm
                  selectedObjet={selectedObjet}
                  onPrevious={handlePreviousStep}
                  onSubmit={handleSubmit}
                  initialData={formData}
                />
              ) : null}
              {isLoading && <span className="loading loading-spinner loading-xl items-center"></span>}
              {message && (
                <p className={`text-center mt-4 ${message.isError ? 'text-red-500' : 'text-green-500'}`}>
                  {message.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
