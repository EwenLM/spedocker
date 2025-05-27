// pages/api/sendEmail.ts
import { render } from "@react-email/render";
import EmailTemplate from "@/app/component/client/EmailTemplate";
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Méthode non autorisée");

  const { email, formData } = req.body;
  if (!email || !formData) return res.status(400).json({ error: "Email ou données manquantes." });


  const transporter = nodemailer.createTransport({
    host: "smtp.exchange.com", 
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  transporter.sendMail({
    from: `"SPE" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Confirmation de votre demande",
    html: await render(<EmailTemplate email={email} />),
  });

  await transporter.sendMail({
    from: `"SPE - Site" <${process.env.SMTP_USER}>`,
    to: "informatique@spe.bzh",
    subject: "📥 Nouvelle demande client",
    html: `
      <h2>Détails du formulaire :</h2>
      <ul>
        ${Object.entries(formData)
          .map(([key, value]) => `<li><b>${key}</b> : ${value}</li>`)
          .join("")}
      </ul>
    `,
  });

  res.status(200).json({ success: true });
}
