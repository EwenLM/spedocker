import Header from "./component/client/Header";
import {
  Plug2,
  ShowerHead,
  Flame,
  SlidersHorizontal,
  House,
  Store,
  MapPin,
} from "lucide-react";
import Count from "./component/client/Count";
import Link from "next/link";
import Card from "./component/client/Card";
import ArticleCarousel from "./component/client/ArticleCarousel";
import Note from "./component/client/Note";

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
    button: "En savoir +",
    buttonLink: "/services/electricite",
  },
  {
    title: "Plomberie",
    icon: ShowerHead,
    color: "blue",
    items: ["Rénovations", "Chauffe-eau", "Maison neuve", "Accessibilité PMR"],
    button: "En savoir +",
    buttonLink: "/services/plomberie",
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
    button: "En savoir +",
    buttonLink: "/services/chauffage",
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
    button: "En savoir +",
    buttonLink: "/services/domotique",
  },
];

//Tableau secteur
const secteurs = [
  {
    title: "Résidentiel",
    icon: House,
    color: "black",
    items: ["Maisons", "Habitat Collectif", "Appartement"],
    button: "En savoir +",
    buttonLink: "#",
  },
  {
    title: "Tertiaire",
    icon: Store,
    color: "black",
    items: ["Commerce", "Administration", "Collectivités"],
    button: "En savoir +",
    buttonLink: "#",
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
    button: "En savoir +",
    buttonLink: "#",
  },
];

// Tableau article
const articles = [
  {
    title: "Certifications",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, velit! Tempore quidem, impedit voluptas cum recusandae placeat voluptates facilis saepe. Sit at quia veritatis facere maxime accusamus, ipsum vitae eius voluptas laborum alias nobis velit! Quam facere ipsum et. Non qui a odit voluptatem, suscipit quo excepturi, quae repellat amet officiis sapiente obcaecati eaque cupiditate natus quam, et omnis. Fugit cupiditate aspernatur, blanditiis deserunt exercitationem ea! Autem, ipsa fugiat neque at praesentium voluptatum minima ratione animi? At autem ab porro, nostrum atque accusantium corrupti iste eligendi ut officia pariatur iusto saepe, quis magnam mollitia laborum rem ex velit nihil voluptatem.",
    images: ["qualibat", "knx", "installateur", "certif_legrand"],
    links: [
      "https://www.qualibat.com/",
      "https://www.knx.org/knx-fr/pour-les-professionnels/index.php",
      "https://www.electriciencertifie.fr/rechercher-un-electricien/spe-noyal-pontivy",
      "https://www.deltadore.fr/actualites/conseil/professionnels-domotique-delta-dore",
    ],
    alts: [
      "qualibat chaudières pompe à chaleurs vmc logo",
      "knx partner logo",
      "electriciencertifé.fr, réseau legrand logo",
      "delta dore logo",
    ],
  },
  {
    title: "Partenaires",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, velit! Tempore quidem, impedit voluptas cum recusandae placeat voluptates facilis saepe. Sit at quia veritatis facere maxime accusamus, ipsum vitae eius voluptas laborum alias nobis velit! Quam facere ipsum et. Non qui a odit voluptatem, suscipit quo excepturi, quae repellat amet officiis sapiente obcaecati eaque cupiditate natus quam, et omnis. Fugit cupiditate aspernatur, blanditiis deserunt exercitationem ea! Autem, ipsa fugiat neque at praesentium voluptatum minima ratione animi? At autem ab porro, nostrum atque accusantium corrupti iste eligendi ut officia pariatur iusto saepe, quis magnam mollitia laborum rem ex velit nihil voluptatem.",
    images: ["arkteos", "atlantic", "dahua", "legrand", "deltadore", "acova"],
    links: [
      "https://www.legrand.fr/",
      "https://www.atlantic.fr/",
      "https://www.dahuasecurity.com/",
      "https://www.deltadore.fr/",
      "https://www.arkteos.com/",
      "https://www.acova.fr/",
    ],
    alts: [
      "qualibat chaudières pompe à chaleurs vmc logo",
      "knx partner logo",
      "electriciencertifé.fr, réseau legrand logo",
      "delta dore logo",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ================Cards Services)================ */}
      {/* Contenu centré sur la page */}
      <main id="main" className="flex flex-col mx-auto mb-20 container">
        <section id="service" className="flex flex-col md:my-10  items-center ">
          <h2 className="text-3xl font-bold md:text-4xl text-center">Nos Services</h2>
          <div className="md:flex my-7">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </section>

        {/* ================Call to action================ */}
        <div className="bg-white py-5 mb-10 flex flex-col md:flex-row rounded-lg mx-auto shadow-sm md:w-full justify-center items-center container">
          <h2 className="text-3xl text-center mx-3 mb-2-3 md:me-5">
            A vos côtés depuis <Count /> ans
          </h2>
          <Link href={"/a-propos"} className="btn mt-3 lg:mt-0 btn-secondary text-lg">
            Découvrire notre histoire
          </Link>
        </div>

        {/* =================Card Secteurs================== */}
        <section
          id="secteur"
          className="flex flex-col md:my-10  items-center bg-base-200 md:bg-base-100"
        >
          <div className="bg-base-200 w-full absolute md:h-[270px]"></div>
          <h2 className="text-3xl font-bold md:text-4xl pt-3 text-center z-5">
            Secteurs d'activité
          </h2>
          <div className="md:flex my-7">
            {secteurs.map((secteur, index) => (
              <Card key={index} {...secteur} />
            ))}
          </div>
        </section>

        {/* ==============Certif et partenaires=========== */}
        <section className="w-full">
          <ArticleCarousel articles={articles} />
        </section>

        {/* =============Avis Google============== */}
        <Note />
      </main>
    </>
  );
}
