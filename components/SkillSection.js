"use client";
import { useState } from "react";
import {
  SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiGit, SiTypescript, SiC,
  SiPhp, SiPostgresql, SiMongodb,
  SiFirebase, SiVercel,
  SiFramer, SiExpress,
  SiDocker, SiPostman,
  SiFigma, SiRedux, SiNodedotjs,
  SiGithub, SiFastapi, SiHtml5,SiCss3,SiThreedotjs,SiNetlify, SiPythonanywhere, SiAnaconda, SiOllama, SiIntellijidea, SiLinux, SiMysql,SiSqlite,SiSqlalchemy,SiBootstrap, SiNpm, SiAndroidstudio, SiArduino
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const skillData = [

  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
      { name: "Python", icon: <SiPython className="text-blue-400 w-6 h-6" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600 w-6 h-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
      { name: "Java", icon: <FaJava className="w-6 h-6" /> },
      { name: "C", icon: <SiC className="text-blue-500 w-6 h-6" /> },
      { name: "PHP", icon: <SiPhp className="text-blue-700 w-6 h-6" /> },
      { name: "HTML", icon: <SiHtml5 className="text-red-700 w-6 h-6" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-700 w-6 h-6" /> }

    ],
  },
  {
    category: "Frameworks/Libraries",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400 w-6 h-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white w-6 h-6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500 w-6 h-6" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-6 h-6" /> },
      { name: "Npm", icon: <SiNpm className="text-green-600 w-6 h-6" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600 w-6 h-6" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-blue-500 w-6 h-6" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-white w-6 h-6" /> },
      { name: "SqlAlchemy", icon: <SiSqlalchemy className="text-blue-500 w-6 h-6" /> },

    ],
  },
 
  {
    category: "Database/Cloud",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 w-6 h-6" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-6 h-6" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-600 w-6 h-6" /> },
      { name: "Vercel", icon: <SiVercel className="text-white w-6 h-6" /> },
      {name: "Netlifly", icon: <SiNetlify className="text-cyan-600 w-6 h-6"/>},
      {name: "PythonAnyWhere", icon: <SiPythonanywhere className="text-green-600 w-6 h-6"/>},
      {name: "MySQL", icon: <SiMysql className="text-blue-600 w-6 h-6"/>},
      {name: "SQLite", icon: <SiSqlite className="text-cyan-400 w-6 h-6"/>},


    ],
  },
  

   {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500 w-6 h-6" /> },
      { name: "GitHub", icon: <SiGithub className="text-white w-6 h-6" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 w-6 h-6" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500 w-6 h-6" /> },
      { name: "Anaconda", icon: <SiAnaconda className="text-green-500 w-6 h-6" /> },
      { name: "Ollama", icon: <SiOllama className="text-white-500 w-6 h-6" /> },
      { name: "Visual Studio Code", icon: <VscVscode className="text-blue-500 w-6 h-6" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-emerald-400 w-6 h-6" /> },
      { name: "Ardiuno IDEA", icon: <SiArduino className="text-white w-6 h-6" /> },
      { name: "InteliJ IDEA", icon: <SiIntellijidea className="text-blue-700 w-6 h-6" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-6 h-6" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-200 w-6 h-6" /> },



    ],
  },
];

export function SkillSection() {
  const [selectedCategory, setSelectedCategory] = useState(skillData[0].category);

  const selectedSkills = skillData.find((cat) => cat.category === selectedCategory)?.skills || [];

  return (
    <section id="skills" className=" w-full max-w-7xl mx-auto px-8 py-20 p-6 md:p-10 text-white mb-10">
      <div className="text-center mb-14">

        <div className=" flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span className="text-white text-sm font-semibold ">My Skills</span>
          </HoverBorderGradient>
        </div>   

        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
          My Secret <span className="text-purple-500">Sauce</span>
        </h3>
        <p className="text-gray-400 text-lg mt-2">
          Explore tech, design, and strategies behind modern builds
        </p>
      </div>

      <div className="flex gap-3 flex-wrap items-center justify-center mb-6">
        {skillData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-4 py-1 rounded-full border ${selectedCategory === cat.category
              ? "bg-purple-700 text-white"
              : "border-gray-600 text-gray-300 hover:bg-white/10"
              } transition`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mx-50 mt-10 max-w-3/4 justify-center">

        {selectedSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-4  rounded-xl bg-black border border-neutral-700 p-2  backdrop-blur shadow hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="text-white text-sm font-medium ">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;