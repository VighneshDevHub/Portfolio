"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { FlipWords } from "@/components/ui/FlipWords";
import { AuroraText } from "@/components/magicui/aurora-text";
import CardCarousel from "@/components/ui/CardCarousel";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";
import { FaRegEnvelope } from "react-icons/fa";

const AboutMe: React.FC = () => {
  const words = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Mobile App Developer",
    "UI/UX Designer",
    "Freelancer",
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Bio Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex justify-center md:justify-start">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-1.5"
            >
              <span className="text-white text-sm font-semibold tracking-wide">
                More About Me
              </span>
            </HoverBorderGradient>
          </div>

          <div className="  md:text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-600 dark:text-neutral-400 tracking-normal">
            Hey, I'm <AuroraText className="font-bold">Vighnesh Salunkhe!</AuroraText>
            <br />
            <div className="flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              <span className=" text-neutral-600 dark:text-neutral-400 font-semibold">Professional</span>
              <FlipWords words={words} className="text-gray-500 shrink-0" />
            </div>
          </div>

          <p className="text-gray-400 text-base sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0  md:text-left ">
            I’m a Full Stack Developer with a strong passion for building intelligent and scalable web experiences.
            I’ve completed my Diploma in Computer Science Engineering and specialize in building full-stack applications using technologies like React, Next.js, and Node.js.
            <br /><br />
            I’m especially focused on integrating AI into web systems — including Generative AI, LLMs, and ML tools for real-world solutions.
            <br /><br />
            Currently exploring internships or placements where I can learn, contribute, and create impactful digital products.
            <br /><br />
            Let’s connect and build something meaningful together!
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-5 text-xl text-white/70">
            <Link href="https://github.com/VighneshDevHub" target="_blank"><SiGithub /></Link>
            <Link href="https://linkedin.com/in/vighneshsalunkhe" target="_blank"><SiLinkedin /></Link>
            <Link href="https://twitter.com" target="_blank"><SiX /></Link>
            <Link href="mailto:vighneshsalunkhe949@gmail.com"><FaRegEnvelope /></Link>
          </div>
        </div>

        {/* Card Carousel */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <CardCarousel />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
