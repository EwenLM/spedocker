import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/app/emails/EmailTemplate";
import EmailTemplateSpe from "@/app/emails/EmailTemplateSpe";

// Initialise Resend avec clé API
const resend = new Resend(process.env.API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, formData } = await req.json();

    if (!email || !formData) {
      return NextResponse.json(
        { error: "Email ou données manquantes." },
        { status: 400 }
      );
    }

    const subject = formData.objet || "Nouvelle demande de contact";

    //  Email pour le client
    await resend.emails.send({
      from: "SPE <nepasrepondre@spe.bzh>", 
      to: email,
      subject: "Confirmation de votre demande",
      react: EmailTemplate({ email }), 
    });

    //  Email pour SPE
    await resend.emails.send({
      from: "Formulaire SPE <nepasrepondre@spe.bzh>>",
      to: "informatique@spe.bzh",
      subject: subject,
      react: EmailTemplateSpe({ email, formData }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}
