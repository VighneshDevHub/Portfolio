"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { img: "/Images/car.jpeg", text: "I Travel" },
  { img: "/Images/coder.jpg", text: "I Code" },
  { img: "/Images/batman.png", text: "I Gym" },
  { img: "/Images/labtocat.png", text: "I Eat" },
   { img: "/Images/batman.png", text: "I Gym" },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + cards.length) % cards.length;

    switch (position) {
      case 0:
        return "z-30 scale-100 translate-x-0 rotate-0 opacity-100";
      case 1:
        return "z-20 scale-90 -translate-x-16 -rotate-6 opacity-40";
      case 2:
        return "z-10 scale-90 translate-x-16 rotate-6 opacity-40";
      default:
        return "hidden";
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-[300px] h-[420px] sm:w-[340px] sm:h-[400px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden transition-all duration-700 ease-in-out ${getCardStyle(index)}`}
          >
            <Image
              src={card.img}
              alt={card.text}
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 h-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={cards[currentIndex].text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-white text-lg sm:text-xl font-semibold text-center"
          >
            {cards[currentIndex].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardCarousel;
