import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResponsiveCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonLink: string;
}
export default function ResponsiveCard({
  title,
  description,
  image,
  alt,
  buttonLink,
}: ResponsiveCardProps) {
  return (
   <article className="card lg:flex-row lg:card-side bg-base-100 shadow-sm min-h-[300px]">
  {/* Image avec taille fixe en desktop */}
  <figure className="relative w-full lg:w-[300px] aspect-[4/3] flex-shrink-0">
    <Image
      src={`/images/services/${image}`}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 300px"
    />
  </figure>

  {/* Texte qui prend le reste */}
  <div className="card-body flex flex-col justify-between">
    <div>
      <h2 className="card-title  text-xl lg:mt-5 pb-4">{title}</h2>
      <p>{description}</p>
    </div>
    <div className="card-actions justify-end">
      <Link href={buttonLink} className="btn btn-secondary">
        ➔
      </Link>
    </div>
  </div>
</article>

  );
}
