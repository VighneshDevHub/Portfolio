"use client";
import React from "react";

import {SiX, SiLinkedin, SiGithub, SiMailboxdotorg} from "react-icons/si";
import { FaHeart, FaRegEnvelope } from "react-icons/fa";

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full  text-white px-6 md:px-20 py-12 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Personal Intro */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Vighnesh Salunkhe</h2>
          <p className="text-white/70 ">
            Full Stack Developer & AI Explorer based in India. Passionate about
            building scalable, fast, and future-proof digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-[1rem] text-white/70">
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/resume" target="_blank" rel="noopener noreferrer">
                Resume 
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <div className="flex space-x-4 mt-2 text-xl text-white/70">
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

        {/* Placeholder or Additional Info */}
        <div>
  <h2 className="text-lg font-semibold mb-2">Availability</h2>
  <p className="text-white/70 text-sm">
    Currently open to freelance projects, collaborations, and full-time roles. Let's build something impactful together.
  </p>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
        <p>
          &copy; {new Date().getFullYear()} Vighnesh Salunkhe. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Built with ❤ by Vighnesh Salunkhe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;