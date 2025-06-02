import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  formData: Record<string, any>;
}

// Ensemble des champs à exclure
const excludedFields = new Set(['_honey']);

export default function EmailTemplate({ email, formData }: EmailTemplateProps) {
  // Filtrer les champs à exclure
  const filteredFormData = Object.entries(formData).filter(
    ([key]) => !excludedFields.has(key)
  );

  // Extraire l'objet du formulaire pour l'utiliser comme sujet
  const subject = formData.objet || "Nouvelle demande de contact";

  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body>
        <Container>
          <Section>
            <Heading as="h2">Détails de la demande</Heading>
            <Hr />
            {filteredFormData.map(([key, value]) => (
              <Text key={key}>
                <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
              </Text>
            ))}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
