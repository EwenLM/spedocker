import React from 'react'
import Image from 'next/image';

interface ArticleProps{
    title: string;
    paragraph: string;
    images: string [];
    links: string[],
    alt: string
}


export default function Article({
  title,
  paragraph,
  images,
  links,
  alt
}: ArticleProps) {
  return (
    <div className='md:grid grid-cols-5'>
      <aside className='col-start-2'>
        <Image
        src="/images/certifs_partenaires/{images}.png"
                width={150}
                height={100}
                alt="logo spe société pontivyenne électricité planette"
        />
      </aside>
      <article className='col-end-3'>
        <h3 className='text-lg'>
          {title}
        </h3>
        <p className=''>
          {paragraph}
        </p>
      </article>
    </div>
  )
}
