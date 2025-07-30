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
    coverImage: "/images/NewsGuardAI/NewsGuardAI.jpg",
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
  },
  {
    slug: "weather-app",
    title: "Weather Dashboard",
    description: "A real-time weather application with forecast data, interactive maps, and location-based services.",
    projectType: "Mobile App",
    role: "Frontend Developer",
    duration: "Jan 2024 - Feb 2024",
    status: "Completed",
    coverImage: "/images/weather.jpg",
    problemStatement: "Users need a simple yet comprehensive way to check weather conditions and forecasts for multiple locations.",
    techStack: ["React Native", "Expo", "OpenWeatherMap API", "Geolocation API", "Redux"],
    features: [
      "Real-time weather data with hourly updates",
      "5-day forecast with detailed metrics",
      "Location-based weather detection",
      "Interactive weather maps",
      "Favorite locations saving"
    ],
    achievements: [
      "Over 500 downloads on app stores",
      "4.7/5 average user rating",
      "Featured in local developer showcase"
    ],
    github: "https://github.com/yourgithub/weather-app",
    liveDemo: "https://weather-app-demo.vercel.app",
    imageUrls: [
      "/images/weather/screen1.png",
      "/images/weather/screen2.png"
    ]
  },
  {
    slug: "car-rental-system",
    title: "Car Rental Management System",
    description: "A comprehensive platform for managing car rentals, bookings, payments, and fleet management.",
    projectType: "Backend System",
    role: "Backend Developer",
    duration: "Mar 2024 - Jun 2024",
    status: "Completed",
    coverImage: "/images/car.jpeg",
    problemStatement: "Car rental businesses need an efficient system to manage their fleet, handle bookings, and process payments.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Docker"],
    features: [
      "User authentication and authorization",
      "Vehicle inventory management",
      "Booking and reservation system",
      "Payment processing with Stripe",
      "Admin dashboard with analytics"
    ],
    achievements: [
      "Reduced booking processing time by 60%",
      "Implemented for a local car rental business",
      "Scaled to handle 1000+ vehicles"
    ],
    github: "https://github.com/yourgithub/car-rental-system",
    liveDemo: "",
    imageUrls: [
      "/images/car-rental/dashboard.png",
      "/images/car-rental/booking.png"
    ]
  },
  {
    slug: "excel-data-analyzer",
    title: "Excel Data Analyzer",
    description: "An automated tool for analyzing and visualizing large Excel datasets with custom reporting features.",
    projectType: "Data Analysis Tool",
    role: "Data Engineer",
    duration: "Nov 2023 - Dec 2023",
    status: "Completed",
    coverImage: "/images/excel.png",
    problemStatement: "Business analysts spend too much time manually processing Excel data. This tool automates the analysis process.",
    techStack: ["Python", "Pandas", "Matplotlib", "Openpyxl", "Streamlit", "AWS Lambda"],
    features: [
      "Automated data cleaning and preprocessing",
      "Statistical analysis of datasets",
      "Custom visualization generation",
      "Report export in multiple formats",
      "Batch processing of multiple files"
    ],
    achievements: [
      "Reduced analysis time from days to minutes",
      "Processed over 10,000 Excel files",
      "Implemented by 3 corporate clients"
    ],
    github: "https://github.com/yourgithub/excel-analyzer",
    liveDemo: "https://excel-analyzer-demo.herokuapp.com",
    imageUrls: [
      "/images/excel-analyzer/dashboard.png",
      "/images/excel-analyzer/reports.png"
    ]
  }

];