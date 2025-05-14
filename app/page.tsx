import Image from "next/image";
import styles from "./page.module.css";
import "@/app/component/client/Header";
import Header from "./component/client/Header";
import { Plug2, ShowerHead, Flame, SlidersHorizontal   } from 'lucide-react';


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="presentation" className="flex flex-col my-10 items-center">
          <h2 className="text-3xl md:text-4xl text-center">Nos Services</h2>
          <div className="md:flex my-7">
          <div className="card bg-base-100 w-70 md:mx-3 shadow-sm items-center">
              <h3 className="card-title text-lg">Electricité</h3>
            <figure>
             <Plug2 className="bg-yellow-500"/>
            </figure>
            <div className="card-body">
             <ul className="text-center">
              <li>Rénovations</li>
              <li>Remise aux normes</li>
              <li>Maison Connectée</li>
              <li>Ventilation</li>
             </ul>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">En savoir +</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-70 md:mx-3 shadow-sm items-center">
              <h3 className="card-title text-lg">Plomberie</h3>
            <figure>
             <ShowerHead className="bg-yellow-500"/>
            </figure>
            <div className="card-body">
             <ul className="text-center">
              <li>Rénovations</li>
              <li>Remise aux normes</li>
              <li>Maison Connectée</li>
              <li>Ventilation</li>
             </ul>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">En savoir +</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-70 md:mx-3 shadow-sm items-center">
              <h3 className="card-title text-lg">Chauffage</h3>
            <figure>
             <Flame className="bg-yellow-500"/>
            </figure>
            <div className="card-body">
             <ul className="text-center">
              <li>Rénovations</li>
              <li>Remise aux normes</li>
              <li>Maison Connectée</li>
              <li>Ventilation</li>
             </ul>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">En savoir +</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-70 md:mx-3 shadow-sm items-center">
              <h3 className="card-title text-lg">Domotique</h3>
            <figure>
             <SlidersHorizontal className="bg-yellow-500"/>
            </figure>
            <div className="card-body">
             <ul className="text-center">
              <li>Rénovations</li>
              <li>Remise aux normes</li>
              <li>Maison Connectée</li>
              <li>Ventilation</li>
             </ul>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">En savoir +</button>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
