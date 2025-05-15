'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import bg from '/public/images/bg.jpg' // ⚠️ nécessaire pour le blur local

export default function Header() {
  const scrollToNextSection = () => {
    const section = document.getElementById('presentation')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image optimisée avec blur */}
      <Image
        src={bg} // importée pour blur
        alt="Équipe en intervention"
        fill
        priority
        quality={80}
        placeholder="blur"
        className="object-cover object-[50%_30%] md:object-center z-0"
      />

      {/* Contenu centré */}
      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white my-10 drop-shadow-xl">
          Société Pontivyenne d'Électricité
        </h1>
      </div>

      {/* Flèche */}
      <div
        className="absolute bottom-10 cursor-pointer z-10"
        onClick={scrollToNextSection}
      >
        <ArrowDown
          size={50}
          className="text-white bg-primary animate-pulse rounded-3xl p-1"
        />
      </div>
    </header>
  )
}
