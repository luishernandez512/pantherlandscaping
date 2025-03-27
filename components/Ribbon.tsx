"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const Ribbon = () => {
  // Controls whether the ribbon is visible
  const [showRibbon, setShowRibbon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If user has scrolled down any amount, hide the ribbon
      if (window.scrollY > 0) {
        setShowRibbon(false);
      } else {
        // If back at top, show the ribbon again
        setShowRibbon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If not showing the ribbon, return null
  if (!showRibbon) return null;

  return (
    <div className="w-full bg-primeColor text-white text-sm md:text-base py-2 px-4">
      {/* 
        On mobile: flex-col => 3 rows
        On md+: flex-row => single row
      */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:space-x-4">
        {/* Row 1 (mobile) / Column 1 (md+) */}
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4"/>
          <p>
            Call us today for an estimate: <strong>(512) 450-2610</strong>
          </p>
        </div>

        {/* Row 2 (mobile) / Column 2 (md+) */}
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" />
          <p>Austin, TX</p>
        </div>

        {/* Row 3 (mobile) / Column 3 (md+) */}
        <div className="flex items-center justify-center gap-3">
          {/* Example Social Icons */}
          <Link href="#">
            <svg
              className="w-5 h-5 hover:text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Icon path here */}
              <path d="M..." />
            </svg>
          </Link>
          <Link href="#">
            <svg
              className="w-5 h-5 hover:text-gray-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Icon path here */}
              <path d="M..." />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;

