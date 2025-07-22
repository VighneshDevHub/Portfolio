"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const StickyScroll = ({
  content,
  contentClassName = 'bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-4'
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0a1026", // slate-900
    "#0a1026", // black
    "#0a1026"
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{}}
      className="relative flex h-[35rem] justify-center space-x-1 overflow-y-auto rounded-md p-10 gap-20 scrollbar-hide"
      ref={ref}
    >
      <div
        style={{ background: backgroundGradient }}
        className={twMerge(
          "sticky top-10 hidden w-3/5 overflow-hidden rounded-md lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>

      <div className="relative flex items-start px-4 mt-6">
        <div className="max-w-2xl space-y-15">
          {content.map((item, index) => (
            <div key={item.title + index} className="space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300"
              >
                {item.description}
              </motion.p>

              {item.features && (
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 font-semibold">Features:</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-200">
                        {feature.icon}
                        <span className="text-sm">{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.tech && (
                <div className="space-y-2 mt-4 ">
                  <p className="text-sm text-slate-400 font-semibold">Tech Stack:</p>
                  <ul className=" flex flex-wrap  text-xs gap-1.5">
                    {item.tech.map((tech, i) => (
                      <li key={i} className="flex items-center justify-center bg-black border border-neutral-700 p-2 rounded-lg space-x-1  text-slate-200">
                        {tech.icon}
                        <span>{tech.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="" />
        </div>
      </div>
    </motion.div>
  );
};