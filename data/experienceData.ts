export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  category: string;
  summary: string;
  achievements: string[];
  images: string[];
}

export const experienceData: ExperienceItem[] = [
  // --- Work Experience ---
  {
    id: 1.1,
    role: "Data Analyst",
    company: "Deloitte",
    date: "May 22 - Jun 24",
    location: "Remote",
    category: "Work",
    summary: "This experience sharpened my analytical mindset and deepened my understanding of how data drives strategy in the consulting world.",
    achievements: [
      "Completed real-world tasks in forensic tech and data analysis",
      "Built an interactive dashboard using Tableau.",
      "Used Excel to classify data and extract key business insights",
      "Gained exposure to real scenarios faced by Deloitte professionals"
    ],
    images: [
      "images/Deloitte.png", "/images/Tableau.png", "/images/excel.png",
    ],
  },
  {
    id: 1.2,
    role: "Full Stack Developer",
    company: "Ignitech.in",
    date: "Sep 2024 - Feb 2025",
    location: "Remote",
    category: "Work",
    summary: "Worked as a Full Stack Project Intern and Successfully completed a 6-month  project titled officially recognized as 'NewsGuard AI', under the guidance of Ignitech..",
    achievements: [
      "Built RESTful APIs using Flask for news authentication workflows",
      "Designed and managed database schemas with PostgreSQL",
      "Integrated Google Search API for real-time fact-checking",
      "Used LLMs (Ollama/GPT) for key phrase extraction & content comparison",
      "Implemented user login, admin panel, and result analytics",
      "Deployed AI-driven solution to detect and score fake news articles"
    ],
    images: ["/images/ignitech.png", "/images/NewsGuardAI/home.png", "/images/NewsGuardAI/Score.png"],
  },
  {
    id: 1.3,
    role: "Mobile App Developer",
    company: "V2V EDTECH LLP",
    date: "Jun 2024 - July 2024",
    location: "Remote",
    category: "Work",
    summary: "As an Android Development Intern at V2V EDTECH LLP, I contributed to the design, development, and testing of multiple Android applications.",
    achievements: [
      "Developed 5 + Android applications using Java and Android Studio.",
      "Integrated Firebase for authentication and real - time data storage.",
      "Maintained clean, modular code using Git and GitHub.",
      "Collaborated with senior engineers and participated in daily standups.",
      "Ensured app performance through rigorous debugging and user testing."
    ],
    images: ["/images/V2VOffer.png", "/images/V2V.jpg", "/images/Apps.png"],
  },


  // --- Education ---
  {
    id: 2.1,
    role: "Diploma Student",
    company: "Government Polytechnic, Thane",
    date: "Jul 2022 – Jun 2025",
    location: "Mumbai, India",
    category: "Education",
    summary: "Completed a 3-year Diploma in Computer Engineering with First Class distinction.",
    achievements: [
      "Completed capstone on GenAI-based News Authentication System",
      "Ranked in top 1% of batch with 90.34% aggregate",
      "Led a team project for Smart India Hackathon(SIH-2023)",
    ],
    images: ["/images/Batman.png", "/images/coder.jpg", "/images/SIH23.png"],
  },
  
  {
    id: 2.3,
    role: "Secondary School Student",
    company: "R.J Thakur Vidhyamandir",
    date: "Jun 2010 - Mar 2021",
    location: "Nagpur, India",
    category: "Education",
    summary: "Completed SSC with distinction, initiating passion for tech and coding.",
    achievements: [
      "Scored 90% in SSC Board Exams",
      "Developed basic HTML websites at school level",
      "Elected school IT club president in final year",
    ],
    images: ["/images/Batman.png", "/images/coder.jpg", "/images/labtocat.png"],
  },
  

  // --- Certifications ---
  {
    id: 3.1,
    role: "Deloitte Certified Data Anaytics",
    company: "Deloitte (Forage)",
    date: "Jun 2025",
    location: "Remote",
    category: "Certifications",
    summary: "Completed Deloitte Data Anayltics Professional Certificate via Forage.",
    achievements: [
      "Completed real-world tasks in forensic tech and data analysis",
      "Built an interactive dashboard using Tableau.",
      "Used Excel to classify data and extract key business insights",
      "Gained exposure to real scenarios faced by Deloitte professionals"
    ],
    images: ["images/Deloitte.png"],
  },
  {
    id: 3.2,
    role: "Certificate Of Project Completion",
    company: "IGNITECH",
    date: "Sep 2024 - Feb 2025",
    location: "Remote",
    category: "Certifications",
    summary: "Worked as a Full Stack Project Intern and Successfully completed a 6-month  project titled officially recognized as 'NewsGuard AI' under the guidance of IGNITECH.",
    achievements: [
      "Used LLMs (Ollama/GPT) for key phrase extraction & content comparison",
      "Built RESTful APIs using Flask for news authentication workflows",
      "Designed and managed database schemas with PostgreSQL",
      "Integrated Google Search API for real-time fact-checking",
      "Implemented user login, admin panel, and result analytics",
      "Deployed AI-driven solution to detect and score fake news articles"
    ],
    images: ["/images/ignitech.png"],
  },
  {
    id: 3.3,
    role: "Certificate Of Completion",
    company: "V2V EDTECH LLP",
    date: "May 2022",
    location: "Remote",
    category: "Certifications",
    summary: "As an Android Development Intern at V2V EDTECH LLP, I contributed to the design, development, and testing of multiple Android applications.",
    achievements: [
      "Developed 5 + Android applications using Java and Android Studio.",
      "Integrated Firebase for authentication and real - time data storage.",
      "Maintained clean, modular code using Git and GitHub.",
      "Collaborated with senior engineers and participated in daily standups.",
      "Ensured app performance through rigorous debugging and user testing."
    ],
    images: ["/images/V2V.jpg"],
  },
];