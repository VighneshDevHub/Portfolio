import React from 'react'
import Hero from './Hero'
import CTA from '@/components/CTA'
import ExperienceSection from './ExperienceSection'

const Page: React.FC = () => {
  return (
    <>
      <Hero/>
      <ExperienceSection/>
      <CTA/>
    </>
  )
}

export default Page