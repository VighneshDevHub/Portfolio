import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import { ArrowRight, MoveRight, ChevronRight, MessageSquare } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center lg:min-h-[60vh] min-h-[50vh] px-4 bg-black text-white overflow-hidden">
            <BackgroundBeams className="z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0 opacity-80">
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

            <div className="relative z-10 max-w-4xl mx-auto pt-20">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-purple-500/20 p-4 rounded-full">
                        <MessageSquare className="text-purple-400 h-8 w-8" />
                    </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                    Let's <span className="text-purple-500">Connect</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
                    Have a project in mind? Looking to collaborate or hire? 
                    <br />
                    Drop me a message, and I'll get back to you as soon as possible.
                </p>
                
                <div className="flex justify-center gap-4 mt-8">
                    <a href="#contact-form" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                        Send Message <ArrowRight size={16} />
                    </a>
                    <a href="mailto:youremail@example.com" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero