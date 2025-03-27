"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { featuredProjectsData } from "@/constants"; // Adjust path if needed

const FeaturedProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = featuredProjectsData.length;

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  // Optional auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Jump to specific slide
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Featured Projects
      </h2>

      {/* 
        On small screens: max-w-3xl, height ~400px
        On md+: max-w-5xl, height ~600px 
      */}
      <div className="relative w-full max-w-3xl md:max-w-5xl mx-auto">
        <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
          {featuredProjectsData.map((proj, index) => {
            const offset = index - currentIndex;
            return (
              <div
                key={index}
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${offset * 100}%)`,
                }}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-3xl font-semibold mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm md:text-base max-w-prose">
                    {proj.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-green-600 z-10"
          >
            <FiChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-green-600 z-10"
          >
            <FiChevronRight size={28} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {featuredProjectsData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                idx === currentIndex ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;


