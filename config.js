// =====================================================================
// GITHUB PORTFOLIO CONFIGURATION - TRẦN KHÔN CHÍ (@Chisgamble)
// Backend & Java Software Engineering Focus
// =====================================================================

const PORTFOLIO_CONFIG = {
  // Default GitHub username
  username: "Chisgamble",
  
  // Custom header tagline / title
  customTitle: "Backend Software Engineer & Java / Spring Specialist",
  
  // Custom headline / bio highlighting Backend & Java strengths
  customBio: "Backend Software Engineer specialized in Java, Spring Boot microservices, scalable RESTful APIs, and distributed architecture. Experienced with cloud-native patterns, relational databases, Docker, and full-stack integration.",
  
  // Current status & availability
  status: {
    available: true,
    text: "Open for Backend Engineer & Java Developer roles",
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
  
  // Skills categorized - Backend first
  techStack: {
    backend: [
      "Java", 
      "Spring Boot", 
      "Spring Cloud (Microservices)", 
      "C# / .NET", 
      "RESTful APIs", 
      "SQL / Relational DBs", 
      "Node.js & Express", 
      "C / C++ (Systems)"
    ],
    devops: [
      "Docker & Containers", 
      "Maven & Gradle", 
      "Git & GitHub Actions", 
      "Linux / Bash", 
      "CI/CD Pipelines", 
      "Cloud Deployment (Vercel)"
    ],
    frontend: [
      "TypeScript", 
      "JavaScript (ES6+)", 
      "React", 
      "HTML5 & CSS3", 
      "TailwindCSS"
    ],
    tools: [
      "IntelliJ IDEA", 
      "Postman", 
      "VS Code", 
      "Git Bash", 
      "DBeaver / DataGrip"
    ]
  },

  // Experience highlights tailored to Backend & Java
  experience: [
    {
      role: "Backend & Microservices Engineer",
      company: "Distributed Systems & Cloud-Native Projects",
      period: "2024 — Present",
      description: "Engineered distributed microservice architectures using Spring Boot and Spring Cloud (Spring PetClinic clone), integrating service discovery, centralized configuration, resilient API gateways, and Docker containerization."
    },
    {
      role: "Java Backend Developer",
      company: "Real-Time Messaging Systems",
      period: "2023 — 2024",
      description: "Architected ChatBoxApp with Java and Spring Boot, implementing real-time WebSocket communication, secure authentication, multi-threaded request handling, and clean layered service architecture."
    },
    {
      role: "Systems & Full-Stack Developer",
      company: "Independent Software Engineering",
      period: "2023 — 2024",
      description: "Developed enterprise commerce backend in C# (.NET DominiShop), explored operating system kernel internals in C (MIT xv6 OS lab), and built real-time web platforms including BidZone and TroUyTin."
    }
  ],

  // Featured repositories to spotlight (Spring & Java first!)
  featuredRepoNames: [
    "Spring-petclinic-microservices-clone",
    "ChatBoxApp_Java_Springboot",
    "DominiShop",
    "Chis-Inven",
    "bidzone"
  ],

  // Resume download link
  resumeUrl: "#"
};

// Export to window
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
