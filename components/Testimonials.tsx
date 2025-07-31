import React from 'react'
import { HoverBorderGradient } from './ui/HoverBorderGradient'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const testimonials1: Testimonial[] = [

   {
    id: 4,
    name: "Sakshi Joshi",
    role: "Student, Government Polytechnic Thane",
    testimonial:
      "Vighnesh brought clarity and creativity to our project. His logical thinking, technical execution, and collaborative spirit helped us achieve more than expected. Super easy to work with and always focused on results.",
    image: "/Images/labtocat.png",
  },
  {
    
    id: 1,
    name: "Irfan Khan",
    role: "Founder & CEO, Ignitech.in",
    testimonial:
      "Vighnesh brought structure and precision to our product. His technical depth, communication, and reliability made our entire engagement seamless. I’d work with him again in a heartbeat — highly recommended collaborator.",
    image: "/Images/labtocat.png",
  },


   {
    id: 5,
    name: "Prajwal More",
    role: "Client, Walchand College of Engineering",
    testimonial:
      "Collaborating with Vighnesh was smooth from day one. He listened well, delivered on every promise, and brought smart solutions to every challenge. Professional, focused, and an all-around dependable developer.",
    image: "/Images/labtocat.png",
  },
  {
    id: 2,
    name: "Hemanshu Sonar",
    role: "Hackathon Teammate",
    testimonial:
      "Leading our hackathon team, Vighnesh demonstrated exceptional leadership, clear vision, and hands-on technical skills. Grateful to have teamed up with him.",
    image: "/Images/labtocat.png",
  },
  {
    id: 3,
    name: "Samruddhi Patil",
    role: "Client, Computer Science Student at GPK",
    testimonial:
      "Vighnesh took our project brief and delivered a clean, efficient solution. His ability to understand client needs and build with clarity truly impressed me. A reliable developer who communicates and executes well.",
    image: "/Images/labtocat.png",
  },
 


];







const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full max-w-7xl mx-auto px-8 py-20 min-h-screen overflow-hidden">
      <div className="text-center ">

        <div className=" flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span className="text-white text-sm font-semibold py-0.5">Testimonials</span>
          </HoverBorderGradient>
        </div>

        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight ">
          Words from People I’ve <span className="text-purple-500">  Worked With</span>
        </h3>
        <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
          Feedback from mentors, teammates, and collaborators on how I deliver value through code, communication, and consistency.        </p>
      </div>

      <div className="h-2/5 mt-10 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials1}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={testimonials1}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  )
}

export default Testimonials