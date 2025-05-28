import React from "react";
import Card from "@/app/component/client/Card";

import { LucideIcon } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  cards: {
    title: string;
    icon: LucideIcon;
    color: string;
    items: string[];
    button: string;
    buttonLink?: string;
  }[];
}

export default function Service({ title, description, cards }: ServiceProps) {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-8">{description}</p>
      <div className="flex flex-wrap gap-6">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </main>
  );
}