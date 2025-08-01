import React from 'react';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import Link from 'next/link';

const CTA: React.FC = () => {
    return (
        <section className="w-full">
            <div className="h-[26rem] sm:h-[28rem] md:h-[30rem] w-full rounded-md bg-gradient-to-br from-black via-[#040421] to-black relative flex flex-col items-center justify-center antialiased px-4 sm:px-6 md:px-8 overflow-hidden">

                {/* Foreground Content with z-index */}
                <div className="relative z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-3 sm:p-4">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                        Let's Turn Your Vision Into Reality!
                    </h1>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8">
                        <Link
                            href="/contact"
                            className="w-full sm:w-40 h-11 flex items-center justify-center rounded-xl bg-white text-black border border-black text-sm font-semibold transition-all hover:bg-black hover:text-white"
                        >
                            Get In Touch
                        </Link>

                        <Link
                            href="/projects"
                            className="w-full sm:w-40 h-11 flex items-center justify-center rounded-xl bg-transparent text-white border border-white text-sm font-semibold transition-all hover:bg-white hover:text-black"
                        >
                            View Portfolio
                        </Link>
                    </div>

                    <p className="text-neutral-600 w-full font-semibold text-center text-x sm:text-sm md:text-xl lg:text-2xl text-shadow-amber-700 dark:text-neutral-200 mt-3 md:mt-4">
                        I'm available for full-time roles & freelance projects.
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-200 font-normal opacity-70 text-[0.9rem] sm:text-sm md:text-base lg:text-lg text-center mt-3 md:mt-4">
                        I'm always open to discussing new opportunities, creative ideas, or collaborative projects.
                        <span className="hidden sm:inline"></span> Let's connect, collaborate, or create something impactful.
                    </p>
                </div>

                {/* Background Beams Behind Everything */}
                <div className="absolute inset-0 z-0">
                    <BackgroundBeams />
                </div>
            </div>
        </section>
    );
};

export default CTA;
