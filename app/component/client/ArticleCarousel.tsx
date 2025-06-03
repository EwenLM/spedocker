"use client";

import React from "react";
import Article from "./Article";

interface ArticleCarouselProps {
  articles: {
    title: string;
    paragraph: string;
    images: string[];
    links: string[];
    alts: string[];
    reversed?: boolean;
  }[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
  return (
    <div className="carousel w-full">
      {articles.map((article, index) => (
        <div
          key={index}
          id={`slide-${index}`}
          className="carousel-item w-full px-4"
        >
          <div className="max-w-5xl mx-auto">
            <Article {...article} />
          </div>
        </div>
      ))}

      {/* Pagination (dots) */}
      <div className="flex justify-center mt-6 gap-2">
        {articles.map((_, index) => (
          <a
            key={index}
            href={`#slide-${index}`}
            className="btn btn-xs btn-circle"
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
