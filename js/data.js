/**
 * =========================================================================
 * PROFILE DATA CONFIGURATION — IBAD MUKROM (GOVTECH & DIGITAL GOVERNANCE)
 * =========================================================================
 * Seluruh data teks, riwayat karir, keahlian, dan tautan dikonfigurasi di sini.
 * Disesuaikan khusus untuk sektor pemerintahan, layanan publik, dan SPBE.
 */

const CV_DATA = {
  personal: {
    name: "Ibad Mukrom",
    nickname: "Ibad",
    title: "Software Engineer — GovTech Specialist",
    badgeRole: "GOVTECH & SPBE SPECIALIST",
    marquee: "✦ IBAD MUKROM ✦ SOFTWARE ENGINEER ✦ FULL-STACK ARCHITECT ✦ SISTEM PEMERINTAHAN BERBASIS ELEKTRONIK (SPBE) ✦ LAYANAN PUBLIK DIGITAL ✦ SATU DATA INDONESIA ✦",
    headline: "Mewujudkan tata kelola layanan publik digital yang humanis melalui",
    headlineHighlight: "UI/UX & Rekayasa Sistem Handal",
    subtitle: "Praktisi digitalisasi pemerintahan dengan fokus pada transformasi SPBE, citizen-centric UX, dan interoperabilitas Satu Data yang aman dan akuntabel.",
    status: "Terbuka untuk Kolaborasi & Proyek Transformasi Digital",
    statusType: "available",
    location: "Indonesia (Kementerian / Lembaga / Pemda)",
    email: "ibadmukrom569@gmail.com",
    phone: "+62 822-2859-0254",
    avatar: "assets/images/avatar.jpg",
    bio: [
      "Praktisi teknologi informasi dan software engineer dengan pengalaman lebih dari 5 tahun dalam rekayasa perangkat lunak dan modernisasi Sistem Pemerintahan Berbasis Elektronik (SPBE). Berfokus pada perancangan antarmuka layanan publik ramah warga, standarisasi sistem desain antar-instansi, serta arsitektur perangkat lunak yang aman, transparan, dan berkinerja tinggi.",
      "Berpengalaman membangun aplikasi skala enterprise, platform SaaS, serta integrasi interoperabilitas Satu Data Nasional."
    ],
    socials: [
      {
        name: "GitHub",
        icon: "github",
        url: "https://github.com/ibadmukrom",
        username: "github.com/ibadmukrom"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com/in/ibadmukrom",
        username: "linkedin.com/in/ibadmukrom"
      }
    ],
    stats: [
      { label: "Pengalaman IT", value: "5+ Thn", detail: "GovTech & Sektor Publik" },
      { label: "Sistem Rilis", value: "35+", detail: "Layanan Publik & Internal" },
      { label: "Indeks Kepuasan", value: "99.2%", detail: "IKM Pelayanan Publik" },
      { label: "Warga Terlayani", value: "5.2M+", detail: "Dampak Layanan Digital" }
    ]
  },

  skills: {
    design: [
      { name: "Citizen-Centric UX Design", level: 96, tags: ["Riset Warga", "Kemudahan Akses", "Empati Layanan"] },
      { name: "Design System Layanan Publik", level: 95, tags: ["Design Tokens", "Standarisasi UI", "WCAG 2.1 AA"] },
      { name: "Analisis Alur Birokrasi & SPBE", level: 92, tags: ["SOP Pelayanan", "Simplifikasi Regulasi", "User Journey"] },
      { name: "Aksesibilitas Digital (A11y)", level: 90, tags: ["Ramah Difabel", "Kontras Visual", "Multi-Perangkat"] }
    ],
    engineering: [
      { name: "Frontend Architecture", level: 95, tags: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
      { name: "Integrasi API & Satu Data", level: 92, tags: ["RESTful", "Interoperabilitas", "JSON-Schema"] },
      { name: "Database & Backend Systems", level: 88, tags: ["PostgreSQL", "Node.js", "Keamanan Enkripsi"] },
      { name: "Keamanan Sistem & SPBE", level: 90, tags: ["Standar BSSN", "Audit Trail", "Core Web Vitals"] }
    ],
    softSkills: [
      "Kepemimpinan Tim Lintas Sektor / Instansi",
      "Penyusunan Roadmap Transformasi Digital SPBE",
      "Presentasi Strategis untuk Pimpinan Eksekutif",
      "Standarisasi Keamanan & Aksesibilitas Data"
    ]
  },

  experience: [
    {
      period: "2022 — Sekarang",
      role: "Lead UI/UX Designer & IT Systems Architect",
      company: "Pusat Transformasi Digital & Tata Kelola SPBE",
      location: "Jakarta / Instansi Pemerintah",
      badge: "Pemerintahan",
      description: "Memimpin perancangan produk digital dan standarisasi sistem desain portal pelayanan publik terpadu lintas sektor.",
      highlights: [
        "Mengembangkan Portal Satu Pintu Pelayanan Terpadu yang memangkas waktu pengurusan izin warga dari 14 hari kerja menjadi hanya 2 hari secara daring.",
        "Merancang Panduan Sistem Desain Layanan Publik Terpadu yang diadopsi oleh 18 unit kerja perangkat daerah, menjaga konsistensi visual dan kemudahan warga.",
        "Meningkatkan skor Indeks Kepuasan Masyarakat (IKM) layanan digital hingga predikat 'Sangat Baik' (94.8/100)."
      ],
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "SPBE Architecture", "WCAG 2.1"]
    },
    {
      period: "2019 — 2022",
      role: "Senior UI/UX & Full-Stack Engineer",
      company: "Pusat Data dan Informasi (Pusdatin)",
      location: "Indonesia",
      badge: "Pemerintahan",
      description: "Merancang antarmuka analitik eksekutif dan mengintegrasikan interoperabilitas sistem antar-lembaga.",
      highlights: [
        "Membangun Dashboard Eksekutif Satu Data real-time untuk memfasilitasi pengambilan keputusan strategis kepala lembaga berbasis data valid.",
        "Mengimplementasikan integrasi sistem pertukaran data terenkripsi antar-aplikasi dinas, mereduksi redundansi entri data ganda hingga 70%."
      ],
      technologies: ["Vue.js", "Node.js", "Python", "PostgreSQL", "REST APIs", "Keamanan Siber"]
    }
  ],

  projects: [
    {
      id: "cms-trip",
      title: "CMS Trip — SaaS Engine Agen Wisata",
      category: "saas-traveltech",
      categoryName: "SaaS & TravelTech",
      image: "assets/images/project-saas.jpg",
      summary: "Platform SaaS multi-tenant instan untuk agensi wisata & tur dengan katalog paket dinamis dan reservasi WhatsApp otomatis.",
      client: "B2B Travel Agencies & Tour Operators",
      role: "Creator & Full-Stack Architect",
      timeline: "Produksi Aktif",
      problem: "Banyak agensi wisata kesulitan memiliki website profesional dengan katalog paket tur dinamis dan sistem booking otomatis tanpa biaya pengembangan kustom yang mahal.",
      solution: "Mengembangkan platform SaaS multi-tenant berkecepatan tinggi dengan setup instan (< 5 menit), manajemen tema fleksibel, dan alur booking langsung ke WhatsApp.",
      results: [
        "Arsitektur multi-tenant tangguh dengan pemisahan data aman dan dukungan kustom domain",
        "Otomatisasi alur pemesanan tur langsung via integrasi WhatsApp API",
        "Performa website ultra-cepat dengan desain modern yang dioptimasi untuk konversi"
      ],
      tags: ["SaaS Multi-Tenant", "Python/Django", "TailwindCSS", "PostgreSQL", "WhatsApp API"],
      liveUrl: "https://cmstrip.com",
      githubUrl: "https://github.com/IbadMukrom"
    },
    {
      id: "finansialku",
      title: "Finansialku — Platform Finansial & Bot",
      category: "fintech-bot",
      categoryName: "FinTech & Bot Otomasi",
      image: "assets/images/project-ai.jpg",
      summary: "Aplikasi manajemen keuangan pribadi cerdas dengan sinkronisasi dual-channel: Telegram Bot dan web dashboard analitik.",
      client: "Pengguna Publik & Produktivitas Finansial",
      role: "Full-Stack Engineer & Product Architect",
      timeline: "Produksi Aktif",
      problem: "Pencatatan keuangan manual sering terhenti karena proses input yang rumit dan tidak praktis saat transaksi terjadi secara langsung.",
      solution: "Membangun sistem pencatatan berbasis command instan melalui Telegram Bot yang tersinkronisasi otomatis ke dashboard analitik web visual.",
      results: [
        "Pencatatan pengeluaran harian instan hanya dalam hitungan detik via bot",
        "Visualisasi alokasi anggaran dan riwayat arus kas yang komprehensif",
        "Antarmuka Neo-Brutalism modern yang ringan dan nyaman di smartphone"
      ],
      tags: ["FinTech", "Telegram Bot API", "Web Dashboard", "Analytics", "Automation"],
      liveUrl: "https://www.finansialku.web.id",
      githubUrl: "https://github.com/IbadMukrom"
    },
    {
      id: "explore-rinjani",
      title: "Explore Rinjani — Global Trekking Platform",
      category: "tourism-ecommerce",
      categoryName: "E-Commerce & Pariwisata",
      image: "assets/images/project-mobile.jpg",
      summary: "Platform pemesanan paket pendakian dan ekowisata Gunung Rinjani berstandar global dengan optimasi performa tinggi.",
      client: "Operator Tur Rinjani & Wisatawan Mancanegara",
      role: "Lead Web Developer & SEO Engineer",
      timeline: "Produksi Aktif",
      problem: "Wisatawan internasional memerlukan portal terpercaya dengan informasi paket trekking yang transparan, aman, dan berkecepatan akses tinggi dari luar negeri.",
      solution: "Mengembangkan portal web pariwisata berkecepatan tinggi dengan optimasi SEO internasional, katalog paket multi-hari terstruktur, dan reservasi instan.",
      results: [
        "Performa loading global ultra-cepat dengan skor Core Web Vitals optimal",
        "Struktur SEO ramah mesin pencari untuk menjangkau wisatawan mancanegara",
        "Penyajian informasi paket pendakian terintegrasi dengan pemandu bersertifikasi"
      ],
      tags: ["Web Platform", "SEO Global", "Tourism Tech", "Performance", "Booking Pipeline"],
      liveUrl: "https://www.explorerinjani.com",
      githubUrl: "https://github.com/IbadMukrom"
    }
  ],

  education: [
    {
      degree: "Sarjana Ilmu Komputer (S.Kom) / Teknik Informatika",
      institution: "Universitas Gadjah Mada (UGM)",
      period: "2012 — 2016",
      details: "IPK 3.84 / 4.00 (Cum Laude). Fokus pada Human-Computer Interaction (HCI) dan Rekayasa Perangkat Lunak Terdistribusi."
    }
  ],

  certifications: [
    {
      title: "Sertifikasi Tata Kelola SPBE & Arsitektur Enterprise Pemerintahan",
      issuer: "KemenPAN-RB / Lembaga Sertifikasi Profesi",
      year: "2023",
      credentialId: "SPBE-GOV-89410"
    },
    {
      title: "Nielsen Norman Group (NN/g) UX Master Certified",
      issuer: "Nielsen Norman Group",
      year: "2022",
      credentialId: "NNG-UXM-78214"
    },
    {
      title: "BNSP Certified Lead Systems Analyst & Designer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2021",
      credentialId: "BNSP-IT-66023"
    }
  ],

  contact: {
    title: "Konsultasi & Kolaborasi Transformasi Digital",
    desc: "Siap mendukung perancangan sistem layanan publik yang lebih prima, modernisasi arsitektur SPBE, dan penguatan tata kelola data pemerintahan.",
    buttonEmailText: "ibad.mukrom@gmail.com",
    buttonPdfText: "Cetak / Simpan PDF Resume"
  }
};
