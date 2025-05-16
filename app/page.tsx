import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/client/Header";
import { Plug2, ShowerHead, Flame, SlidersHorizontal, House, Store, MapPin } from "lucide-react";
import Count from "./component/client/Count";
import Link from "next/link";
import Card from "@/app/component/client/Card";

// Tableau des Services
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

//Tableau secteur
const secteurs = [
  {
    title: "Résidentiel",
    icon: House,
    color: "black",
    items: ["Maisons", "Habitat Collectif", "Appartement"],
  },
  {
    title: "Tertiaire",
    icon: Store,
    color: "black",
    items: ["Commerce", "Administration", "Collectivités"],
  },
  {
    title: "Zone d'activité",
    icon: MapPin,
    color: "black",
    items: [
      "100 km autour de Pontivy",
      "Saint-Brieuc/ Ploërmel",
      "Vannes/Lorient",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ================Cards Services)================ */}
      {/* Contenu centré sur la page */}
      <main id="main" className="container flex flex-col mx-auto ">
        <section
          id="service"
          className="flex flex-col md:my-10  items-center "
        >
          <h2 className="text-3xl md:text-4xl text-center">Nos Services</h2>
          <div className="md:flex my-7">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </section>

        {/* ================Call to action================ */}
        <div className="bg-white py-5 mb-10 flex flex-col md:flex-row rounded-lg mx-auto shadow-sm md:w-full justify-center items-center">
          <h2 className="text-3xl text-center mx-3 mb-2-3 md:me-5">
            A vos côtés depuis <Count /> ans
          </h2>
          <Link href={""} className="btn btn-secondary text-lg">
            Découvrire notre histoire
          </Link>
        </div>

      {/* =================Card Secteurs================== */}
        <section
          id="secteur"
          className="flex flex-col md:my-10  items-center bg-base-200 md:bg-base-100"
        >
          <div className="bg-base-200 w-full absolute md:h-[270px]"></div>
          <h2 className="text-3xl md:text-4xl pt-3 text-center z-5">Secteurs d'activité</h2>
          <div className="md:flex my-7">
            {secteurs.map((secteur, index) => (
              <Card key={index} {...secteur} />
            ))}
          </div>
        </section>
        
        {/* ==============Certif et partenaires=========== */}
        

      </main>
    </>
  );
}
