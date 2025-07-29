import React from 'react'
import Hero from './Hero'
import AboutSection from '@/components/AboutSection'
import SkillSection from '@/components/SkillSection'
import AboutMe from './AboutMe'
import CTA from '@/components/CTA'

const Page: React.FC = () => {
  return (
    <>
    <Hero/>
    <AboutMe/>
    <AboutSection/>
    <SkillSection/>
    <CTA/>
    </>
  )
}

export default Page