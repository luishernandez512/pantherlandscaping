"use client";
import React from "react";
import Link from "next/link";

const Estimate = () => {
  return (
    <section
      className="
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        bg-[#2E2E2E]  /* fallback color if no image */
        text-white
        py-24
        relative
      "
      // If you want a background image, uncomment:
      style={{ backgroundImage: "url('/HomePic.jpg')" }}
    >
      {/* Optional overlay if using a background image */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

      <div className="max-w-screen-xl mx-auto px-4 relative text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Request an Estimate Today
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-8">
          Take advantage of our expert landscaping and hardscaping services. Get in touch now for a free quote!
        </p>
        
        {/* CTA Button */}
        <Link href="/contactus" passHref>
          <button
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              px-8
              rounded-md
              font-semibold
              text-base
              md:text-lg
              shadow-md
              transition-colors
              duration-300
            "
          >
            Request an Estimate
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Estimate;
