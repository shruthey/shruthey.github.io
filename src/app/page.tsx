import Image from "next/image";
import Link from "next/link";
import {
  contactInfo,
  experiences,
  greeting,
  projects,
  schools,
  skillsSection,
  socialLinks,
} from "@/content/portfolio";
import { Reveal } from "@/components/Reveal";
import { SkillIcon } from "@/components/SkillIcon";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b-2 border-ink bg-lime">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em]">
            Full Stack Software Developer
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {greeting.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
            {greeting.subTitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-lg border-2 border-ink bg-ink px-6 py-3 font-display text-paper transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
            <Link
              href="/resume"
              className="rounded-lg border-2 border-ink bg-surface px-6 py-3 font-display transition-transform hover:-translate-y-0.5"
            >
              View resume
            </Link>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              {skillsSection.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {skillsSection.subTitle}
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {skillsSection.highlights.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 80}
                className="h-full rounded-xl border-2 border-ink bg-surface p-6 text-base leading-relaxed"
              >
                <span aria-hidden="true" className="mb-3 block text-2xl">
                  ⚡
                </span>
                {item}
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <ul className="mt-12 flex flex-wrap gap-3">
              {skillsSection.softwareSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full border-2 border-ink bg-surface px-4 py-2 text-sm font-semibold"
                >
                  <SkillIcon icon={skill.icon} className="h-4 w-4" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="scroll-mt-16 border-b-2 border-ink bg-violet">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Experience
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {experiences.map((job, i) => (
              <Reveal key={job.company} delay={i * 100}>
                <article className="h-full rounded-xl border-2 border-ink bg-surface p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-lg border-2 border-ink bg-white object-contain p-1.5"
                    />
                    <div>
                      <h3 className="font-display text-xl leading-tight">
                        {job.role}
                      </h3>
                      <p className="font-semibold">{job.company}</p>
                      <p className="mt-0.5 text-sm text-muted">{job.date}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed">{job.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-16 border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              A couple of things I&rsquo;ve built end to end.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <article className="group flex h-full flex-col rounded-xl border-2 border-ink bg-surface p-7 transition-transform hover:-translate-y-1">
                  <h3 className="font-display text-2xl">{project.name}</h3>
                  <p className="mt-2 text-lg">{project.tagline}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 font-display underline decoration-accent decoration-4 underline-offset-4 group-hover:text-accent"
                  >
                    Read the case study →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-b-2 border-ink bg-electric text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Education
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {schools.map((school, i) => (
              <Reveal key={school.schoolName} delay={i * 100}>
                <article className="h-full rounded-xl border-2 border-ink bg-surface p-6 text-ink">
                  <div className="flex items-start gap-4">
                    <Image
                      src={school.logo}
                      alt={`${school.schoolName} logo`}
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-lg border-2 border-ink bg-white object-contain p-1.5"
                    />
                    <div>
                      <h3 className="font-display text-lg leading-tight">
                        {school.schoolName}
                      </h3>
                      <p className="font-semibold">{school.subHeader}</p>
                      <p className="mt-0.5 text-sm text-muted">
                        {school.duration}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed">{school.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                {contactInfo.title}
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-4 text-lg text-muted">{contactInfo.subtitle}</p>

              <dl className="mt-8 space-y-4">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg underline decoration-accent decoration-2 underline-offset-4"
                    >
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${contactInfo.number.replace(/[^+\d]/g, "")}`}
                      className="text-lg underline decoration-accent decoration-2 underline-offset-4"
                    >
                      {contactInfo.number}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted">
                    Elsewhere
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    {socialLinks
                      .filter((l) => !l.href.startsWith("mailto:"))
                      .map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-accent decoration-2 underline-offset-4"
                        >
                          {link.label}
                        </a>
                      ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-xl border-2 border-ink bg-surface p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
