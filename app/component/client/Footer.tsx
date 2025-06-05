import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="static z-2">
      <div className="footer sm:footer-horizontal bg-[#111827] text-base-200 p-10">
        <aside>
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              alt="logo spe société pontivyenne électricité planette"
              className="h-auto w-auto"
            />
          </Link>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href={"/services/electricite"} className="link link-hover">
            Electricité
          </Link>
          <Link href={"/services/plomberie"} className="link link-hover">
            Plomberie
          </Link>
          <Link href={"/services/chauffage"} className="link link-hover">
            Chauffage
          </Link>
          <Link href={"/service/domotique"} className="link link-hover">
            Domotique
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Entreprise</h6>
          <Link href={"/a-propos"} className="link link-hover">
            A propos
          </Link>
          <Link href={"/realisation"} className="link link-hover">
            Réalisations
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Légale</h6>
          <Link href={"mentions-legales"} className="link link-hover">
            Mentions légales
          </Link>
          <Link href={"/confidentialite"} className="link link-hover">
            Politique de confidentialité
          </Link>
          <Link href={"/cookie"} className="link link-hover">
            Cookie
          </Link>
        </nav>
      </div>

      {/* Copyright */}
      <div className="footer sm:footer-horizontal footer-center mt-1 bg-base-300 text-white p-4">
        <aside>
          <p>© {new Date().getFullYear()} SARL SPE - Tout droit Réservé</p>
        </aside>
      </div>
    </footer>
  );
}
