import React from 'react'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import CTA from '@/components/CTA'
import SkillSection from '@/components/SkillSection'

const Page: React.FC = () => {
  return (
    <>
      <Hero/>
      <ProjectsSection/>
      <SkillSection/>
      <CTA/>
    </>
  )
}

export default Page