"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
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
                <Link href={"/about"}>A Propos</Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
                <ul className="p-2">
                  <li>
                    <Link href={"/"}>Electricité</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Plomberie</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Chauffage</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Domotique</Link>
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
                height={100}
                alt="logo spe société pontivyenne électricité planette"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/about"} className="text-lg">A Propos</Link>
            </li>
            <li>
              <details>
                <summary className="text-lg">Services</summary>
                <ul className="p-2">
                  <li>
                    <Link href={""} className="text-lg">Electricité</Link>
                  </li>
                  <li>
                    <Link href={""} className="text-lg">Plomberie</Link>
                  </li>
                  <li>
                    <Link href={""} className="text-lg">Chauffage</Link>
                  </li>
                  <li>
                    <Link href={""} className="text-lg">Domotique</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={""} className="text-lg">Réalisations</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:me-5">
          <Link href={"/contact"} className="btn btn-primary text-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
