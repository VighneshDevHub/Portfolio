import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import BlogSection from "../components/BlogSection"
import ContactSection from "../components/ContactSection"
import Testimonials from "../components/Testimonials"
import SkillSection from "../components/SkillSection"
import GetInTouch from "../components/GetInTouch"
import CTA from "../components/CTA"
import { JSX } from "react/jsx-runtime"

export default function Home(): JSX.Element {
  return (
  <>
    <Hero />
    <AboutSection />
    <ProjectsSection />
    <SkillSection/>
    <BlogSection />
    <Testimonials />
    <CTA />

  </>
    
  );
}