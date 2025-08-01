"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface TestimonialItem {
  id: string | number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

interface InfiniteMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      setDirection();
      setSpeed();
      setStart(true);
    }
  }, []);

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "30s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 ",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="relative w-[300px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-6 py-6 md:w-[400px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] shadow-xl"
          >
            <blockquote className="flex flex-col gap-4  ">
              <p className="text-sm leading-relaxed text-neutral-800 dark:text-gray-100">
                “{item.testimonial}”
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full border border-white dark:border-zinc-700"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-neutral-700 dark:text-gray-100">
                    {item.name}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-gray-400">
                    {item.role}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
