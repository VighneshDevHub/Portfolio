import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { FlipWords } from './ui/FlipWords';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { ArrowRight } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react'
import { AuroraText } from './magicui/aurora-text';

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] sm:min-h-[100vh] px-3 sm:px-4 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d28] to-black z-0">
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent opacity-800 blur-9xl z-0" />

            <div className="relative z-10 max-w-4xl mt-10 sm:mt-16 md:mt-20 pt-10 sm:pt-16 md:pt-20">


                <div className="flex justify-center items-center text-center mb-6 sm:mb-8 md:mb-10 place-content-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <div className="inline-flex items-center py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-sm">
                            <span className="bg-blue-700 mr-1 sm:mr-2 rounded-full px-1 sm:px-1.5 font-">New</span>
                            <span className="inline-flex items-center gap-0.5 sm:gap-1 group-hover:underline">
                                NewsGuard-AI is Live! <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                        </div></HoverBorderGradient>
                </div>


                {/* <span className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Ship <AuroraText>beautiful</AuroraText>
    </span> */}


                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-normal mb-4 sm:mb-4 leading-tight ">
                    Hey, I'm <AuroraText className='font-bold'>Vighnesh Salunkhe!</AuroraText>
                    <br /><span className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 block'>I Build Intelligent Digital Experiences</span>
                </h1>

                <h2 className="md:text-xl lg:text-xl sm:text-xl sm:max-w-2/3 mx-auto mt-10 text-gray-300">
                    Combining Full-Stack development with AI integration to deliver smart, scalable, and intelligent digital solutions
                </h2>



                <div className="mt-12 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-20">
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all"
                    >
                        Let's Connect <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                        href="mailto:vighneshsalunkhe949@gmail.com"
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm sm:text-base overflow-hidden"
                    >
                        <FaEnvelope className="flex-shrink-0" />
                        <span className="hidden sm:inline truncate">vighneshsalunkhe949@gmail.com</span>
                        <span className="sm:hidden">Email Me</span>
                    </a>
                </div>

            </div>


            {/*  Glowing Arc Horizon */}
            <div
                className="pointer-events-none relative z-10 mx-auto -mt-10 sm:-mt-20 md:-mt-24 h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px] w-[98%] sm:w-[95%] md:w-[90%] max-w-[1800px] overflow-hidden  
             [mask-image:radial-gradient(50%_50%,white,transparent)] 
             before:absolute before:inset-0 
             before:bg-[radial-gradient(circle_at_bottom_center,white,transparent_80%)] 
             before:opacity-60"
            >
                <div
                    className="absolute top-[35%] -left-1/2 w-[200%] h-[800px] sm:h-[1200px] md:h-[1500px] lg:h-[1800px]  
               rounded-[100%] border-t-[1px] sm:border-t-2 md:border-t-3 lg:border-t-4 border-t-white bg-[#0a0a0a] 
               shadow-[inset_0_1px_10px_white,0_-3px_8px_4px_rgba(255,255,255,0.25)] 
               sm:shadow-[inset_0_1px_15px_white,0_-4px_10px_5px_rgba(255,255,255,0.3)] 
               md:shadow-[inset_0_2px_25px_white,0_-8px_20px_10px_rgba(255,255,255,0.3)]"
                />
            </div>

        </section>
    )
}

export default Hero