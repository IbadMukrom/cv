/**
 * =========================================================================
 * PORTFOLIO & CV INTERACTIVE APPLICATION ENGINE
 * Vanilla JavaScript - Zero Dependencies - High Performance
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderBentoCards();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducationAndCertifications();
  renderTestimonials();
  initLiveClock();
  initScrollProgressAndSpy();
  initProjectFilter();
  initModal();
  initCommandPalette();
  initDesignTokensInspector();
  initQuickActions();
});

/* ==========================================================================
   THEME TOGGLE SYSTEM (DARK / LIGHT)
   ========================================================================== */

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme-preference') || 'dark';
  
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme-preference', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next.toUpperCase()} theme`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-toggle-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else {
    icon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  }
}

/* ==========================================================================
   RENDER PROFILE & HERO
   ========================================================================== */

function renderProfile() {
  const { personal } = CV_DATA;

  // Title, Name & Subtitle
  const heroNameEl = document.getElementById('hero-name');
  if (heroNameEl) heroNameEl.textContent = personal.name;

  const heroSubtitleEl = document.getElementById('hero-subtitle');
  if (heroSubtitleEl) heroSubtitleEl.textContent = personal.subtitle;

  // Status Badge
  const statusBadgeEl = document.getElementById('status-badge-text');
  if (statusBadgeEl) statusBadgeEl.textContent = personal.status;

  // Profile Card
  const profileCardName = document.getElementById('profile-card-name');
  if (profileCardName) profileCardName.textContent = personal.name;

  const profileCardTitle = document.getElementById('profile-card-title');
  if (profileCardTitle) profileCardTitle.textContent = personal.title;

  const profileLocation = document.getElementById('profile-location-text');
  if (profileLocation) profileLocation.textContent = personal.location;

  // Avatar
  const avatarImg = document.getElementById('avatar-image');
  if (avatarImg && personal.avatar) {
    avatarImg.src = personal.avatar;
    avatarImg.alt = personal.name;
  }

  // Social Links
  const socialsContainer = document.getElementById('profile-socials');
  if (socialsContainer && personal.socials) {
    socialsContainer.innerHTML = personal.socials.map(soc => `
      <a href="${soc.url}" target="_blank" rel="noopener noreferrer" class="social-pill" title="${soc.name}">
        ${getSocialSvg(soc.name.toLowerCase())}
        <span>${soc.name}</span>
      </a>
    `).join('');
  }

  // Metrics Bento
  const metricsContainer = document.getElementById('hero-metrics-container');
  if (metricsContainer && personal.stats) {
    metricsContainer.innerHTML = personal.stats.map(st => `
      <div class="metric-card">
        <span class="metric-value">${st.value}</span>
        <span class="metric-label">${st.label}</span>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   RENDER BENTO HIGHLIGHTS
   ========================================================================== */

function renderBentoCards() {
  const container = document.getElementById('bento-grid-container');
  if (!container) return;

  const bentoItems = [
    {
      span: "bento-col-span-2",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      iconClass: "",
      title: "Design Systems & Design-to-Code Synergy",
      desc: "Menghubungkan Figma Design Tokens secara seamless dengan arsitektur CSS/TypeScript. Menciptakan komponen atomik yang konsisten, berstandar aksesibilitas tinggi (WCAG AA), dan memangkas waktu pengembangan fitur tim rekayasa hingga 40%.",
      tags: ["Atomic Design", "Tokens Studio", "Storybook", "WCAG 2.1 AA", "Figma Auto-Layout"]
    },
    {
      span: "",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      iconClass: "cyan",
      title: "Resilient Frontend Architecture",
      desc: "Mengembangkan aplikasi web berbasis React, Next.js, dan TypeScript dengan arsitektur modular yang skalabel, zero-friction developer experience, dan state management efisien.",
      tags: ["React 19", "Next.js", "TypeScript", "Performance", "Clean Code"]
    },
    {
      span: "",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      iconClass: "purple",
      title: "Core Web Vitals & Micro-Interactions",
      desc: "Memastikan pengalaman browsing tanpa jeda dengan skor Google Lighthouse 98+. Transisi 60fps yang memanjakan mata tanpa mengorbankan performa render perangkat low-end.",
      tags: ["60 FPS", "Lighthouse 100", "LCP < 1.2s", "Zero CLS"]
    },
    {
      span: "bento-col-span-2",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      iconClass: "emerald",
      title: "Human-Centered Research & Product Strategy",
      desc: "Setiap baris kode dan piksel yang saya rancang berakar pada data valid: wawancara pengguna nyata, analisis heatmap kuantitatif, dan pengujian kegunaan iteratif. Menghadirkan solusi yang selaras dengan tujuan bisnis eksekutif.",
      tags: ["User Journey Maps", "Usability Testing", "Product Discovery", "ROI-Driven UX"]
    }
  ];

  container.innerHTML = bentoItems.map(item => `
    <div class="bento-card ${item.span}">
      <div class="bento-icon-wrapper ${item.iconClass}">
        ${item.icon}
      </div>
      <h3 class="bento-card-title">${item.title}</h3>
      <p class="bento-card-text">${item.desc}</p>
      <div class="bento-tag-list">
        ${item.tags.map(t => `<span class="bento-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER SKILLS & PROFICIENCY
   ========================================================================== */

function renderSkills() {
  const { skills } = CV_DATA;
  const designContainer = document.getElementById('design-skills-list');
  const engContainer = document.getElementById('eng-skills-list');

  const renderSkillList = (list) => {
    return list.map(sk => `
      <div class="skill-item">
        <div class="skill-item-header">
          <span class="skill-item-name">${sk.name}</span>
          <span class="skill-item-percentage">${sk.level}%</span>
        </div>
        <div class="skill-progress-bar">
          <div class="skill-progress-fill" data-progress="${sk.level}" style="width: 0%"></div>
        </div>
        <div class="skill-tags-inline">
          ${sk.tags.map(t => `<span class="skill-tag-pill">#${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  };

  if (designContainer) designContainer.innerHTML = renderSkillList(skills.design);
  if (engContainer) engContainer.innerHTML = renderSkillList(skills.engineering);

  // Animate progress bars on viewport scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillBars = entry.target.querySelectorAll('.skill-progress-fill');
        fillBars.forEach(bar => {
          const target = bar.getAttribute('data-progress');
          bar.style.width = `${target}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* ==========================================================================
   RENDER FEATURED PROJECTS & CASE STUDIES
   ========================================================================== */

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? CV_DATA.projects 
    : CV_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Lihat studi kasus ${p.title}">
      <div class="project-thumb-box">
        <img src="${p.image}" alt="${p.title}" loading="eager" />
        <span class="project-category-badge">${p.categoryName}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-tags">
          ${p.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-card-footer">
          <span>Explore Case Study</span>
          <span class="arrow-icon">→</span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click events
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      openCaseStudyModal(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.getAttribute('data-project-id');
        openCaseStudyModal(id);
      }
    });
  });
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   RENDER WORK EXPERIENCE TIMELINE
   ========================================================================== */

function renderExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = CV_DATA.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-card-header">
          <div>
            <h3 class="timeline-role-title">${exp.role}</h3>
            <div class="timeline-company-info">
              <span>${exp.company}</span>
              <span>•</span>
              <span style="color: var(--text-muted); font-size: 0.85rem;">${exp.location}</span>
            </div>
          </div>
          <span class="timeline-period-badge">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-highlights">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="timeline-tech-stack">
          ${exp.technologies.map(t => `<span class="bento-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER EDUCATION & CERTIFICATIONS
   ========================================================================== */

function renderEducationAndCertifications() {
  const eduContainer = document.getElementById('education-list');
  const certContainer = document.getElementById('certifications-list');

  if (eduContainer && CV_DATA.education) {
    eduContainer.innerHTML = CV_DATA.education.map(ed => `
      <div class="edu-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <h4 style="font-size: 1.1rem; color: var(--text-highlight);">${ed.degree}</h4>
          <span class="timeline-period-badge">${ed.period}</span>
        </div>
        <div style="color: var(--accent-secondary); font-weight: 600; font-size: 0.92rem; margin-bottom: 0.5rem;">${ed.institution}</div>
        <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6;">${ed.details}</p>
      </div>
    `).join('');
  }

  if (certContainer && CV_DATA.certifications) {
    certContainer.innerHTML = CV_DATA.certifications.map(c => `
      <div class="cert-item">
        <div class="cert-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <div style="flex: 1;">
          <h5 style="font-size: 0.95rem; font-weight: 600; color: var(--text-highlight);">${c.title}</h5>
          <div class="cert-meta">
            <span>${c.issuer}</span>
            <span>•</span>
            <span>${c.year}</span>
            <span>•</span>
            <span style="color: var(--text-muted);">${c.credentialId}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   RENDER TESTIMONIALS
   ========================================================================== */

function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container || !CV_DATA.testimonials) return;

  container.innerHTML = CV_DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-quote-icon">“</div>
        <p class="testimonial-text">${t.quote}</p>
      </div>
      <div class="testimonial-author">
        <div class="author-avatar-fallback">${t.avatar}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   CASE STUDY MODAL
   ========================================================================== */

function initModal() {
  const backdrop = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openCaseStudyModal(projectId) {
  const project = CV_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('case-study-modal');
  const titleEl = document.getElementById('modal-title');
  const imageEl = document.getElementById('modal-image');
  const clientEl = document.getElementById('modal-client');
  const roleEl = document.getElementById('modal-role');
  const timelineEl = document.getElementById('modal-timeline');
  const problemEl = document.getElementById('modal-problem');
  const solutionEl = document.getElementById('modal-solution');
  const resultsEl = document.getElementById('modal-results');
  const tagsEl = document.getElementById('modal-tags');
  const liveBtn = document.getElementById('modal-live-btn');
  const githubBtn = document.getElementById('modal-github-btn');

  if (titleEl) titleEl.textContent = project.title;
  if (imageEl) {
    imageEl.src = project.image;
    imageEl.alt = project.title;
  }
  if (clientEl) clientEl.textContent = project.client;
  if (roleEl) roleEl.textContent = project.role;
  if (timelineEl) timelineEl.textContent = project.timeline;
  if (problemEl) problemEl.textContent = project.problem;
  if (solutionEl) solutionEl.textContent = project.solution;

  if (resultsEl) {
    resultsEl.innerHTML = project.results.map(r => `<li>${r}</li>`).join('');
  }

  if (tagsEl) {
    tagsEl.innerHTML = project.tags.map(t => `<span class="bento-tag">${t}</span>`).join('');
  }

  if (liveBtn) liveBtn.href = project.liveUrl;
  if (githubBtn) githubBtn.href = project.githubUrl;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const backdrop = document.getElementById('case-study-modal');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   COMMAND PALETTE (CMD+K / CTRL+K)
   ========================================================================== */

function initCommandPalette() {
  const backdrop = document.getElementById('command-palette');
  const input = document.getElementById('command-input');
  const list = document.getElementById('command-list');
  const triggerBtn = document.getElementById('command-palette-btn');

  if (!backdrop || !input || !list) return;

  const commands = [
    { title: "Scroll to Hero / Intro", badge: "Jump", action: () => scrollToSection('hero') },
    { title: "Explore Case Studies & Projects", badge: "Projects", action: () => scrollToSection('projects') },
    { title: "View Core Competencies & Skills", badge: "Skills", action: () => scrollToSection('skills') },
    { title: "Inspect Work Experience Timeline", badge: "Career", action: () => scrollToSection('experience') },
    { title: "Print / Save CV as PDF (A4 Format)", badge: "Resume", action: () => window.print() },
    { title: "Copy Email Address to Clipboard", badge: "Contact", action: copyEmailToClipboard },
    { title: "Toggle Dark / Light Theme", badge: "Theme", action: () => document.getElementById('theme-toggle-btn')?.click() },
    { title: "Inspect Design Tokens (Easter Egg)", badge: "Design System", action: toggleTokensDrawer }
  ];

  function renderCommandList(query = '') {
    const q = query.toLowerCase().trim();
    const matches = commands.filter(cmd => 
      cmd.title.toLowerCase().includes(q) || cmd.badge.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      list.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); text-align: center; font-size: 0.9rem;">Tidak ada perintah yang sesuai "${query}"</div>`;
      return;
    }

    list.innerHTML = matches.map((cmd, idx) => `
      <div class="command-item ${idx === 0 ? 'focused' : ''}" data-idx="${idx}">
        <div class="command-item-left">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span>${cmd.title}</span>
        </div>
        <span class="command-item-badge">${cmd.badge}</span>
      </div>
    `).join('');

    list.querySelectorAll('.command-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        matches[idx].action();
        closePalette();
      });
    });
  }

  function openPalette() {
    backdrop.classList.add('open');
    input.value = '';
    renderCommandList();
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    backdrop.classList.remove('open');
  }

  // Hotkey trigger
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closePalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openPalette);
  }

  input.addEventListener('input', (e) => {
    renderCommandList(e.target.value);
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   DESIGN SYSTEM TOKENS INSPECTOR (EASTER EGG)
   ========================================================================== */

function initDesignTokensInspector() {
  const trigger = document.getElementById('tokens-inspector-btn');
  const drawer = document.getElementById('tokens-drawer');
  const closeBtn = document.getElementById('tokens-drawer-close');

  if (trigger) {
    trigger.addEventListener('click', toggleTokensDrawer);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', toggleTokensDrawer);
  }

  // Swatch copy
  document.querySelectorAll('.token-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      const hex = sw.getAttribute('data-hex');
      if (hex) {
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied token color: ${hex}`);
        });
      }
    });
  });
}

function toggleTokensDrawer() {
  const drawer = document.getElementById('tokens-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

/* ==========================================================================
   LIVE CLOCK (INDONESIA / ASIA JAKARTA)
   ========================================================================== */

function initLiveClock() {
  const clockEl = document.getElementById('live-clock-time');
  if (!clockEl) return;

  function update() {
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const formatter = new Intl.DateTimeFormat('id-ID', options);
    clockEl.textContent = `${formatter.format(new Date())} WIB`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   SCROLL SPY & PROGRESS
   ========================================================================== */

function initScrollProgressAndSpy() {
  const progressBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = `${scrolled}%`;

    // Spy
    let currentId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   QUICK ACTIONS & TOAST NOTIFICATION
   ========================================================================== */

function initQuickActions() {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // Print CV button
  const printBtns = document.querySelectorAll('.action-print-cv');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // Copy Email Buttons
  const copyBtns = document.querySelectorAll('.action-copy-email');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyEmailToClipboard();
    });
  });
}

function copyEmailToClipboard() {
  const email = CV_DATA.personal.email;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Email ${email} berhasil disalin ke clipboard!`);
    }).catch(() => fallbackCopy(email));
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(`Email ${text} berhasil disalin!`);
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const textEl = document.getElementById('toast-text');
  if (!toast || !textEl) return;

  textEl.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   SVG ICON HELPERS
   ========================================================================== */

function getSocialSvg(type) {
  switch(type) {
    case 'github':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
    case 'linkedin':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
    case 'dribbble':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>`;
    case 'figma':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`;
    default:
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}
