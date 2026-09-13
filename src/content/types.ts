export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Experience {
  role: string;
  company: string;
  logo: string;
  date: string;
  desc: string;
}

export interface School {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc: string;
}

export type ProjectSlug = "pokedex" | "guard-ai";

export interface Project {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  /** Original portfolio copy, preserved verbatim. */
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
  links: { label: string; url: string }[];
}
