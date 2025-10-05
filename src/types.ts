/// <reference types="astro/client" />

export interface NavLink {
  text: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  iconSvg?: string;
  hoverAnimation?: string;
}

export interface HeaderProps {
  siteLogo: string; // sebelumnya ImageMetadata
  navLinks: NavLink[];
}

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: SocialLink[];
  socialImage: string; // sebelumnya ImageMetadata
  canonicalURL?: string;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  cvButton?: {
    link: string;
    text: string;
  };
  tagline?: string; // <--- tambahkan ini
}


export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string | string[];
}

export interface ProjectProps {
  title: string;
  name?: string;
  summary: string;
  linkPreview: string;
  linkSource: string;
  image: string; // sebelumnya string | ImageMetadata
  alt: string;
  imageAnimation?: string;
  containerAnimation?: string;
  overlayAnimation?: string;
}

export interface AboutProps {
  description: string;
  image: string; // sebelumnya ImageMetadata
  alt: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}
