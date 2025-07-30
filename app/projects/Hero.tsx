import React from 'react'
import { HoverBorderGradient } from '@/components/ui/HoverBorderGradient'

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-4 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0">
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

            <div className="relative z-10 max-w-4xl mx-auto pt-20">
                <div className="flex justify-center mb-4">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="div"
                        className="bg-black/50 backdrop-blur-sm text-white px-4 py-1"
                    >
                        <span className="text-sm">Browse My Work</span>
                    </HoverBorderGradient>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                    Project <span className="text-purple-500">Gallery</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                    Explore my portfolio of projects across different categories — from web applications to AI solutions and more.
                </p>
            </div>
        </section>
    )
}

export default Hero