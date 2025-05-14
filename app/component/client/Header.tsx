"use client"

import React from 'react'
import { ArrowDown } from 'lucide-react'

export default function Header() {
  // Fonction pour scroller vers la section suivante
  const scrollToNextSection = () => {
    const section = document.getElementById('presentation')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url('/images/bg.jpg')` }}
    >
      {/* Contenu centré */}
      <div className="relative p-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg/30 my-10">
          Société Pontivyenne d'Électricité
        </h1>
      </div>

      {/* Flèche en bas cliquable */}
      <div className="absolute bottom-10 cursor-pointer" onClick={scrollToNextSection}>
        <ArrowDown
          size={50}
          className="text-white bg-primary animate-pulse rounded-3xl p-1"
        />
      </div>
    </header>
  )
}
