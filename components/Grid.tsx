"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Service {
  title: string;
  href: string;
  imgUrl: string;
  iconUrl?: string; // optional icon field
}

interface Props {
  services: Service[];
}

export default function ServiceSquares({ services }: Props) {
  const pathname = usePathname();
  // Remove the leading "/" and capitalize the first letter
  const serviceCategory = pathname.replace("/", "");
  const capitalizedCategory =
    serviceCategory.charAt(0).toUpperCase() + serviceCategory.slice(1);

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <h2 className="text-primeColor text-3xl font-bold text-center mb-8">
        Our {capitalizedCategory} Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div
              className="
                group
                relative
                w-full
                h-60
                overflow-hidden
                rounded-lg
                shadow-lg
                bg-green-700
                cursor-pointer
              "
            >
              {/* Background Image that zooms on hover */}
              <img
                src={service.imgUrl}
                alt={service.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Dark overlay appears only on hover */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-30
                  pointer-events-none
                "
              />

              {/* Centered Icon & Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                {service.iconUrl && (
                  <img
                    src={service.iconUrl}
                    alt={`${service.title} icon`}
                    className="w-24 h-24 mb-2"
                  />
                )}
                <h3 className="text-xl md:text-2xl font-semibold relative inline-block">
                  {service.title}
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
  );
}



