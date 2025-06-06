import React from "react";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  items: string[];
  button: string;
  buttonLink: string;
}

const borderHoverClasses: Record<string, string> = {
  yellow: "hover:border-yellow-500",
  blue: "hover:border-blue-500",
  red: "hover:border-red-500",
  green: "hover:border-green-500",
  black: "hover:border-secondary"
};

const iconColorClasses: Record<string, string> = {
  yellow: "text-yellow-500",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-500",
  black:"text-black"
};

export default function ServiceCard({
  title,
  icon: Icon,
  color,
  items,
  button,
  buttonLink
}: ServiceCardProps) {
  return (
    <article
      className={clsx(
        "my-5 md:my-0 md:mx-5 card bg-white w-70 h-90 flex flex-col justify-center items-center shadow-sm border-3 border-transparent transition-colors duration-200",
        borderHoverClasses[color]
      )}
    >
      <h3 className="card-title text-xl mb-7">{title}</h3>
      <figure>
        <Icon size={60} className={iconColorClasses[color]} />
      </figure>
      <div className="mt-3 flex flex-col items-center">
        <ul className="text-center mb-7">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <Link href={buttonLink} className="btn btn-secondary btn-outline">{button}</Link>
        </div>
      </div>
    </article>
  );
}
