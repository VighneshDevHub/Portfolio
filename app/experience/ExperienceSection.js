"use client";

import React, { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { Timeline } from "@/components/ui/Timeline";
import { experienceData } from "@/data/experienceData";

export function ExperienceSection() {
  const [selectedCategory, setSelectedCategory] = useState("Work");

  const categories = ["Work", "Education", "Certifications"];

  const filteredData =experienceData.filter(item => item.category === selectedCategory);

  return (
    <div className="relative w-full overflow-clip px-4 md:px-0">

      <div className="flex justify-center text-center mt-8 md:mt-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 md:space-x-5 p-2"
        >
          <span className="text-white text-xs md:text-sm font-semibold">Select Journey Timeline</span>
        </HoverBorderGradient>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center my-4 md:my-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all border ${selectedCategory === cat
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "bg-white/10 text-white border-white/20"
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
