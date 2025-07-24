import React from 'react'

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-4 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0">
            </div>

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

            <div className="relative z-10 max-w-4xl mx-auto pt-20">

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                    My Journey
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center mt-4">
                    Uncover my journey, mindset, and the mission that drives me to build impactful digital experiences.                </p>

            </div>
        </section>
    )
}

export default Hero
