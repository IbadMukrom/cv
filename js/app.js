/**
 * =========================================================================
 * 1-PAGE NEO-BRUTALISM CV ENGINE
 * Ultra-fast, lightweight, accessible Vanilla JavaScript
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeaderAndBio();
  renderContactStrip();
  renderMetrics();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducationAndCertifications();
  initActions();
});

/* ==========================================================================
   THEME SWITCHER (DAY / NIGHT)
   ========================================================================== */

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('cv-theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cv-theme', next);
      updateThemeIcon(next);
      showToast(`Mode tema: ${next.toUpperCase()}`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-toggle-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else {
    icon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  }
}

/* ==========================================================================
   HEADER & BIO
   ========================================================================== */

function renderHeaderAndBio() {
  const { personal } = CV_DATA;

  const nameEl = document.getElementById('cv-name');
  if (nameEl) nameEl.textContent = personal.name;

  const roleEl = document.getElementById('cv-role');
  if (roleEl) roleEl.textContent = personal.title.toUpperCase();

  const bioEl = document.getElementById('cv-bio-summary');
  if (bioEl && personal.bio) {
    bioEl.textContent = personal.bio[0];
  }

  const avatarEl = document.getElementById('cv-avatar');
  if (avatarEl && personal.avatar) {
    avatarEl.src = personal.avatar;
    avatarEl.alt = personal.name;
  }

  const statusEl = document.getElementById('cv-status');
  if (statusEl) statusEl.textContent = personal.status.toUpperCase();
}

/* ==========================================================================
   CONTACT STRIP
   ========================================================================== */

function renderContactStrip() {
  const { personal } = CV_DATA;
  const container = document.getElementById('cv-contact-strip');
  if (!container) return;

  const contacts = [
    { label: personal.email, url: `mailto:${personal.email}`, icon: '✉' },
    { label: personal.phone, url: `tel:${personal.phone.replace(/[^0-9+]/g, '')}`, icon: '☎' },
    { label: personal.location.split('(')[0].trim(), url: '#', icon: '⚲' },
    ...(personal.socials || []).map(s => ({
      label: s.username || s.name,
      url: s.url,
      icon: s.name === 'GitHub' ? '⌨' : s.name === 'LinkedIn' ? 'in' : '★'
    }))
  ];

  container.innerHTML = contacts.map(c => `
    <a href="${c.url}" ${c.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="contact-pill">
      <span>${c.icon}</span>
      <span>${c.label}</span>
    </a>
  `).join('');
}

/* ==========================================================================
   METRICS
   ========================================================================== */

function renderMetrics() {
  const container = document.getElementById('cv-metrics-grid');
  if (!container || !CV_DATA.personal.stats) return;

  container.innerHTML = CV_DATA.personal.stats.map(s => `
    <div class="metric-mini-cell">
      <span class="val">${s.value}</span>
      <span class="lbl">${s.label}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   SKILLS MATRIX
   ========================================================================== */

function renderSkills() {
  const { skills } = CV_DATA;
  const designContainer = document.getElementById('cv-design-skills');
  const engContainer = document.getElementById('cv-eng-skills');

  if (designContainer && skills.design) {
    const allDesignTags = Array.from(new Set(skills.design.flatMap(s => [s.name, ...(s.tags || [])])));
    designContainer.innerHTML = allDesignTags.slice(0, 8).map(tag => `
      <span class="skill-badge-pill">${tag}</span>
    `).join('');
  }

  if (engContainer && skills.engineering) {
    const allEngTags = Array.from(new Set(skills.engineering.flatMap(s => [s.name, ...(s.tags || [])])));
    engContainer.innerHTML = allEngTags.slice(0, 8).map(tag => `
      <span class="skill-badge-pill">${tag}</span>
    `).join('');
  }
}

/* ==========================================================================
   WORK EXPERIENCE
   ========================================================================== */

function renderExperience() {
  const container = document.getElementById('cv-experience-list');
  if (!container || !CV_DATA.experience) return;

  // Tampilkan 2 pengalaman utama/terpilih agar fokus & tidak membebani halaman
  const topExp = CV_DATA.experience.slice(0, 2);

  container.innerHTML = topExp.map(exp => `
    <div class="exp-compact-item">
      <div class="exp-top-row">
        <span class="exp-role-name">${exp.role}</span>
        <span class="exp-period-badge">${exp.period}</span>
      </div>
      <div class="exp-company-sub">${exp.company} • ${exp.location}</div>
      <ul class="exp-bullets">
        ${exp.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="exp-tags-inline">
        ${exp.technologies.slice(0, 6).map(t => `<span class="skill-badge-pill" style="font-size: 0.68rem; padding: 0.15rem 0.4rem;">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   FEATURED PROJECTS
   ========================================================================== */

function renderProjects() {
  const container = document.getElementById('cv-projects-grid');
  if (!container || !CV_DATA.projects) return;

  // 3 compact cards
  const topProjects = CV_DATA.projects.slice(0, 3);

  container.innerHTML = topProjects.map(p => `
    <div class="project-mini-card" onclick="window.open('${p.liveUrl || p.githubUrl}', '_blank')">
      <div>
        <div class="project-mini-title">${p.title.split('—')[0].trim()}</div>
        <div class="project-mini-desc">${p.summary}</div>
      </div>
      <div class="project-mini-link">
        <span>${p.categoryName}</span>
        <span>Lihat Demo ↗</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   EDUCATION & CERTIFICATIONS
   ========================================================================== */

function renderEducationAndCertifications() {
  const eduContainer = document.getElementById('cv-education-list');
  const certContainer = document.getElementById('cv-certs-list');

  if (eduContainer && CV_DATA.education) {
    eduContainer.innerHTML = CV_DATA.education.map(ed => `
      <div class="edu-compact-item">
        <div class="edu-degree">${ed.degree}</div>
        <div class="edu-school">${ed.institution}</div>
        <div class="edu-year">${ed.period} • IPK 3.84 / Cum Laude</div>
      </div>
    `).join('');
  }

  if (certContainer && CV_DATA.certifications) {
    certContainer.innerHTML = CV_DATA.certifications.slice(0, 2).map(c => `
      <div class="edu-compact-item">
        <div class="edu-degree" style="font-size: 0.82rem;">${c.title}</div>
        <div class="edu-school">${c.issuer} • ${c.year}</div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   ACTIONS & TOAST
   ========================================================================== */

function initActions() {
  // Print
  document.querySelectorAll('.action-print-cv').forEach(b => {
    b.addEventListener('click', () => window.print());
  });

  // Copy Email
  document.querySelectorAll('.action-copy-email').forEach(b => {
    b.addEventListener('click', () => {
      const email = CV_DATA.personal.email;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Email ${email} berhasil disalin!`);
        }).catch(() => fallbackCopy(email));
      } else {
        fallbackCopy(email);
      }
    });
  });
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
  setTimeout(() => toast.classList.remove('show'), 2500);
}
