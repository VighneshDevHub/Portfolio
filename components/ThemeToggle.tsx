import React from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";

interface ThemeToggleProps {
  // Add any props if needed in the future
}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  return (
    <div>
      <button className="p-2 rounded-full hover:bg-white/10 transition">
        <BsFillMoonStarsFill className="text-xl text-white/80" />
      </button>
    </div>
  );
};

export default ThemeToggle;