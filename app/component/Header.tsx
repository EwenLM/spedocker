import React from 'react'
import { ArrowDown } from 'lucide-react';

export default function Header() {
  return (
   
      <header className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover" style={{backgroundImage:`url('/images/bg.jpg')`}}>
        <div className='relative p-6 flex flex-col items-center text-center '>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg/30 my-10">Société Pontivyenne d'Electricité</h1>
            <div><ArrowDown size={50} className='text-white bg-primary animate-pulse rounded-3xl p-1'/></div>
        </div>
      </header>
   
  )
}
