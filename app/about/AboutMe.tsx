import React from 'react'
import Image from 'next/image'
import { HoverBorderGradient } from '@/components/ui/HoverBorderGradient'
import Link from 'next/link'
import { SiX, SiLinkedin, SiGithub, SiMailboxdotorg } from "react-icons/si";
import { FaHeart, FaRegEnvelope } from "react-icons/fa";
import { FlipWords } from '@/components/ui/FlipWords';
import { AuroraText } from '@/components/magicui/aurora-text';

const AboutMe: React.FC = () => {
  const words = ["Full Stack Developer", "AI/ML Enthusiast", "Mobile App Developer", "UI/UX Designer", "Freelancer"];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-8 py-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-center items-center gap-20 px-">


        {/* Bio Text */}
        <div className="w-full md:w-6/8 space-y-6 ">
          <div className=" flex  text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className="text-white text-sm font-semibold tracking-wide ">More About Me</span>
            </HoverBorderGradient>
          </div>

          <div className=" flex ">
            <div className="text-2xl lg:text-3xl sm:text-2xl font-bold text-neutral-600 dark:text-neutral-400 tracking-normal">
                    Hey, I'm <AuroraText className='font-bold'>Vighnesh Salunkhe!</AuroraText> <br />
              <span className=' mr-2'>Professional </span><FlipWords words={words} className=' text-gray-500' /> <br />
            </div>
          </div>

          <p className="text-gray-400 text-[0.5rem] sm:text-lg leading-relaxed max-w-5xl mx-auto ">
            I’m a Full Stack Developer with a strong passion for building intelligent and scalable web experiences.
            I’ve currently completed my Diploma in Computer Science Engineering and specialize in developing full-stack applications using modern technologies like React, Next.js, and Node.js. 
            <br /> <br /> I’m deeply interested in the integration of AI into web systems — particularly in working with Generative AI, Large Language Models (LLM), AI agents, and Machine Learning to solve real-world problems.            
            I constantly push myself to stay updated with emerging tools and technologies that enhance user experience and system performance.

            <br /><br />
            Currently, I’m seeking internship and placement opportunities where I can contribute, learn, and collaborate on impactful digital products.
            <br /><br />
            Let’s connect and create something valuable together!
          </p>

          {/* Connect */}
          <div>
            <div className="flex space-x-5 text-xl text-white/70">
              <Link href="https://github.com/VighneshDevHub" target="_blank">
                <SiGithub />
              </Link>
              <Link href="https://linkedin.com/in/vighneshsalunkhe" target="_blank">
                <SiLinkedin />
              </Link>
              <Link href="https://linkedin.com/in/vighneshsalunkhe" target="_blank">
                <SiX />
              </Link>

              <Link href="mailto:vighneshsalunkhe949@gmail.com"><FaRegEnvelope />
              </Link>


            </div>
          </div>

        </div>
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src="/Images/Batman.png" // replace with your image
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