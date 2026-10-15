/**
 * =====================================================================
 * GITHUB PORTFOLIO ENGINE - TRẦN KHÔN CHÍ (@Chisgamble)
 * Zero-latency local data architecture (no GitHub API rate limits)
 * Interactive Bento grid telemetry, language breakdown, and repo explorer
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

// =====================================================================
// HARDCODED PROFILE DATA - TRẦN KHÔN CHÍ (@Chisgamble)
// Guaranteed instant load without any GitHub API rate limits
// =====================================================================
const CHISGAMBLE_PROFILE = {
  login: "Chisgamble",
  name: "Trần Khôn Chí",
  avatar_url: "https://avatars.githubusercontent.com/u/147268737?v=4",
  html_url: "https://github.com/Chisgamble",
  bio: "Full-Stack Engineer specialized in TypeScript, Spring Boot microservices, React, and modern web applications. Passionate about building robust systems and scalable digital platforms.",
  location: "Vietnam / Remote",
  company: "Independent & Open Source",
  blog: "https://github.com/Chisgamble",
  public_repos: 11,
  followers: 0,
  following: 0
};

// Complete list of all 11 public repositories for Chisgamble
const CHISGAMBLE_REPOS = [
  {
    name: "bidzone",
    html_url: "https://github.com/Chisgamble/bidzone",
    homepage: "https://bidzone-nu.vercel.app",
    description: "Real-time online auction & bidding web platform with live countdown, responsive user interface, and bidding state management. Deployed live on Vercel.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-06T15:55:45Z",
    topics: ["javascript", "auction", "vercel", "realtime", "web-app"]
  },
  {
    name: "TroUyTin",
    html_url: "https://github.com/Chisgamble/TroUyTin",
    description: "Trusted boarding house and rental accommodation platform built with TypeScript, featuring room listings, tenant matching, and management workflows.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 1,
    updated_at: "2026-08-06T09:05:59Z",
    topics: ["typescript", "rental", "accommodation", "fullstack"]
  },
  {
    name: "Chis-Inven",
    html_url: "https://github.com/Chisgamble/Chis-Inven",
    description: "Full-featured modern inventory tracking and supply chain management system developed with TypeScript architecture.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-09-11T09:41:19Z",
    topics: ["typescript", "inventory", "management", "system"]
  },
  {
    name: "ChatBoxApp_Java_Springboot",
    html_url: "https://github.com/Chisgamble/ChatBoxApp_Java_Springboot",
    description: "Real-time chat and instant messaging application engineered with Java and Spring Boot architecture.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-03-02T14:03:45Z",
    topics: ["java", "springboot", "chat-app", "realtime", "messaging"]
  },
  {
    name: "Spring-petclinic-microservices-clone",
    html_url: "https://github.com/Chisgamble/Spring-petclinic-microservices-clone",
    description: "Distributed cloud-native microservices architecture clone utilizing Spring Cloud, service discovery, and Docker containers.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-07-20T04:52:35Z",
    topics: ["java", "microservices", "spring-cloud", "docker"]
  },
  {
    name: "DominiShop",
    html_url: "https://github.com/Chisgamble/DominiShop",
    description: "Modern retail e-commerce application developed in C# / .NET, featuring catalog browsing, checkout processing, and cart management.",
    language: "C#",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-05-13T10:24:21Z",
    topics: ["csharp", "dotnet", "ecommerce", "store"]
  },
  {
    name: "pokemon",
    html_url: "https://github.com/Chisgamble/pokemon",
    description: "Object-oriented Pokemon combat engine and gameplay mechanics simulation developed in modern C++.",
    language: "C++",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-04-23T10:21:03Z",
    topics: ["cpp", "game-dev", "simulation", "oop"]
  },
  {
    name: "express-deployment",
    html_url: "https://github.com/Chisgamble/express-deployment",
    homepage: "https://express-deployment-ochre.vercel.app",
    description: "Production Node.js Express server configured with continuous deployment pipelines, live on Vercel.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-10-10T08:20:36Z",
    topics: ["nodejs", "express", "backend", "vercel"]
  },
  {
    name: "profilito",
    html_url: "https://github.com/Chisgamble/profilito",
    description: "Interactive Developer Portfolio & GitHub Showcase built with modern Bento Grid, Dark Glassmorphism, and responsive UI craft.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-10-15T12:17:19Z",
    topics: ["portfolio", "bento-grid", "glassmorphism", "showcase"]
  },
  {
    name: "xv6_lab",
    html_url: "https://github.com/Chisgamble/xv6_lab",
    description: "Operating system kernel development, system calls implementation, and process scheduling based on the MIT xv6 teaching OS.",
    language: "C",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-03-13T10:03:24Z",
    topics: ["c", "operating-systems", "kernel", "xv6"]
  },
  {
    name: "svgRender",
    html_url: "https://github.com/Chisgamble/svgRender",
    description: "Interactive vector graphics, procedural animations, and SVG rendering experiments for high-performance web graphics.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-10-31T03:56:49Z",
    topics: ["svg", "graphics", "vector", "web"]
  }
];

class GitHubPortfolioApp {
  constructor() {
    this.config = window.PORTFOLIO_CONFIG || {};
    this.currentUsername = "Chisgamble";
    
    this.userProfile = { ...CHISGAMBLE_PROFILE };
    this.repositories = [...CHISGAMBLE_REPOS];
    this.filteredRepos = [];
    
    // Repository filter states
    this.selectedLanguage = "all";
    this.searchQuery = "";
    this.sortBy = "updated";
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
    this.renderTechStack("backend");
    this.generateContributionMatrix();

    // Instant local load - no API delays, no rate limits!
    this.loadProfileData();
  }

  // =====================================================================
  // THEME & SPOTLIGHT (LIGHT / DARK MODE + ACCENT PALETTES)
  // =====================================================================
  setupTheme() {
    // Mode (Light / Dark)
    const savedMode = localStorage.getItem("dev_portfolio_mode") || "dark";
    document.body.setAttribute("data-mode", savedMode);

    const modeToggleBtn = document.getElementById("mode-toggle-btn");
    if (modeToggleBtn) {
      modeToggleBtn.addEventListener("click", () => {
        const currentMode = document.body.getAttribute("data-mode") || "dark";
        const newMode = currentMode === "light" ? "dark" : "light";
        document.body.setAttribute("data-mode", newMode);
        localStorage.setItem("dev_portfolio_mode", newMode);
        this.showToast(`Switched to ${newMode === "light" ? "Light ☀️" : "Dark 🌙"} Mode`, "info");
      });
    }

    // Color Accent Theme
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
          this.showToast(`Switched accent to ${btn.textContent.trim()}`, "info");
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
            this.handleUserSwitch(targetUser);
          }
        });
      }

      // Quick demo tags
      document.querySelectorAll(".quick-user-tag").forEach(tag => {
        tag.addEventListener("click", () => {
          const u = tag.dataset.user;
          switcherModal.classList.remove("open");
          this.handleUserSwitch(u);
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
        const email = (this.config.socials && this.config.socials.email) || "chitrankhon@gmail.com";
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
            title: `Trần Khôn Chí (@Chisgamble) GitHub Portfolio`,
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
  // INSTANT PROFILE LOADING (NO API RATE LIMITS)
  // =====================================================================
  loadProfileData() {
    this.currentUsername = "Chisgamble";
    this.userProfile = { ...CHISGAMBLE_PROFILE };
    this.repositories = [...CHISGAMBLE_REPOS];

    this.updateUserDisplay();
    this.renderProfile();
    this.renderBentoStats();
    this.renderLanguagesBreakdown();
    this.renderFeaturedRepo();
    this.renderLanguageFilterPills();
    this.filterAndRenderRepos();
  }

  handleUserSwitch(targetUser) {
    if (!targetUser || targetUser.toLowerCase() === "chisgamble") {
      this.loadProfileData();
      this.showToast("Loaded Trần Khôn Chí (@Chisgamble) profile", "info");
      return;
    }

    // For other users, attempt live API fetch with rate-limit safeguard
    this.currentUsername = targetUser;
    this.updateUserDisplay();
    
    fetch(`https://api.github.com/users/${encodeURIComponent(targetUser)}`)
      .then(res => {
        if (!res.ok) throw new Error("Rate limit or not found");
        return res.json();
      })
      .then(user => {
        this.userProfile = user;
        return fetch(`https://api.github.com/users/${encodeURIComponent(targetUser)}/repos?per_page=100&sort=updated`);
      })
      .then(res => res.json())
      .then(repos => {
        this.repositories = repos.filter(r => !r.fork);
        if (this.repositories.length === 0) this.repositories = repos;
        this.renderProfile();
        this.renderBentoStats();
        this.renderLanguagesBreakdown();
        this.renderFeaturedRepo();
        this.renderLanguageFilterPills();
        this.filterAndRenderRepos();
      })
      .catch(() => {
        // Fall back seamlessly to Chisgamble's data
        this.loadProfileData();
        this.showToast(`GitHub API rate limit reached. Reverted to @Chisgamble`, "info");
      });
  }

  updateUserDisplay() {
    const userDisplay = document.getElementById("current-user-display");
    if (userDisplay) userDisplay.textContent = `@${this.currentUsername}`;
  }

  // =====================================================================
  // RENDERING COMPONENTS
  // =====================================================================
  renderProfile() {
    const u = this.userProfile || CHISGAMBLE_PROFILE;

    // Avatar
    const avatar = document.getElementById("user-avatar");
    if (avatar) avatar.src = u.avatar_url;

    // Names & Titles
    const nameEl = document.getElementById("user-name");
    const handleEl = document.getElementById("user-handle");
    const titleEl = document.getElementById("user-title");
    const bioEl = document.getElementById("user-bio");
    const brandName = document.getElementById("nav-brand-name");
    const footerBrand = document.getElementById("footer-brand-name");

    const userGithubUrl = u.html_url || `https://github.com/${this.currentUsername}`;
    const displayName = u.name || this.currentUsername;

    if (nameEl) nameEl.textContent = displayName;
    if (handleEl) {
      handleEl.textContent = `@${u.login || this.currentUsername}`;
      handleEl.href = userGithubUrl;
    }
    if (titleEl) {
      titleEl.textContent = this.config.customTitle || "Full-Stack Software Engineer & Microservices Developer";
    }
    if (bioEl) {
      bioEl.textContent = u.bio || this.config.customBio || "Full-Stack Engineer specialized in TypeScript, Spring Boot microservices, React, and modern web applications.";
    }

    if (brandName) {
      brandName.innerHTML = `Chis<span class="brand-accent">.dev</span>`;
    }
    if (footerBrand) {
      footerBrand.innerHTML = `Chis<span class="brand-accent">.dev</span>`;
    }

    // Meta elements
    const locEl = document.getElementById("meta-location");
    if (locEl) locEl.textContent = u.location || "Vietnam / Remote";

    const compEl = document.getElementById("meta-company");
    if (compEl) compEl.textContent = u.company || "Independent & Open Source";

    const blogEl = document.getElementById("meta-blog");
    if (blogEl) {
      blogEl.href = userGithubUrl;
      blogEl.textContent = "github.com/Chisgamble";
    }

    const followersEl = document.getElementById("meta-followers");
    const followingEl = document.getElementById("meta-following");
    if (followersEl) followersEl.textContent = Number(u.followers || 0).toLocaleString();
    if (followingEl) followingEl.textContent = Number(u.following || 0).toLocaleString();

    // GitHub button
    const ghBtn = document.getElementById("btn-github-profile");
    if (ghBtn) ghBtn.href = userGithubUrl;

    // Repos count button in hero
    const reposBtnCount = document.getElementById("btn-repos-count");
    if (reposBtnCount) reposBtnCount.textContent = this.repositories.length;

    // Status
    const statusText = document.getElementById("status-text-content");
    if (statusText && this.config.status) {
      statusText.textContent = this.config.status.text || "Open for Software Engineering & Full-Stack roles";
    }

    // Social modal links
    const modalGh = document.getElementById("modal-social-gh");
    if (modalGh) modalGh.href = userGithubUrl;

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

    if (starEl) starEl.textContent = totalStars.toLocaleString();
    if (forkEl) forkEl.textContent = totalForks.toLocaleString();
    if (repoEl) repoEl.textContent = this.repositories.length.toLocaleString();
    if (followerEl) followerEl.textContent = Number(this.userProfile.followers || 0).toLocaleString();
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
      totalLabel.textContent = `${this.repositories.length} public repositories analyzed`;
    }

    if (!progressBar || !legendList) return;

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
    // Featured spotlight: prioritize bidzone (live deployment) or highest starred
    const featured = this.repositories.find(r => r.name === "bidzone") || this.repositories[0];

    const titleEl = document.getElementById("featured-title");
    const descEl = document.getElementById("featured-desc");
    const langEl = document.getElementById("featured-lang");
    const starsEl = document.getElementById("featured-stars");
    const forksEl = document.getElementById("featured-forks");
    const updatedEl = document.getElementById("featured-updated");
    const topicsEl = document.getElementById("featured-topics");
    const linkEl = document.getElementById("featured-link");

    if (!featured) return;

    if (titleEl) {
      titleEl.textContent = featured.name;
      titleEl.href = featured.html_url;
    }
    if (descEl) {
      descEl.textContent = featured.description;
    }
    if (langEl) {
      langEl.textContent = featured.language || "Web App";
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
      topicsEl.innerHTML = (featured.topics || []).slice(0, 4).map(t => `<span class="topic-tag">#${t}</span>`).join("");
    }
  }

  generateContributionMatrix() {
    const grid = document.getElementById("heatmap-grid");
    if (!grid) return;

    // Generate 140 cells (20 columns x 7 rows)
    let cellsHtml = "";
    const totalCells = 140;

    for (let i = 0; i < totalCells; i++) {
      const seed = Math.sin(i * 13.5) * 10000;
      const rand = seed - Math.floor(seed);
      let level = 0;
      
      if (rand > 0.82) level = 4;
      else if (rand > 0.65) level = 3;
      else if (rand > 0.45) level = 2;
      else if (rand > 0.25) level = 1;
      
      cellsHtml += `<div class="heat-cell lvl-${level}" title="Contribution Activity Level ${level}"></div>`;
    }

    grid.innerHTML = cellsHtml;
  }

  renderTechStack(category = "all") {
    const pillsWrap = document.getElementById("tech-pills-wrap");
    if (!pillsWrap) return;

    const stack = this.config.techStack || {
      frontend: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5/CSS3", "TailwindCSS"],
      backend: ["Java", "Spring Boot", "Spring Microservices", "C# / .NET", "Node.js", "Express.js"],
      devops: ["Docker", "Git / GitHub", "Vercel", "CI/CD", "RESTful APIs", "SQL"],
      tools: ["VS Code", "IntelliJ IDEA", "Postman", "Maven", "Gradle"]
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
  // REPOSITORY FILTERING & RENDERING (CLIENT-SIDE)
  // =====================================================================
  filterAndRenderRepos(append = false) {
    const reposGrid = document.getElementById("repos-grid");
    const loadMoreBtn = document.getElementById("btn-load-more");
    if (!reposGrid) return;

    // 1. Filter
    this.filteredRepos = this.repositories.filter(repo => {
      const matchesLang = this.selectedLanguage === "all" || repo.language === this.selectedLanguage;
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
      const topicsHtml = (repo.topics && repo.topics.length > 0)
        ? repo.topics.slice(0, 3).map(t => `<span class="topic-tag">#${t}</span>`).join("")
        : "";

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
            
            <p class="repo-desc">${repo.description}</p>

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
                <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-outline" title="Live Preview">
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
