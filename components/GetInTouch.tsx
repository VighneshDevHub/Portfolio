import React from 'react';
import { TypewriterEffectSmooth } from './ui/TypeWriterEffect';

interface Word {
  text: string;
  className?: string;
}

const words: Word[] = [
  { text: "Let's" },
  { text: "Turn" },
  { text: "Your" },
  { text: "Vision" },
  {
    text: "Into Reality!",
    className: "italic text-purple-500 dark:text-purple-500",
  },
];

const GetInTouch: React.FC = () => {
  return (
    <section
      id="getintouch"
      className="w-full max-w-7xl mx-auto px-8 py-20 min-h-screen overflow-hidden"
    >
      <div className="flex flex-col items-center h-[40rem]">
        <TypewriterEffectSmooth words={words} />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Contact Me
          </button>
        </div>

        <p className="text-neutral-600 w-2xl font-semibold text-center lg:text-2xl dark:text-neutral-200 text-xs sm:text-base mt-3">
          I'm available for full-time roles & freelance projects.
        </p>

        <p className="text-neutral-600 dark:text-neutral-200 text-center font-normal opacity-75 sm:text-base tracking-wide text-balance mt-4 text-xl">
          I'm always open to discussing new opportunities, creative ideas, or
          collaborative projects. <br /> Whether you have a question, a project,
          or just want to say hello — <br /> Let’s connect, collaborate, or create something impactful.
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;
