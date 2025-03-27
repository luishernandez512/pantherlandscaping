import React from "react";
import SmallBanner from "@/components/Smallbanner";
import ServiceSquares from "@/components/Grid";
import { gridData } from "@/constants";
import Estimate from "@/components/Estimate";
import DescriptionBanner from "@/components/DescriptionBanner";
import WhyPanther from "@/components/WhyPanther";

const landscaping = () => {
    return (
        <main>
            <SmallBanner />
            <DescriptionBanner />
            <div className="max-w-screen-xl mx-auto py-12 px-4">
                <ServiceSquares services={gridData} />
            </div>
            <WhyPanther />
            <Estimate />
        </main>
    );
};

export default landscaping;