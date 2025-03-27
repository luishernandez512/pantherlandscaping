"use client";
import React from "react";
import { usePathname } from "next/navigation";

// Example route => data for the description banner
const descriptionData: Record<string, { title: string; description: string }> = {
  "/landscaping": {
    title: "Quality Landscaping Services",
    description: "At Panther Landscaping, we believe that a well-designed outdoor space is essential to enhancing the beauty and value of your property. Whether it is a home or an office, our comprehensive landscaping services transform uneven fixtures, unpruned trees, and untamed bushes into a personal oasis. Our dedicated team handles every detail—from mowing, weeding, and pruning to specialized fertilization, irrigation, and lighting—ensuring that your yard not only thrives but also reflects a natural, well-crafted aesthetic. \n\nOur passion for exceeding expectations is evident in every project we undertake. With proven expertise in lawn and tree care, garden rehabilitation, and complete backyard transformations, we take pride in our unique vision and process. We do the research, anticipate your needs, and deliver exceptional results every time, making your outdoor space a seamless blend of softscaping elegance and hardscaping durability. Explore our services today and experience a transformative outdoor environment that speaks to your lifestyle and enhances your property year-round.",
  },
  "/hardscaping": {
    title: "Enhance Your Outdoors with Expert Hardscaping",
    description: "At Panther Landscaping, we specialize in transforming ordinary outdoor spaces into stunning, functional landscapes with high-quality hardscaping solutions. Whether you're looking to build a custom patio, install a fire pit, construct a retaining wall, or enhance your property with decorative pavers, our experienced team is here to bring your vision to life. Hardscaping adds both structure and elegance to your landscape, creating a lasting outdoor environment that blends beauty with purpose. \n\nA well-balanced outdoor space combines both softscaping and hardscaping, ensuring a seamless mix of natural and built elements. Our hardscaping services go beyond aesthetics—they provide durability, improve functionality, and increase property value. From outdoor kitchens and walkways to water features and architectural accents, our craftsmanship is designed to maximize your outdoor living experience. Whether you are upgrading your backyard retreat or adding striking hardscape elements to a commercial space, Panther Landscaping delivers expert solutions tailored to your needs.",
  },
  "/masonry": {
    title:"Elevate Your Property with Expert Masonry Services",
    description: "At Panther Landscaping, we believe that well-crafted masonry is the key to adding strength, style, and lasting value to your indoor or outdoor spaces. Whether you want to install custom stone or brick veneers, build perimeter walls for privacy, or add striking columns to your property, our skilled team is here to bring your vision to life. We focus on quality materials and meticulous craftsmanship to ensure each project blends seamlessly with your existing landscape while creating a stunning focal point. \n\nOur comprehensive masonry offerings include everything from chimney construction and masonry façade repairs to sturdy foundations that stand the test of time. By combining time-honored techniques with modern innovations, we deliver durable and visually appealing structures tailored to your unique needs. When you are ready to enhance your property curb appeal and functionality, trust Panther Landscaping masonry services to provide exceptional results for years to come."
  },
  "/fencing": {
    title: "Define Your Space with Our Premium Fencing Services",
    description: "At Panther Landscaping, we offer a comprehensive range of fencing solutions designed to enhance privacy, security, and curb appeal. Whether you are looking for a classic wood fence, a low-maintenance vinyl option, or an elegant iron and ornamental design, our skilled team is committed to delivering top-quality results. We also specialize in composite fencing for eco-friendly durability and masonry fencing for a timeless, structural appeal—each crafted to complement your landscape and reflect your personal style. \n\nFrom securing your property boundaries to adding a distinctive architectural element, our fencing services are built on exceptional craftsmanship and meticulous attention to detail. We tailor every project to suit your specific needs, ensuring that your new fence not only protects your space but also elevates its overall aesthetic. When it comes to combining form, function, and value, Panther Landscaping fencing services stand ready to exceed your expectations."
  },
  "/lighting": {
    title: "Illuminate Your Outdoor Space with Our Expert Lighting Services",
    description: "At Panther Landscaping, we specialize in creating lighting solutions that enhance both the beauty and security of your property. From energy-efficient LED fixtures and well-placed pathway lights to sophisticated up-lighting and accent designs, our installations highlight the best features of your outdoor space. We also offer advanced smart lighting systems for added convenience and motion-sensor options for extra peace of mind. \n\nWhether you are looking to brighten walkways, showcase your landscape, or create an inviting deck or patio environment, our tailored lighting services deliver the perfect blend of style, functionality, and energy efficiency. Let our dedicated team transform your property into a welcoming, illuminated retreat that you can enjoy day or night."
  },
  "/irrigation": {
    title: "Maximize Your Landscape's Potential with Our Expert Irrigation Services",
    description: "At Panther Landscaping, we specialize in keeping your outdoor spaces healthy, vibrant, and water-efficient all year long. From installing cutting-edge smart irrigation systems and drip solutions to maintaining sprinklers and performing essential winterization, our comprehensive services ensure every drop is used wisely. We even offer rainwater harvesting integration to help you conserve resources without sacrificing a lush, thriving landscape. Trust our experienced team to design and implement irrigation solutions tailored to your propertys unique needs, so you can enjoy beautiful results in every season."
  },
  // Add more routes as needed...
};

export default function DescriptionBanner() {
  const pathname = usePathname();

  // Fallback data if the route isn’t in descriptionData
  const defaultData = {
    title: "Service Title",
    description: "Description not found for this page.",
  };

  // Grab data for the current route, or fall back
  const { title, description } = descriptionData[pathname] || defaultData;

  return (
    <section className="max-w-screen-xl mx-auto py-8 px-4 text-center">
      {/* Title in primeColor, centered */}
      <h2 className="text-primeColor text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h2>

      {/* Description text, centered, with newlines preserved */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </section>
  );
}
