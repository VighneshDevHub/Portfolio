import React from 'react'
import { BackgroundBeams } from '@/components/ui/BackgroundBeams'

const CTA = () => {
    return (
        <div className="h-[30rem] w-full rounded-md  bg-gradient-to-br from-black via-[#040421] to-black  relative flex flex-col items-center justify-center antialiased ">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Let's Turn Your Vision Into Reality!
                </h1>
                <p></p>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4  justify-center mt-8">

                    <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                        Get In Touch
                    </button>

                    <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                        Connect
                    </button>

                </div>

                <p className="text-neutral-600 w-2xl font-semibold text-center lg:text-2xl text-shadow-amber-700 dark:text-neutral-200 text-xs sm:text-base mt-3">
                    I'm available for full-time roles & freelance projects.
                </p>
                <p className="text-neutral-600 dark:text-neutral-200 text-center  font font-normal opacity-70 sm:text-base  text-balance mt-4 text-xl ">
                    I'm always open to discussing new opportunities, creative ideas, or collaborative projects. <br /> Let’s connect, collaborate, or create something impactful.
                </p>

            </div>
            <BackgroundBeams />
        </div>
    )
}

export default CTA
