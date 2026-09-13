import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/content/portfolio";

const project = projects.find((p) => p.slug === "document-sync")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.tagline,
  alternates: { canonical: "/projects/document-sync" },
  openGraph: {
    title: project.name,
    description: project.tagline,
    url: "/projects/document-sync",
  },
};

export default function Page() {
  return <CaseStudy project={project} />;
}
