"use client"

import { useState, useEffect, useRef } from "react"
import { GithubIcon, LinkedinIcon, InstagramIcon, Mail, Download, ExternalLink, Sparkles, Code2, Database, Palette, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Github } from "lucide-react";


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
    summary: "I am a Fullstack Developer specializing in Laravel (PHP), Tailwind CSS, and JavaScript/Next.js to build fast, modern, and responsive web applications.",
    cvButton: {
      text: "Resume",
      link: "https://onedrive.live.com/?id=%2Fpersonal%2F047c5badde70755f%2FDocuments%2FCV%20Naufal%20Ibrahim&viewid=877814e5%2D266e%2D4152%2D90e1%2D172b151a48f8&view=0",
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
        " Created comprehensive development documentation using UML diagrams to clearly illustrate the system's flow, architecture, and key components, supporting future maintenance and scalability.",

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
      summary: "Website logistics management information system developed for PT Astra Visteon Indonesia to fulfill regulatory requirements from the relevant government ministry. The system serves as a centralized platform for managing Delivery Instruction (DI) data from suppliers to the factory, including PO numbers, part numbers (Supplier, BAAN, and Visteon), quantities, and goods receipt times. Based on the DI data, the system can generate Delivery Schedules (DS) for each part number, complete with preparation status tracking and AGV process integration. It also provides an interactive dashboard with visualizations of goods receipt timelines and preparation status charts, data filtering capabilities, PDF and Excel report exports, bulk data import via Excel, and a login authentication system to ensure secure access.",
      linkPreview: "https://drive.google.com/drive/folders/1qfps0Ye5yKFN13j8Inx8CEecEHTKtnW2?usp=sharing",
      linkSource: "https://github.com/NaufalIbrahim68/DI-Input",
      image: "/projects/di-input.png",
      tech: ["Laravel", "SQL Server", "Tailwind CSS", "JavaScript"],
      alt: "Tampilan website DI Input",
    },
    {
      title: "IT Helpdesk",
      summary: "IT-Helpdesk is an internal company helpdesk ticket management system that allows employees to submit IT support requests by selecting the request type and issue category. Incoming tickets are managed by the IT admin team, who are responsible for processing, prioritizing, and updating the ticket status from Pending and In Progress to Solved or Rejected. Each ticket can also include admin notes that users can view directly from their dashboard.",
      linkPreview: "https://drive.google.com/drive/folders/14P4GFv52olNy-wb7QlGV8aLRUOzpmQSc?usp=sharing",
      linkSource: "https://github.com/NaufalIbrahim68/IT-Helpdesk",
      image: "/projects/it-helpdesk.png",
      tech: ["Laravel", "JavaScript", "Tailwind CSS", "SQL Server"],
      alt: "Screenshot website IT Helpdesk",
    },
    {
      title: "Henkaten Dashboard",
      summary: "Web based application designed to record, monitor, and control every change (henkaten) occurring on the production line in real time. The application covers four categories of changes based on the 4M principle: Man Power (workforce), Machine, Material (raw materials), and Method (work methods). Each reported change goes through an approval process by the relevant Section Head (Production, PPIC, or QC), ensuring that all changes are properly documented and authorized.",
      linkPreview: "https://drive.google.com/drive/folders/1KdC-kwSIUdrFT6FL8r3MVARoA_iYmQ41?usp=sharing",
      linkSource: "https://github.com/NaufalIbrahim68/Hentaken",
      image: "/projects/henkaten.png",
      tech: ["Laravel", "JavaScript", "Tailwind CSS", "SQL Server"],
      alt: "Dashboard monitoring perubahan di pabrik secara real time",
    },
  ],
  about: {
    description: `Hello, my name is Naufal Ibrahim. I am a freshgraduate of the Information Systems program at Telkom University Purwokerto.

I am a Fullstack Developer with a background in Information Systems. I have experience in building modern web applications using the Laravel Framework, Tailwind CSS, and PHP programming language. My main focus is on creating applications that are not only functional but also have intuitive, responsive, and user-friendly UI/UX. I am also accustomed to compiling well-organized system documentation, from manuals to UML diagrams, to ensure project sustainability.`,
  },


}

// Skill categories with icons
const skillCategories = [
  {
    name: "Frontend",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Vue.js", "Angular.js"]
  },
  {
    name: "Backend",
    icon: Code2,
    color: "from-teal-500 to-emerald-500",
    skills: ["Laravel", "Django"]
  },
  {
    name: "Database",
    icon: Database,
    color: "from-blue-500 to-indigo-500",
    skills: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"]
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return GithubIcon
      case 'linkedin':
        return LinkedinIcon
      case 'instagram':
        return InstagramIcon
      default:
        return Mail
    }
  }

  const getSocialAnimation = (iconName: string) => {
    const animations: { [key: string]: string } = {
      linkedin: "hover:text-blue-400 hover:shadow-blue-400/50",
      github: "hover:text-slate-100 hover:shadow-slate-100/50",
      instagram: "hover:text-rose-400 hover:shadow-rose-400/50",
    }
    return animations[iconName] || ""
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 relative">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="floating-orb w-96 h-96 bg-teal-500/20 top-20 -left-48"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="floating-orb w-80 h-80 bg-blue-500/20 top-1/2 -right-40"
          style={{ animation: "float 10s ease-in-out infinite", animationDelay: "-2s" }}
        />
        <div
          className="floating-orb w-64 h-64 bg-purple-500/20 bottom-20 left-1/4"
          style={{ animation: "float 7s ease-in-out infinite", animationDelay: "-4s" }}
        />
      </div>

      {/* Left Sidebar - Truly Fixed on large screens */}
      <header className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/2 lg:max-w-xl lg:flex-col lg:justify-center lg:px-12 xl:px-24 z-20">
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Profile Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="gradient-text animated-underline">{SITE_CONTENT.hero.name}</span>
            </h1>
            <h2 className="mt-5 text-lg font-medium tracking-tight sm:text-xl flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
              <span className="text-teal-400">{SITE_CONTENT.hero.tagline}</span>
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
                    className={`group flex items-center py-3 transition-all duration-300 ${activeSection === item.id ? "text-slate-100" : "text-slate-400"
                      }`}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-teal-400 ${activeSection === item.id ? "w-16 bg-teal-400" : "w-8 bg-slate-600"
                        }`}
                    ></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-teal-400 transition-colors">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <ul className="ml-1 mt-8 flex items-center gap-4" aria-label="Social media">
            {SITE_CONFIG.socialLinks.map(({ name, icon, href }) => {
              const Icon = getIcon(icon)
              return (
                <li key={name}>
                  <a
                    className={`group flex items-center justify-center w-10 h-10 rounded-lg glass transition-all duration-300 hover:scale-110 ${getSocialAnimation(icon)}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                  >
                    <Icon size={18} className="text-slate-400 group-hover:text-current transition-colors" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="lg:hidden pt-16 pb-8 px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text animated-underline">{SITE_CONTENT.hero.name}</span>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            <span className="text-teal-400">{SITE_CONTENT.hero.tagline}</span>
          </h2>
          <p className="mt-3 leading-normal text-slate-400 text-sm">
            {SITE_CONTENT.hero.summary}
          </p>
          <ul className="mt-6 flex items-center gap-4" aria-label="Social media">
            {SITE_CONFIG.socialLinks.map(({ name, icon, href }) => {
              const Icon = getIcon(icon)
              return (
                <li key={name}>
                  <a
                    className={`group flex items-center justify-center w-10 h-10 rounded-lg glass transition-all duration-300 hover:scale-110 ${getSocialAnimation(icon)}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <Icon size={18} className="text-slate-400 group-hover:text-current transition-colors" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Main Content - with left margin on large screens */}
      <main className="px-6 pb-24 lg:ml-[50%] lg:w-1/2 lg:px-12 lg:py-24 relative z-10">
        {/* About Section */}
        <section
          id="about"
          ref={(el) => { sectionRefs.current["about"] = el }}
          className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-700 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" style={{ animation: "gradient-shift 4s ease infinite", backgroundSize: "200% 200%" }}></div>
                <img
                  src="/fotoprofil.png"
                  alt="Naufal Ibrahim - Fullstack Developer"
                  className="relative w-64 md:w-72 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            <div className="whitespace-pre-line mb-8 text-slate-400 leading-relaxed">
              {SITE_CONTENT.about.description}
            </div>

            {/* Skills by Category */}
            <div className="space-y-4 mb-8">
              {skillCategories.map((category, idx) => {
                const CategoryIcon = category.icon
                return (
                  <div
                    key={category.name}
                    className="group relative glass-card p-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10"
                    style={{
                      transitionDelay: `${idx * 100}ms`,
                      animation: `fade-slide-up 0.6s ease-out ${idx * 0.15}s both`
                    }}
                  >
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(168,85,247,0.1) 100%)' }}></div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <CategoryIcon size={18} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{category.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skill}
                          className="tech-badge inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700 hover:ring-teal-400/50 hover:text-teal-300 hover:bg-slate-700/50 transition-all duration-300 cursor-default"
                          style={{ transitionDelay: `${skillIdx * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <a
              href={SITE_CONTENT.hero.cvButton.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              {SITE_CONTENT.hero.cvButton.text}
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={(el) => { sectionRefs.current["experience"] = el }}
          className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-700 ${visibleSections.has("experience") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-teal-500 to-transparent"></span>
              Experience
              <span className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></span>
            </h2>
            <div className="space-y-6 relative pl-8">
              {/* Timeline line with animated gradient */}
              <div className="absolute left-[3px] top-2 bottom-2 w-0.5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500/20" style={{ animation: 'shimmer 3s linear infinite', backgroundSize: '100% 200%' }}></div>
              </div>

              {SITE_CONTENT.experience.map((exp, index) => (
                <div
                  key={index}
                  className="group relative glass-card rounded-xl p-6 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    animation: `fade-slide-up 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Animated glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Timeline dot with pulse animation */}
                  <div className="absolute -left-[29px] top-8">
                    <div className="w-3 h-3 rounded-full bg-teal-400 ring-4 ring-slate-900 shadow-lg shadow-teal-400/50 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-teal-400 animate-ping opacity-30"></div>
                  </div>

                  <header className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-400 group-hover:text-teal-300 transition-colors" aria-label={`${exp.startDate} — ${exp.endDate}`}>
                    {exp.startDate} — {exp.endDate}
                  </header>
                  <h3 className="font-medium leading-snug text-slate-200 text-lg mb-3 group-hover:text-white transition-colors">
                    {exp.position}
                    <span className="text-slate-400"> · </span>
                    <span className="text-teal-400 group-hover:text-teal-300 transition-colors">{exp.company}</span>
                  </h3>
                  <div className="text-sm leading-normal text-slate-400 space-y-2">
                    {exp.summary.map((item, idx) => (
                      <p key={idx} className="flex items-start gap-2 group-hover:text-slate-300 transition-colors" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <span className="text-teal-400 mt-1 group-hover:animate-pulse">▹</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={(el) => { sectionRefs.current["projects"] = el }}
          className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-700 ${visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-teal-500 to-transparent"></span>
              Featured Projects
              <span className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></span>
            </h2>
            <div className="space-y-6">
              {SITE_CONTENT.projects.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="group relative glass-card rounded-xl overflow-hidden"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="p-5">
                      <div className="relative">
                        {/* Decorative corner gradient */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full"></div>

                        <h3 className="font-medium leading-snug text-slate-200 relative z-10 pr-8">
                          <span className="text-base font-semibold">
                            {project.title}
                          </span>
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3">{project.summary}</p>

                        {/* Action Links */}
                        <div className="mt-3 flex items-center gap-4">
                          {/* View Screenshot - links to Google Drive */}
                          <a
                            href={project.linkPreview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-slate-500 hover:text-teal-400 transition-colors duration-300 group/screenshot"
                          >
                            <ImageIcon size={12} className="mr-1 group-hover/screenshot:scale-110 transition-transform" />
                            View Screenshot
                          </a>

                          {/* GitHub Link */}
                          <a
                            href={project.linkSource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-slate-500 hover:text-teal-400 transition-colors duration-300 group/source"
                          >
                            <Github size={12} className="mr-1 group-hover/source:rotate-12 transition-transform" />
                            View Source
                          </a>
                        </div>

                        {/* Tech Stack */}
                        {project.tech && (
                          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                            {project.tech.map((tech) => (
                              <li key={tech}>
                                <div className="tech-badge flex items-center rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={(el) => { sectionRefs.current["contact"] = el }}
          className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-700 ${visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-teal-500 to-transparent"></span>
              Get In Touch
              <span className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></span>
            </h2>

            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed">
                I am open to discussions about job opportunities, project collaborations, or simply sharing experiences about development. Let's connect!
              </p>

              {/* Contact Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                {/* Email Card */}
                <a
                  href="mailto:ibrahimnaufal87@gmail.com"
                  className="group relative p-6 glass-card rounded-xl card-lift hover:ring-2 hover:ring-teal-400/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/25 group-hover:shadow-teal-500/40 transition-shadow duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                        Email
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">
                        Send me a message
                      </p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/6285159852911?text=Halo%20Naufal,%20saya%20tertarik%20dengan%20portfolio%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 glass-card rounded-xl card-lift hover:ring-2 hover:ring-green-400/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-200 group-hover:text-green-300 transition-colors">
                        WhatsApp
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">
                        Chat with me
                      </p>
                    </div>
                  </div>
                </a>

              </div>

              {/* Social Links in Contact */}
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-sm text-slate-500 mb-4">You can also find me on:</p>
                <div className="flex flex-wrap gap-3">
                  {SITE_CONFIG.socialLinks.map(({ name, icon, href }) => {
                    const Icon = getIcon(icon)
                    return (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-slate-400 hover:text-slate-200 transition-all duration-300 card-lift ${getSocialAnimation(icon)}`}
                      >
                        <Icon size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">{name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 rounded-xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10" style={{ animation: "gradient-shift 6s ease infinite", backgroundSize: "200% 200%" }}></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-teal-400" />
                    Let's collaborate!
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    Have an interesting project idea or need a developer for your team? I'm ready to help bring your digital vision to life.
                  </p>
                  <a
                    href="mailto:ibrahimnaufal87@gmail.com?subject=Kolaborasi%20Proyek&body=Halo%20Naufal,%0A%0ASaya%20tertarik%20untuk%20berkolaborasi%20dengan%20Anda..."
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                  >
                    <Mail size={16} />
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}