import Link from "next/link";
import type { Project } from "@/content/types";
import { Reveal } from "@/components/Reveal";

/**
 * Shared case-study layout. The two project routes are literal directories
 * (not a [slug] dynamic route) so OG image generation under `output: export`
 * is guaranteed — but the content and chrome live here, not duplicated.
 */
export function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <header className="border-b-2 border-ink bg-lime">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/#projects"
            className="font-mono text-sm underline decoration-2 underline-offset-4 hover:text-accent-text"
          >
            ← Back to projects
          </Link>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            {project.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed">{project.tagline}</p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border-2 border-ink bg-surface px-3.5 py-1.5 text-sm font-semibold"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-ink bg-ink px-5 py-2.5 font-display text-paper transition-transform hover:-translate-y-0.5"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <Reveal>
          <section>
            <h2 className="font-display text-3xl tracking-tight">The problem</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.problem}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-14">
            <h2 className="font-display text-3xl tracking-tight">Approach</h2>
            <ol className="mt-6 space-y-4">
              {project.approach.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border-2 border-ink bg-surface p-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm text-paper"
                  >
                    {i + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-14">
            <h2 className="font-display text-3xl tracking-tight">Outcome</h2>
            <ul className="mt-6 space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="text-accent">
                    ▸
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-14 rounded-xl border-2 border-ink bg-surface p-6 sm:p-8">
            <h2 className="font-display text-xl tracking-tight">In full</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
          </section>
        </Reveal>

        <Reveal>
          <nav className="mt-14 border-t-2 border-ink pt-8">
            <Link
              href="/#contact"
              className="font-display text-2xl underline decoration-accent decoration-4 underline-offset-8 hover:text-accent"
            >
              Want to talk about this work? →
            </Link>
          </nav>
        </Reveal>
      </div>
    </article>
  );
}
