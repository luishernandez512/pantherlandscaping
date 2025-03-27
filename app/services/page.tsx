import SmallBanner from "@/components/Smallbanner";
import ServiceDetail from "@/components/ServiceDetail";
import { categoriesData, serviceDescriptions, landscapingDetailItems, hardscapingDetailItems } from "@/constants";
import FeaturedProjects from "@/components/FeaturedProjects";
import Estimate from "@/components/Estimate";

export default function Services() {
  return (
    <main>
      <SmallBanner />

      {/* Landscaping Section (default: image on left, text on right) */}
      <ServiceDetail
        title={categoriesData[0].title}           // "Lanscaping" (consider correcting the spelling if needed)
        description={serviceDescriptions.landscaping}
        imageUrl={categoriesData[0].imgUrl}          // "/HomePic.JPG"
        reverseLayout={false}                        // Default: image left, text right
        detailItems={landscapingDetailItems}         // 6 items specific to Landscaping
        buttonUrl={categoriesData[0].href}
      />

      {/* Hardscaping Section (reversed: image on right, text on left) */}
      <ServiceDetail
        title={categoriesData[1].title}           // "Hardcaping" (again, consider spelling)
        description={serviceDescriptions.hardscaping}
        imageUrl={categoriesData[1].imgUrl}          // "/Hardscape.JPG"
        reverseLayout={true}                        // Reverse the layout
        detailItems={hardscapingDetailItems}         // 4 items specific to Hardscaping
        buttonUrl={categoriesData[1].href}
      />
      <FeaturedProjects />
      <Estimate />
    </main>
  );
}

