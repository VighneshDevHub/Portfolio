"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import { Rocket, ShieldCheck, Code, Database } from "lucide-react";
import {
  SiFlask,
  SiPostgresql,
  SiGoogle,
  SiChatbot,
  SiShieldsdotio,
  SiPython,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiAnaconda,
  SiVercel,
  SiOllama,
  SiOpenai,
  SiJinja,
  SiNpm,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";
import { GoNorthStar } from "react-icons/go";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

import Image from "next/image";

interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface Tech {
  icon: React.ReactNode;
  label: string;
}

interface ContentItem {
  slug: string;
  title: string;
  description: string;
  features: Feature[];
  tech: Tech[];
  content: React.ReactNode;
  liveDemo?: string;
}

const content: ContentItem[] = [
  {
    slug: "newsguard-ai",
    title: "NewsGuard AI",
    description:
      "An AI-powered web platform that detects fake news by extracting key phrases, verifying sources via Google Search, and using LLMs for authenticity scoring. Built with Flask, PostgreSQL, and React.",
    features: [
      {
        icon: <GoNorthStar className="w-5 h-5  text-cyan-400" />,
        label:
          "Extracts key phrases from news articles using LLMs to identify the core context.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-cyan-400" />,
        label:
          "Uses Google Custom Search API to find real-time references and trusted sources.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-cyan-400" />,
        label:
          "Compares the article with external sources using LLMs to generate a truthfulness score.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-cyan-400" />,
        label:
          " Persists article data, user logs, and historical results using PostgreSQL.",
      },
    ],
    tech: [
      { icon: <SiPython className="text-blue-500 w-5 h-5" />, label: "Python" },
      { icon: <SiFlask className="w-5 h-5 text-white" />, label: "Flask" },
      { icon: <SiHtml5 className="text-red-700 w-6 h-6" />, label: "HTML" },
      { icon: <SiCss3 className="text-blue-700 w-6 h-6" />, label: "CSS" },
      { icon: <SiJinja className="text-gray-500 w-6 h-6" />, label: "Jinja" },
      {
        icon: <SiPostgresql className="w-5 h-5 text-blue-400" />,
        label: "PostgreSQL",
      },
      {
        icon: <SiAnaconda className="text-green-500 w-6 h-6" />,
        label: "Anaconda",
      },
      {
        icon: <SiOllama className="text-white-500 w-6 h-6" />,
        label: "Ollama",
      },
      {
        icon: <SiOpenai className="text-white-500 w-6 h-5" />,
        label: "OpenAI",
      },

      { icon: <SiVercel className="text-white w-6 h-6" />, label: "Vercel" },

      {
        icon: <SiGoogle className="w-5 h-5 text-green-300" />,
        label: "Google Search API",
      },
      { icon: <SiFigma className="text-purple-500 w-5 h-5" />, label: "Figma" },
    ],
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <h1 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">NewsGuard AI</h1>
        <Image
          className="mx-auto border-2 border-cyan-400 rounded-xl w-full max-w-[800px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto object-cover"
          src="/images/NewsGuardAI/NewsGuardAI.jpg"
          alt="NewsGuard AI Project"
          width={800}
          height={800}
          priority
        />
      </div>
    ),

    liveDemo: "https://newsguard-ai.vercel.app",
  },

  {
    slug: "unit-converter-app",
    title: "Unit Converter",
    description:
      "An AI-powered web platform that detects fake news by extracting key phrases, verifying sources via Google Search, and using LLMs for authenticity scoring. Built with Flask, PostgreSQL, and React.",
    features: [
      {
        icon: <GoNorthStar className="w-5 h-5  text-purple-600" />,
        label:
          "Extracts key phrases from news articles using LLMs to identify the core context.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-purple-600" />,
        label:
          "Uses Google Custom Search API to find real-time references and trusted sources.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-purple-600" />,
        label:
          "Compares the article with external sources using LLMs to generate a truthfulness score.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-purple-600" />,
        label:
          " Persists article data, user logs, and historical results using PostgreSQL.",
      },
    ],
    tech: [
      { icon: <SiFlask className="w-5 h-5 text-sky-500" />, label: "Flask" },
      {
        icon: <SiPostgresql className="w-5 h-5 text-yellow-400" />,
        label: "PostgreSQL",
      },
      {
        icon: <SiGoogle className="w-5 h-5 text-green-400" />,
        label: "Google Search API",
      },
      {
        icon: <SiChatbot className="w-5 h-5 text-pink-500" />,
        label: "LLM (Ollama/GPT)",
      },
      {
        icon: <SiShieldsdotio className="w-5 h-5 text-purple-500" />,
        label: "News Authenticity",
      },
    ],
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <h1 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Unit Converter</h1>
        <Image
          className="mx-auto border-2 border-cyan-400 rounded-xl w-full max-w-[800px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto object-cover"
          src="/images/NewsGuardAI/NewsGuardAI.jpg"
          alt="Unit Converter Project"
          width={800}
          height={500}
          priority
        />
      </div>
    ),
  },
  {
    slug: "portfolio-website",

    title: "Portfolio",
    description:
      "An AI-powered web platform that detects fake news by extracting key phrases, verifying sources via Google Search, and using LLMs for authenticity scoring. Built with Flask, PostgreSQL, and React.",
    features: [
      {
        icon: <GoNorthStar className="w-5 h-5  text-blue-900 " />,
        label:
          "Extracts key phrases from news articles using LLMs to identify the core context.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-blue-900 " />,
        label:
          "Uses Google Custom Search API to find real-time references and trusted sources.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-blue-900 " />,
        label:
          "Compares the article with external sources using LLMs to generate a truthfulness score.",
      },
      {
        icon: <GoNorthStar className="w-5 h-5 text-blue-900 " />,
        label:
          " Persists article data, user logs, and historical results using PostgreSQL.",
      },
    ],
    tech: [
      {
        icon: <SiNextdotjs className="text-white w-6 h-6" />,
        label: "Next.js",
      },
      {
        icon: <SiTailwindcss className="text-teal-400 w-6 h-6" />,
        label: "Tailwind CSS",
      },
      {
        icon: <SiNodedotjs className="text-green-600 w-6 h-6" />,
        label: "Node.js",
      },
      { icon: <SiShadcnui className="text-white w-5 h-5" />, label: "Shadcn UI" },
      { icon: <SiFramer className="text-white text-2xl" />, label: "Framer" },

      { icon: <SiVercel className="text-white w-6 h-6" />, label: "Vercel" },
    ],
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-white">
        <h1 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">My Portfolio</h1>
        <Image
          className="mx-auto border-2 border-cyan-400 rounded-xl w-full max-w-[800px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto object-cover"
          src="/images/NewsGuardAI/NewsGuardAI.jpg"
          alt="Portfolio Project"
          width={800}
          height={800}
          priority
        />
      </div>
    ),
  },
];

export function ProjectsSection(): React.ReactElement {
  return (
    <section
      id="projects"
      className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16 min-h-screen overflow-hidden"
    >
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <div className="flex justify-center text-center mb-3 sm:mb-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span className="text-white text-xs sm:text-sm  ">My Work</span>
          </HoverBorderGradient>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight px-2">
          Featured <span className="text-purple-500">Projects</span>
        </h3>
        <p className="text-gray-400 text-lg sm:text-base md:text-lg mt-1 max-w-2xl mx-auto">
          A showcase of web and AI-driven projects where creativity meets clean architecture and execution.

        </p>
      </div>

      <div className="w-full py-2 sm:py-4">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}

export default ProjectsSection;