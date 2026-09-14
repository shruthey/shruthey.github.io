"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/types";

const FRONT_MS = 5200;
const BACK_MS = 4200;

/**
 * A project card that periodically flips to show its outcomes.
 *
 * The flip is decoration: both faces are in the DOM and readable, the card
 * settles on the front whenever it is hovered or focused, and the whole
 * rotation is skipped for reduced-motion users. `index` staggers the start so
 * the grid doesn't flip in unison.
 */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const [held, setHeld] = useState(false);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    let showingBack = false;

    const step = () => {
      // While the reader is on the card, hold the front face and check back
      // later rather than flipping out from under them.
      if (paused.current) {
        timer = setTimeout(step, 1200);
        return;
      }
      showingBack = !showingBack;
      setFlipped(showingBack);
      timer = setTimeout(step, showingBack ? BACK_MS : FRONT_MS);
    };

    // Stagger by position so the cards rotate well out of phase rather than
    // flipping the whole grid at once.
    timer = setTimeout(step, FRONT_MS + index * 2400);
    return () => clearTimeout(timer);
  }, [index]);

  const hold = () => {
    paused.current = true;
    setHeld(true);
    setFlipped(false);
  };
  const release = () => {
    paused.current = false;
    setHeld(false);
  };

  const showBack = flipped && !held;

  return (
    <div
      className="group h-full [perspective:1600px]"
      onMouseEnter={hold}
      onMouseLeave={release}
      onFocusCapture={hold}
      onBlurCapture={release}
    >
      <div
        className={`relative h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          showBack ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <article className="flex h-full flex-col rounded-xl border-2 border-ink bg-surface p-7 transition-transform [backface-visibility:hidden] group-hover:-translate-y-1">
          <h3 className="font-display text-2xl">{project.name}</h3>
          <p className="mt-2 text-lg">{project.tagline}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-paper"
              >
                {tech}
              </li>
            ))}
            {project.stack.length > 5 && (
              <li className="rounded-full border-2 border-ink px-3 py-1 text-xs font-semibold">
                +{project.stack.length - 5}
              </li>
            )}
          </ul>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-auto pt-6 font-display underline decoration-accent decoration-4 underline-offset-4 group-hover:text-accent-text"
          >
            Read the case study →
          </Link>
        </article>

        {/*
          Back — absolutely positioned over the front, so it inherits the
          front's height. Content is capped and the list scrolls rather than
          spilling past the border on a long outcome.
        */}
        <article
          aria-hidden={!showBack}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border-2 border-ink bg-lime p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em]">
            {project.name}
          </p>
          <h3 className="mt-1 font-display text-2xl">What it delivered</h3>

          {/*
            Two outcomes, each clamped to two lines: the back has to fit the
            front's height, and a clamp ends on a whole line where a plain
            overflow would slice a sentence mid-word.
          */}
          <ul className="mt-4 min-h-0 flex-1 space-y-2.5 overflow-hidden">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <li key={outcome} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                />
                <span className="line-clamp-2">{outcome}</span>
              </li>
            ))}
          </ul>

          <Link
            href={`/projects/${project.slug}`}
            tabIndex={showBack ? undefined : -1}
            className="mt-4 shrink-0 font-display underline decoration-ink decoration-4 underline-offset-4"
          >
            Read the case study →
          </Link>
        </article>
      </div>
    </div>
  );
}
