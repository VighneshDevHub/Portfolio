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
    <div className="relative w-full overflow-clip">

      <div className=" flex justify-center text-center mt-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-5 p-2"
        >
          <span className="text-white text-sm font-semibold space-x-5">Select Journey Tiemline</span>
        </HoverBorderGradient>
      </div>
      <div className="flex gap-4 justify-center my-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedCategory === cat
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
