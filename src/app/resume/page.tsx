import type { Metadata } from "next";
import {
  contactInfo,
  experiences,
  greeting,
  schools,
  skillGroups,
} from "@/content/portfolio";
import { Reveal } from "@/components/Reveal";
import { SkillIcon } from "@/components/SkillIcon";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${greeting.name}, Software Engineer.`,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume",
    description: `Resume for ${greeting.name}, Software Engineer.`,
    url: "/resume",
  },
};

/** A dated entry on the vertical timeline. */
function TimelineItem({
  title,
  subtitle,
  date,
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="relative border-l-2 border-ink pb-10 pl-8 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-ink bg-accent"
      />
      <h3 className="font-display text-xl leading-tight">{title}</h3>
      <p className="mt-2 inline-block rounded-md bg-ink px-2.5 py-1 font-mono text-xs text-paper">
        {date}
      </p>
      <p className="mt-2 italic text-muted">{subtitle}</p>
      {children}
    </li>
  );
}

export default function ResumePage() {
  return (
    <>
      <header className="border-b-2 border-ink bg-violet">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h1 className="font-display text-5xl tracking-tight sm:text-6xl">
            Resume<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            {greeting.subTitle}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <Reveal>
          <section>
            <h2 className="font-display text-3xl tracking-tight">Experience</h2>
            <ol className="mt-8">
              {experiences.map((job) => (
                <TimelineItem
                  key={job.company}
                  title={job.role}
                  subtitle={job.company}
                  date={job.date}
                >
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {job.stack.join(", ")}
                  </p>
                </TimelineItem>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16">
            <h2 className="font-display text-3xl tracking-tight">Education</h2>
            <ol className="mt-8">
              {schools.map((school) => (
                <TimelineItem
                  key={school.schoolName}
                  title={school.subHeader}
                  subtitle={school.schoolName}
                  date={school.duration}
                >
                  <p className="mt-3 leading-relaxed">{school.desc}</p>
                </TimelineItem>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16">
            <h2 className="font-display text-3xl tracking-tight">
              Technical skills
            </h2>
            <div className="mt-8 space-y-7">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {group.label}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border-2 border-ink bg-surface px-4 py-2 text-sm font-semibold"
                      >
                        <SkillIcon icon={skill.icon} className="h-4 w-4" />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-16 rounded-xl border-2 border-ink bg-surface p-6 sm:p-8">
            <h2 className="font-display text-xl tracking-tight">Get in touch</h2>
            <p className="mt-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-lg underline decoration-accent decoration-2 underline-offset-4"
              >
                {contactInfo.email}
              </a>
            </p>
          </section>
        </Reveal>
      </div>
    </>
  );
}
