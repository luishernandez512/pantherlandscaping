"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


interface DetailItem {
  title: string;
  content: string;
}

interface ServiceDetailProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  reverseLayout?: boolean;
  detailItems: DetailItem[];
  buttonUrl?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title = "Landscaping",
  description = "...",
  imageUrl = "/HomePic.jpg",
  reverseLayout = false,
  detailItems,
  buttonUrl = "/services",
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  /**
   * Layout logic:
   * - Mobile (<md): Single column (image first, then text).
   * - md+: Two columns.
   *   If reverseLayout=false => image left, text right
   *   If reverseLayout=true  => text left, image right
   *
   * We place the heading inside the text column for md+ to ensure it lines up
   * exactly with the top of the image. On mobile, the heading is shown above everything.
   */

  // On mobile, we show the heading outside the grid. On md+, we hide that heading
  // and show a second heading inside the text column to line it up with the image.
  const gridClasses = "md:grid md:grid-cols-2 md:gap-8 md:items-start";

  // Column ordering on md+ if reverseLayout is true or false
  const imageOrder = reverseLayout ? "md:order-last" : "md:order-first";
  const textOrder = reverseLayout ? "md:order-first" : "md:order-last";

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4">
      {/* Heading on MOBILE only (hidden on md+) */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 md:hidden">
        {title}
      </h2>

      <div className={gridClasses}>
        {/* Image Column */}
        <div className={`order-first w-full h-full self-start ${imageOrder}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={600}
            className="object-cover rounded-md shadow-md"
            priority
          />
        </div>

        {/* Text Column */}
        <div className={`order-last flex flex-col space-y-6 self-start ${textOrder}`}>
          {/* Heading on MD+ only (hidden on mobile) */}
          <h2 className="hidden md:block text-3xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="text-gray-700 leading-relaxed">{description}</p>

          <div className="space-y-2">
            {detailItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                expandedIndex={expandedIndex}
                toggleItem={toggleItem}
              />
            ))}
          </div>
          <Link href={buttonUrl}>
            <button
              type="button"
              className="
                bg-[#B1D27B]
                text-white
                px-6
                py-2
                rounded-md
                font-semibold
                hover:bg-[#9CBD66]
                transition-colors
                duration-300
                w-36
              "
            >
              SEE ALL
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

/** Accordion Item subcomponent */
interface AccordionItemProps {
  item: DetailItem;
  index: number;
  expandedIndex: number | null;
  toggleItem: (i: number) => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  expandedIndex,
  toggleItem,
}) => {
  const isExpanded = expandedIndex === index;
  return (
    <div className="border-b border-gray-200 pb-2">
      <button
        type="button"
        onClick={() => toggleItem(index)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-semibold text-gray-800">{item.title}</span>
        <span className="ml-2 text-gray-500">{isExpanded ? "-" : "+"}</span>
      </button>
      {isExpanded && <div className="mt-2 text-gray-600">{item.content}</div>}
    </div>
  );
};

export default ServiceDetail;





