"use client";
import React from "react";
import { useParams } from "next/navigation";
import Hero from "@/components/service-areas/Hero";
import MapAndNeighborhoods from "@/components/service-areas/MapAndNeighborhoods";
import Commitment from "@/components/service-areas/Commitment";

export default function CityServiceAreaPage() {
  const { cityName } = useParams() as { cityName: string };

  // Example data for neighborhoods; could also come from an API or your constants
  const neighborhoods = [
    { name: "Neighborhood 1", image: "/HomePic.jpg" },
    { name: "Neighborhood 2", image: "/neighbor2.jpg" },
    { name: "Neighborhood 3", image: "/neighbor3.jpg" },
    { name: "Neighborhood 4", image: "/neighbor4.jpg" },
    { name: "Neighborhood 5", image: "/neighbor5.jpg" },
    { name: "Neighborhood 6", image: "/neighbor6.jpg" },
  ];

  // Example bullet items for the commitment section
  const commitments = [
    { title: "Family-Owned", icon: "/family-icon.png" },
    { title: "Eco-Friendly Practices", icon: "/eco-icon.png" },
    { title: "Award-Winning Designs", icon: "/award-icon.png" },
    { title: "Timely Maintenance", icon: "/clock-icon.png" },
  ];

  return (
    <main className="w-full">
      <Hero cityName={cityName} />
      <MapAndNeighborhoods cityName={cityName} neighborhoods={neighborhoods} />
      <Commitment cityName={cityName} commitments={commitments} />
    </main>
  );
}
