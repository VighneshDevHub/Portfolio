"use client";;
import { Box, Code, HeartHandshake, Globe, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/GlowingEffect";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript,SiRedux ,SiNodedotjs,SiPython, SiTailwindcss, SiMongodb, SiFramer, SiGit,SiGithub } from "react-icons/si";

const techStackIcons = [
  { icon: <SiNextdotjs className="text-white text-2xl" />, label: "Next.js" },
  { icon: <SiReact className="text-cyan-400 text-2xl" />, label: "React" },
  { icon: <SiTypescript className="text-blue-500 text-2xl" />, label: "TypeScript" },
  { icon: <SiNodedotjs className="text-green-600 text-2xl" />, label: "Node.js" },
  { icon: <SiJavascript className="text-yellow-300 text-2xl" />, label: "JavaScript" },
  { icon: <SiRedux className="text-purple-500 text-2xl" />, label: "Redux" },
  { icon: <SiPython className="text-yellow-400 text-2xl" />, label: "Python" },
  { icon: <SiTailwindcss className="text-sky-400 text-2xl" />, label: "Tailwind CSS" },
  { icon: <SiMongodb className="text-green-500 text-2xl" />, label: "MongoDB" },
  { icon: <SiFramer className="text-white text-2xl" />, label: "Framer" },
  { icon: <SiGit className="text-orange-500 text-2xl" />, label: "Git" },
  { icon: <SiGithub className="text-white text-2xl" />, label: "GitHub" },


];


export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-8 py-20">

      <ul
        className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Client First Approach"
          description="Building trust through transparent comminication and collaboration." />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Gloabal Flexiblity"
          description="Available across time zones, cultures, and tech environment for seamless worldwide collaborations." />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Modern Tech Stack"
          description="Technologies and tools I used to build innovative solutions." />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="AI Powered Solutions"
          description="Specializing in intelligent automation and LLM integrations." />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<HeartHandshake className="h-4 w-4 text-black dark:text-neutral-400" />}
          title=" Let’s Build Together"
          description="Open to freelance, internships, and collaboration. Let’s ship something meaningful together." />
      </ul>
    </section>

  );
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  icons

}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}

              </h2>

              {title === "Modern Tech Stack" && (
                  <div className="grid grid-cols-4 gap-4 pt-4 ">
                    {techStackIcons.map((tech, index) => (
                      <div key={index} className="flex flex-col items-center justify-center gap-1 text-center">
                        <div className="bg-black border border-neutral-700 p-2 rounded-lg">
                          {tech.icon}
                        </div>
                        <span className="text-xs text-white dark:text-neutral-300 ">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                )}

            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AboutSection
