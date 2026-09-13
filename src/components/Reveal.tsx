"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms, applied only when the element actually animates. */
  delay?: number;
  className?: string;
  /**
   * Element to render. Use "li" inside a list — a wrapper <div> between <ul>
   * and its children breaks list semantics for screen readers.
   */
  as?: "div" | "li";
}

/**
 * Fades content up as it scrolls into view.
 *
 * Deliberately renders visible-by-default: the hidden state is applied in an
 * effect, so if JS never runs, or IntersectionObserver is missing, or the user
 * prefers reduced motion, the content simply shows. Motion never gates content.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    const node = ref.current;
    if (!node) return;

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={`${armed && !shown ? "reveal-armed" : ""} ${shown ? "reveal-in" : ""} ${className}`}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
