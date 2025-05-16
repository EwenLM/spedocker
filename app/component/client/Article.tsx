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
    <article className="my-20 bg-amber-400 w-full">
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-5 items-start gap-4 px-4 md:px-10 relative",
          reversed && "md:flex-row-reverse"
        )}
      >
        {/* Texte */}
        <div
          className={clsx(
            "md:col-span-3 bg-white p-6 rounded-lg shadow-md",
            reversed ? "md:col-start-3" : "md:col-start-1"
          )}
        >
          <h3 className="text-2xl font-bold mb-4 p-5">{title}</h3>
          <p className="text-justify p-5">{paragraph}</p>
        </div>

        {/* Logos en aside */}
        <aside
          className={clsx(
            "md:col-span-2 flex flex-wrap justify-center gap-4 mt-6 md:mt-0",
            reversed ? "md:col-start-1" : "md:col-start-4"
          )}
        >
          {images.map((image, index) => (
            <Link
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[150px] h-[100px] flex items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <Image
                src={`/images/certifs_partenaires/${image}.png`}
                alt={alts[index]}
                width={130}
                height={90}
                className="object-contain rounded-md"
              />
            </Link>
          ))}
        </aside>
      </div>
    </article>
  );
}
