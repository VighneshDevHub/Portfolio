"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName = "bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-4",
}) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerTop - 100); // Offset adjustment
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col lg:flex-row h-auto lg:h-[36rem] gap-5 lg:gap-10 px-4 sm:px-6 lg:px-2 overflow-y-auto lg:overflow-y-scroll scrollbar-hide p-3 sm:p-4 lg:p-5"
    >
      {/* Mobile View: Project Navigation (visible only on small screens) */}
      <div className="lg:hidden w-full mb-6 flex justify-center">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {content.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${activeCard === index 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Left: Scrollable Cards (hidden on mobile) */}
      <div className="hidden lg:flex flex-col space-y-30 w-full lg:w-4/5 p-2 sm:p-3 lg:p-5 rounded-xl">
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              opacity: activeCard === index ? 1 : 0.5,
              transform: activeCard === index ? "scale(1.03)" : "scale(1)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
            className={twMerge(
              "rounded-xl p-3 sm:p-4 min-h-[400px] lg:min-h-[500px] flex items-center justify-center",
              contentClassName
            )}
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Mobile View: Active Card Content (visible only on small screens) */}
      <div className="lg:hidden w-full mb-6">
        {content[activeCard] && (
          <div className={twMerge(
            "rounded-xl p-4 min-h-[300px] flex items-center justify-center",
            contentClassName
          )}>
            {content[activeCard].content}
          </div>
        )}
      </div>

      {/* Right: Sticky Info */}
      <div className="w-full lg:w-5/8 lg:sticky lg:top-8 h-fit space-y-6 lg:space-y-10">
        {content[activeCard] && (
          <div className="space-y-3 lg:space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100"
            >
              {content[activeCard].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs sm:text-sm text-slate-300"
            >
              {content[activeCard].description}
            </motion.p>

            {content[activeCard].features && (
              <div className="space-y-2">
                <p className="text-slate-400 font-semibold text-sm lg:text-base">Features:</p>
                <ul className="space-y-1">
                  {content[activeCard].features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm"
                    >
                      {feature.icon}
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content[activeCard].tech && (
              <div className="space-y-2 mt-3 lg:mt-4">
                <p className="text-slate-400 font-semibold text-sm">Tech Stack:</p>
                <ul className="flex flex-wrap gap-2 text-xs">
                  {content[activeCard].tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-black border border-neutral-700 px-2 py-1 rounded-md text-slate-200 flex items-center gap-1"
                    >
                      {tech.icon}
                      <span>{tech.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-2 sm:gap-3 pt-2">
              {content[activeCard].slug && (
                <Link
                  href={`/projects/${content[activeCard].slug}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              )}

              {content[activeCard].liveDemo && (
                <a
                  href={content[activeCard].liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
