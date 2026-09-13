export interface Skill {
  name: string;
  /** Key into the inline SVG set in components/SkillIcon.tsx. */
  icon: string;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

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
  /** One-line summary shown on the card. */
  desc: string;
  /** Detailed accomplishments, shown expanded on the resume page. */
  bullets: string[];
  stack: string[];
}

export interface School {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc: string;
}

export type ProjectSlug =
  | "document-sync"
  | "email-router"
  | "guard-ai"
  | "pokedex";

export interface Project {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  /** Longer-form description of the project as a whole. */
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
  links: { label: string; url: string }[];
}
