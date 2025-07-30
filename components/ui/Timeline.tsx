"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TimerIcon, Calendar, CheckCircle } from "lucide-react";

interface TimelineItem {
  id: number;
  role: string;
  company: string;
  date: string;
  location?: string;
  category: string;
  summary: string;
  achievements?: string[];
  images?: string[];
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-whitefont-sans px-3 sm:px-5 md:px-10 flex flex-col"
      ref={containerRef}>
      <div className="max-w-9xl py-4 sm:py-6 md:px-8 lg:px-10">
        <h2 className="text-lg sm:text-2xl md:text-4xl mb-2 sm:mb-4 text-black dark:text-white max-w-5xl font-bold">
          Changelog from my journey 
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-sm md:max-w-md">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-8xl mx-auto pb-10 sm:pb-20">
        {data.map((item: TimelineItem) => (

          <div key={item.id} className="flex justify-start pt-8 sm:pt-12 md:pt-20 lg:pt-40 gap-1 sm:gap-2 md:gap-30" >

            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-14 sm:top-16 md:top-20 lg:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-5 sm:h-7 md:h-9 absolute left-0 sm:left-1 md:left-3 w-5 sm:w-7 md:w-9 rounded-full bg-white dark:bg-black flex items-center justify-center z-10 shadow-md">
                <div
                  className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full bg-purple-500 dark:bg-purple-400 border border-purple-300 dark:border-purple-700 p-1 sm:p-1.5" />
              </div>
              <h3
                className="hidden md:block text-base lg:text-xl md:pl-16 lg:pl-20 md:text-2xl lg:text-3xl font-bold text-neutral-400 dark:text-neutral-400">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-7 sm:pl-10 md:pl-16 lg:pl-20 pr-1 sm:pr-2 md:pr-4 w-full">
              
              
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-white">
                {item.role}
              </h3>
              <p className="flex flex-col sm:flex-row sm:items-center mt-1" > 
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-purple-300 mb-1">{item.company}</span> 
                <span className="flex sm:ml-3 gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm items-center"> 
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"/> 
                  {item.date}
                </span>
              </p>
              {item.location && (
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-neutral-400 mb-1 sm:mb-2 italic">{item.location}</p>
              )}

              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 sm:mb-3 md:mb-4 w-full sm:w-xl max-w-3xl">{item.summary}</p>

              {item.achievements?.length ? (
                <ul className="list-inside text-[11px] sm:text-xs md:text-sm lg:text-base space-y-1 sm:space-y-1.5 mb-2 sm:mb-3 md:mb-4 max-w-3xl">
                  {item.achievements.map((point, idx) => (
                     <li key={idx} className="break-words"><span className="flex gap-1 sm:gap-1.5 md:gap-2 items-start">
                       <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-green-400 mt-0.5 flex-shrink-0"/>
                       <span>{point}</span>
                     </span></li>
                  ))}
                </ul>
              ): null}
              {item.images && item.images.length > 0 && (
                <div className="mt-2 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                  {item.images.map((img, index) => (
                    <div key={index} className="relative aspect-video sm:aspect-square overflow-hidden rounded-lg border border-white/10 shadow hover:shadow-md transition duration-300">
                      <img
                        src={img}
                        alt={`Image ${index + 1} for ${item.role}`}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

            </div>


          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[10px] sm:left-[14px] md:left-[18px] lg:left-[28px] top-0 overflow-hidden w-[1px] sm:w-[1.5px] md:w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] sm:w-[1.5px] md:w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full shadow-sm shadow-purple-500/20" />
        </div>
      </div>
    </div>
  );
};