"use client";
import React from "react";
import { usePathname } from "next/navigation";

const planData: Record<
  string,
  {
    mainTitle: string;
    shortParagraph: string;
    includedTitle: string;
    planServiceName: string;
    planBullets: {
      text: string;
      icon?: string;
      iconWidth?: number;
      iconHeight?: number;
    }[];
  }
> = {
  "/services/landscape-enhancements": {
    mainTitle: "Landscape Enhancement",
    shortParagraph: `
Not only do we create stunning landscapes, but we also offer enhacements that keep your outdoor space vibrant and thriving year-round.
Our services are tailored to the local climate and your unique property needs, keeping your yard vibrant in every season. 
`,
    includedTitle: "What Lanscape Enhacements Does Panther Landscaping Provide?",
    planServiceName: "Landscape Enhancement",
    planBullets: [
      {
        text: "Mulch Installation",
        icon: "/MulchInstall.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Seasonal Flower Planting",
        icon: "/SeasonalFlower.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Raised Planter Installs",
        icon: "/RaisedPlanter.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Lawn Aeration",
        icon: "/LawnAeration.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Top Dressing",
        icon: "/TopDressing.png",
        iconWidth: 60,
        iconHeight: 60,
      },{
        text: "Dethatching",
        icon: "/Dethatching.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Overseeding",
        icon: "/Overseeding.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Weed Control",
        icon: "/WeedControl.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Pest Management",
        icon: "/PestManagement.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Grass Variety Upgrade",
        icon: "/GrassUpgrade.png",
        iconWidth: 60,
        iconHeight: 60,
      },
    ],
  },
  "/services/lawn-fertilization": {
    mainTitle: "Lawn Fertilization",
    shortParagraph: `
  Our specialized Lawn Fertilization service is designed to keep your turf thriving and vibrant throughout the year. We tailor our program to your lawns unique needs, using premium products and careful scheduling to ensure optimal growth.
    `,
    includedTitle: "What is Included in Your Lawn Fertilization Service?",
    planServiceName: "Lawn Fertilization",
    planBullets: [
      {
        text: "Initial lawn evaluation to determine application needs",
        icon: "/InitialEvaluation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Premium fertilizer applied twice a year to prevent overuse",
        icon: "/FertilizerApplied.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Custom fertilization schedule tailored for seasonal growth",
        icon: "/CustomFertilization.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Targeted nutrient application to boost turf health",
        icon: "/TargetedNutrient.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Ongoing monitoring and adjustments for sustained lawn vibrancy",
        icon: "/OngoingMonitoring.png",
        iconWidth: 60,
        iconHeight: 60,
      },
    ],
  },
  "/services/tree-maintenance": {
    mainTitle: "Tree and Hedge Maintenance",
    shortParagraph: `
  Our dedicated Tree and Hedge Maintenance service is designed to keep your landscape looking pristine all year round. We customize our care programs to address the unique needs of your trees and hedges, employing expert techniques and top-quality products to ensure lasting health and beauty.
    `,
    includedTitle: "What is Included in Your Tree and Hedge Maintenance Service?",
    planServiceName: "Tree or Hedge Maintenance",
    planBullets: [
      {
        text: "Tree or Hedge Health Assessment",
        icon: "/TreeHealth.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Precision Pruning & Trimming",
        icon: "/PrecisionPruning.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Pest & Disease Management",
        icon: "/PestDiseaseManagement.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Seasonal Maintenance Packages",
        icon: "/SeasonalMaintenance.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Tree Removal",
        icon: "/TreeRemoval.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Stump Grinding & Removal",
        icon: "/StumpGrinding.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Tree or Hedge Planting",
        icon: "/TreePlanting.png",
        iconWidth: 60,
        iconHeight: 60,
      },
    ],
  },
  "/services/sod": {
    mainTitle: "Sod",
    shortParagraph: `
  Our dedicated Sod Service is designed to keep your lawn lush and vibrant throughout every season. We tailor our installation programs to the specific requirements of your outdoor space, using advanced techniques and premium-quality sod to create a healthy, eye-catching landscape that stands the test of time.
    `,
    includedTitle: "Our Top-Rated Sod Services",
    planServiceName: "Sod",
    planBullets: [
      {
        text: "Custom Sod Consultation & Planning",
        icon: "/SodConsultation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Premium Sod Installation",
        icon: "/SodInstallation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Custom Lawn Design & Layout",
        icon: "/CustomLawnDesign.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Efficient Irrigation Integration",
        icon: "/EfficientIrrigation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Expert Grading for Optimal Drainage",
        icon: "/ExpertGrading.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Post-Installation Care & Maintenance",
        icon: "/PostInstallationCare.png",
        iconWidth: 60,
        iconHeight: 60,
      },
    ],
  },
  "/services/seasonal-cleanups": {
    mainTitle: "Seasonal and Storm Cleanups",
    shortParagraph: `
  Our dedicated Seasonal and Storm Cleanups service ensures your landscape remains impeccable no matter the weather. We design tailored cleanup programs to address the specific challenges each season brings, using advanced techniques and eco-friendly methods to restore and maintain your outdoor spaces. Our expert team works diligently to remove debris, mitigate storm damage, and prepare your property for the changing seasons, ensuring both safety and lasting visual appeal.
    `,
    includedTitle: "What is Included in Your Seasonal and Storm Cleanup Plan?",
    planServiceName: "Seasonal and Storm Cleanup",
    planBullets: [
      {
        text: "Pre-Season Landscape Evaluation",
        icon: "/LandscapeEvaluation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Rapid Post-Storm Debris Removal",
        icon: "/PostStormRemoval.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Comprehensive Leaf & Branch Cleanup",
        icon: "/ComprehensiveCleanup.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Tree Hazard Assessment & Pruning",
        icon: "/TreeHazard.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Tailored Cleanup Packages",
        icon: "/TailoredPackages.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Restorative Landscape Repair",
        icon: "/RestorativeLandscape.png",
        iconWidth: 60,
        iconHeight: 60,
      },
    ],
  },
  "/services/paver-patios": {
    mainTitle: "Paver Patios & Walkways",
    shortParagraph: `
  At Panther Landscaping, we elevate your outdoor environment with expertly crafted paver patios and walkways that merge aesthetic appeal with functionality. Our skilled team transforms your vision into reality, creating inviting spaces that serve as the perfect backdrop for relaxation and entertaining. Our custom hardscaping solutions highlight the beauty of your property while adding value and durability. From intricate patio designs to seamless garden pathways, every project is tailored to complement your unique style and landscape. With a keen focus on quality craftsmanship and thoughtful design, our paver installations not only enhance the look of your outdoor area but also provide a sturdy, low-maintenance solution for years to come.
    `,
    includedTitle: "What is Included in Your Paver Plan?",
    planServiceName: "Seasonal and Storm Cleanup",
    planBullets: [
      {
        text: "Comprehensive Design Consultation & Layout Planning",
        icon: "/ComprehensiveDesign.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "High-Quality Paver Material Selection",
        icon: "/PaverSelection.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Precision Paver Installation & Alignment",
        icon: "/PaverInstallation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Custom Pattern & Color Coordination",
        icon: "/PatternCoordination.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Integrated Drainage & Stability Solutions",
        icon: "/IntegratedDrainage.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Detailed Site Preparation & Grading",
        icon: "/SitePreparation.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Efficient Edge Restraint Installation",
        icon: "/EdgeRestraint.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Seamless Landscape Integration",
        icon: "/SeamlessLandscape.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Paver Sealing & Protective Treatments",
        icon: "/PaverSealing.png",
        iconWidth: 60,
        iconHeight: 60,
      },
      {
        text: "Ongoing Maintenance & Repair Services",
        icon: "/OngoingMaintenance.png",
        iconWidth: 60,
        iconHeight: 60,
      },
    ],
  },
  // Add more routes as needed...
};

export default function SubServices() {
  const pathname = usePathname();

  // Fallback data if route not found
  const defaultData = {
    mainTitle: "Service Plan",
    shortParagraph:
      "We create a custom plan to meet your unique property needs, ensuring consistent care and exceptional results.",
    includedTitle: "What is Included?",
    planServiceName: "Service",
    planBullets: [
      { text: "Custom bullet 1", icon: "/leaf.png" },
      { text: "Custom bullet 2", icon: "/leaf.png" },
    ],
  };

  const {
    mainTitle,
    shortParagraph,
    includedTitle,
    planServiceName,
    planBullets,
  } = planData[pathname] || defaultData;

  // Determine if bullet count is odd
  const bulletCount = planBullets.length;
  const isOdd = bulletCount % 2 === 1;

  return (
    <section className="max-w-screen-xl mx-auto py-8 px-4">
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-primeColor mb-4 text-center">
        {mainTitle}
      </h2>

      {/* Short Paragraph */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line max-w-3xl mx-auto mb-8 text-center">
        {shortParagraph}
      </p>

      {/* Secondary Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
        {includedTitle}
      </h3>

      {/* "Our ___ plan consists of:" */}
      <p className="text-gray-700 text-center mb-6">
        Our additional {planServiceName} services include:
      </p>

      {isOdd && bulletCount > 1 ? (
        <>
          {/* If bullet count is odd (>=3), display first (n-1) in 2-col grid */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {planBullets.slice(0, bulletCount - 1).map((item, idx) => (
              <BulletCard
                key={idx}
                text={item.text}
                icon={item.icon}
                iconWidth={item.iconWidth}
                iconHeight={item.iconHeight}
              />
            ))}
          </div>

          {/* Center the last bullet point below */}
          <div className="flex justify-center mt-6">
            <BulletCard
              text={planBullets[bulletCount - 1].text}
              icon={planBullets[bulletCount - 1].icon}
              iconWidth={planBullets[bulletCount - 1].iconWidth}
              iconHeight={planBullets[bulletCount - 1].iconHeight}
            />
          </div>
        </>
      ) : (
        /* If even number of bullets or < 3 bullets, just display all in normal 2-col grid */
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {planBullets.map((item, idx) => (
            <BulletCard
              key={idx}
              text={item.text}
              icon={item.icon}
              iconWidth={item.iconWidth}
              iconHeight={item.iconHeight}
            />
          ))}
        </div>
      )}
    </section>
  );
}

/** A subcomponent that displays each bullet in a "card" style with a hover effect */
interface BulletCardProps {
  text: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
}

function BulletCard({ text, icon, iconWidth, iconHeight }: BulletCardProps) {
  const finalWidth = iconWidth || 24;
  const finalHeight = iconHeight || 24;

  return (
    <div className="relative group w-full sm:w-[380px] h-[60px]">
      {/* PrimeColor background behind card, revealed on hover */}
      <div className="absolute inset-0 bg-primeColor rounded-md -z-10 transition-all" />

      {/* The card itself */}
      <div
        className="
          relative z-10
          flex items-center
          justify-start
          gap-3
          px-4
          border border-primeColor
          shadow-sm
          rounded-md
          bg-white
          cursor-pointer
          transition-transform
          duration-300
          group-hover:translate-x-2
          group-hover:-translate-y-2
          w-full
          h-full
        "
      >
        {icon && (
          <img
            src={icon}
            alt="Bullet icon"
            style={{
              width: `${finalWidth}px`,
              height: `${finalHeight}px`,
            }}
          />
        )}
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}