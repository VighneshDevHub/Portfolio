import React from 'react'
import Hero from './Hero'
import ContactPage from './ContactPage'

const Page: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black to-purple-950/30">
      <Hero/>
      <ContactPage/>
    </div>
  )
}
export default Page
