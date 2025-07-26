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
      className="relative w-full flex h-[34rem] gap-10 px-10 overflow-y-scroll scrollbar-hide p-5 "
    >
      {/* Left: Scrollable Cards */}
      <div className="flex flex-col space-y-30 w-4/5 p-5 rounded-xl">
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
              "rounded-xl p-4 min-h-[500px] flex items-center justify-center",
              contentClassName
            )}
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Right: Sticky Info */}
      <div className="w-5/8 sticky top-8 h-fit space-y-10">
        {content[activeCard] && (
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-slate-100"
            >
              {content[activeCard].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-slate-300"
            >
              {content[activeCard].description}
            </motion.p>

            {content[activeCard].features && (
              <div className="space-y-2">
                <p className=" text-slate-400 font-semibold text-base">Features:</p>
                <ul className="space-y-1">
                  {content[activeCard].features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-200 text-sm"
                    >
                      {feature.icon}
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content[activeCard].tech && (
              <div className="space-y-2 mt-4">
                <p className=" text-slate-400 font-semibold">Tech Stack:</p>
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


            <div className="flex gap-3">
              {content[activeCard].slug && (
                <Link
                  href={`/projects/${content[activeCard].slug}`}
                  className="px-4 py-2 text-sm rounded-md font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              )}

              {content[activeCard].liveDemo && (
                <a
                  href={content[activeCard].liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
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
