import { render } from "@react-email/render";
import EmailTemplate from "@/app/emails/EmailTemplate";
import EmailTemplateSpe from "@/app/emails/EmailTemplateSpe";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, formData } = await req.json();

    if (!email || !formData) {
      return NextResponse.json(
        { error: "Email ou données manquantes." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      // tls: {
      //   rejectUnauthorized: false, // Désactive la vérification du certificat
      // },
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
    console.log(process.env.SMTP_USER!, process.env.SMTP_PASS!);

    await transporter
      .verify()
      .then(() => console.log("SMTP connecté"))
      .catch((err) => {
        console.error("Erreur SMTP:", err);
        throw err;
      });

    console.log("email:", email);
    console.log("formData:", formData);
    console.log("formData entries:", Object.entries(formData));

    // Email pour le client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Confirmation de votre demande",
      html: await render(<EmailTemplate email={email} />),
    });

    // Email pour SPE
    const subject = formData.objet || "Nouvelle demande de contact";

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "informatique@spe.bzh",
      subject: subject,
      html: await render(<EmailTemplateSpe email={email} formData={formData} />),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur détaillée :", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
