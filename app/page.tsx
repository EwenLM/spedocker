import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/client/Header";
import { Plug2, ShowerHead, Flame, SlidersHorizontal } from "lucide-react";
import Count from "./component/client/Count";
import Link from "next/link";
import Card from "@/app/component/client/Card";

const services = [
  {
    title: "Electricité",
    icon: Plug2,
    color: "yellow",
    items: [
      "Rénovations",
      "Remise aux normes",
      "Maison connectée",
      "Ventilation",
    ],
  },
  {
    title: "Plomberie",
    icon: ShowerHead,
    color: "blue",
    items: ["Rénovations", "Chauffe-eau", "Maison neuve", "Accessibilité PMR"],
  },
  {
    title: "Chauffage",
    icon: Flame,
    color: "red",
    items: [
      "Géothermie",
      "Aérothermie",
      "Gestion intelligente",
      "Chauffage au sol",
    ],
  },
  {
    title: "Domotique",
    icon: SlidersHorizontal,
    color: "green",
    items: [
      "Commandes centralisées",
      "Sonorisation",
      "Alarmes",
      "Vidéosurveillance",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Contenu centré sur la page */}
      <main id="main" className="container flex flex-col mx-auto ">
        <section
          id="presentation"
          className="flex flex-col md:my-10  items-center "
        >
          <h2 className="text-3xl md:text-4xl text-center">Nos Services</h2>
          <div className="md:flex my-7">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </section>

        <div className="bg-white py-5 mb-10 flex flex-col md:flex-row rounded-lg mx-auto shadow-sm md:w-full justify-center items-center">
          <h2 className="text-3xl text-center mx-3 mb-2-3 md:me-5">
            A vos côtés depuis <Count /> ans
          </h2>
          <Link href={""} className="btn btn-secondary text-lg">
            Découvrire notre histoire
          </Link>
        </div>
      </main>
    </>
  );
}
