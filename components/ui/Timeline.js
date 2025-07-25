"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

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
      className="w-full bg-whitefont-sans md:px-10 flex flex-col "
      ref={containerRef}>
      <div className="max-w-9xl py-5 md:px-8 lg:px-10   ">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-5xl">
          Changelog from my journey
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-8xl mx-30 pb-20">
        {data.map((item) => (

          <div key={item.id} className="flex justify-start md:pt-40 md:gap-30  " >

            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              
              
              <h3 className="text-2xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="text-sm text-purple-300 mb-1">{item.company} • {item.date}</p>
              {item.location && (
                <p className="text-xs text-neutral-400 mb-2 italic">{item.location}</p>
              )}

              <p className="text-sm text-gray-300 mb-2">{item.summary}</p>

              {item.achievements?.length > 0 && (
                <ul className="list-disc list-inside text-sm text-white space-y-1 mb-4">
                  {item.achievements.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
              {item.images && item.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {item.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Image ${index + 1} for ${item.title}`}
                      className="w-full h-auto rounded-lg border border-white/10 object-cover shadow hover:scale-105 transition duration-300"
                    />
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
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
