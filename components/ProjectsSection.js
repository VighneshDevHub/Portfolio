import React from 'react'
import { CardHoverEffectDemo } from './CardHoverEffectDemo'

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md text-white/80">Project cards go here.</div>
        <CardHoverEffectDemo/>
    </section>
  )
}

export default ProjectsSection
