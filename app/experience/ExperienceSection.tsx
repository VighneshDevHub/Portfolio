"use client";

import React, { JSX, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { Timeline } from "@/components/ui/Timeline";
import { experienceData, ExperienceItem } from "@/data/experienceData";

export function ExperienceSection(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("Work");

  const categories: string[] = ["Work", "Education", "Certifications"];

  const filteredData: ExperienceItem[] = experienceData.filter(item => item.category === selectedCategory);

  return (
    <div className="relative w-full overflow-clip px-3 sm:px-4 md:px-0">

      <div className="flex justify-center text-center mt-4 sm:mt-6 md:mt-8">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 sm:space-x-2 md:space-x-5 p-1.5 sm:p-2 shadow-md shadow-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        >
          <span className="text-white text-xs sm:text-sm md:text-base font-medium">Select Journey Timeline</span>
        </HoverBorderGradient>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4 justify-center my-3 sm:my-4 md:my-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-2.5 sm:px-3.5 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 border ${selectedCategory === cat
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-md shadow-purple-500/20"
              : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:shadow-md hover:shadow-purple-500/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <Timeline data={filteredData} />
    </div>
  );
}

export default ExperienceSection;