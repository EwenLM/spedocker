import React from "react";
import ResponsiveCard from "@/app/component/client/ResponsiveCard";

interface ServiceProps {
  title: string;
  description: string;
  cards: {
    title: string;
    description: string;
    image: string;
    alt: string;
    buttonLink: string;
  }[];
}

export default function Service({ title, description, cards }: ServiceProps) {
  return (
    <>
      <header className=" pt-50 mb-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-10">{title}</h1>
          <h2 className="text-lg text-gray-600 ">{description}</h2>
        </div>
      </header>
      <main className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 mb-20">
        {cards.map((card, idx) => (
          <ResponsiveCard key={idx} {...card} />
        ))}
      </main>
    </>
  );
}
