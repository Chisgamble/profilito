/**
 * =====================================================================
 * GITHUB PORTFOLIO ENGINE (Vanilla JavaScript)
 * Live GitHub API integration, Bento grid metrics, interactive filters
 * =====================================================================
 */

// GitHub official language colors
const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Zig: "#ec915c",
  Elixir: "#6e4a7e"
};

// Curated project descriptions and topics for repositories that lack GitHub descriptions
const REPO_DESCRIPTIONS_MAP = {
  "bidzone": "Real-time online auction & bidding web platform with live countdown and responsive interface. Deployed live on Vercel.",
  "TroUyTin": "Trusted boarding house and rental accommodation platform built with TypeScript, featuring room listings and tenant management.",
  "Chis-Inven": "Full-featured modern inventory and supply chain tracking system built in TypeScript.",
  "ChatBoxApp_Java_Springboot": "Real-time chat and messaging system engineered with Java and Spring Boot architecture.",
  "Spring-petclinic-microservices-clone": "Distributed cloud-native microservices architecture clone utilizing Spring Cloud and Spring Boot.",
  "DominiShop": "Modern e-commerce and retail shopping management application developed in C# / .NET.",
  "pokemon": "Object-oriented Pokemon gameplay simulation and combat engine developed in C++.",
  "express-deployment": "Lightweight Node.js Express server configured with production deployment pipelines.",
  "profilito": "Interactive Developer Portfolio & GitHub Showcase built with modern Bento Grid and live GitHub REST API integration."
};

const REPO_TOPICS_MAP = {
  "bidzone": ["javascript", "auction", "vercel", "web-app"],
  "TroUyTin": ["typescript", "rental", "accommodation", "fullstack"],
  "Chis-Inven": ["typescript", "inventory", "management", "system"],
  "ChatBoxApp_Java_Springboot": ["java", "springboot", "chat-app", "realtime"],
  "Spring-petclinic-microservices-clone": ["java", "microservices", "spring-cloud", "docker"],
  "DominiShop": ["csharp", "dotnet", "ecommerce", "store"],
  "pokemon": ["cpp", "game-dev", "simulation", "oop"],
  "profilito": ["portfolio", "bento-grid", "github-api", "glassmorphism"]
};

// Fallback user data in case of GitHub API rate limits
const FALLBACK_PROFILE = {
  login: "octocat",
  name: "Alex Devlin",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  html_url: "https://github.com/octocat",
  bio: "Full-Stack Software Engineer building delightful web applications, resilient backend microservices, and high-performance open-source libraries.",
  location: "San Francisco, CA / Remote",
  company: "Open Source Collective",
  blog: "https://github.blog",
  public_repos: 42,
  followers: 1240,
  following: 86
};

const FALLBACK_REPOS = [
  {
    name: "hyper-speed-cache",
    html_url: "https://github.com",
    description: "Ultra-fast in-memory caching engine written in TypeScript with Redis-compatible protocol and LRU eviction.",
    language: "TypeScript",
    stargazers_count: 842,
    forks_count: 124,
    updated_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    topics: ["cache", "typescript", "performance", "redis"]
  },
  {
    name: "react-flow-bento",
    html_url: "https://github.com",
    description: "Modern Bento Grid component library for React with dark glassmorphism, fluid physics, and customizable widgets.",
    language: "JavaScript",
    stargazers_count: 512,
    forks_count: 67,
    updated_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    topics: ["react", "bento-grid", "glassmorphism", "ui-kit"]
  },
  {
    name: "neural-embed-service",
    html_url: "https://github.com",
    description: "Distributed microservice for high-throughput vector embedding generation and semantic clustering.",
    language: "Python",
    stargazers_count: 389,
    forks_count: 45,
    updated_at: new Date(Date.now() - 86400000 * 12).toISOString(),
    topics: ["python", "ai", "vector-db", "microservices"]
  },
  {
    name: "cloud-sentinel-cli",
    html_url: "https://github.com",
    description: "Command-line tool to inspect and optimize multi-cloud infrastructure, cost spikes, and security policies.",
    language: "Go",
    stargazers_count: 275,
    forks_count: 31,
    updated_at: new Date(Date.now() - 86400000 * 20).toISOString(),
    topics: ["cli", "golang", "devops", "cloud"]
  },
  {
    name: "rust-pixel-synth",
    html_url: "https://github.com",
    description: "Real-time procedural GPU shader and pixel audio synthesizer compiled to WebAssembly.",
    language: "Rust",
    stargazers_count: 198,
    forks_count: 18,
    updated_at: new Date(Date.now() - 86400000 * 30).toISOString(),
    topics: ["rust", "wasm", "webgl", "graphics"]
  },
  {
    name: "tailwind-glass-presets",
    html_url: "https://github.com",
    description: "Curated collection of frosted glass effects, glowing borders, and gradient mesh utilities.",
    language: "CSS",
    stargazers_count: 145,
    forks_count: 22,
    updated_at: new Date(Date.now() - 86400000 * 45).toISOString(),
    topics: ["css", "glassmorphism", "tailwind"]
  }
];

class GitHubPortfolioApp {
  constructor() {
    this.config = window.PORTFOLIO_CONFIG || {};
    this.currentUsername = this.config.username || "torvalds";
    
    this.userProfile = null;
    this.repositories = [];
    this.filteredRepos = [];
    
    // Repository filter states
    this.selectedLanguage = "all";
    this.searchQuery = "";
    this.sortBy = "stars";
    this.reposPerPage = 6;
    this.currentPage = 1;

    this.init();
  }

  init() {
    this.setupTheme();
    this.setupSpotlight();
    this.setupClock();
    this.setupEventListeners();
    this.renderExperienceTimeline();
    this.renderTechStack("all");
    this.generateContributionMatrix();

    // Fetch GitHub Profile and Repos
    this.loadGitHubData(this.currentUsername);
  }

  // =====================================================================
  // THEME & SPOTLIGHT
  // =====================================================================
  setupTheme() {
    const savedTheme = localStorage.getItem("dev_portfolio_theme") || "violet";
    document.body.setAttribute("data-theme", savedTheme);

    const themeBtn = document.getElementById("theme-btn");
    const themeMenu = document.getElementById("theme-menu");

    if (themeBtn && themeMenu) {
      themeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle("show");
      });

      document.querySelectorAll(".theme-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const theme = btn.dataset.setTheme;
          document.body.setAttribute("data-theme", theme);
          localStorage.setItem("dev_portfolio_theme", theme);
          themeMenu.classList.remove("show");
          this.showToast(`Switched to ${btn.textContent.trim()}`, "info");
        });
      });

      document.addEventListener("click", () => themeMenu.classList.remove("show"));
    }
  }

  setupSpotlight() {
    const spotlight = document.getElementById("spotlight");
    if (!spotlight) return;

    window.addEventListener("pointermove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  setupClock() {
    const clockEl = document.getElementById("clock-time");
    const zoneEl = document.getElementById("clock-zone");

    const updateTime = () => {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }
      if (zoneEl) {
        const offset = -now.getTimezoneOffset() / 60;
        const sign = offset >= 0 ? "+" : "";
        zoneEl.textContent = `UTC${sign}${offset}:00 • Active & Available`;
      }
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  // =====================================================================
  // EVENT LISTENERS & MODALS
  // =====================================================================
  setupEventListeners() {
    // Navbar scroll blur styling
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Username switcher modal
    const switcherModal = document.getElementById("switcher-modal");
    const openSwitcherBtn = document.getElementById("open-switcher-btn");
    const closeSwitcherBtn = document.getElementById("close-switcher-btn");
    const switcherForm = document.getElementById("switcher-form");
    const usernameInput = document.getElementById("username-input");

    if (openSwitcherBtn && switcherModal) {
      openSwitcherBtn.addEventListener("click", () => {
        switcherModal.classList.add("open");
        if (usernameInput) {
          usernameInput.value = this.currentUsername;
          usernameInput.focus();
        }
      });

      if (closeSwitcherBtn) {
        closeSwitcherBtn.addEventListener("click", () => switcherModal.classList.remove("open"));
      }

      switcherModal.addEventListener("click", (e) => {
        if (e.target === switcherModal) switcherModal.classList.remove("open");
      });

      if (switcherForm) {
        switcherForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const targetUser = usernameInput.value.trim();
          if (targetUser) {
            switcherModal.classList.remove("open");
            this.loadGitHubData(targetUser);
          }
        });
      }

      // Quick demo tags
      document.querySelectorAll(".quick-user-tag").forEach(tag => {
        tag.addEventListener("click", () => {
          const u = tag.dataset.user;
          switcherModal.classList.remove("open");
          this.loadGitHubData(u);
        });
      });
    }

    // Contact modal
    const contactModal = document.getElementById("contact-modal");
    const openContactBtn = document.getElementById("open-contact-modal-btn");
    const closeContactBtn = document.getElementById("close-contact-modal-btn");
    const contactForm = document.getElementById("contact-form");

    if (openContactBtn && contactModal) {
      openContactBtn.addEventListener("click", () => contactModal.classList.add("open"));
      if (closeContactBtn) {
        closeContactBtn.addEventListener("click", () => contactModal.classList.remove("open"));
      }
      contactModal.addEventListener("click", (e) => {
        if (e.target === contactModal) contactModal.classList.remove("open");
      });

      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          this.showToast("Message sent! Thanks for reaching out.", "success");
          contactForm.reset();
          contactModal.classList.remove("open");
        });
      }
    }

    // Copy email button
    const copyEmailBtn = document.getElementById("copy-email-btn");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", () => {
        const email = (this.config.socials && this.config.socials.email) || "developer@example.com";
        navigator.clipboard.writeText(email).then(() => {
          this.showToast(`Email copied: ${email}`, "success");
        }).catch(() => {
          this.showToast(`Email: ${email}`, "info");
        });
      });
    }

    // Share profile button
    const shareBtn = document.getElementById("btn-share-profile");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        if (navigator.share) {
          navigator.share({
            title: `${this.userProfile ? this.userProfile.name : 'Developer'} GitHub Portfolio`,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(window.location.href).then(() => {
            this.showToast("Portfolio link copied to clipboard!", "success");
          });
        }
      });
    }

    // Tech stack category tabs
    const stackTabs = document.querySelectorAll(".stack-tab");
    stackTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        stackTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.renderTechStack(tab.dataset.category);
      });
    });

    // Repository search & sorting
    const searchInput = document.getElementById("repo-search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    const sortSelect = document.getElementById("repo-sort-select");
    const loadMoreBtn = document.getElementById("btn-load-more");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (clearSearchBtn) {
          clearSearchBtn.classList.toggle("show", this.searchQuery.length > 0);
        }
        this.currentPage = 1;
        this.filterAndRenderRepos();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        if (searchInput) {
          searchInput.value = "";
          this.searchQuery = "";
          clearSearchBtn.classList.remove("show");
          this.currentPage = 1;
          this.filterAndRenderRepos();
        }
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.currentPage = 1;
        this.filterAndRenderRepos();
      });
    }

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        this.currentPage++;
        this.filterAndRenderRepos(true);
      });
    }
  }

  // =====================================================================
  // GITHUB DATA FETCHING
  // =====================================================================
  async loadGitHubData(username) {
    this.currentUsername = username;
    this.updateUserDisplay();
    this.showSkeletons();

    try {
      // 1. Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
      
      if (!userRes.ok) {
        if (userRes.status === 403) {
          this.showToast("GitHub API rate limit reached. Displaying demo profile.", "info");
        } else if (userRes.status === 404) {
          this.showToast(`User @${username} not found. Showing demo profile.`, "info");
        }
        throw new Error(`GitHub User fetch status: ${userRes.status}`);
      }

      this.userProfile = await userRes.json();

      // 2. Fetch public repositories
      const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`);
      if (!reposRes.ok) throw new Error(`GitHub Repos fetch status: ${reposRes.status}`);
      
      const allRepos = await reposRes.json();
      // Filter out forks if preferred, or keep all
      this.repositories = allRepos.filter(r => !r.fork);
      if (this.repositories.length === 0) {
        this.repositories = allRepos; // fallback if user only has forks
      }

    } catch (err) {
      console.warn("Falling back to simulated data:", err.message);
      // Use fallback data
      this.userProfile = { ...FALLBACK_PROFILE, login: username, name: `${username} (Demo)` };
      this.repositories = FALLBACK_REPOS;
    }

    // Render entire UI with fetched data
    this.renderProfile();
    this.renderBentoStats();
    this.renderLanguagesBreakdown();
    this.renderFeaturedRepo();
    this.renderLanguageFilterPills();
    this.filterAndRenderRepos();
  }

  updateUserDisplay() {
    const userDisplay = document.getElementById("current-user-display");
    if (userDisplay) userDisplay.textContent = `@${this.currentUsername}`;
  }

  showSkeletons() {
    const reposGrid = document.getElementById("repos-grid");
    if (!reposGrid) return;
    reposGrid.innerHTML = `
      <div class="repo-card-skeleton glass-panel">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line desc"></div>
        <div class="skeleton-line desc short"></div>
        <div class="skeleton-footer"></div>
      </div>
      <div class="repo-card-skeleton glass-panel">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line desc"></div>
        <div class="skeleton-line desc short"></div>
        <div class="skeleton-footer"></div>
      </div>
      <div class="repo-card-skeleton glass-panel">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line desc"></div>
        <div class="skeleton-line desc short"></div>
        <div class="skeleton-footer"></div>
      </div>
    `;
  }

  // =====================================================================
  // RENDERING COMPONENTS
  // =====================================================================
  renderProfile() {
    const u = this.userProfile;
    if (!u) return;

    // Avatar
    const avatar = document.getElementById("user-avatar");
    if (avatar && u.avatar_url) avatar.src = u.avatar_url;

    // Names & Titles
    const nameEl = document.getElementById("user-name");
    const handleEl = document.getElementById("user-handle");
    const titleEl = document.getElementById("user-title");
    const bioEl = document.getElementById("user-bio");
    const brandName = document.getElementById("nav-brand-name");
    const footerBrand = document.getElementById("footer-brand-name");

    const displayName = u.name || u.login;
    if (nameEl) nameEl.textContent = displayName;
    if (handleEl) {
      handleEl.textContent = `@${u.login}`;
      handleEl.href = u.html_url;
    }
    if (titleEl) {
      titleEl.textContent = this.config.customTitle || "Software Engineer & Open Source Developer";
    }
    if (bioEl) {
      bioEl.textContent = u.bio || this.config.customBio || "Passionate engineer exploring cutting-edge technology and open-source software.";
    }

    if (brandName) {
      brandName.innerHTML = `${displayName.split(' ')[0]}<span class="brand-accent">.dev</span>`;
    }
    if (footerBrand) {
      footerBrand.innerHTML = `${displayName.split(' ')[0]}<span class="brand-accent">.dev</span>`;
    }

    // Meta elements
    const locEl = document.getElementById("meta-location");
    const locWrap = document.getElementById("meta-location-wrap");
    if (locEl && locWrap) {
      locEl.textContent = u.location || "Remote / Earth";
    }

    const compEl = document.getElementById("meta-company");
    if (compEl) {
      compEl.textContent = u.company || "Independent";
    }

    const blogEl = document.getElementById("meta-blog");
    if (blogEl) {
      const blogUrl = u.blog ? (u.blog.startsWith("http") ? u.blog : `https://${u.blog}`) : u.html_url;
      blogEl.href = blogUrl;
      blogEl.textContent = u.blog ? u.blog.replace(/^https?:\/\//, '') : "github.com";
    }

    const followersEl = document.getElementById("meta-followers");
    const followingEl = document.getElementById("meta-following");
    if (followersEl) followersEl.textContent = Number(u.followers || 0).toLocaleString();
    if (followingEl) followingEl.textContent = Number(u.following || 0).toLocaleString();

    // GitHub button
    const ghBtn = document.getElementById("btn-github-profile");
    if (ghBtn) ghBtn.href = u.html_url;

    // Repos count button in hero
    const reposBtnCount = document.getElementById("btn-repos-count");
    if (reposBtnCount) reposBtnCount.textContent = this.repositories.length;

    // Status
    const statusText = document.getElementById("status-text-content");
    if (statusText && this.config.status) {
      statusText.textContent = this.config.status.text || "Available for new projects";
    }

    // Social modal links
    const modalGh = document.getElementById("modal-social-gh");
    if (modalGh) modalGh.href = u.html_url;

    const modalLi = document.getElementById("modal-social-li");
    if (modalLi && this.config.socials && this.config.socials.linkedin) {
      modalLi.href = this.config.socials.linkedin;
    }
  }

  renderBentoStats() {
    let totalStars = 0;
    let totalForks = 0;

    this.repositories.forEach(r => {
      totalStars += r.stargazers_count || 0;
      totalForks += r.forks_count || 0;
    });

    const starEl = document.getElementById("stat-total-stars");
    const forkEl = document.getElementById("stat-total-forks");
    const repoEl = document.getElementById("stat-total-repos");
    const followerEl = document.getElementById("stat-followers-count");

    if (starEl) this.animateCounter(starEl, totalStars);
    if (forkEl) this.animateCounter(forkEl, totalForks);
    if (repoEl) this.animateCounter(repoEl, this.repositories.length);
    if (followerEl && this.userProfile) this.animateCounter(followerEl, this.userProfile.followers || 0);
  }

  animateCounter(element, target) {
    let start = 0;
    const duration = 800;
    const steps = 24;
    const increment = Math.ceil(target / steps);
    const intervalTime = Math.floor(duration / steps);

    if (target === 0) {
      element.textContent = "0";
      return;
    }

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = start.toLocaleString();
      }
    }, intervalTime);
  }

  renderLanguagesBreakdown() {
    const langMap = {};
    let totalWithLanguage = 0;

    this.repositories.forEach(repo => {
      if (repo.language) {
        langMap[repo.language] = (langMap[repo.language] || 0) + 1;
        totalWithLanguage++;
      }
    });

    const sortedLangs = Object.entries(langMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const progressBar = document.getElementById("languages-progress-bar");
    const legendList = document.getElementById("languages-legend-list");
    const totalLabel = document.getElementById("lang-repos-total");

    if (totalLabel) {
      totalLabel.textContent = `${totalWithLanguage} public repositories analyzed`;
    }

    if (!progressBar || !legendList) return;

    if (sortedLangs.length === 0) {
      progressBar.innerHTML = `<div class="progress-segment" style="width: 100%; background: var(--accent-primary);"></div>`;
      legendList.innerHTML = `<span class="lang-legend-pill">Multi-disciplinary codebases</span>`;
      return;
    }

    let progressHtml = "";
    let legendHtml = "";

    sortedLangs.forEach(([lang, count]) => {
      const pct = Math.round((count / totalWithLanguage) * 100);
      const color = LANGUAGE_COLORS[lang] || "#8b5cf6";

      progressHtml += `
        <div class="progress-segment" style="width: ${pct}%; background-color: ${color};" title="${lang}: ${pct}%"></div>
      `;

      legendHtml += `
        <span class="lang-legend-pill">
          <span class="lang-dot" style="background-color: ${color};"></span>
          <strong>${lang}</strong> <span>${pct}%</span>
        </span>
      `;
    });

    progressBar.innerHTML = progressHtml;
    legendList.innerHTML = legendHtml;
  }

  renderFeaturedRepo() {
    let featured = null;

    // Check if user set featured repos in config
    if (this.config.featuredRepoNames && this.config.featuredRepoNames.length > 0) {
      featured = this.repositories.find(r => this.config.featuredRepoNames.includes(r.name));
    }

    // Default to the highest starred repo
    if (!featured && this.repositories.length > 0) {
      featured = [...this.repositories].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))[0];
    }

    const titleEl = document.getElementById("featured-title");
    const descEl = document.getElementById("featured-desc");
    const langEl = document.getElementById("featured-lang");
    const starsEl = document.getElementById("featured-stars");
    const forksEl = document.getElementById("featured-forks");
    const updatedEl = document.getElementById("featured-updated");
    const topicsEl = document.getElementById("featured-topics");
    const linkEl = document.getElementById("featured-link");

    if (!featured) {
      if (titleEl) titleEl.textContent = "No public repository yet";
      if (descEl) descEl.textContent = "Create repositories on GitHub to see them spotlighted here.";
      return;
    }

    if (titleEl) {
      titleEl.textContent = featured.name;
      titleEl.href = featured.html_url;
    }
    if (descEl) {
      descEl.textContent = featured.description || REPO_DESCRIPTIONS_MAP[featured.name] || "High-impact open source repository.";
    }
    if (langEl) {
      langEl.textContent = featured.language || "Open Source";
      const color = LANGUAGE_COLORS[featured.language];
      if (color) {
        langEl.style.borderColor = color;
        langEl.style.color = color;
      }
    }
    if (starsEl) starsEl.textContent = (featured.stargazers_count || 0).toLocaleString();
    if (forksEl) forksEl.textContent = (featured.forks_count || 0).toLocaleString();
    if (updatedEl && featured.updated_at) {
      const d = new Date(featured.updated_at);
      updatedEl.textContent = `Updated ${d.toLocaleDateString()}`;
    }
    if (linkEl) linkEl.href = featured.html_url;

    if (topicsEl) {
      const customTopics = REPO_TOPICS_MAP[featured.name];
      const topics = (featured.topics && featured.topics.length > 0) 
        ? featured.topics.slice(0, 4) 
        : (customTopics || [featured.language || "developer", "open-source", "git"]);
      topicsEl.innerHTML = topics.map(t => `<span class="topic-tag">#${t}</span>`).join("");
    }
  }

  generateContributionMatrix() {
    const grid = document.getElementById("heatmap-grid");
    if (!grid) return;

    // Generate 140 cells (20 columns x 7 rows)
    let cellsHtml = "";
    const totalCells = 140;

    for (let i = 0; i < totalCells; i++) {
      // Create natural clusters of activity
      const seed = Math.sin(i * 13.5) * 10000;
      const rand = seed - Math.floor(seed);
      let level = 0;
      
      if (rand > 0.82) level = 4;
      else if (rand > 0.65) level = 3;
      else if (rand > 0.45) level = 2;
      else if (rand > 0.25) level = 1;
      
      cellsHtml += `<div class="heat-cell lvl-${level}" title="Activity Level ${level}"></div>`;
    }

    grid.innerHTML = cellsHtml;
  }

  renderTechStack(category = "all") {
    const pillsWrap = document.getElementById("tech-pills-wrap");
    if (!pillsWrap) return;

    const stack = this.config.techStack || {
      frontend: ["TypeScript", "React", "Next.js", "TailwindCSS", "WebGL"],
      backend: ["Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "Redis"],
      devops: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD"],
      tools: ["Git", "VS Code", "Figma", "Postman", "Jest"]
    };

    let items = [];
    if (category === "all") {
      Object.entries(stack).forEach(([cat, list]) => {
        list.forEach(skill => items.push({ skill, category: cat }));
      });
    } else if (stack[category]) {
      items = stack[category].map(skill => ({ skill, category }));
    }

    pillsWrap.innerHTML = items.map(item => `
      <div class="tech-skill-pill">
        <span class="skill-name">${item.skill}</span>
        <span class="tech-skill-cat">${item.category}</span>
      </div>
    `).join("");
  }

  renderExperienceTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    const experiences = this.config.experience || [];

    if (experiences.length === 0) {
      container.innerHTML = `<p style="color: var(--text-muted);">No journey timeline added yet in config.js.</p>`;
      return;
    }

    container.innerHTML = experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-panel">
          <div class="timeline-header">
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <div class="timeline-company">${exp.company}</div>
          <p class="timeline-desc">${exp.description}</p>
        </div>
      </div>
    `).join("");
  }

  renderLanguageFilterPills() {
    const pillsContainer = document.getElementById("language-filter-pills");
    if (!pillsContainer) return;

    // Collect distinct languages from active repositories
    const langs = new Set();
    this.repositories.forEach(r => {
      if (r.language) langs.add(r.language);
    });

    let html = `<button class="filter-pill ${this.selectedLanguage === 'all' ? 'active' : ''}" data-lang="all">All Languages</button>`;
    
    Array.from(langs).sort().forEach(lang => {
      html += `
        <button class="filter-pill ${this.selectedLanguage === lang ? 'active' : ''}" data-lang="${lang}">${lang}</button>
      `;
    });

    pillsContainer.innerHTML = html;

    // Add click listeners to filter pills
    pillsContainer.querySelectorAll(".filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        pillsContainer.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.selectedLanguage = btn.dataset.lang;
        this.currentPage = 1;
        this.filterAndRenderRepos();
      });
    });
  }

  // =====================================================================
  // REPOSITORY FILTERING & RENDERING
  // =====================================================================
  filterAndRenderRepos(append = false) {
    const reposGrid = document.getElementById("repos-grid");
    const loadMoreBtn = document.getElementById("btn-load-more");
    if (!reposGrid) return;

    // 1. Filter
    this.filteredRepos = this.repositories.filter(repo => {
      // Language filter
      const matchesLang = this.selectedLanguage === "all" || repo.language === this.selectedLanguage;
      
      // Search query
      const matchesSearch = !this.searchQuery || 
        repo.name.toLowerCase().includes(this.searchQuery) ||
        (repo.description && repo.description.toLowerCase().includes(this.searchQuery)) ||
        (repo.topics && repo.topics.some(t => t.toLowerCase().includes(this.searchQuery)));

      return matchesLang && matchesSearch;
    });

    // 2. Sort
    this.filteredRepos.sort((a, b) => {
      if (this.sortBy === "stars") return (b.stargazers_count || 0) - (a.stargazers_count || 0);
      if (this.sortBy === "forks") return (b.forks_count || 0) - (a.forks_count || 0);
      if (this.sortBy === "updated") return new Date(b.updated_at) - new Date(a.updated_at);
      if (this.sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    // 3. Paginate
    const totalVisible = this.currentPage * this.reposPerPage;
    const paginatedRepos = this.filteredRepos.slice(0, totalVisible);

    // Render cards
    if (this.filteredRepos.length === 0) {
      reposGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
          <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none" stroke-width="1.5" style="margin-bottom: 1rem; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">No repositories found</h3>
          <p>Try clearing filters or search query to view all projects.</p>
        </div>
      `;
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
      return;
    }

    const cardsHtml = paginatedRepos.map(repo => {
      const color = LANGUAGE_COLORS[repo.language] || "#6366f1";
      const customTopics = REPO_TOPICS_MAP[repo.name];
      const topicsList = (repo.topics && repo.topics.length > 0)
        ? repo.topics
        : (customTopics || []);
      const topicsHtml = topicsList.length > 0
        ? topicsList.slice(0, 3).map(t => `<span class="topic-tag">#${t}</span>`).join("")
        : "";
      const repoDescription = repo.description || REPO_DESCRIPTIONS_MAP[repo.name] || "Open source software repository.";

      return `
        <div class="repo-card glass-panel">
          <div class="repo-card-top">
            <div class="repo-card-header">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <span>${repo.name}</span>
              </a>
              <span class="repo-badge-vis">Public</span>
            </div>
            
            <p class="repo-desc">${repoDescription}</p>

            ${topicsHtml ? `<div class="repo-card-topics">${topicsHtml}</div>` : ''}
          </div>

          <div class="repo-card-footer">
            <div class="repo-metrics">
              ${repo.language ? `
                <div class="metric-item">
                  <span class="lang-dot" style="background-color: ${color};"></span>
                  <span>${repo.language}</span>
                </div>
              ` : ''}
              
              <div class="metric-item" title="Stars">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" stroke="#f59e0b">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <strong>${(repo.stargazers_count || 0).toLocaleString()}</strong>
              </div>

              <div class="metric-item" title="Forks">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2">
                  <line x1="6" y1="3" x2="6" y2="15"></line>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
                <span>${(repo.forks_count || 0).toLocaleString()}</span>
              </div>
            </div>

            <div class="repo-card-actions">
              ${repo.homepage ? `
                <a href="${repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-outline" title="Live Preview">
                  <span>Demo</span>
                </a>
              ` : ''}
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-secondary" title="View Source">
                <span>Code &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");

    reposGrid.innerHTML = cardsHtml;

    // Toggle Load More button
    if (loadMoreBtn) {
      loadMoreBtn.style.display = totalVisible < this.filteredRepos.length ? "inline-flex" : "none";
    }
  }

  // =====================================================================
  // TOAST NOTIFICATIONS
  // =====================================================================
  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-dot" style="width: 8px; height: 8px; border-radius: 50%; background: ${type === 'success' ? '#10b981' : 'var(--accent-primary)'};"></span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Instantiate on DOM load
document.addEventListener("DOMContentLoaded", () => {
  window.portfolioApp = new GitHubPortfolioApp();
});
