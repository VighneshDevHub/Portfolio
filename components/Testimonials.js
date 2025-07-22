import React from 'react'
import { HoverBorderGradient } from './ui/HoverBorderGradient'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Tech Innovations",
    testimonial: "Working with this developer was a game-changer for our project. Their expertise and attention to detail were exceptional.",
    image: "/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, Creative Solutions",
    testimonial: "An outstanding experience! The developer delivered high-quality work on time and exceeded our expectations.",
    image: "/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Product Manager, Future Tech",
    testimonial: "Professional, skilled, and a pleasure to work with. Highly recommend for any web development needs.",
    image: "/testimonial3.jpg"
  },

  { id: 4,
    name: "Bob Brown",
    role: "Founder, Startup Hub",
    testimonial: "Their innovative approach and problem-solving skills made a significant impact on our project. Truly impressed!",
    image: "/testimonial4.jpg"
  },


];


const Testimonials = () => {
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
        direction="right"
        speed="fast"
      />
    </div>
    </section>
  )
}

export default Testimonials
