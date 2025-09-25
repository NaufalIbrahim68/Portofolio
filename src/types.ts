// src/types.ts

import type { ImageMetadata } from "astro:assets";

export interface NavLink {
  text: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  // New properties for animations
  iconSvg?: string;
  hoverAnimation?: string;
}

export interface HeaderProps {
  siteLogo: ImageMetadata;
  navLinks: NavLink[];
}

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: SocialLink[];
  socialImage: ImageMetadata;
  canonicalURL?: string;
}

export interface HeroProps {
  title: string;
  tagline: string;
  summary: string;
  email: string;
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
  name?: string; // alias for title if needed
  summary: string;
  linkPreview: string;
  linkSource: string;
  image: string | ImageMetadata; // Support both string and Astro ImageMetadata
  alt: string;
  // New properties for animations
  imageAnimation?: string;
  containerAnimation?: string;
  overlayAnimation?: string;
}

export interface AboutProps {
  description: string;
  image: ImageMetadata;
  alt: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}