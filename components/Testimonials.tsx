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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Irfan Khan",
    role: "CEO, Ignitech.in",
    testimonial: "Working with this developer was a game-changer for our project. Their expertise and attention to detail were exceptional.",
    image: "/labtocat.png"
  },
  {
    id: 2,
    name: "Hemanshu Sonar",
    role: "Hackathon Partner",
    testimonial: "Professional, skilled, and a pleasure to work with. Highly recommend for any web development needs.",
    image: "/labtocat.png"
  },
  {
    id: 3,
    name: "Rasika Patil",
    role: "Client, Computer Science Student",
    testimonial: "Professional, skilled, and a pleasure to work with. Highly recommend for any web development needs.",
    image: "/labtocat.png"
  },

  { id: 4,
    name: "Sakshi Joshi",
    role: "Student, Goverment Polytechnic Thane",
    testimonial: "Their innovative approach and problem-solving skills made a significant impact on our project. Truly impressed!",
    image: "/labtocat.png"
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
            <span className="text-white text-sm font-semibold">Testimonials</span>
          </HoverBorderGradient>
        </div>

        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Kind words from <span className="text-purple-500">satisfied clients</span>
        </h3>
        <p className="text-gray-400 text-lg mt-2">
          Don't just take my word for it. Hear what my clients have to say about working with me.
        </p>
      </div>

      <div className="h-2/5 mt-10 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
    </section>
  )
}

export default Testimonials