// =====================================================================
// GITHUB PORTFOLIO CONFIGURATION
// =====================================================================
// You can customize your portfolio simply by editing this configuration file!
// Change 'username' to your own GitHub username.
// =====================================================================

const PORTFOLIO_CONFIG = {
  // Your default GitHub username (live data will be fetched for this user)
  username: "torvalds", // Change this to your GitHub username!
  
  // Custom header tagline / title displayed under your name
  customTitle: "Full-Stack Engineer & Open Source Enthusiast",
  
  // Custom headline/intro if you want to override or complement GitHub bio
  customBio: "Building scalable distributed systems, high-performance web applications, and intuitive developer tooling. Passionate about open source software and modern UI craft.",
  
  // Your current status / availability
  status: {
    available: true,
    text: "Open to new opportunities & collaborations",
    location: "Global / Remote"
  },
  
  // Social links
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "developer@example.com",
    website: "https://github.com"
  },
  
  // Skills categorized for the Tech Stack Bento Card
  techStack: {
    frontend: ["TypeScript", "React", "Next.js", "Vue.js", "TailwindCSS", "HTML5/CSS3", "WebGL"],
    backend: ["Node.js", "Python", "Go", "Rust", "GraphQL", "PostgreSQL", "Redis"],
    devops: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD", "Linux"],
    tools: ["Git", "VS Code", "Figma", "Postman", "Jest", "Vite"]
  },

  // Experience timeline (highlights your journey)
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Innovations Lab",
      period: "2023 — Present",
      description: "Leading frontend architecture and building high-throughput microservices. Spearheaded migration to modern distributed architecture."
    },
    {
      role: "Full-Stack Developer",
      company: "Open Source Collective",
      period: "2021 — 2023",
      description: "Crafted responsive web applications and developer tools. Maintained popular open source libraries with 10k+ stars."
    },
    {
      role: "Software Engineering Intern",
      company: "NextGen Software",
      period: "2020 — 2021",
      description: "Developed user dashboards, optimized database queries, and implemented automated test suites."
    }
  ],

  // Featured repositories to prioritize (repo names), or leave empty to auto-pick top starred repos
  featuredRepoNames: [],

  // Resume download link (can be a local file path like './resume.pdf' or a cloud link)
  resumeUrl: "#"
};

// Export to window
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
