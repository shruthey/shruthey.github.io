import type { Metadata } from "next";
import Image from "next/image";
import { contactInfo, experiences, greeting, schools, skillsSection } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${greeting.name}, Full Stack Software Developer.`,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume",
    description: `Resume for ${greeting.name}, Full Stack Software Developer.`,
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <header className="border-b-2 border-ink bg-violet">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h1 className="font-display text-5xl tracking-tight sm:text-6xl">
            Resume<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-lg">Feel free to download a copy.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={greeting.resumeHref}
              download
              className="rounded-lg border-2 border-ink bg-ink px-6 py-3 font-display text-paper transition-transform hover:-translate-y-0.5"
            >
              Download PDF
            </a>
            <a
              href={greeting.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-ink bg-surface px-6 py-3 font-display transition-transform hover:-translate-y-0.5"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        {/*
          An image of the PDF rather than an <embed>: iframe/embed PDF rendering
          is unreliable on iOS Safari. The structured text below carries the
          same information for screen readers and search engines.
        */}
        <Image
          src="/resume-preview.webp"
          alt={`Resume of ${greeting.name}. The same information is listed in text below.`}
          width={1313}
          height={1700}
          priority
          className="w-full rounded-xl border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--color-ink)]"
        />

        <section className="mt-16 border-t-2 border-ink pt-12">
          <h2 className="font-display text-3xl tracking-tight">
            Summary
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {greeting.subTitle}
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-tight">
            Experience
          </h2>
          <ul className="mt-6 space-y-6">
            {experiences.map((job) => (
              <li key={job.company}>
                <h3 className="font-display text-xl">
                  {job.role}, {job.company}
                </h3>
                <p className="text-sm text-muted">{job.date}</p>
                <p className="mt-2 leading-relaxed">{job.desc}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl tracking-tight">
            Education
          </h2>
          <ul className="mt-6 space-y-6">
            {schools.map((school) => (
              <li key={school.schoolName}>
                <h3 className="font-display text-xl">{school.schoolName}</h3>
                <p className="font-semibold">{school.subHeader}</p>
                <p className="text-sm text-muted">{school.duration}</p>
                <p className="mt-2 leading-relaxed">{school.desc}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl tracking-tight">Skills</h2>
          <p className="mt-4 leading-relaxed">
            {skillsSection.softwareSkills.map((s) => s.name).join(" · ")}
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-tight">Contact</h2>
          <p className="mt-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="underline decoration-accent decoration-2 underline-offset-4"
            >
              {contactInfo.email}
            </a>
            {" · "}
            <a
              href={`tel:${contactInfo.number.replace(/[^+\d]/g, "")}`}
              className="underline decoration-accent decoration-2 underline-offset-4"
            >
              {contactInfo.number}
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
