"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const whyPantherData: Record<
  string,
  {
    title: string;
    paragraph: string;
    reasons: { title: string; description: string; iconUrl: string }[];
    imageUrl: string;
    reverseLayout?: boolean;
  }
> = {
  "/landscaping": {
    title: "Why Choose Panther Landscaping",
    paragraph: `
At Panther Landscaping, we transform your outdoor space into a stunning living area 
that combines aesthetics with functionality. 
Below are some key reasons why homeowners trust us with their landscapes:
`,
    reasons: [
      {
        title: "Quality Materials",
        description:
          "We source the best plants, soils, and hardscape materials to ensure lasting beauty.",
        iconUrl: "/leaf.png",
      },
      {
        title: "Expert Team",
        description:
          "Our experienced professionals tailor every project to your property’s unique needs.",
        iconUrl: "/leaf.png",
      },
      {
        title: "Customer Focus",
        description:
          "We prioritize communication and outstanding service, ensuring your complete satisfaction.",
        iconUrl: "/leaf.png",
      },
      {
        title: "Innovative Designs",
        description:
          "We combine modern techniques with creative design to craft an outdoor space you'll love.",
        iconUrl: "/leaf.png",
      },
      {
        title: "Sustainable Practices",
        description:
          "Our eco-friendly methods help you enjoy a beautiful landscape while preserving the environment.",
        iconUrl: "/leaf.png",
      },
    ],
    imageUrl: "/HomePic.jpg",
    reverseLayout: false, // text left, image right on md+
  },
  "/hardscaping": {
    title: "Why Choose Panther Landscaping",
    paragraph: `
      At Panther Landscaping, our hardscaping services combine durability with style, 
      giving you the perfect foundation for patios, walkways, and more.
      Here are a few reasons our clients rely on us for all their hardscaping needs:
      `,
    reasons: [
      {
        title: "Lasting Durability",
        description:
          "We use top-grade pavers, stone, and concrete to ensure every structure stands the test of time.",
        iconUrl: "/Trowel.png",
      },
      {
        title: "Skilled Craftsmanship",
        description:
          "Our team brings years of expertise, creating hardscape features tailored to your property.",
        iconUrl: "/Trowel.png",
      },
      {
        title: "Design Versatility",
        description:
          "From modern walkways to rustic fire pits, we craft solutions that suit your style and budget.",
        iconUrl: "/Trowel.png",
      },
      {
        title: "Seamless Integration",
        description:
          "We blend hardscaping with your existing landscape, ensuring a cohesive, functional design.",
        iconUrl: "/Trowel.png",
      },
      {
        title: "Proven Results",
        description:
          "Our track record of successful installations speaks to our commitment to quality and customer satisfaction.",
        iconUrl: "/Trowel.png",
      },
    ],
    imageUrl: "/HomePic.jpg",
    reverseLayout: true, // text right, image left on md+
  },
  "/masonry": {
    title: "Why Choose Panther Landscaping ",
    paragraph: `
      At Panther Landscaping, our masonry services blend artful craftsmanship with robust construction to elevate your outdoor (or indoor) living space. Whether you are envisioning decorative stone veneers, structural retaining walls, or a grand outdoor fireplace, our team delivers results that combine lasting durability with striking aesthetics. Using only premium materials and proven techniques, we ensure every masonry feature stands as a timeless centerpiece of your property.
    `,
    reasons: [
      {
        title: "Superior Stone Selection",
        description:
          "We source top-quality bricks, stones, and pavers to ensure every masonry project maintains a premium look and enduring strength.",
        iconUrl: "/MasonHammer.png",
      },
      {
        title: "Skilled Masons",
        description:
          "Our experienced professionals bring years of expertise in stonework and construction, guaranteeing a polished finish on every job.",
        iconUrl: "/MasonHammer.png",
      },
      {
        title: "Custom Designs",
        description:
          "From classic stone walls to modern brick accents, we tailor each project to your unique style, ensuring seamless integration with existing features.",
        iconUrl: "/MasonHammer.png",
      },
      {
        title: "Structural Integrity",
        description:
          "By following best-in-class building practices, we create masonry solutions that stand the test of time, resisting wear and weather.",
        iconUrl: "/MasonHammer.png",
      },
      {
        title: "Long-Lasting Value",
        description:
          "Our commitment to quality workmanship not only enhances your propertys appeal but also contributes to its overall value for years to come.",
        iconUrl: "/MasonHammer.png",
      },
    ],
    imageUrl: "/HomePic.jpg",
    reverseLayout: false, // text right, image left on md+
  },
  "/fencing": {
  title: "Why Choose Panther Fencing",
  paragraph: `
    At Panther Landscaping, we recognize that a well-designed fence not only defines your property boundaries but also elevates its overall aesthetic and security. Whether you’re looking for a classic wooden enclosure, a modern vinyl solution, or an elegant ornamental design, our team ensures every installation is built to last. Combining top-grade materials with expert craftsmanship, we deliver fencing solutions that complement your landscape and add enduring value to your home or business.
  `,
  reasons: [
    {
      title: "Premium Materials",
      description: "We source high-quality lumber, vinyl, metal, or composite materials to ensure each fence stands strong against wear, weather, and time.",
      iconUrl: "/Fence.png", 
    },
    {
      title: "Skilled Installers",
      description: "Our experienced professionals pay close attention to every detail—from post setting to panel alignment—ensuring a seamless, secure fence.",
      iconUrl: "/Fence.png",
    },
    {
      title: "Security & Privacy",
      description: "We design fences that provide the right balance of seclusion and safety, giving you peace of mind while enhancing curb appeal.",
      iconUrl: "/Fence.png",
    },
    {
      title: "Custom Designs",
      description: "From classic picket styles to sleek modern lines, our fences are tailored to suit your property’s aesthetic and functional needs.",
      iconUrl: "/Fence.png",
    },
    {
      title: "Long-Term Value",
      description: "With sturdy construction and durable finishes, our fencing solutions maintain their appearance and performance, boosting your property’s worth for years to come.",
      iconUrl: "/Fence.png",
    },
  ],
    imageUrl: "/HomePic.jpg", 
    reverseLayout: true, // or true, depending on desired layout
  },
  "/lighting": {
    title: "Why Choose Panther Lighting",
    paragraph: `
      At Panther Landscaping, we understand that effective lighting not only enhances your property’s nighttime appeal but also improves safety and security. Whether you’re aiming to showcase a garden feature, brighten walkways, or create a welcoming patio ambiance, our team delivers lighting solutions that blend practicality with design flair. Using high-quality fixtures and energy-efficient options, we ensure your outdoor spaces shine beautifully, day or night.
    `,
    reasons: [
      {
        title: "Enhanced Safety",
        description: "Properly lit pathways and entrances reduce the risk of trips or falls, giving you and your guests added peace of mind.",
        iconUrl: "/Light.png", // or any other icon you prefer
      },
      {
        title: "Ambiance & Style",
        description: "From subtle accent lights to bold spotlights, our creative designs highlight your property’s best features and set the perfect mood.",
        iconUrl: "/Light.png",
      },
      {
        title: "Energy-Efficient Solutions",
        description: "We offer LED and smart lighting systems that minimize energy consumption and operating costs without sacrificing brightness or quality.",
        iconUrl: "/Light.png",
      },
      {
        title: "Expert Installation",
        description: "Our skilled team handles everything from wiring to fixture placement, ensuring a seamless integration of lighting into your landscape.",
        iconUrl: "/Light.png",
      },
      {
        title: "Custom Designs",
        description: "We tailor each lighting plan to your home’s architecture and outdoor layout, creating a cohesive, sophisticated look that complements your existing landscape.",
        iconUrl: "/Light.png",
      },
    ],
    imageUrl: "/HomePic.jpg", // Adjust as needed
    reverseLayout: false,         // or true if you want text on the right, image on the left
  },
  "/irrigation": {
    title: "Why Choose Panther Irrigation",
    paragraph: `
  At Panther Landscaping, our irrigation services ensure your landscape stays lush and vibrant throughout the year. 
  We design and install smart, efficient systems that deliver water exactly where it’s needed—minimizing waste while promoting healthy growth.
  `,
    reasons: [
      {
        title: "Efficient Water Management",
        description:
          "Our state-of-the-art irrigation systems distribute water precisely, ensuring every drop is put to good use.",
        iconUrl: "/Water.png", // Use an icon representing water/irrigation
      },
      {
        title: "Cost Savings",
        description:
          "By optimizing water usage, our systems help lower your utility bills while safeguarding your landscape.",
        iconUrl: "/Water.png",
      },
      {
        title: "Advanced Technology",
        description:
          "We utilize automated and smart controls to tailor irrigation to the unique needs of your property.",
        iconUrl: "/Water.png",
      },
      {
        title: "Customized Solutions",
        description:
          "Every landscape is different; our systems are designed to meet your specific watering requirements.",
        iconUrl: "/Water.png",
      },
      {
        title: "Sustainability",
        description:
          "Our eco-friendly practices ensure that your irrigation is both effective and kind to the environment.",
        iconUrl: "/Water.png",
      },
    ],
    imageUrl: "/HomePic.jpg", // Update with the correct image path
    reverseLayout: true,           // Adjust layout as needed (false = text left, image right)
  },


  // Add more routes if needed...
};

export default function WhyPanther() {
  const pathname = usePathname();

  // Fallback data if current route not found
  const defaultData = {
    title: "Why Panther",
    paragraph: "Discover what sets us apart from the competition.",
    reasons: [
      {
        title: "Reason 1",
        description: "Detail for reason 1.",
        iconUrl: "/leaf.png",
      },
    ],
    imageUrl: "/defaultPic.jpg",
    reverseLayout: false,
  };

  const { title, paragraph, reasons, imageUrl, reverseLayout } =
    whyPantherData[pathname] || defaultData;

  /**
   * Layout logic:
   * - On mobile (<md): single column => text first, then image
   * - On md+:
   *   If reverseLayout=false => text left, image right
   *   If reverseLayout=true  => text right, image left
   *
   * 'md:items-stretch' ensures columns match height on md+.
   */
  const gridClasses = "md:grid md:grid-cols-2 md:gap-8 md:items-stretch";
  const textOrder = reverseLayout ? "md:order-last" : "md:order-first";
  const imageOrder = reverseLayout ? "md:order-first" : "md:order-last";

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4">
      <div className={gridClasses}>
        {/* Text Column */}
        <div
          className={`
            order-first
            flex
            flex-col
            space-y-6
            p-4
            ${textOrder}
            h-full
            flex-1
          `}
        >
          <h2 className="text-primeColor text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {paragraph}
          </p>

          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <BulletItem
                key={idx}
                title={reason.title}
                description={reason.description}
                iconUrl={reason.iconUrl}
              />
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`
            relative
            w-full
            ${imageOrder}
            h-full
            flex-1
          `}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}

interface BulletItemProps {
  title: string;
  description: string;
  iconUrl: string;
}

function BulletItem({ title, description, iconUrl }: BulletItemProps) {
  return (
    <div className="flex items-start gap-3">
      {/* Icon as bullet */}
      <div className="mt-1">
        <img src={iconUrl} alt={`${title} icon`} className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
