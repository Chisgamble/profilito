# 🚀 Modern Bento Grid GitHub Portfolio

A developer portfolio and GitHub profile showcase featuring **Dark Glassmorphism**, live **GitHub REST API integration**, dynamic **Bento Grid telemetry**, and an interactive **Repository Explorer**.

![Portfolio Preview](https://img.shields.io/badge/Style-Modern_Bento_Grid-6366f1?style=for-the-badge)
![API](https://img.shields.io/badge/GitHub_API-Live_Sync-10b981?style=for-the-badge)
![Vanilla Stack](https://img.shields.io/badge/Stack-HTML5_|_CSS3_|_JavaScript-f59e0b?style=for-the-badge)

---

## ✨ Features

- **⚡ Live GitHub REST API Integration**: Fetches your real avatar, bio, follower count, and public repositories directly from GitHub.
- **🍱 Bento Grid Architecture**:
  - **Aggregate Telemetry**: Auto-calculates total stars earned, total forks, public repositories, and follower reach.
  - **Top Languages Breakdown**: Analyzes your codebases and renders an interactive multi-colored progress bar.
  - **Contribution Heatmap Simulation**: Activity matrix showing consistency and commit streaks.
  - **Star Spotlight**: Dynamically showcases your highest-starred or pinned project.
  - **Availability & Timezone Clock**: Live ticking local clock and availability indicator.
  - **Tech Stack Matrix**: Filterable skills categorized into Frontend, Backend, DevOps/Cloud, and Tools.
- **🔍 Repository Explorer**:
  - Live instant search across repository names, topics, and descriptions.
  - Dynamic language filter pills (automatically extracted from your real repos).
  - Multi-criteria sorting: Most Stars (★), Most Forks (⑂), Recently Updated, and Alphabetical.
  - Load-more pagination.
- **🎨 Customization & Theme Accents**:
  - Theme accent switcher (Cyber Violet, Electric Cyan, Matrix Emerald, Sunset Amber).
  - Ambient mouse spotlight glow and floating animated backdrop blur.
  - Profile switcher modal: Test and preview *any* GitHub user handle on the fly.
- **📬 Interactive Contact Modal**:
  - Fast message simulation with instant toast notifications.
  - One-click copy email button.

---

## 🛠️ How to Customize for Yourself

Open `config.js` and customize your details:

```javascript
const PORTFOLIO_CONFIG = {
  // Put your GitHub handle here:
  username: "your-github-username",

  // Custom tagline & headline:
  customTitle: "Full-Stack Engineer & Open Source Developer",
  customBio: "Building resilient distributed systems and modern web applications.",

  // Status:
  status: {
    available: true,
    text: "Open to new opportunities & collaborations"
  },

  // Social & contact links:
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    email: "you@example.com"
  },

  // Your tech stack:
  techStack: {
    frontend: ["TypeScript", "React", "Next.js", "TailwindCSS"],
    backend: ["Node.js", "Python", "Go", "PostgreSQL"],
    devops: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
    tools: ["Git", "VS Code", "Figma"]
  },

  // Experience journey:
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Company Name",
      period: "2023 — Present",
      description: "Brief description of achievements and responsibilities."
    }
  ]
};
```

---

## 🚀 Running Locally

No installation or npm packages required! You can open `index.html` directly in any web browser, or serve it with Python or Node:

### Option 1: Python
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000)

### Option 2: Node.js (npx serve)
```bash
npx serve .
```

---

## 🌐 Free 1-Click Deployment

### Deploy to GitHub Pages (Recommended):
1. Create a repository named `<your-username>.github.io` on GitHub.
2. Push this codebase into the repository.
3. In repository **Settings** → **Pages**, select **Deploy from a branch** (`main` / root).
4. Your portfolio will be live at `https://<your-username>.github.io`!
