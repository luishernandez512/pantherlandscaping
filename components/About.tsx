"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#5B8F60] bg-no-repeat bg-center bg-cover bg-blend-overlay sm:py-16 lg:py-40 px-4 text-white">
      {/* Container to limit width on larger screens */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
        
        {/* Subtitle or short description */}
        <p className="max-w-2xl text-base md:text-lg leading-relaxed">
          At Panther Landscaping, we are committed to creating a cultural and 
          environmental experience that improves our local community through 
          landscape, service, and excellence. Whether it is designing beautiful 
          gardens, installing quality fencing, or maintaining vibrant outdoor 
          spaces, our team strives to bring your vision to life with sustainability 
          and professionalism in mind.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
