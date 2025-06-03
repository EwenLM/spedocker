"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";


export default function Header() {
  const scrollToNextSection = () => {
    const section = document.getElementById("main");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="relative h-screen flex items-center justify-center overflow-hidden
    bg-[url('/images/bg.webp')] bg-fixed bg-no-repeat bg-cover
    bg-[center_50%] md:bg-[center_30%] md:h-screen h-[70vh]"
    >
      {/* Contenu z-2 */}
      <div className="absolute inset-0 bg-black/10 z-2"></div>

      {/* Contenu z-5 */}
      <div className="relative z-5 p-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white my-10 drop-shadow-xl">
          Société Pontivyenne d'Électricité
        </h1>
      </div>

      <div
        className="absolute bottom-10 cursor-pointer z-5"
        onClick={scrollToNextSection}
      >
        <ArrowDown
          size={50}
          className="text-white bg-primary animate-pulse rounded-3xl p-1"
        />
      </div>
    </header>
  );
}
