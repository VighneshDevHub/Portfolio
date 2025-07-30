import React from 'react'

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c1e] to-black z-0">
            </div>

            <div className="absolute bottom-0 w-full h-20 sm:h-28 md:h-36 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-40 blur-2xl z-0" />

            <div className="relative z-10 max-w-4xl mx-auto pt-10 sm:pt-14 md:pt-20">

                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 leading-tight">
                    My Journey
                </h1>

                <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-[280px] sm:max-w-xl md:max-w-2xl text-center mt-2 sm:mt-3 md:mt-4 mx-auto">
                    Uncover my journey, mindset, and the mission that drives me to build impactful digital experiences.
                </p>

            </div>
        </section>
    )
}

export default Hero