import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/content/portfolio";

const project = projects.find((p) => p.slug === "pokedex")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.tagline,
  alternates: { canonical: "/projects/pokedex" },
  openGraph: {
    title: project.name,
    description: project.tagline,
    url: "/projects/pokedex",
  },
};

export default function PokedexPage() {
  return <CaseStudy project={project} />;
}
