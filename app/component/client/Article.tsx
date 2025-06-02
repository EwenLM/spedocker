"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface ArticleProps {
  title: string;
  paragraph: string;
  images: string[];
  links: string[];
  alts: string[];
  reversed?: boolean;
}

export default function Article({
  title,
  paragraph,
  images,
  links,
  alts,
  reversed = false,
}: ArticleProps) {
  return (
    <article className="my-20 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
  {/* Texte */}
  <div className="md:w-3/5 p-8 flex flex-col justify-center">
    <h2 className="text-4xl font-bold text-blue-800 mb-4">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{paragraph}</p>
  </div>

  {/* Logos */}
  <aside className="md:w-2/5 p-6 bg-gradient-to-b from-blue-50 to-blue-100 flex flex-wrap justify-center items-center gap-4">
    {images.map((image, index) => (
      <Link
        key={index}
        href={links[index]}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:scale-105 hover:drop-shadow-md"
      >
        <Image
          src={`/images/certifs_partenaires/${image}.png`}
          alt={alts[index] || "Logo partenaire"}
          width={100}
          height={60}
          className="object-contain"
        />
      </Link>
    ))}
  </aside>
</div>
    </article>
  );
}
