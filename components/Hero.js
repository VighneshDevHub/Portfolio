import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { FlipWords } from './ui/FlipWords';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { ArrowRight } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';


const Hero = () => {
    return (
            <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] px-4 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0">
                </div>

                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

                <div className="relative z-10 max-w-4xl mx-auto pt-20">


                    <div className=" flex justify-center text-center mb-10">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <div className="inline-flex items-center  py-1.5  text-sm  backdrop-blur-sm">
                                <span className="bg-blue-700  mr-2 rounded-full px-1.5 font-">New</span>
                                <span className="inline-flex items-center gap-1 group-hover:underline  ">
                                    NewsGuard-AI is Live! <ChevronRight className="w-5 h-5" />
                                </span>
                            </div></HoverBorderGradient>
                    </div>


                    <div className="w-full text-gray-400 mt-4 mb-1">
                        <span className='text-xl font-outfit'>Hello, I'm</span> <span className="text-white text-3xl font-semibold">Vighnesh Salunkhe,</span> <br />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                        I help founders turn ideas <br />
                        <span className="text-gray-300 italic font-light">
                            into seamless digital experiences
                        </span>
                    </h1>

                    

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
                            <span>vighneshsalunkhe949@gmail.com</span>
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default Hero
