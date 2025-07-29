"use client";
import { useState, ReactElement } from "react";
import {
  SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiGit, SiTypescript, SiC,
  SiPhp, SiPostgresql, SiMongodb,
  SiFirebase, SiVercel,
  SiFramer, SiExpress,
  SiDocker, SiPostman,
  SiFigma, SiRedux, SiNodedotjs,
  SiGithub, SiFastapi, SiHtml5, SiCss3, SiThreedotjs, SiNetlify, SiPythonanywhere, SiAnaconda, SiOllama, SiIntellijidea, SiLinux, SiMysql, SiSqlite, SiSqlalchemy, SiBootstrap, SiNpm, SiAndroidstudio, SiArduino
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

interface Skill {
  name: string;
  icon: ReactElement;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Python", icon: <SiPython className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Java", icon: <FaJava className="w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "C", icon: <SiC className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "PHP", icon: <SiPhp className="text-blue-700 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "HTML", icon: <SiHtml5 className="text-red-700 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-700 w-5 h-5 sm:w-6 sm:h-6" /> }
    ],
  },
  {
    category: "Frameworks/Libraries",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Npm", icon: <SiNpm className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-white w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "SqlAlchemy", icon: <SiSqlalchemy className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" /> },
    ],
  },

  {
    category: "Database/Cloud",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Vercel", icon: <SiVercel className="text-white w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Netlifly", icon: <SiNetlify className="text-cyan-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "PythonAnyWhere", icon: <SiPythonanywhere className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "SQLite", icon: <SiSqlite className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" /> },
    ],
  },


  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "GitHub", icon: <SiGithub className="text-white w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Anaconda", icon: <SiAnaconda className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Ollama", icon: <SiOllama className="text-white-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Visual Studio Code", icon: <VscVscode className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Ardiuno IDEA", icon: <SiArduino className="text-white w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "InteliJ IDEA", icon: <SiIntellijidea className="text-blue-700 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-200 w-5 h-5 sm:w-6 sm:h-6" /> },
    ],
  },
];

export function SkillSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(skillData[0].category);

  const selectedSkills = skillData.find((cat) => cat.category === selectedCategory)?.skills || [];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white mb-6 sm:mb-8 md:mb-10">
      <div className="text-center mb-8 sm:mb-10 md:mb-14">

        <div className="flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
          >
            <span className="text-white text-xs sm:text-sm font-semibold">My Skills</span>
          </HoverBorderGradient>
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 sm:mt-6">
          My Secret <span className="text-purple-500">Sauce</span>
        </h3>
        <p className="text-gray-400 text-base sm:text-lg mt-1 sm:mt-3 px-2 max-w-2xl mx-auto">
          Tools, technologies, and frameworks I use to build intelligent, scalable, and performant digital systems.

        </p>
      </div>

      <div className="flex gap-2 sm:gap-3 flex-wrap items-center justify-center mb-4 sm:mb-6">
        {skillData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full border ${selectedCategory === cat.category
              ? "bg-purple-700 text-white"
              : "border-gray-600 text-gray-300 hover:bg-white/10"
              } transition`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 justify-center mx-auto w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        {selectedSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-xl bg-black border border-neutral-700 p-1.5 sm:p-2 backdrop-blur shadow hover:scale-105 transition-transform"
          >
            <div className="flex-shrink-0">
              {skill.icon}
            </div>
            <span className="text-white text-xs sm:text-sm font-medium pr-1 sm:pr-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;