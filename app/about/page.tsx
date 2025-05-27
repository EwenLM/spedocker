import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="pt-40 text-center">
        <h1 className="text-6xl font-bold">Notre Histoire</h1>
      </header>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-30 container mx-auto">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 flex flex-col md:text-end">
            <time className="font-mono italic">1996</time>
            <h3 className="text-lg font-black">Création de l'entreprise</h3>
            Créée en 1996 par Marc Allain, l'activité était au départ uniquement
            concentrée sur des travaux électriques.
            <Image
              src={`/images/about/marc_allain.jpg`}
              alt={"marc allain gérant électricien electricien"}
              width={300}
              height={200}
              className="md:self-end mt-3 rounded-2xl"
            />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2008</time>
            <h3 className="text-lg font-black">Rachat</h3>
            La société a ensuite été rachetée par son fils Laurent Allain et
            Yann Guegan en 2008 où elle prit son nom actuel "SPE" pour Société
            Pontivyenne d'Électricité.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic"></time>
            <h3 className="text-lg font-black">Evolution</h3>
            L'activité s'est rapidement étendue à d'autre domaines d'expertise
            (plomberie et chauffage) et différents marchés (tertiaire, marchés
            publics et privés). Le succès rencontré a permis une croissance
            pérenne et des recrutements pour arriver aujourd'hui à une équipe
            d'une dizaine de salariés dont la qualité du travail est reconnue.
            <Image
              src={`/images/about/batiment.jpg`}
              alt={"marc allain gérant électricien electricien"}
              width={300}
              height={200}
              className="md:self-end mt-3 rounded-2xl"
            />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic"></time>
            <h3 className="text-lg font-black">
              Partenaria avec les entreprise locales
            </h3>
            Au fil du temps, des partenariats se sont créés avec des entreprises
            locales, notamment dans le domaine des énergies renouvelables et de
            la domotique. On peut citer par exemple les pompes à chaleur en
            géothermie ou aérothermie fabriquées par Arkteos (44) ou les
            produits de la société Delta Dore (35).
            <Image
              src={`/images/about/drapeau.png`}
              alt={"marc allain gérant électricien electricien"}
              width={300}
              height={200}
              className="md:self-end mt-3 rounded-2xl"
            />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic"></time>
            <h2 className="text-lg font-black">Avenir de l'entreprise</h2>
            Les dernières innovations dans nos métiers promettent à l'avenir des
            projets de plus en plus complexes en conception et riches en
            fonctionnalités (connectivité des produits, nouvelles technologies,
            normes environnementales). Nous maintenons une veille technologique
            constante auprès de nos fournisseurs pour garantir de proposer les
            solutions les plus récentes. Cet engagement de monter en compétence
            et en qualité de réalisation fait partie intégrante de la vision de
            SPE. Ces connaissances permettent également de proposer un
            accompagnement personnalisé et adapté aux spécificités de chaque
            projet.
            <Image
              src={`/images/about/innovation.jpg`}
              alt={"marc allain gérant électricien electricien"}
              width={300}
              height={200}
              className="md:self-end mt-3 rounded-2xl"
            />
          </div>
        </li>
      </ul>
    </>
  );
}
