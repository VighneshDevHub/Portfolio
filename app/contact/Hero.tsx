import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { ArrowRight } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center lg:min-h-[80vh] min-h-[60vh] px-4 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0">
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

            <div className="relative z-10 max-w-4xl mx-auto pt-20">
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                    Contact <span className="text-purple-500 ml-2">Me</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                    Let's connect, collaborate, or create something impactful.

                </p>
            </div>
        </section>
    )
}

export default Hero