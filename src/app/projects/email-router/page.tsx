import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/content/portfolio";

const project = projects.find((p) => p.slug === "email-router")!;

export const metadata: Metadata = {
  title: project.name,
  description: project.tagline,
  alternates: { canonical: "/projects/email-router" },
  openGraph: {
    title: project.name,
    description: project.tagline,
    url: "/projects/email-router",
  },
};

export default function Page() {
  return <CaseStudy project={project} />;
}
