# 🚀 Curriculum Vitae (1 Lembar) — Ibad Mukrom (GovTech & SPBE Specialist)

Selamat datang di repositori CV digital 1 lembar profesional milik **Ibad Mukrom**: *Senior UI/UX Designer & Software Engineer* dengan spesialisasi transformasi digital pemerintahan, arsitektur Sistem Pemerintahan Berbasis Elektronik (SPBE), perancangan antarmuka layanan publik ramah warga (*citizen-centric UX*), dan integrasi Satu Data.

Situs ini menggunakan gaya desain **Neo-Brutalism** yang tegas, modern, dan elegan, serta **100% siap di-hosting langsung ke GitHub Pages** tanpa dependensi runtime atau build tools rumit!

---

## ✨ Fitur Unggulan

1. **Rich Modern Aesthetics & Dark-First UI**:
   - Palette warna mutakhir terkurasi dengan aksen neon indigo, cyan, dan emerald.
   - Glassmorphism & frosted glass (`backdrop-filter: blur(16px)`).
   - Bento-Grid layout interaktif untuk metrik dan keahlian inti.
   - Tipografi premium menggunakan Google Fonts: **Plus Jakarta Sans** (Humanist UI) & **JetBrains Mono** (Tech/Code).
2. **Dual Mastery Showcase**:
   - Menyoroti kombinasi langka antara empati pengguna (*Design Systems, User Research, WCAG 2.1 AA*) dan ketangkasan rekayasa (*React, Next.js, TypeScript, Core Web Vitals*).
3. **Interactive Features**:
   - ⚡ **Command Palette (`⌘K` / `Ctrl+K`)**: Navigasi cepat ala terminal IDE modern.
   - 🎨 **Design Tokens Inspector**: Floating widget untuk menginspeksi palette hex & token tipografi.
   - 🌙 **Dark & Light Mode Switcher**: Dengan transisi halus dan persistensi `localStorage`.
   - 🔍 **Filterable Case Studies & Detail Modal**: Studi kasus mendalam (Problem, Solution, Measurable Results).
   - 📋 **One-Click Copy Email & Toast Notification**: Salin kontak instan tanpa reload halaman.
   - 🕒 **Live Local Clock (WIB)**: Menampilkan waktu lokal real-time Indonesia.
4. **Print & PDF Export Ready (`@media print`)**:
   - Klik tombol **"Print / PDF"** atau tekan `Ctrl + P` di browser untuk otomatis mengekspor CV menjadi lembar resume 2-kolom ATS-friendly yang bersih dan profesional.
5. **SEO & Social Share Ready**:
   - Dilengkapi OpenGraph meta tags, Twitter card, dan **Schema JSON-LD Person** untuk rich snippet pencarian Google.

---

## 📁 Struktur Direktori

```text
cv/
├── index.html               # Markup semantik HTML5 & struktur utama
├── css/
│   └── style.css            # Design system tokens, responsive grid, dark/light theme, print CSS
├── js/
│   ├── data.js              # Single source of truth (edit nama, karir, proyek, dan link Anda di sini!)
│   └── app.js               # Logic interaktif: modal, filter, command palette, live clock, toast
├── assets/
│   └── images/
│       ├── avatar.jpg       # Foto profil profesional
│       ├── project-saas.jpg # Mockup proyek SaaS FinTech
│       ├── project-ai.jpg   # Mockup platform studio AI
│       └── project-mobile.jpg # Mockup aplikasi mobile crypto/wallet
└── README.md                # Dokumentasi & panduan deployment GitHub Pages
```

---

## 🛠️ Cara Kustomisasi Data Anda

Anda tidak perlu menyentuh kode rumit! Cukup buka file **[`js/data.js`](file:///home/ibad/Documents/proyeku/2026/cv/js/data.js)**:

1. **Informasi Pribadi & Kontak**:
   - Ubah `name`, `title`, `email`, `phone`, dan link akun sosial media (`github`, `linkedin`, `dribbble`, `figma`).
2. **Pengalaman Karir**:
   - Tambah atau ubah riwayat kerja di array `experience`.
3. **Studi Kasus & Proyek**:
   - Tambahkan proyek unggulan Anda di array `projects`. Anda juga dapat mengganti gambar di folder `assets/images/`.
4. **Keahlian & Metrik**:
   - Sesuaikan persentase dan daftar tag di objek `skills` dan `stats`.

---

## 🌐 Panduan Upload ke GitHub Pages (Hanya 2 Menit!)

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [GitHub](https://github.com/new).
2. Buat repositori baru bernama misal **`cv`** atau **`portofolio`** (pastikan diset ke **Public**).

### Langkah 2: Push Kode dari Komputer Anda
Buka terminal di folder project ini (`/home/ibad/Documents/proyeku/2026/cv`):

```bash
# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Buat commit perdana
git commit -m "feat: initial release of interactive senior UI/UX & developer CV"

# Ubah branch utama menjadi main
git branch -M main

# Hubungkan dengan remote repository GitHub Anda (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push ke GitHub
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Di halaman repositori GitHub Anda, klik tab **Settings** (⚙️).
2. Di sidebar kiri, klik menu **Pages** (di bawah bagian *Code and automation*).
3. Pada bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan folder `/ (root)`.
4. Klik tombol **Save**.
5. Tunggu sekitar 1-2 menit. GitHub akan menampilkan link aktif portofolio Anda, misalnya:
   👉 `https://USERNAME.github.io/REPO_NAME/`

---

## 💻 Menjalankan Secara Lokal (Preview)

Jika Anda ingin melihat hasilnya di browser komputer sebelum di-push:

### Menggunakan Python (Sudah bawaan Linux/Mac/Windows):
```bash
python3 -m http.server 8080
```
Buka browser di `http://localhost:8080`.

### Menggunakan Node.js / npx:
```bash
npx serve .
```

---

## 📄 Lisensi
Dibuat dengan dedikasi penuh untuk komunitas pengembang & desainer. Bebas digunakan untuk portofolio pribadi Anda.
