import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import BlogSection from "../components/BlogSection"
import ContactSection from "../components/ContactSection"
import Testimonials from "../components/Testimonials"
import SkillSection from "@/components/SkillSection"
import GetInTouch from "@/components/GetInTouch"
import CTA from '@/components/CTA'

export default function Home() {
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
