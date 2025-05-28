import { render } from "@react-email/render";
import EmailTemplate from "@/app/emails/EmailTemplate";
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
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      tls: {
        rejectUnauthorized: false, // Désactive la vérification du certificat
      },
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
console.log("SMTP_USER:", process.env.SMTP_USER);

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

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Test",
      text: "Ceci est un test.",
    });

    // // Email pour le client
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: email,
    //   subject: "Confirmation de votre demande",
    //   html: await render(<EmailTemplate email={email} />),
    // });

    // // Email pour SPE
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: "informatique@spe.bzh",
    //   subject: "Nouvelle demande client",
    //   html: `
    //     <h2>Détails du formulaire :</h2>
    //     <ul>
    //       ${Object.entries(formData)
    //         .map(([key, value]) => `<li><b>${key}</b> : ${value}</li>`)
    //         .join("")}
    //     </ul>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur détaillée :", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
