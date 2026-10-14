/**
 * =========================================================================
 * NEO-BRUTALISM PORTFOLIO & CV ENGINE
 * Clean, lightweight, professional, and accessible Vanilla JavaScript
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderCraftPillars();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducationAndCertifications();
  initLiveClock();
  initProjectFilter();
  initModal();
  initCommandPalette();
  initQuickActions();
});

/* ==========================================================================
   THEME SWITCHER (NEO-BRUTALIST DAY / NIGHT)
   ========================================================================== */

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  // Neo-brutalism default looks stunning in crisp day mode
  const storedTheme = localStorage.getItem('neo-theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('neo-theme', next);
      updateThemeIcon(next);
      showToast(`Tema diganti ke mode: ${next.toUpperCase()}`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-toggle-icon');
  if (!icon) return;
  if (theme === 'dark') {
    // Show Sun icon
    icon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else {
    // Show Moon icon
    icon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  }
}

/* ==========================================================================
   RENDER PROFILE & HERO
   ========================================================================== */

function renderProfile() {
  const { personal } = CV_DATA;

  // Text Bindings
  const marqueeEl = document.querySelector('.neo-marquee-content');
  if (marqueeEl && personal.marquee) {
    marqueeEl.textContent = personal.marquee;
  }

  const badgeRoleEl = document.querySelector('.brand-sub');
  if (badgeRoleEl && personal.badgeRole) {
    badgeRoleEl.textContent = personal.badgeRole;
  }

  const headlineEl = document.querySelector('.hero-headline');
  if (headlineEl && personal.headline) {
    headlineEl.innerHTML = `${personal.headline} <span class="hero-highlight-tag">${personal.headlineHighlight || ''}</span>`;
  }

  const statusEl = document.getElementById('status-badge-text');
  if (statusEl) statusEl.textContent = `STATUS: ${personal.status.toUpperCase()}`;

  const subEl = document.getElementById('hero-subtitle');
  if (subEl) subEl.textContent = personal.bio[0];

  const pName = document.getElementById('profile-card-name');
  if (pName) pName.textContent = personal.name;

  const pTitle = document.getElementById('profile-card-title');
  if (pTitle) pTitle.textContent = personal.title;

  const pLoc = document.getElementById('profile-location-text');
  if (pLoc) pLoc.textContent = personal.location;

  // Contact section bindings
  if (CV_DATA.contact) {
    const ctaCard = document.querySelector('.cta-neo-card');
    if (ctaCard) {
      const h2 = ctaCard.querySelector('h2');
      const p = ctaCard.querySelector('p');
      const emailBtnSpan = ctaCard.querySelector('.action-copy-email span');
      const pdfBtnSpan = ctaCard.querySelector('.action-print-cv span');

      if (h2 && CV_DATA.contact.title) h2.textContent = CV_DATA.contact.title;
      if (p && CV_DATA.contact.desc) p.textContent = CV_DATA.contact.desc;
      if (emailBtnSpan && CV_DATA.contact.buttonEmailText) emailBtnSpan.textContent = CV_DATA.contact.buttonEmailText;
      if (pdfBtnSpan && CV_DATA.contact.buttonPdfText) pdfBtnSpan.textContent = CV_DATA.contact.buttonPdfText;
    }
  }

  const avatar = document.getElementById('avatar-image');
  if (avatar && personal.avatar) {
    avatar.src = personal.avatar;
    avatar.alt = personal.name;
  }

  // Metrics strip
  const metricsEl = document.getElementById('hero-metrics-container');
  if (metricsEl && personal.stats) {
    metricsEl.innerHTML = personal.stats.map(st => `
      <div class="metric-box-neo">
        <span class="metric-num">${st.value}</span>
        <span class="metric-label-neo">${st.label}</span>
      </div>
    `).join('');
  }

  // Social Links
  const socialsEl = document.getElementById('profile-socials');
  if (socialsEl && personal.socials) {
    socialsEl.innerHTML = personal.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn-neo" title="${s.name}">
        ${getSocialSvg(s.name.toLowerCase())}
        <span>${s.name}</span>
      </a>
    `).join('');
  }
}

/* ==========================================================================
   RENDER CRAFT & PILLARS
   ========================================================================== */

function renderCraftPillars() {
  const container = document.getElementById('bento-grid-container');
  if (!container) return;

  const pillars = [
    {
      colorClass: "yellow",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      title: "Design Systems & Figma Tokens",
      desc: "Menghubungkan Figma tokens dengan CSS variables & TypeScript. Menghasilkan pustaka komponen UI yang konsisten, berstandar WCAG AA, dan memangkas waktu rilis fitur tim engineering hingga 40%.",
      tags: ["Atomic Design", "Tokens Studio", "Storybook", "WCAG 2.1 AA", "A11y"]
    },
    {
      colorClass: "cyan",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      title: "Scalable Frontend Architecture",
      desc: "Mengembangkan aplikasi web berbasis React, Next.js, dan TypeScript dengan arsitektur kode modular, rendering instan, dan optimasi Core Web Vitals (skor Google Lighthouse 98+).",
      tags: ["React 19", "Next.js", "TypeScript", "Core Web Vitals", "Lighthouse 100"]
    },
    {
      colorClass: "purple",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      title: "Human-Centered UX & Research",
      desc: "Setiap keputusan desain didasari riset empiris: uji coba kegunaan riil, pemetaan journey map, serta analisis drop-off rate untuk mendongkrak konversi dan kepuasan pengguna akhir.",
      tags: ["User Interviews", "Usability Testing", "Journey Mapping", "ROI Design"]
    }
  ];

  container.innerHTML = pillars.map(p => `
    <div class="pillar-card-neo">
      <div>
        <div class="pillar-icon-box ${p.colorClass}">
          ${p.icon}
        </div>
        <h3 class="pillar-title">${p.title}</h3>
        <p class="pillar-desc">${p.desc}</p>
      </div>
      <div class="pillar-tags-wrap">
        ${p.tags.map(t => `<span class="neo-tag-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
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
    <article class="project-neo-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Lihat studi kasus ${p.title}">
      <div class="project-neo-thumbnail">
        <img src="${p.image}" alt="${p.title}" loading="eager" />
        <span class="project-category-stamp">${p.categoryName}</span>
      </div>
      <div class="project-neo-body">
        <h3 class="project-neo-title">${p.title}</h3>
        <p class="project-neo-summary">${p.summary}</p>
        <div class="pillar-tags-wrap" style="margin-bottom: 1.25rem;">
          ${p.tags.slice(0, 3).map(t => `<span class="neo-tag-pill">${t}</span>`).join('')}
        </div>
        <div class="project-neo-footer">
          <span>Studi Kasus Lengkap</span>
          <span>→</span>
        </div>
      </div>
    </article>
  `).join('');

  // Click & keyboard events
  container.querySelectorAll('.project-neo-card').forEach(card => {
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
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

/* ==========================================================================
   RENDER SKILLS MATRIX
   ========================================================================== */

function renderSkills() {
  const { skills } = CV_DATA;
  const designContainer = document.getElementById('design-skills-list');
  const engContainer = document.getElementById('eng-skills-list');

  const renderSkillRows = (list, isCyan = false) => {
    return list.map(sk => `
      <div class="skill-row-neo">
        <div class="skill-row-top">
          <span>${sk.name}</span>
          <span style="font-family: var(--font-mono);">${sk.level}%</span>
        </div>
        <div class="skill-bar-outer">
          <div class="skill-bar-inner ${isCyan ? 'cyan' : ''}" data-progress="${sk.level}" style="width: 0%"></div>
        </div>
        <div class="pillar-tags-wrap">
          ${sk.tags.map(t => `<span class="neo-tag-pill">#${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  };

  if (designContainer) designContainer.innerHTML = renderSkillRows(skills.design, false);
  if (engContainer) engContainer.innerHTML = renderSkillRows(skills.engineering, true);

  // Trigger skill bar animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-inner').forEach(bar => {
          const val = bar.getAttribute('data-progress');
          bar.style.width = `${val}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* ==========================================================================
   RENDER WORK EXPERIENCE TIMELINE
   ========================================================================== */

function renderExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = CV_DATA.experience.map(exp => `
    <div class="exp-neo-card">
      <div class="exp-header-neo">
        <div>
          <h3 class="exp-role-title">${exp.role}</h3>
          <div class="exp-company-tag">
            <span>${exp.company}</span>
            <span>•</span>
            <span>${exp.location}</span>
          </div>
        </div>
        <span class="exp-period-stamp">${exp.period}</span>
      </div>
      <p class="exp-summary-text">${exp.description}</p>
      <ul class="exp-bullet-list">
        ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="exp-tech-tags">
        ${exp.technologies.map(t => `<span class="neo-tag-pill">${t}</span>`).join('')}
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
      <div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
          <h4 class="edu-card-title">${ed.degree}</h4>
          <span class="exp-period-stamp">${ed.period}</span>
        </div>
        <div class="edu-school-name">${ed.institution}</div>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">${ed.details}</p>
      </div>
    `).join('');
  }

  if (certContainer && CV_DATA.certifications) {
    certContainer.innerHTML = CV_DATA.certifications.map(c => `
      <div class="cert-neo-item">
        <div class="cert-stamp-badge">★</div>
        <div style="flex: 1;">
          <h5 style="font-size: 0.95rem; font-weight: 800;">${c.title}</h5>
          <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-top: 0.2rem;">
            <span>${c.issuer}</span> • <span>${c.year}</span> • <span>${c.credentialId}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
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
    tagsEl.innerHTML = project.tags.map(t => `<span class="neo-tag-pill">${t}</span>`).join('');
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
    { title: "Lompat ke Beranda / Hero", badge: "Jump", action: () => scrollToSection('hero') },
    { title: "Buka Studi Kasus & Portofolio", badge: "Projects", action: () => scrollToSection('projects') },
    { title: "Lihat Matriks Keahlian & Skill", badge: "Skills", action: () => scrollToSection('skills') },
    { title: "Cek Riwayat Karir & Pengalaman", badge: "Career", action: () => scrollToSection('experience') },
    { title: "Cetak / Simpan PDF Resume", badge: "Resume", action: () => window.print() },
    { title: "Salin Alamat Email ke Clipboard", badge: "Contact", action: copyEmailToClipboard },
    { title: "Ganti Tema (Day / Night Mode)", badge: "Theme", action: () => document.getElementById('theme-toggle-btn')?.click() }
  ];

  function renderList(query = '') {
    const q = query.toLowerCase().trim();
    const matches = commands.filter(c => 
      c.title.toLowerCase().includes(q) || c.badge.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      list.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); text-align: center; font-size: 0.9rem;">Tidak ada perintah yang sesuai "${query}"</div>`;
      return;
    }

    list.innerHTML = matches.map((c, idx) => `
      <div class="cmd-item ${idx === 0 ? 'focused' : ''}" data-idx="${idx}">
        <span>${c.title}</span>
        <span class="neo-tag-pill">${c.badge}</span>
      </div>
    `).join('');

    list.querySelectorAll('.cmd-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        matches[idx].action();
        closePalette();
      });
    });
  }

  function openPalette() {
    backdrop.classList.add('open');
    input.value = '';
    renderList();
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    backdrop.classList.remove('open');
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      backdrop.classList.contains('open') ? closePalette() : openPalette();
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closePalette();
    }
  });

  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
  input.addEventListener('input', (e) => renderList(e.target.value));
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   LIVE WIB CLOCK
   ========================================================================== */

function initLiveClock() {
  const clockEl = document.getElementById('live-clock-time');
  if (!clockEl) return;

  function update() {
    const opts = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    clockEl.textContent = `${new Intl.DateTimeFormat('id-ID', opts).format(new Date())} WIB`;
  }
  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   QUICK ACTIONS & TOAST
   ========================================================================== */

function initQuickActions() {
  // Mobile Nav
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // Print PDF buttons
  document.querySelectorAll('.action-print-cv').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // Copy email
  document.querySelectorAll('.action-copy-email').forEach(btn => {
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
      showToast(`Email ${email} tersalin ke clipboard!`);
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
  showToast(`Email ${text} tersalin!`);
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const textEl = document.getElementById('toast-text');
  if (!toast || !textEl) return;

  textEl.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ==========================================================================
   SVG ICONS
   ========================================================================== */

function getSocialSvg(type) {
  switch(type) {
    case 'github':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
    case 'linkedin':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
    case 'dribbble':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>`;
    case 'figma':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`;
    default:
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}
