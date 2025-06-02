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
    <article className="my-20 bg-blue-100 shadow-md rounded-lg">
      <div className="grid md:grid-cols-5 items-stretch gap-4">
        {/* ASIDE : logos */}
        <aside
          className={clsx(
            "md:col-span-2 flex flex-wrap justify-center items-center",
            reversed ? "md:order-1" : "md:order-2"
          )}
        >
          {images.map((image, index) => (
            <Link
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
            >
              <Image
                src={`/images/certifs_partenaires/${image}.png`}
                alt={alts[index] || "Logo partenaire"}
                width={150}
                height={100}
                className="object-contain px-1 m-1 hover:border-b-3 border-b-primary"
              />
            </Link>
          ))}
        </aside>

        {/* Texte */}
        <div
          className={clsx( 
            "md:col-span-3 bg-white p-8 shadow-md flex flex-col justify-center rounded-lg",
            reversed ? "md:order-2" : "md:order-1"
            
          )}
        >
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-justify">{paragraph}</p>
        </div>
      </div>
    </article>
  );
}
