/**
 * =========================================================================
 * PROFILE DATA CONFIGURATION
 * =========================================================================
 * Anda dapat mengedit semua teks, riwayat karir, proyek, dan link di sini.
 * Semua perubahan pada data ini akan otomatis dirender di halaman web.
 */

const CV_DATA = {
  personal: {
    name: "Muhammad Ibadurrahman",
    nickname: "Ibad",
    title: "Senior UI/UX Designer & Full-Stack Engineer",
    subtitle: "Architecting intuitive user experiences backed by resilient, high-performance code.",
    status: "Available for Senior Roles & Remote Opportunities",
    statusType: "available", // available | busy
    location: "Indonesia (Open to Worldwide Remote / Relocation)",
    email: "ibadurrahman.dev@gmail.com",
    phone: "+62 812-3456-7890",
    avatar: "assets/images/avatar.jpg",
    bio: [
      "Senior Product Designer & Full-Stack Developer dengan pengalaman lebih dari 8 tahun dalam membangun sistem desain berskala enterprise dan arsitektur web modern yang performan.",
      "Menggabungkan kepekaan estetika human-centered design (UI/UX) dengan fondasi rekayasa perangkat lunak yang kokoh (Frontend & Backend). Terbiasa memimpin tim lintas disiplin dari riset awal, wireframing, prototipe interaktif, hingga produksi kode siap rilis."
    ],
    socials: [
      {
        name: "GitHub",
        icon: "github",
        url: "https://github.com/ibadurrahman",
        username: "github.com/ibadurrahman"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/ibadurrahman",
        username: "linkedin.com/in/ibadurrahman"
      },
      {
        name: "Dribbble",
        icon: "dribbble",
        url: "https://dribbble.com/ibad",
        username: "dribbble.com/ibad"
      },
      {
        name: "Figma",
        icon: "figma",
        url: "https://figma.com/@ibad",
        username: "@ibad-design"
      }
    ],
    stats: [
      { label: "Tahun Pengalaman", value: "8+", detail: "Enterprise & Startups" },
      { label: "Produk Dirilis", value: "45+", detail: "Web, Mobile & SaaS" },
      { label: "Kepuasan Klien", value: "99.4%", detail: "Rating 4.9/5.0" },
      { label: "Active End Users", value: "2.4M+", detail: "Worldwide Impact" }
    ]
  },

  skills: {
    design: [
      { name: "Design Systems & Tokens", level: 96, tags: ["Figma Tokens", "Atomic Design", "Scalability"] },
      { name: "UI/UX & Product Design", level: 95, tags: ["Figma", "Micro-interactions", "Wireframing"] },
      { name: "User Research & Usability Testing", level: 90, tags: ["Heatmaps", "User Interviews", "A/B Testing"] },
      { name: "Information Architecture", level: 92, tags: ["Journey Maps", "Flowcharts", "Card Sorting"] },
      { name: "Web Accessibility (WCAG 2.1)", level: 88, tags: ["A11y", "Contrast Ratio", "Keyboard Nav"] }
    ],
    engineering: [
      { name: "Frontend Architecture", level: 95, tags: ["React", "Next.js", "TypeScript", "Vue.js"] },
      { name: "Modern CSS & Animation", level: 98, tags: ["Vanilla CSS", "Tailwind", "GSAP", "Design Tokens"] },
      { name: "Backend & API Design", level: 88, tags: ["Node.js", "Express", "RESTful", "PostgreSQL"] },
      { name: "Web Performance & Core Web Vitals", level: 94, tags: ["Lighthouse 100", "LCP/CLS", "SSR/SSG"] },
      { name: "DevOps & Tools", level: 86, tags: ["Git & GitHub Actions", "Docker", "Vercel", "Linux"] }
    ],
    softSkills: [
      "Product Strategy & Roadmap",
      "Cross-Functional Team Leadership",
      "Design-to-Code Mentorship",
      "Executive Presentation & Storytelling",
      "Agile / Scrum Sprint Management"
    ]
  },

  experience: [
    {
      period: "2022 — Sekarang",
      role: "Lead Product Designer & Frontend Architect",
      company: "Nexus Global Labs",
      location: "Singapura / Remote",
      badge: "Full-Time",
      description: "Memimpin perancangan produk dan standarisasi sistem desain frontend untuk platform enterprise B2B SaaS bernilai jutaan dolar.",
      highlights: [
        "Membangun OmniDesign System terpadu (Figma & React/TypeScript) yang diadopsi oleh 6 squad dan memangkas waktu time-to-market fitur baru sebesar 42%.",
        "Mengarsiteki ulang antarmuka dashboard data analitik dengan modern zero-latency charting, meningkatkan engagement pengguna sebesar 65%.",
        "Mementori 12 desainer produk junior & frontend engineer terkait best practices accessibility (a11y) dan component-driven development."
      ],
      technologies: ["Figma", "React", "Next.js", "TypeScript", "TailwindCSS", "Storybook", "Jest"]
    },
    {
      period: "2020 — 2022",
      role: "Senior UI/UX Engineer",
      company: "FinFlow Technologies",
      location: "Jakarta, Indonesia",
      badge: "Full-Time",
      description: "Menjembatani tim desain UX dan tim rekayasa backend perbankan digital untuk merancang antarmuka transaksi finansial yang aman dan intuitif.",
      highlights: [
        "Merancang ulang flow on-boarding KYC pengguna mobile, menurunkan tingkat drop-off registrasi dari 31% menjadi hanya 8.4%.",
        "Membuat library komponen UI berstandar keamanan tinggi dengan dukungan multi-bahasa dan dark mode otomatis.",
        "Mengoptimalkan bundle size dan Core Web Vitals pada web portal nasabah hingga skor Lighthouse konsisten 98+."
      ],
      technologies: ["Figma", "Vue.js", "TypeScript", "SCSS", "REST APIs", "Cypress", "UX Research"]
    },
    {
      period: "2018 — 2020",
      role: "Full-Stack UI Developer & Consultant",
      company: "Synthetix Digital Agency",
      location: "Bandung, Indonesia",
      badge: "Full-Time",
      description: "Mendevelop aplikasi web kustom, sistem e-commerce, dan portal brand global dari tahap konsep wireframe hingga rilis production.",
      highlights: [
        "Menyelesaikan 18+ proyek klien global dengan rating kepuasan 5.0 bintang.",
        "Mengimplementasikan animasi mikro interaktif yang meningkatkan konversi checkout e-commerce sebesar 28%."
      ],
      technologies: ["JavaScript (ES6+)", "React", "Node.js", "Express", "PostgreSQL", "CSS Grid/Flexbox"]
    },
    {
      period: "2016 — 2018",
      role: "UI/UX Designer & Web Developer",
      company: "Creative Pulse Studio",
      location: "Yogyakarta, Indonesia",
      badge: "Full-Time",
      description: "Fokus pada pembuatan identitas digital visual, wireframing, prototyping web responsif, dan riset persona pengguna.",
      highlights: [
        "Membangun 25+ landing page konversi tinggi untuk startup teknologi tahap awal.",
        "Membuat framework prototipe cepat berbasis HTML/CSS untuk user testing mingguan."
      ],
      technologies: ["Sketch", "Figma", "HTML5", "Sass", "JavaScript", "User Testing"]
    }
  ],

  projects: [
    {
      id: "finance-hub",
      title: "FinanceHub — Next-Gen FinTech SaaS",
      category: "saas",
      categoryName: "FinTech & SaaS",
      image: "assets/images/project-saas.jpg",
      summary: "Dashboard analitik keuangan multi-aset dengan integrasi visualisasi data real-time, manajemen portofolio, dan transaksi otomatis.",
      client: "Enterprise FinTech Client",
      role: "Lead UI/UX & Frontend Architect",
      timeline: "4 Bulan",
      problem: "Nasabah korporasi kesulitan memantau pergerakan arus kas dari berbagai rekening dan instrumen investasi secara terpadu akibat sistem legasi yang lambat dan UI yang rumit.",
      solution: "Merancang antarmuka bento-grid berkinerja tinggi dengan visualisasi grafik fluid, filter cepat, dan sistem kartu metrik yang dapat dikustomisasi sesuai preferensi pengguna.",
      results: [
        "+68% kecepatan pengambilan keputusan tim keuangan",
        "Skor SUS (System Usability Scale) naik dari 52 ke 89",
        "Waktu muat data finansial terpangkas dari 4.2 detik ke 0.35 detik"
      ],
      tags: ["UI/UX Design", "Figma", "React", "TypeScript", "Tailwind", "Financial Analytics"],
      liveUrl: "https://financehub-demo.example.com",
      githubUrl: "https://github.com/ibadurrahman/financehub-saas"
    },
    {
      id: "nexus-ai",
      title: "Nexus AI — Workflow Automation Studio",
      category: "ai",
      categoryName: "AI & Platform",
      image: "assets/images/project-ai.jpg",
      summary: "Visual node-based canvas untuk orkestrasi model AI generatif, pengolahan pipeline data, dan integrasi prompt engineering tanpa kode.",
      client: "AI Tech Startup (San Francisco)",
      role: "Principal Product Designer & Prototyper",
      timeline: "3 Bulan",
      problem: "Pengembang dan analis non-teknis kesulitan merangkai prompt berantai dan menghubungkan berbagai API AI tanpa harus menulis skrip kode Python yang kompleks.",
      solution: "Menciptakan canvas node-and-wire visual yang interaktif dengan minim cognitive load, auto-routing kabel koneksi, dan panel inspeksi prompt real-time.",
      results: [
        "Mendapatkan dana putaran Seed $2.5M setelah demo prototipe",
        "92% pengguna non-programmer berhasil merilis workflow AI pertama dalam < 10 menit",
        "Diadopsi oleh 1,200+ tim pengembang pada bulan pertama peluncuran"
      ],
      tags: ["Canvas UI", "Node Graph", "UX Research", "Figma", "Next.js", "Zustand"],
      liveUrl: "https://nexus-ai-studio.example.com",
      githubUrl: "https://github.com/ibadurrahman/nexus-ai-canvas"
    },
    {
      id: "nova-crypto",
      title: "Nova Crypto — Smart Multi-Asset Wallet",
      category: "mobile",
      categoryName: "Mobile & Crypto",
      image: "assets/images/project-mobile.jpg",
      summary: "Aplikasi dompet digital mobile ramah pemula dengan fokus pada keamanan biometrik, visualisasi portofolio, dan konversi instan zero-fee.",
      client: "Nova Blockchain Foundation",
      role: "Senior UX Designer & Mobile Prototyper",
      timeline: "5 Bulan",
      problem: "Aplikasi crypto pada umumnya membingungkan pemula dengan terminologi teknis blockchain yang rumit dan konfirmasi transaksi yang rawan salah kirim.",
      solution: "Menyederhanakan pengalaman pengguna melalui validasi alamat visual, simulasi estimasi gas-fee sebelum konfirmasi, dan tampilan kartu portofolio bernuansa glassmorphism elegan.",
      results: [
        "Rating 4.9 di Apple App Store dan Google Play Store",
        "Penurunan 88% tiket komplain terkait kesalahan transfer aset",
        "500,000+ pengguna aktif bulanan (MAU) dalam kurun waktu 6 bulan"
      ],
      tags: ["Mobile UX", "iOS & Android", "Design System", "Figma", "Fintech", "Security"],
      liveUrl: "https://nova-wallet.example.com",
      githubUrl: "https://github.com/ibadurrahman/nova-crypto-wallet"
    }
  ],

  education: [
    {
      degree: "Sarjana Ilmu Komputer (S.Kom) / Informatics",
      institution: "Universitas Gadjah Mada (UGM)",
      period: "2012 — 2016",
      details: "IPK 3.84 / 4.00 (Cum Laude). Fokus pada Human-Computer Interaction (HCI) dan Rekayasa Perangkat Lunak Web."
    }
  ],

  certifications: [
    {
      title: "Nielsen Norman Group (NN/g) UX Master Certified",
      issuer: "Nielsen Norman Group",
      year: "2023",
      credentialId: "NNG-UX-84920"
    },
    {
      title: "AWS Certified Solutions Architect — Associate",
      issuer: "Amazon Web Services",
      year: "2022",
      credentialId: "AWS-SAA-10398"
    },
    {
      title: "Meta Certified Front-End Developer Professional",
      issuer: "Meta / Coursera",
      year: "2021",
      credentialId: "META-FED-99214"
    }
  ],

  testimonials: [
    {
      quote: "Ibad adalah tipe langka di industri teknologi: memiliki insting visual dan empati pengguna layaknya Principal Designer, namun mampu mengimplementasikannya ke dalam arsitektur kode frontend yang luar biasa rapi dan cepat.",
      name: "Alexander Rey",
      role: "VP of Product, Nexus Global",
      avatar: "AR"
    },
    {
      quote: "Bekerja sama dengan Ibad dalam merombak produk fintech kami adalah salah satu keputusan terbaik. Desain sistem yang ia ciptakan membuat siklus rilis fitur kami 2x lebih cepat dan konsisten di seluruh platform.",
      name: "Siti Rahmawati",
      role: "Chief Technology Officer, FinFlow",
      avatar: "SR"
    }
  ]
};
