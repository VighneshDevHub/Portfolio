import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { FlipWords } from './ui/FlipWords';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { ArrowRight } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react'
import CursorGlow from './ui/CursorGlow';


const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] px-4 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d28] to-black z-0">
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent opacity-800 blur-9xl z-0" />

            <div className="relative z-10 max-w-4xl mt-20 pt-20">


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



                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center mb-30">
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


            {/*  Glowing Arc Horizon */}
            <div
                className=" pointer-events-none relative  z-10 mx-auto -mt-30 h-[250px] w-[90%] max-w-[1800px] overflow-hidden  
             [mask-image:radial-gradient(50%_50%,white,transparent)] 
             before:absolute before:inset-0 
             before:bg-[radial-gradient(circle_at_bottom_center,white,transparent_80%)] 
             before:opacity-60"
            >
                <div
                    className="absolute top-[35%] -left-1/2 w-[200%] h-[1800px]  
               rounded-[100%] border-t-4 border-t-white bg-[#0a0a0a] 
               shadow-[inset_0_2px_25px_white,0_-8px_20px_10px_rgba(255,255,255,0.3)]"
                />
            </div>

        </section>
    )
}

export default Hero
