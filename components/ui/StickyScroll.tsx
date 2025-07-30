"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface Tech {
  icon: React.ReactNode;
  label: string;
}

interface ContentItem {
  slug?: string;
  title: string;
  description: string;
  features?: Feature[];
  tech?: Tech[];
  content: React.ReactNode;
  liveDemo?: string;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName = "bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-4",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeCard, setActiveCard] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // Adjust offset based on screen size
        const offsetAdjustment = window.innerWidth >= 1024 ? 100 : 50;
        const distance = Math.abs(rect.top - containerTop - offsetAdjustment);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    const handleResize = () => {
      // Force recalculation on resize
      handleScroll();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      
      // Initial calculation
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col lg:flex-row lg:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] gap-5 lg:gap-10 px-4 sm:px-6 lg:px-2 overflow-y-auto lg:overflow-y-scroll scrollbar-hide p-3 sm:p-4 lg:p-5 max-w-[100vw] mx-auto"
    >
      {/* Mobile View: Project Navigation (visible only on small screens) */}
      <div className={`${isMobile ? 'flex' : 'hidden'} w-full mb-6 justify-center`}>
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide max-w-full px-2">
          {content.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCard(index);
                // Smooth scroll to the content on mobile
                if (isMobile && containerRef.current) {
                  const contentElement = document.getElementById(`mobile-content-${index}`);
                  if (contentElement) {
                    contentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }
                }
              }}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-full whitespace-nowrap transition-all ${activeCard === index
                ? 'bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/20'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Left: Scrollable Cards (visible only on desktop) */}
      <div className={`${!isMobile ? 'flex' : 'hidden'} flex-col space-y-30 w-full lg:w-4/5 p-2 sm:p-3 lg:p-5 rounded-xl`}>
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            style={{
              opacity: activeCard === index ? 1 : 0.5,
              transform: activeCard === index ? "scale(1.03)" : "scale(1)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
            className={twMerge(
              "rounded-xl p-3 sm:p-4 min-h-[400px] lg:min-h-[550px] xl:min-h-[600px] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300",
              contentClassName
            )}
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Mobile View: Active Card Content (visible only on small screens) */}
      <div className={`${isMobile ? 'block' : 'hidden'} w-full mb-6`}>
        {content.map((item, index) => (
          <div 
            key={index}
            id={`mobile-content-${index}`}
            className={twMerge(
              "rounded-xl p-4 min-h-[250px] sm:min-h-[350px] md:min-h-[400px] flex flex-col gap-6 transition-all duration-300 shadow-xl mb-6",
              contentClassName,
              activeCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
            )}
          >
            <div className="flex items-center justify-center">
              {item.content}
            </div>
            
            {/* Mobile Project Info */}
            <div className="space-y-3 mt-4 pt-4 border-t border-white/10">
              <h2 className="text-xl font-bold text-slate-100">{item.title}</h2>
              
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              
              {item.features && (
                <div className="space-y-2">
                  <p className="text-slate-400 font-semibold text-sm">Features:</p>
                  <ul className="space-y-1">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-200 text-sm">
                        <span className="mt-0.5 flex-shrink-0">{feature.icon}</span>
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.tech && (
                <div className="space-y-2 mt-3">
                  <p className="text-slate-400 font-semibold text-sm">Tech Stack:</p>
                  <ul className="flex flex-wrap gap-1.5 text-xs">
                    {item.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-black border border-neutral-700 px-2 py-1 rounded-md text-slate-200 flex items-center gap-1 hover:border-neutral-500 transition-colors"
                      >
                        {tech.icon}
                        <span>{tech.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex gap-2 pt-2 flex-wrap">
                {item.slug && (
                  <Link
                    href={`/projects/${item.slug}`}
                    className="px-3 py-1.5 text-xs rounded-md font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    View Details
                  </Link>
                )}
                
                {item.liveDemo && (
                  <a
                    href={item.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-md hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Sticky Info (desktop only) */}
      <div className={`w-full ${!isMobile ? 'lg:w-5/8 lg:sticky lg:top-8' : ''} h-fit space-y-6 lg:space-y-10 ${isMobile ? 'hidden' : ''}`}>
        {content[activeCard] && (
          <div className="space-y-3 lg:space-y-4 bg-black/20 backdrop-blur-sm p-4 sm:p-5 rounded-xl lg:bg-transparent lg:backdrop-filter-none lg:p-0">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100"
            >
              {content[activeCard].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed"
            >
              {content[activeCard].description}
            </motion.p>

            {content[activeCard].features && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="space-y-2"
              >
                <p className="text-slate-400 font-semibold text-sm lg:text-base">Features:</p>
                <ul className="space-y-2 sm:space-y-1">
                  {content[activeCard].features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start sm:items-center gap-2 text-slate-200 text-sm sm:text-base"
                    >
                      <span className="mt-0.5 sm:mt-0 flex-shrink-0">{feature.icon}</span>
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {content[activeCard].tech && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="space-y-2 mt-3 lg:mt-4"
              >
                <p className="text-slate-400 font-semibold text-sm sm:text-base">Tech Stack:</p>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                  {content[activeCard].tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-black border border-neutral-700 px-2 py-1 rounded-md text-slate-200 flex items-center gap-1 hover:border-neutral-500 transition-colors"
                    >
                      {tech.icon}
                      <span>{tech.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex gap-2 sm:gap-3 pt-2 flex-wrap">
              {content[activeCard].slug && (
                <Link
                  href={`/projects/${content[activeCard].slug}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  View Details
                </Link>
              )}

              {content[activeCard].liveDemo && (
                <a
                  href={content[activeCard].liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-md hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Live Demo
                </a>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};