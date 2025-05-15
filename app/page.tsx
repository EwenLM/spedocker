import Image from "next/image";
import styles from "./page.module.css";
import "@/app/component/client/Header";
import Header from "./component/client/Header";
import { Plug2, ShowerHead, Flame, SlidersHorizontal } from "lucide-react";
import Count from "./component/client/Count";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header />

    {/* Contenu centré sur la page */}
      <main id="main" className="container flex flex-col mx-auto ">
        <section id="presentation" className="flex flex-col my-10 items-center ">
          <h2 className="text-3xl md:text-4xl text-center">Nos Services</h2>
          <div className="md:flex my-7">
            <article className="my-5 md:my-0 card bg-white w-70 h-90 md:mx-3 flex flex-col justify-center items-center shadow-sm group  hover:bg-yellow-500">
              <h3 className="card-title text-xl mb-7">Electricité</h3>
              <figure>
                <Plug2 size={60} className="text-yellow-500  group-hover:text-black" />
              </figure>
              <div className=" mt-3 flex flex-col items-center">
                <ul className="text-center mb-7">
                  <li>Rénovations</li>
                  <li>Remise aux normes</li>
                  <li>Maison connectée</li>
                  <li>Ventilation</li>
                </ul>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">En savoir +</button>
                </div>
              </div>
            </article>
            <article className="my-5 md:my-0 card bg-white w-70 h-90 md:mx-3 flex flex-col justify-center items-center shadow-sm group  hover:bg-blue-500">
              <h3 className="card-title text-xl mb-7">Plomberie</h3>
              <figure>
                <ShowerHead size={60} className="text-blue-500  group-hover:text-black" />
              </figure>
              <div className=" mt-3 flex flex-col items-center">
                <ul className="text-center mb-7">
                  <li>Rénovations</li>
                  <li>Chauffe-eau</li>
                  <li>Maison neuve</li>
                  <li>Accessibilité PMR</li>
                </ul>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">En savoir +</button>
                </div>
              </div>
            </article>
            <article className="my-5 md:my-0 card bg-white w-70 h-90 md:mx-3 flex flex-col justify-center items-center shadow-sm group  hover:bg-red-500">
              <h3 className="card-title text-xl mb-7">Electricité</h3>
              <figure>
                <Flame size={60} className="text-red-500  group-hover:text-black" />
              </figure>
              <div className=" mt-3 flex flex-col items-center">
                <ul className="text-center mb-7">
                  <li>Géothermie</li>
                  <li>Aérothermie</li>
                  <li>Gestion intelligente</li>
                  <li>Chauffage au sol</li>
                </ul>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">En savoir +</button>
                </div>
              </div>
            </article>
            <article className="my-5 md:my-0 card bg-white w-70 h-90 md:mx-3 flex flex-col justify-center items-center shadow-sm group  hover:bg-green-500">
              <h3 className="card-title text-xl mb-7">Electricité</h3>
              <figure>
                <SlidersHorizontal size={60} className="text-green-500  group-hover:text-black" />
              </figure>
              <div className=" mt-3 flex flex-col items-center">
                <ul className="text-center mb-7">
                  <li>Commande centraliséees</li>
                  <li>Sonorisation</li>
                  <li>Alarmes</li>
                  <li>Vidéosurveillance</li>
                </ul>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">En savoir +</button>
                </div>
              </div>
            </article>
            
          </div>
        </section>

        <div className="bg-white py-5 mb-10 flex rounded-lg mx-auto shadow-sm w-4/5 justify-center items-center">
          <h2 className="text-3xl text-center me-5">A vos côtés depuis <Count/> ans</h2>
          <Link href={""} className="btn btn-secondary text-lg">Découvrire notre histoire</Link>
        </div>
        
      </main>
    </>
  );
}
