// This data for projetcs/[slug]/page.tsx

export interface Project {
  slug: string;
  title: string;
  description: string;
  overview?: string;
  projectType: string;
  role: string;
  duration: string;
  status: string;
  coverImage: string;
  problemStatement: string;
  techStack: string[];
  features: string[];
  achievements: string[];
  github: string;
  liveDemo: string;
  imageUrls: string[];
}

export const projects: Project[] = [
  {
    slug: "newsguard-ai",
    title: "NewsGuard AI",
    description: "An AI-powered tool to verify news authenticity and extract key phrases from articles.",
    overview:
      "NewsGuard AI is a powerful tool that verifies the authenticity of news articles using LLMs. It extracts key phrases, searches trusted sources, and compares content to generate an authenticity score. The platform is built with a Flask backend and a Flutter frontend, integrating OpenAI/Ollama for semantic matching and Google Custom Search API for factual verification.",
    projectType: "Full Stack Web App",
    role: "Full Stack Developer",
    duration: "Feb 2025 - May 2025",
    status: "Completed",
    coverImage: "/images/NewsGuardAI.jpg",
    problemStatement: "With the surge in fake news, there's a need for an automated solution to verify the authenticity of articles in real-time.",
    techStack: ["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL", "Ollama", "Google Search API"],
    features: [
      "Key phrase extraction using LLM",
      "Trusted source comparison via Google Custom Search",
      "Authenticity score generation via AI",
      "Flask backend API integration",
      "Save and retrieve article searches"
    ],
    achievements: [
      "Final Year Project – Diploma CS 2024",
      "Verified 200+ news articles",
      "Integrated Ollama and GPT-4 locally"
    ],
    github: "https://github.com/yourgithub/newsguard-ai",
    liveDemo: "https://newsguard-ai.vercel.app",
    imageUrls: [
      "/images/NewsGuardAI/home.png",
    ]
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A modern, responsive developer portfolio showcasing projects, skills, blogs, and contact info.",
    projectType: "Frontend Web App",
    role: "UI/UX Designer + Frontend Developer",
    duration: "July 2024 – Aug 2024",
    status: "In Progress",
    coverImage: "/images/image.png",
    problemStatement: "Job-seekers often lack a strong online presence. This project aims to establish a personal brand with a developer-centric design.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Shadcn", "MDX", "EmailJS"],
    features: [
      "Sticky scroll project showcase",
      "Blog system powered by MDX",
      "Dark cosmic UI with glassmorphism",
      "Responsive design for all devices",
      "Animated components using Framer Motion",
      "Contact form integrated with EmailJS"
    ],
    achievements: [
      "Hand-coded from scratch with custom layout",
      "Designed and built in under 1 month",
      "Got positive feedback from recruiters and mentors"
    ],
    github: "https://github.com/yourgithub/portfolio",
    liveDemo: "https://yourname.vercel.app",
    imageUrls: [
      "/images/portfolio/screen1.png",
      "/images/portfolio/screen2.png"
    ]
  }
  // More projects...
];