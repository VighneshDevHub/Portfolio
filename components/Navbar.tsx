// src/components/Navbar.tsx
"use client";
import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },            
];

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname(); // Get current path using Next.js hook
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const nav = document.getElementById('navbar');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);
  
  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      {/* Mobile menu backdrop */}
      {isOpen && (
        <div 
          className=" fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      
      <nav id="navbar" className={`fixed z-50 w-full px-4 md:px-8 py-4 transition-all duration-300 ${scrolled || isOpen ? 'bg-black/50' : 'bg-black/30'} backdrop-blur-lg shadow-md border border-white/10 lg:rounded-2xl rounded-b-2xl max-w-6xl mx-auto left-1/2 -translate-x-1/2 lg:top-5`}>
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl font-bold text-white tracking-tight hover:text-white/80 transition-colors">
          Vighnesh Salunkhe
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none hover:bg-white/10 p-2 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          suppressHydrationWarning
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-4 py-1 rounded-lg transition text-base font-medium focus:outline-none ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white/90'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        
        {/* Theme Toggle - Desktop */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-2 py-2 border-t border-white/10 mt-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-4 py-3 rounded-lg transition-all text-base font-medium focus:outline-none transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white/90'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Theme Toggle - Mobile */}
          <div className={`px-4 py-3 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} 
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}