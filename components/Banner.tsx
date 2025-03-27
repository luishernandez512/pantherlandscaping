"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/HomePic.jpg')] bg-no-repeat bg-cover bg-center w-full relative px-4 h-[90vh]">
      {/* The container now fills the full height */}
      <Container className="h-full">
        {/* Flex container centers content horizontally & vertically */}
        <div className="h-full flex flex-col items-center justify-center text-center">
          <FadeIn>
            <h1 className="text-3xl text-white md:text-4xl xl:text-5xl font-bold">
              Best in Austin
            </h1>
          </FadeIn>
          <FadeIn>
            <Link href="/" className="mt-6">
              <Image
                src="/Logo.png"
                alt="PL Logo"
                width={250}
                height={200}
                priority
                className="object-contain"
              />
            </Link>
          </FadeIn>
          <FadeIn>
            <h1 className="text-3xl text-white md:text-4xl xl:text-5xl font-bold mt-4">
              Panther Landscaping & Construction
            </h1>
          </FadeIn>
          <FadeIn>
            <button className="mt-6 w-60 h-12 bg-white font-bold text-darkGreen uppercase rounded-md hover:bg-darkGreen hover:text-white duration-300">
              SCHEDULE A FREE CONSULTATION
            </button>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default Banner;









