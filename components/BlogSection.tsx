import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

interface Blog {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  tag: string;
  techTags: string[];
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding AI in NewsGuard",
    description:
      "How we built an AI model to detect fake news using LLMs and Google Search APIs.",
    date: "July 18, 2025",
    image: "/Images/coder.jpg",
    slug: "ai-in-newsguard",
    tag: "AI / LLM",
    techTags: ["HTML", "CSS", "JavaScript", "+30"]
  },
  {
    id: 2,
    title: "Next.js Portfolio Design Guide",
    description:
      "Tips on building a cosmic-themed portfolio using Tailwind, Next.js, and glassmorphism.",
    date: "July 15, 2025",
    image: "/Images/labtocat.png",
    slug: "nextjs-portfolio-design",
    tag: "Web Design",
    techTags: ["HTML", "CSS", "JavaScript", "+30"]
  },
  {
    id: 3,
    title: "Smart Money  Strategy for Gold",
    description:
      "We coded a Pine Script strategy for XAUUSD using ICT & market structure logic.",
    date: "July 12, 2025",
    image: "/Images/car.jpeg",
    slug: "smart-money-strategy",
    tag: "Trading",
    techTags: ["HTML", "CSS", "JavaScript", "+30"]
  },
];

const BlogSection: React.FC = () => {
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
            <span className="text-white text-sm  py-0.5">Blogs & Articles</span>
          </HoverBorderGradient>
        </div>

        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
          Latest <span className="text-purple-500">Blogs</span>
        </h3>
        <p className="text-gray-400 text-lg mt-1 max-w-2xl mx-auto">
          Sharing thoughts on technology, development, AI trends, and lessons from <br />real-world projects.
        </p>
      </div>

      {/* For Dynamic blog route */}
      {/* <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group"> */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog) => (
          <Link key={blog.id} href='/blogs' className="group">
            <div className="relative lg:h-[500px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_#a78bfa99] transition duration-300 transform hover:-translate-y-1 active:scale-[0.98]">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col  h-full">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-black bg-white px-2 py-1 rounded-md">
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

                <div className="flex flex-wrap gap-2 pt-5 text-gray-300">
                  {blog.techTags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm flex flex-wrap rounded-full border border-gray-600 py-0.5 px-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-medium bg-white text-center rounded-2xl p-2">
                  <span className="gap-1 text-black ">
                    Read More
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