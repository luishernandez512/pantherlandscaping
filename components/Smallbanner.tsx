"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import FadeIn from "./FadeIn";

// Example route => banner data
const pageBannerData: Record<string, { title: string; subtitle: string; bg?: string }> = {
  "/landscaping": {
    title: "Landscaping",
    subtitle:
      "Enhance your outdoor space with our diverse landscaping and softscaping services, designed to create a naturally inspired and well-crafted yard.\n\nOur dedicated team ensures your landscape not only adds value to your property but also enhances your overall enjoyment.",
    bg: "/Hardscape.JPG",
  },
  "/hardscaping": {
    title: "Hardscaping",
    subtitle: "Transform your outdoor space with our versatile hardscaping services, built to provide both durability and aesthetic appeal.\n\nOur skilled team ensures taht every feature, from patios to retaining walls, enhances, your property's value while creating a functional and lasting outdoor environment.",
    bg: "/Hardscape.JPG",
  },
  "/masonry": {
    title: "Masonry",
    subtitle: "Enhance your property with our expert masonry services, designed to deliver both strength and timeless beauty. \n\nOur skilled team specializes in everything from custone stone walls to decorative brickwork, ensuring each structure adds lasting value and craftsmanship to your outdoor and home spacesl.",
    bg: "/Hardscape.JPG",
  },
  "/fencing": {
    title: "Fencing",
    subtitle: "Define your property's boundaries with our durable and expertly crafted fencing services, designed for both security and curb appeal. \n\nFrom classic wood and vinyl to sturdy masonry and decorative metal, our team ensures every fence enhances your property's value while providing lasting protection and style.",
    bg: "/Hardscape.JPG",
  },
  "/lighting": {
    title: "Lighting",
    subtitle: "Illuminate your outdoor space with our premium lighting services, designed to enhance both security and ambiance. \n\nFrom pathway lights to accent and smart-controlled systems, our team creates stunning, energy-efficient lighting solutions that add beauty, safety, and value to your property.",
    bg: "/Hardscape.JPG",
  },
  "/irrigation": {
    title: "Irrigation",
    subtitle: "Keep your landscape lushand thriving with our efficient irrigation serivces, designed to deliver the right amount of water exactly where it's needed. \n\nFrom custom sprinkler systems to drip irrigation and smart water-saving solutions, our team ensures your outdoor space stays heatlhy while maximizing efficiency and sustainability.",
    bg: "/Hardscape.JPG",
  },
  "/services/lawn-maintenance": {
    title: "Lawn Maintenance",
    subtitle: 
      "Maintain a lush, vibrant lawn year-round with our comprehensive lawn care services. From regular mowing to seasonal cleaup, our dedicated team ensures your lawn always looks its best-enhancing both curb appeal and your outdoor enjoyment.",
    bg: "/HomePic.JPG", // Or any image you prefer
  },
  "/services/landscape-enhancements": {
    title: "Landscape Enhancements",
    subtitle: 
      "Reinvigorate your outdoor living area with our curated Landscape Enhancement services, designed to highlight your propertys natural beauty. \n\nAt Panther Landscaping, we balance local expertise with meticulous attention to detail, ensuring your yard remains vibrant and welcoming all year.",
    bg: "/HomePic.JPG", // Or any image you prefer
  },
  "/services/lawn-fertilization": {
    title: "Lawn Fertilization",
    subtitle: 
      "Reinvigorate your outdoor living area with our curated Landscape Enhancement services, designed to highlight your propertys natural beauty. \n\nAt Panther Landscaping, we balance local expertise with meticulous attention to detail, ensuring your yard remains vibrant and welcoming all year.",
    bg: "/HomePic.JPG", // Or any image you prefer
  },
  
  "/services": {
    title: "Our Services",
    subtitle: "Browse through the various services we provide",
    bg: "/HomePic.JPG",
  },
  // Add more routes as needed...
};

const SmallBanner = () => {
  const pathname = usePathname();

  // Fallback data if route isn’t in pageBannerData
  const defaultData = {
    title: "Title",
    subtitle: "Change this",
    bg: "/HomePic.jpg",
  };

  // Grab data for current route, or fall back
  const { title, subtitle, bg } = pageBannerData[pathname] || defaultData;

  return (
    <div
      className="
        w-full
        h-[40vh]
        bg-no-repeat
        bg-cover
        bg-center
        relative
        px-4
      "
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      <Container className="relative z-10 h-full flex flex-col justify-center text-left">
        <FadeIn>
          {/* Title with a primeColor underline */}
          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              mb-2
              inline-block
              border-b-4
              border-primeColor
              pb-1
            "
          >
            {title}
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="text-white text-base md:text-lg max-w-2xl leading-relaxed mt-2 whitespace-pre-line">
            {subtitle}
          </p>
        </FadeIn>
      </Container>
    </div>
  );
};

export default SmallBanner;




