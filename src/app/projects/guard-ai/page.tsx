import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/content/portfolio";

const project = projects.find((p) => p.slug === "guard-ai")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.tagline,
  alternates: { canonical: "/projects/guard-ai" },
  openGraph: {
    title: project.name,
    description: project.tagline,
    url: "/projects/guard-ai",
  },
};

export default function GuardAiPage() {
  return <CaseStudy project={project} />;
}
