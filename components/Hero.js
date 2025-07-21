import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import Image from "next/image";
import { FlipWords } from './ui/FlipWords';


const Hero = () => {
    return (
        <div>
            <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] px-4 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0">
                </div>

                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

                <div className="relative z-10 max-w-4xl mx-auto pt-20">
                    <div className="inline-flex items-center mb-6 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                        <span className="bg-blue-700  mr-2 rounded-full px-1.5">New</span>
                        <span>NewsGuard-AI is Live ! →</span>
                    </div>
                    

                    <div className="w-full text-gray-400 mt-4">
                        <span className='text-xl'>Hello, I'm</span> <span className="text-white text-3xl font-semibold">Vighnesh Salunkhe,</span> <br /> 
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                        I help founders turn ideas <br />
                        <span className="text-gray-300 italic font-light">
                            into seamless digital experiences
                        </span>
                    </h1>

                    <div className='text-left ml-55'>
                        <span className=' text-gray-400 text-xl mx-2 '>I'm a Professional</span> 
                        <span className='text-blue-900 font-semibold text-3xl'>
                            <FlipWords words={["Full Stack Developer!","AI/ML Enthusiast!","UI/UX Designer!","Mobile App Developer!", "Freelancer!"]} /> 
                        </span>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all"
                        >
                            Let’s Connect →
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                        >
                            <span>your.email@example.com</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
