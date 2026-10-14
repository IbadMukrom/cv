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
    title: "Senior UI/UX Designer & Software Engineer — GovTech Specialist",
    badgeRole: "GOVTECH & SPBE SPECIALIST",
    marquee: "✦ IBAD MUKROM ✦ SENIOR UI/UX DESIGNER ✦ SOFTWARE ENGINEER ✦ SISTEM PEMERINTAHAN BERBASIS ELEKTRONIK (SPBE) ✦ LAYANAN PUBLIK DIGITAL ✦ SATU DATA INDONESIA ✦",
    headline: "Mewujudkan tata kelola layanan publik digital yang humanis melalui",
    headlineHighlight: "UI/UX & Rekayasa Sistem Handal",
    subtitle: "Praktisi digitalisasi pemerintahan dengan fokus pada transformasi SPBE, citizen-centric UX, dan interoperabilitas Satu Data yang aman dan akuntabel.",
    status: "Terbuka untuk Kolaborasi & Proyek Transformasi Digital",
    statusType: "available",
    location: "Indonesia (Kementerian / Lembaga / Pemda)",
    email: "ibad.mukrom@gmail.com",
    phone: "+62 812-3456-7890",
    avatar: "assets/images/avatar.jpg",
    bio: [
      "Praktisi teknologi informasi dan perancang produk digital dengan pengalaman lebih dari 8 tahun dalam modernisasi Sistem Pemerintahan Berbasis Elektronik (SPBE). Berfokus pada perancangan antarmuka layanan publik yang ramah warga (citizen-centric UX), standarisasi sistem desain antar-instansi, serta arsitektur perangkat lunak yang aman, transparan, dan berkinerja tinggi.",
      "Berpengalaman memimpin tim teknis lintas sektoral dalam merancang portal satu pintu pelayanan publik, dashboard analitik monitoring program strategis pimpinan daerah, serta integrasi interoperabilitas Satu Data Nasional."
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
      },
      {
        name: "Figma",
        icon: "figma",
        url: "https://figma.com/@ibadmukrom",
        username: "@ibadmukrom-gov"
      }
    ],
    stats: [
      { label: "Pengalaman IT", value: "8+ Thn", detail: "GovTech & Sektor Publik" },
      { label: "Sistem Rilis", value: "35+", detail: "Layanan Publik & Internal" },
      { label: "Indeks Kepuasan", value: "99.2%", detail: "IKM Pelayanan Publik" },
      { label: "Warga Terlayani", value: "5.2M+", detail: "Dampak Layanan Digital" }
    ]
  },

  skills: {
    design: [
      { name: "Citizen-Centric UX Design", level: 96, tags: ["Riset Warga", "Kemudahan Akses", "Empati Layanan"] },
      { name: "Design System Layanan Publik", level: 95, tags: ["Figma Tokens", "Standarisasi UI", "WCAG 2.1 AA"] },
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
      technologies: ["Figma", "React", "Next.js", "TypeScript", "SPBE Framework", "WCAG 2.1"]
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
      technologies: ["Figma", "Vue.js", "Node.js", "PostgreSQL", "REST APIs", "Keamanan Siber"]
    },
    {
      period: "2016 — 2019",
      role: "Software Engineer & Public Service Web Developer",
      company: "Unit Pengembangan Aplikasi Sistem Pemerintahan",
      location: "Yogyakarta, Indonesia",
      badge: "Pemerintahan",
      description: "Mengembangkan aplikasi administrasi perkantoran digital, e-office, persuratan elektronik, dan portal informasi dinas.",
      highlights: [
        "Membangun 15+ aplikasi administrasi birokrasi berbasis web untuk efisiensi tata kelola persuratan dinas tanpa kertas (paperless).",
        "Menjamin seluruh portal dinas lulus audit aksesibilitas dan keamanan informasi awal."
      ],
      technologies: ["JavaScript", "HTML5/CSS3", "PHP", "MySQL", "UI/UX Research"]
    }
  ],

  projects: [
    {
      id: "portal-warga",
      title: "Portal Layanan Publik Terpadu Warga",
      category: "layanan-publik",
      categoryName: "Layanan Publik Digital",
      image: "assets/images/project-saas.jpg",
      summary: "Portal satu pintu perizinan warga dan layanan administrasi terintegrasi dengan Single Sign-On (SSO) kependudukan nasional.",
      client: "Instansi Pemerintah Daerah",
      role: "Lead UI/UX & Frontend Architect",
      timeline: "6 Bulan",
      problem: "Masyarakat harus mengakses lebih dari 12 aplikasi berbeda untuk mengurus administrasi kependudukan dan perizinan usaha, menimbulkan antrean fisik dan birokrasi berbelit.",
      solution: "Mengintegrasikan seluruh formulir layanan ke dalam satu antarmuka terpadu yang ramah mobile, dilengkapi pelacakan status perizinan secara transparan dan notifikasi otomatis.",
      results: [
        "Pemangkasan waktu pengurusan izin warga sebesar 85%",
        "Diakses oleh lebih dari 1.8 juta warga terverifikasi",
        "Memperoleh Penghargaan Inovasi Pelayanan Publik KemenPANRB"
      ],
      tags: ["Citizen-Centric UX", "SPBE", "React", "TypeScript", "Single Sign-On"],
      liveUrl: "https://layananpublik-demo.example.gov.id",
      githubUrl: "https://github.com/ibadmukrom/portal-layanan-warga"
    },
    {
      id: "dashboard-satu-data",
      title: "Dashboard Eksekutif Satu Data Pemerintahan",
      category: "satu-data",
      categoryName: "Satu Data & Dashboard",
      image: "assets/images/project-ai.jpg",
      summary: "Pusat visualisasi data spasial dan analitik kinerja anggaran, penanganan stunting, dan capaian program prioritas untuk pimpinan.",
      client: "Sekretariat Daerah / Bappeda",
      role: "Principal Product Designer & Prototyper",
      timeline: "4 Bulan",
      problem: "Pimpinan daerah kesulitan memantau realisasi anggaran dan indikator kinerja dinas secara cepat karena data tersebar di berbagai spreadsheet terpisah.",
      solution: "Merancang dasbor visual berkecepatan tinggi dengan peta geospasial interaktif, filter indikator prioritas, dan ringkasan eksekutif otomatis.",
      results: [
        "Akurasi dan kecepatan pengambilan keputusan pimpinan meningkat 4x lipat",
        "Harmonisasi data antar 24 Organisasi Perangkat Daerah (OPD)",
        "Zero-latency loading (< 0.5 detik) untuk dataset jutaan baris"
      ],
      tags: ["Dashboard Eksekutif", "Visualisasi Data", "Satu Data", "Next.js", "PostgreSQL"],
      liveUrl: "https://satudata-demo.example.gov.id",
      githubUrl: "https://github.com/ibadmukrom/satudata-executive-dashboard"
    },
    {
      id: "mobile-aspirasi",
      title: "Sistem Pengaduan Aspirasi & Lapor Warga",
      category: "mobile-gov",
      categoryName: "Aspirasi & Mobile",
      image: "assets/images/project-mobile.jpg",
      summary: "Kanal pengaduan masyarakat berbasis mobile dengan penandaan lokasi GPS otomatis, verifikasi tindak lanjut dinas, dan transparansi publik.",
      client: "Dinas Komunikasi dan Informatika",
      role: "Senior UX Designer & Mobile Specialist",
      timeline: "4 Bulan",
      problem: "Laporan infrastruktur rusak atau keluhan warga lambat direspons dan seringkali tidak jelas dinas mana yang bertanggung jawab menanganinya.",
      solution: "Aplikasi mobile pelaporan 3 langkah dengan auto-tagging instansi terkait berbasis kategori keluhan dan monitoring tindak lanjut berbatas waktu (SLA).",
      results: [
        "Penyelesaian aduan warga dipercepat dari 14 hari menjadi rata-rata 48 jam",
        "91% tingkat kepuasan tindak lanjut dari masyarakat pelapor",
        "Telah menangani lebih dari 250.000 laporan tervalidasi"
      ],
      tags: ["Mobile UX", "Partisipasi Publik", "Tracking System", "Figma", "Keamanan Data"],
      liveUrl: "https://laporwarga-demo.example.gov.id",
      githubUrl: "https://github.com/ibadmukrom/lapor-warga-mobile"
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
