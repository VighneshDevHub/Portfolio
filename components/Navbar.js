// src/components/Navbar.js
"use client"
import Link from "next/link"
import { BsFillMoonStarsFill } from "react-icons/bs"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },            
]  

export default function Navbar() {
  return (
    <nav className="w-4/5  mx-36 flex items-center justify-between   mt-6 bg-black/30 backdrop-blur-lg shadow-md border border-white/10 rounded-2xl px-8 py-4  fixed  z-50">
      <span className="text-xl font-bold text-white tracking-tight">Vighnesh Salunkhe</span>
      <div className="flex gap-2">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="px-4 py-1 rounded-lg text-white/90 hover:bg-white/10 transition text-base font-medium focus:bg-white/10 focus:outline-none">
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  )
}
