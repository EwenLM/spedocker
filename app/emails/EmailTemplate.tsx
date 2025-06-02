// /emails/ConfirmationEmail.tsx
import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
}

export default function EmailTemplate({ email }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Confirmation de votre demande de contact</Preview>
      <Body>
        <Container>
          <Heading>Bonjour,</Heading>
          <Text>
            Nous avons bien reçu votre message. Nous vous contacterons dès que possible.
          </Text>
          <Text>L’équipe SPE.</Text>
        </Container>
      </Body>
    </Html>
  );
}
