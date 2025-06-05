"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {

  // Utilisation de usePathname pour obtenir le chemin actuel
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-10">
      <div className="navbar bg-base-100 shadow-sm p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[3000] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href={"/a-propos"}
                  className={pathname === "/a-propos" ? "active" : ""}
                >
                  A Propos
                </Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
                <ul className="p-2">
                  <li>
                    <Link href={"/services/electricite"}>Electricité</Link>
                  </li>
                  <li>
                    <Link href={"/services/plomberie"}>Plomberie</Link>
                  </li>
                  <li>
                    <Link href={"/services/chauffage"}>Chauffage</Link>
                  </li>
                  <li>
                    <Link href={"/services/domotique"}>Domotique</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/"}>Réalisation</Link>
              </li>
            </ul>
          </div>
          <div className="bg-base-300">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                width={150}
                height={150}
                alt="logo spe société pontivyenne électricité planette"
                className="h-auto w-auto"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/a-propos"} className="text-lg">
                A Propos
              </Link>
            </li>
            <li>
              <details>
                <summary className="text-lg">Services</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/services/eletricite"} className="text-lg">
                      Electricité
                    </Link>
                  </li>
                  <li>
                    <Link href={"/services/plomberie"} className="text-lg">
                      Plomberie
                    </Link>
                  </li>
                  <li>
                    <Link href={"services/chauffage"} className="text-lg">
                      Chauffage
                    </Link>
                  </li>
                  <li>
                    <Link href={"/services/domotique"} className="text-lg">
                      Domotique
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/realisations"} className="text-lg">
                Réalisations
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:me-5">
          <Link href={"/contact"} className="btn btn-primary text-lg">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
