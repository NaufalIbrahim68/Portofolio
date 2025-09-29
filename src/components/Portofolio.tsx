"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Download, ExternalLink, Instagram } from "lucide-react"

// Configuration data (matching your config structure)
const SITE_CONFIG = {
  title: "Naufal Ibrahim — Fullstack Developer",
  author: "Naufal Ibrahim",
  description: "Mahasiswa Sistem Informasi & Fullstack Developer dengan pengalaman membangun aplikasi web menggunakan Laravel , Tailwind CSS, dan Next.js.",
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
}

const SITE_CONTENT = {
  hero: {
    name: "Hi, I'm Naufal Ibrahim",
    tagline: "Fullstack Developer",
    summary: "Saya seorang Fullstack Developer dengan fokus pada Laravel (PHP), Tailwind CSS, dan JavaScript/Next.js untuk membangun aplikasi web yang cepat, modern, dan responsif.",
    cvButton: {
      text: "Resume",
     link: "https://drive.google.com/file/d/1x1l1EZpd-nY9vriFZSBV-L6T2r3vbe0v/view?usp=sharing", 
    },
  },
  experience: [

    {
      company: "PT Astra Visteon Indonesia",
      position: "Fullstack Developer Intern",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "Developed a complete and fully functional website from scratch using the Laravel framework (PHP) for the backend, and Tailwind CSS with JavaScript for the frontend.",
        "Published and managed website versions through GitHub, including editing and maintaining repositories for collaborative development.",
        "Conducted live presentations to demonstrate system usage flow to users, gathered feedback, and implemented improvements to align with company operational needs.",
         "Deployed websites on IIS-based servers with SQL Server integration, ensuring optimal performance through environment configuration and post-deployment testing.",
      ],
    },
    {
      company: "PT. Tirta Nusa Persada",
      position: "Web Developer Intern",
      startDate: "August 2024",
      endDate: "September 2024",
      summary: [
        "Redesigned the company profile website of PT Tirta Nusa Persada by enhancing its interface and functionality to create a more modern, responsive, and user-friendly experience.",
        " Created comprehensive development documentation using UML diagrams to clearly illustrate the system’s flow, architecture, and key components, supporting future maintenance and scalability.",
        
      ],
    },
    {
      company: "Apotek Lisma Sidodadi",
      position: "Front-End Developer Intern",
      startDate: "March 2023",
      endDate: "September 2023",
      summary: [
        "Designed the project to improve patient access to services without needing to visit the pharmacy directly.",
        "Implemented interactive features that allow patients to check drug availability online",
        "Strengthened skills in user interface design, web development, and understanding user needs in the healthcare sector.",
      ],
    },
  ],
  projects: [
    {
      title: "DI Input",
      summary: "Website for exporting Excel files and managing them into concrete data that can be used in the company's system.",
      linkPreview: "https://github.com/NaufalIbrahim68/DI-Input",
      linkSource: "https://github.com/NaufalIbrahim68/",
      tech: ["Laravel", "SQL Server", "Tailwind CSS", "JavaScript"],
      alt: "Tampilan website Apotek Online",
    },
    {
      title: "Company Profile PT. Tirta Nusa Persada",
      summary: "Redesign website company profile modern menggunakan Laravel & Tailwind CSS, dilengkapi dokumentasi UML.",
      linkPreview: "https://github.com/NaufalIbrahim68/Website-Profil",
      linkSource: "https://github.com/NaufalIbrahim68/Website-Profil",
      tech: [ "Bootstrap", "UML", "HTML", "CSS"],
      alt: "Preview website company profile PT. Tirta Nusa Persada",
    },
    {
      title: "IT Helpdesk",
      summary: "website to make it easier for IT support to manage ticketing and provide feedback to employees via email.",
      linkPreview: "https://github.com/NaufalIbrahim68/IT-Helpdesk",
      linkSource: "https://github.com/NaufalIbrahim68/",
      tech: ["Laravel", "JavaScript", "Tailwind CSS", "SQL Server"],
      alt: "Screenshot website portofolio Naufal Ibrahim",
    },
  ],
  about: {
    description: `Halo, saya Naufal Ibrahim, seorang Fullstack Developer dengan latar belakang Sistem Informasi. Saya berpengalaman dalam membangun aplikasi web modern menggunakan Laravel Framework, Tailwind CSS, dan Bahasa Pemrograman PHP.

Fokus utama saya adalah menciptakan aplikasi yang tidak hanya fungsional, tetapi juga memiliki UI/UX yang intuitif, responsif, dan mudah digunakan. Saya juga terbiasa menyusun dokumentasi sistem yang rapi, mulai dari manual book hingga diagram UML, untuk memastikan keberlanjutan proyek.`,
  },
}

const ANIMATIONS = {
  social: {
    linkedin: "hover:scale-110 hover:text-blue-600 hover:rotate-12 transition-all duration-300",
    github: "hover:scale-110 hover:text-slate-900 hover:-rotate-12 transition-all duration-300",
    instagram: "hover:scale-110 hover:text-rose-500 hover:rotate-12 transition-all duration-300",
  },
  projects: [
    {
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
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Laravel", category: "Backend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "MySQL", category: "Database" },
  ]

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return Github
      case 'linkedin':
        return Linkedin
      case 'instagram':
        return Instagram
      default:
        return Mail
    }
  }

  const getSocialAnimation = (iconName: string) => {
    return ANIMATIONS.social[iconName as keyof typeof ANIMATIONS.social] || ""
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar - Fixed on large screens */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Profile Section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                  <span className="text-balance">{SITE_CONTENT.hero.name}</span>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-400 sm:text-xl">
                  {SITE_CONTENT.hero.tagline}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                  {SITE_CONTENT.hero.summary}
                </p>
              </div>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <a
                        className={`group flex items-center py-3 ${
                          activeSection === item.id ? "text-slate-100" : "text-slate-400"
                        }`}
                        href={`#${item.id}`}
                        onClick={() => setActiveSection(item.id)}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-100 ${
                            activeSection === item.id ? "w-16 bg-slate-100" : "w-8 bg-slate-400"
                          }`}
                        ></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-100">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                {SITE_CONFIG.socialLinks.map(({ name, icon, href }) => {
                  const Icon = getIcon(icon)
                  return (
                    <li key={name} className="mr-5 text-xs">
                      <a
                        className={`block text-slate-400 ${getSocialAnimation(icon)}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                      >
                        <Icon size={20} />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </header>

          {/* Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
              {/* Profile Image */}
<div className="mb-8 flex justify-center">
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <img 
      src="/fotoprofil.png" 
      alt="Naufal Ibrahim - Fullstack Developer"
      className="relative w-64 md:w-72 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
</div>

                <div className="whitespace-pre-line mb-6 text-slate-400 leading-relaxed">
                  {SITE_CONTENT.about.description}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
                  href={SITE_CONTENT.hero.cvButton.link}
                  download 
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  <Download size={14} />
                  {SITE_CONTENT.hero.cvButton.text}
                </a>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6">Experience</h2>
                <div className="space-y-8">
                  {SITE_CONTENT.experience.map((exp, index) => (
                    <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={`${exp.startDate} — ${exp.endDate}`}>
                        {exp.startDate} — {exp.endDate}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>{exp.position} · {exp.company}</span>
                          </div>
                        </h3>
                        <div className="mt-2 text-sm leading-normal text-slate-400 space-y-2">
                          {exp.summary.map((item, idx) => (
                            <p key={idx}>• {item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6">Featured Projects</h2>
                <div className="space-y-8">
                  {SITE_CONTENT.projects.map((project, index) => (
                    <div key={index} className={`group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${ANIMATIONS.projects[index]?.container}`}>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.linkPreview} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} (opens in a new tab)`}>
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{project.title}</span>
                              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">{project.summary}</p>
                        
                        {/* GitHub Link */}
                        <a
                          href={project.linkSource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
                        >
                          <Github size={12} className="mr-1" />
                          View Source
                        </a>

                        {/* Tech Stack */}
                        {project.tech && (
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {project.tech.map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <p className="text-slate-400 leading-relaxed">
                    Saya terbuka untuk diskusi tentang peluang kerja, kolaborasi proyek, atau sekadar berbagi pengalaman tentang development. Mari terhubung!
                  </p>
                  
                  {/* Contact Cards */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    
                    {/* Email Card */}
                    <a
                      href="mailto:ibrahimnaufal87@gmail.com"
                      className="group relative p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-teal-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Mail className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                            Email
                          </h3>
                          <p className="text-sm text-slate-400 mt-1">
                            Send me a message
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* WhatsApp Card */}
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20Naufal,%20saya%20tertarik%20dengan%20portfolio%20Anda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-green-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-200 group-hover:text-green-300 transition-colors">
                            WhatsApp
                          </h3>
                          <p className="text-sm text-slate-400 mt-1">
                            Chat with me
                          </p>
                        </div>
                      </div>
                    </a>

                  </div>

                  {/* Social Links in Contact */}
                  <div className="pt-6 border-t border-slate-700">
                    <p className="text-sm text-slate-500 mb-4">You can also find me on:</p>
                    <div className="flex gap-4">
                      {SITE_CONFIG.socialLinks.map(({ name, icon, href }) => {
                        const Icon = getIcon(icon)
                        return (
                          <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-slate-200 transition-all duration-300 ${getSocialAnimation(icon)}`}
                          >
                            <Icon size={16} />
                            <span className="text-sm">{name}</span>
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded-lg border border-teal-400/20">
                    <h3 className="font-medium text-slate-200 mb-2">Mari Berkolaborasi!</h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Punya ide proyek menarik atau butuh developer untuk tim Anda? Saya siap membantu mewujudkan visi digital Anda.
                    </p>
                    <a
                      href="mailto:ibrahimnaufal87@gmail.com?subject=Kolaborasi%20Proyek&body=Halo%20Naufal,%0A%0ASaya%20tertarik%20untuk%20berkolaborasi%20dengan%20Anda..."
                      className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      <Mail size={14} />
                      Start a Conversation
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-400 sm:pb-0">
              <p>
                Crafted with <span className="text-teal-400">Next.js</span> and{" "}
                <span className="text-teal-400">Tailwind CSS</span>. Deployed on{" "}
                <span className="text-teal-400">Vercel</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}