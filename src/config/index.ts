// src/config/index.ts

import type { SiteConfig, SiteContent } from "../types";

// Option 2: Use direct string paths (alternative if imports don't work)
const siteLogo = "/src/assets/alejandro-small.jpg";
const socialImage = "/src/assets/gambar-ithelpdesk.png";
const projectSpotiFu = "/src/assets/spotifu.png";
const projectZenOg = "/src/assets/zen-og.png";
const projectRaja = "/src/assets/raja.png";
const aboutImage = "/src/assets/alejandro-big.jpg";

export const SITE_CONFIG: SiteConfig = {
  title: "Naufal Ibrahim — Fullstack Developer",
  author: "Naufal Ibrahim",
  description: "Mahasiswa Sistem Informasi & Fullstack Developer dengan pengalaman membangun aplikasi web menggunakan Laravel, Tailwind CSS, dan Next.js.",
  lang: "id",
  siteLogo: siteLogo,
  canonicalURL: "https://portfolio-naufal.vercel.app",
  socialImage: socialImage,
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { 
      name: "LinkedIn", 
      icon: "linkedin", 
      href: "https://www.linkedin.com/in/naufal-ibrahim-3a0667217/"
    },
    { 
      name: "GitHub", 
      icon: "github", 
      href: "https://github.com/NaufalIbrahim68/"
    },
    { 
      name: "Instagram", 
      icon: "instagram", 
      href: "https://www.instagram.com/ibrahim.naufal/"
    },
  ],
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hi, I'm Naufal Ibrahim",
    tagline: "Fullstack Developer",
    summary: "Saya seorang Fullstack Developer dengan fokus pada Laravel (PHP), Tailwind CSS, dan JavaScript/Next.js untuk membangun aplikasi web yang cepat, modern, dan responsif.",
    // --- PERUBAHAN DI SINI ---
    // Mengganti email dengan tombol Download CV
    cvButton: {
      text: "Download CV",
      // Pastikan Anda meletakkan file CV di folder `public`
      // dan sesuaikan nama filenya.
      link: "/CV_Naufal_Ibrahim.pdf", 
    },
  },
  experience: [
    {
      company: "PT. Tirta Nusa Persada",
      position: "Web Developer Intern",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Mendesain ulang website profil perusahaan menggunakan Laravel dan Tailwind CSS.",
        "Membuat dokumentasi teknis (manual book & diagram UML) untuk mempermudah onboarding.",
        "Membangun fitur CRUD dan integrasi API untuk kebutuhan internal perusahaan.",
      ],
    },
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "2018",
      endDate: "2020",
      summary: [
        "Mengimplementasikan optimasi performa aplikasi hingga mengurangi load time sebesar 40%.",
        "Memimpin tim developer dalam membangun fitur baru menggunakan Android Jetpack.",
        "Mengintegrasikan Google Pay dan Firebase Analytics untuk meningkatkan revenue & retensi.",
      ],
    },
  ],
  projects: [
    {
      title: "Apotek Online",
      summary: "Platform pemesanan obat online untuk memudahkan pasien membeli kebutuhan medis dari rumah.",
      linkPreview: "/",
      linkSource: "https://github.com/NaufalIbrahim68/",
      image: projectSpotiFu,
      alt: "Tampilan website Apotek Online",
    },
    {
      title: "Company Profile PT. Tirta Nusa Persada",
      summary: "Redesign website company profile modern menggunakan Laravel & Tailwind CSS, dilengkapi dokumentasi UML.",
      linkPreview: "/",
      linkSource: "https://github.com/NaufalIbrahim68/",
      image: projectZenOg,
      alt: "Preview website company profile PT. Tirta Nusa Persada",
    },
    {
      title: "Personal Portfolio",
      summary: "Website portofolio pribadi untuk menampilkan pengalaman, proyek, dan profil developer secara profesional.",
      linkPreview: "/",
      linkSource: "https://github.com/NaufalIbrahim68/",
      image: projectRaja,
      alt: "Screenshot website portofolio Naufal Ibrahim",
    },
  ],
  about: {
    description: `Halo, saya Naufal Ibrahim, seorang Fullstack Developer dengan latar belakang Sistem Informasi. Saya berpengalaman dalam membangun aplikasi web modern menggunakan Laravel, Tailwind CSS, dan Next.js.

Fokus utama saya adalah menciptakan aplikasi yang tidak hanya fungsional, tetapi juga memiliki UI/UX yang intuitif, responsif, dan mudah digunakan. Saya juga terbiasa menyusun dokumentasi sistem yang rapi, mulai dari manual book hingga diagram UML, untuk memastikan keberlanjutan proyek.`,
    image: aboutImage,
    alt: "Foto Naufal Ibrahim",
  },
};

// --- PERUBAHAN DI SINI ---
// Animation utilities (export these for use in components)
export const ANIMATIONS = {
  social: {
    // Warna lebih cerah dan sesuai brand
    linkedin: "hover:scale-110 hover:text-blue-600 hover:rotate-12 transition-all duration-300",
    github: "hover:scale-110 hover:text-slate-900 hover:-rotate-12 transition-all duration-300",
    instagram: "hover:scale-110 hover:text-rose-500 hover:rotate-12 transition-all duration-300",
  },
  projects: [
    {
      // Shadow lebih lembut dan berwarna
      container: "hover:shadow-2xl hover:shadow-cyan-200/50 transition-all duration-300",
      image: "hover:scale-105 hover:rotate-1 transition-all duration-500 ease-in-out",
    },
    {
      container: "hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300",
      image: "hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-in-out",
    },
    {
      container: "hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-300",
      image: "hover:scale-105 hover:rotate-1 transition-all duration-500 ease-in-out",
    },
  ],
};