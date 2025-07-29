import React from 'react'
import Image from 'next/image'
import { HoverBorderGradient } from '@/components/ui/HoverBorderGradient'

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-8 py-20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row  justify-center items-center gap-20 px-4">




        {/* Bio Text */}
        <div className="w-full md:w-6/8 space-y-6">

          <div className=" flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className="text-white text-sm font-semibold">About Me</span>
            </HoverBorderGradient>
          </div>
          
          <p className="text-gray-300 text-base leading-relaxed">
            I'm Vighnesh Salunkhe, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.

            When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.

            I believe in waking up each day eager to make a difference!


          </p>
        </div>
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src="/Batman.png" // replace with your image
              alt="Vighnesh Portrait"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  )
}

export default AboutMe