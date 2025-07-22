"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  text-white px-6 md:px-20 py-12 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Personal Intro */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Vighnesh Salunkhe</h2>
          <p className="text-white/70 text-sm">
            Full Stack Developer & AI Explorer based in India. Passionate about
            building scalable, fast, and future-proof digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/resume" target="_blank" rel="noopener noreferrer">
                Resume ↗
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <div className="flex space-x-4 mt-2 text-xl text-white/70">
            <Link href="https://github.com/yourhandle" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com/in/yourhandle" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="mailto:your@email.com">
              <FaRegEnvelope />
            </Link>
            <Link href="tel:+919876543210">
              <FaPhoneAlt />
            </Link>
          </div>
        </div>

        {/* Placeholder or Additional Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
          <p className="text-white/70 text-sm">
            Built using Next.js, Tailwind CSS, TypeScript and deployed on
            Vercel.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} Vighnesh Salunkhe. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Crafted with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
