import Service from "@/app/component/client/Service";

export default function Page() {
  return (
    <Service
      title="Électricité"
      description="Découvrez nos services d'électricité adaptés à vos besoins. Que ce soit pour des rénovations, des mises aux normes, des installations de maisons connectées ou des systèmes de ventilation, nous avons l'expertise nécessaire pour réaliser vos projets en toute sécurité et efficacité."
      cards={[
        {
          title: "Rénovations",
          description: "Vos travaux de rénovation électrique, de la mise en conformité à l'installation de nouveaux équipements.",
          image: "renovations.jpg",
          alt: "renovations électriques prise fils tournevis",
          buttonLink: "/realisations",
        },
        {
          title: "Remise aux normes",
          description: "Assurez la sécurité de votre installation électrique avec nos services de mise aux normes. Nous garantissons que votre système respecte les dernières réglementations en vigueur.",
          image: "normes.jpg",
          alt: "normes électriques tournevis compteur",
          buttonLink: "/realisations",
        },
        {
          title: "Maison Connectée",
          description: "¨Profitez de la domotique pour automatiser votre maison. De la gestion de l'éclairage à la sécurité, nous installons des systèmes connectés pour un confort optimal.",
          image: "connecte.jpg",
          alt: "Maison connectée domotique smartphone salon",
          buttonLink: "/realisations",
        },
        {
          title: "Ventilation",
          description: "Optimisez la qualité de l'air intérieur avec nos systèmes de ventilation. Nous installons des solutions adaptées pour assurer une circulation d'air saine et efficace dans votre maison.",
          image: "ventilation.jpeg",
          alt: "ventilation maison système d'aération",
          buttonLink: "/realisations",
        },
      ]}
    />
  );
}
