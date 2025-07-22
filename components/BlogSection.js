import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const blogs = [
  {
    id: 1,
    title: "Understanding AI in NewsGuard",
    description:
      "How we built an AI model to detect fake news using LLMs and Google Search APIs.",
    date: "July 18, 2025",
    image: "/blog1.jpg",
    slug: "ai-in-newsguard",
    tag: "AI / LLM",
  },
  {
    id: 2,
    title: "Next.js Portfolio Design Guide",
    description:
      "Tips on building a cosmic-themed portfolio using Tailwind, Next.js, and glassmorphism.",
    date: "July 15, 2025",
    image: "/blog2.jpg",
    slug: "nextjs-portfolio-design",
    tag: "Web Design",
  },
  {
    id: 3,
    title: "Smart Money  Strategy for Gold",
    description:
      "We coded a Pine Script strategy for XAUUSD using ICT & market structure logic.",
    date: "July 12, 2025",
    image: "/blog3.jpg",
    slug: "smart-money-strategy",
    tag: "Trading",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blogs"
      className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-20 text-white z-10"
    >
      <div className="text-center mb-14">
        <div className=" flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span className="text-white text-sm font-semibold ">Blogs & Articles</span>
          </HoverBorderGradient>
        </div>

        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Latest <span className="text-purple-500">Blogs</span>
        </h3>
        <p className="text-gray-400 text-lg mt-2">
          Explore tech, design, and strategies behind modern builds
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_#a78bfa99] transition duration-300 transform hover:-translate-y-1 active:scale-[0.98]">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium uppercase tracking-wide text-purple-400 bg-purple-900/30 px-2 py-1 rounded-md">
                    {blog.tag}
                  </span>
                  <p className="text-xs text-gray-400">{blog.date}</p>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-purple-300 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                  {blog.description}
                </p>
                <div className="mt-4 text-sm font-medium text-purple-500 group-hover:underline">
                  <span className="inline-flex items-center gap-1 text-purple-500 group-hover:underline">
                    Read more <FaArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/blogs"
          className="inline-block bg-white text-black px-6 py-3 rounded-full transition duration-300 font-semibold tracking-wide shadow-md shadow-purple-900/30"
        >
          <span className="inline-flex items-center gap-1 group-hover:underline">
            View All Blogs <FaArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
      
    </section>
  );
};

export default BlogSection;
