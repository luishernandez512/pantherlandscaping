"use client";
import React from "react";

interface Neighborhood {
  name: string;
  image: string;
}

interface MapAndNeighborhoodsProps {
  cityName: string;
  neighborhoods: Neighborhood[];
}

/**
 * Overlap on top of Hero by:
 * 1) Setting a bigger negative margin (e.g. -mt-20) to remove white space.
 * 2) Possibly removing extra vertical padding (py-4 or none).
 * 3) Using a higher z-index than Hero (z-10).
 */
const MapAndNeighborhoods: React.FC<MapAndNeighborhoodsProps> = ({
  cityName,
  neighborhoods,
}) => {
  return (
    <section
      className="
        relative
        z-10
        -mt-20        /* Increase negative margin to overlap more of the Hero */
        max-w-screen-xl
        mx-auto
        px-4
        py-4          /* Reduced vertical padding to minimize extra space */
        bg-white
        rounded-md
        shadow-lg
        flex
        flex-col
        md:flex-row
        gap-8
      "
    >
      {/* Left: Map Placeholder */}
      <div className="flex-1 bg-gray-200 rounded-md h-80 md:h-auto relative">
        <p className="absolute inset-0 flex items-center justify-center text-gray-600 font-semibold">
          [Map of {cityName}]
        </p>
      </div>

      {/* Right: Neighborhood Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {neighborhoods.map((hood) => (
          <div
            key={hood.name}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <div className="w-full h-40 bg-gray-100">
              <img
                src={hood.image}
                alt={hood.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3 text-center text-darkGreen font-semibold">
              {hood.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapAndNeighborhoods;


