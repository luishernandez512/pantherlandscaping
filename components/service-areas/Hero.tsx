"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

interface HeroProps {
  cityName: string;
}

const Hero: React.FC<HeroProps> = ({ cityName }) => {
  return (
    <section
      className="
        relative
        w-full
        h-[40vh]
        bg-[url('/HomePic.jpg')]
        bg-no-repeat
        bg-cover
        bg-center
        px-4
      "
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      <Container
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-start
          gap-4
          text-white
        "
      >
        <FadeIn>
          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              mb-2
              inline-block
              border-b-4
              border-primeColor
              pb-1
            "
          >
            Landscaping Services in {cityName}
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed mt-2 whitespace-pre-line">
            Proudly serving these neighborhoods to keep them green and beautiful.
          </p>
        </FadeIn>

        <FadeIn>
          <Link
            href="/contact"
            className="
              bg-primeColor
              hover:bg-green-700
              transition-colors
              duration-300
              px-6
              py-3
              text-sm
              md:text-base
              font-semibold
              rounded-md
            "
          >
            Get a Free Quote
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;



