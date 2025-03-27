"use client";
import React from "react";
import Link from "next/link";
import { categoriesData } from "@/constants";

const Services = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Heading + Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 text-center md:text-left">
          {/* Left Side: Heading & Subtitle */}
          <div className="mb-4 md:mb-0 md:w-3/4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                Enhance Your Home with Our <br />
                Custom Landscaping Services
            </h2>
            <p className="text-base md:text-lg text-gray-600">
                It is our mission and passion to help your landscape reach its <br />
                maximum potential and increase your property value all at the same time.
            </p>
          </div>
          {/* Right Side: Button */}
          <div>
            <Link href="/services">
              <button
                className="
                  bg-[#B1D27B]
                  text-white
                  h-16
                  w-80
                  rounded-md
                  font-semibold
                  hover:bg-[#9CBD66]
                  transition-colors
                  duration-300
                "
              >
                SEE ALL SERVICES
              </button>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((service, index) => (
            <Link key={index} href={service.href}>
              <div 
                key={index} 
                className="group relative w-full h-60 overflow-hidden rounded-lg shadow-lg"
              >
                {/* Background Image that zooms on hover */}
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />

                {/* Green Overlay on hover */}
                <div
                  className="
                    absolute inset-0
                    bg-transparent
                    group-hover:bg-green-700
                    group-hover:bg-opacity-70
                    transition-colors duration-500
                  "
                />

                {/* Centered Title with Underline */}
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <h3 className="text-white text-xl md:text-2xl font-semibold relative inline-block">
                    {service.title}
                    {/* Underline that starts in the center and expands out */}
                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        transform -translate-x-1/2
                        w-0
                        h-[2px]
                        bg-[#B1D27B]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

