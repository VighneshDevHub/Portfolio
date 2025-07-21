import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";


const ThemeToggle = () => {
    return (
        <div>
            <button className="p-2 rounded-full hover:bg-white/10 transition">
                <BsFillMoonStarsFill className="text-xl text-white/80" />
            </button>
        </div>
    )
}

export default ThemeToggle
