"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cities } from "@/constants"; 

const Mission = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Image */}
        <div className="flex-1">
          <Image
            src="/HomePic.jpg"
            alt="Landscaping Example"
            width={800}
            height={500}
            className="object-cover rounded-md shadow-md"
            priority
          />
        </div>

        {/* Right Column: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-darkGreen text-2xl md:text-3xl font-bold mb-3">
            Providing premium landscaping since 2000.
          </h2>
          <p className="text-base font-semibold md:text-lg text-darkGreen mb-4">
            We are dedicated to providing our customers with the highest quality products and services.
          </p>
          <p className="md:text-base">
            <span className="font-semibold text-darkGreen">
              We service the following Hill Country areas:{" "}
            </span>
            {cities.map((city, idx) => (
              <React.Fragment key={city.name}>
                {idx > 0 && ", "}
                <Link
                  href={city.href}
                  className="underline text-primeColor hover:text-green-700"
                >
                  {city.name}
                </Link>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;



