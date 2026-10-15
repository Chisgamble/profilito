// =====================================================================
// GITHUB PORTFOLIO CONFIGURATION - TRẦN KHÔN CHÍ (Chisgamble)
// =====================================================================

const PORTFOLIO_CONFIG = {
  // Your default GitHub username (live data will be fetched for this user)
  username: "Chisgamble",
  
  // Custom header tagline / title displayed under your name
  customTitle: "Full-Stack Software Engineer & Microservices Developer",
  
  // Custom headline/intro
  customBio: "Full-Stack Engineer specialized in TypeScript, Spring Boot microservices, React, and modern web applications. Passionate about building robust systems, interactive digital platforms, and scalable architecture.",
  
  // Your current status / availability
  status: {
    available: true,
    text: "Open for Software Engineering & Full-Stack roles",
    location: "Vietnam / Remote"
  },
  
  // Social links
  socials: {
    github: "https://github.com/Chisgamble",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "chitrankhon@gmail.com",
    website: "https://github.com/Chisgamble"
  },
  
  // Skills categorized for the Tech Stack Bento Card
  techStack: {
    frontend: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5/CSS3", "TailwindCSS"],
    backend: ["Java", "Spring Boot", "Spring Microservices", "C# / .NET", "Node.js", "Express.js"],
    devops: ["Docker", "Git / GitHub", "Vercel", "CI/CD", "RESTful APIs", "SQL"],
    tools: ["VS Code", "IntelliJ IDEA", "Postman", "Maven", "Gradle"]
  },

  // Experience & Project highlights
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Independent & Open Source Projects",
      period: "2023 — Present",
      description: "Architected and delivered multiple end-to-end full stack web platforms including BidZone (real-time auction platform deployed on Vercel), TroUyTin (rental accommodation platform in TypeScript), and Chis-Inven."
    },
    {
      role: "Backend & Microservices Engineer",
      company: "Spring & Java Ecosystem",
      period: "2024 — 2026",
      description: "Engineered distributed microservices with Spring Boot and Spring Cloud, implemented real-time chat architecture in ChatBoxApp, and built robust API integrations."
    },
    {
      role: "Software Engineering & Game Development",
      company: "Core Systems & Algorithms",
      period: "2023 — 2024",
      description: "Designed core game mechanics and object-oriented simulation in C++ (Pokemon), alongside .NET / C# enterprise commerce applications (DominiShop)."
    }
  ],

  // Featured repositories to prioritize
  featuredRepoNames: ["bidzone", "TroUyTin", "Chis-Inven", "ChatBoxApp_Java_Springboot", "Spring-petclinic-microservices-clone"],

  // Resume download link
  resumeUrl: "#"
};

// Export to window
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
