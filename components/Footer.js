import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm border-t border-white/10 mt-12">
            <div>&copy; 2025 VighneshDevHub . All rights reserved.</div>
            <div className="flex gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener" className="hover:text-white"><FaGithub /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener" className="hover:text-white"><FaLinkedin /></a>
                <a href="mailto:your@email.com" className="hover:text-white"><FaEnvelope /></a>
            </div>
            <div>Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span></div>
        </footer>
    )
}

export default Footer
