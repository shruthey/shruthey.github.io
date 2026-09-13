"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "a Software Engineer",
  "a Backend Engineer",
  "a Frontend Engineer",
  "a Forward Deployed AI Engineer",
];

const TYPE_MS = 65;
const DELETE_MS = 32;
const HOLD_MS = 1800;

/**
 * Types each role in, holds, deletes, moves to the next.
 *
 * Renders the first role as plain text on the server and for anyone with JS
 * off or reduced motion on — the sentence always reads correctly, the
 * animation is the enhancement.
 */
export function RotatingRole() {
  const [text, setText] = useState(ROLES[0]);
  const [animate, setAnimate] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (!animate) return;

    let roleIndex = 0;
    let charIndex = ROLES[0].length;
    let deleting = false;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      const role = ROLES[roleIndex];

      if (!deleting) {
        charIndex += 1;
        setText(role.slice(0, charIndex));
        if (charIndex >= role.length) {
          deleting = true;
          timer.current = setTimeout(step, HOLD_MS);
          return;
        }
        timer.current = setTimeout(step, TYPE_MS);
      } else {
        charIndex -= 1;
        setText(role.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
        timer.current = setTimeout(step, deleting ? DELETE_MS : TYPE_MS);
      }
    };

    timer.current = setTimeout(step, HOLD_MS);
    return () => {
      cancelled = true;
      clearTimeout(timer.current);
    };
  }, [animate]);

  return (
    <>
      {/*
        Screen readers get the role once, as settled text; the animated span is
        hidden from them so they don't hear a character-by-character stream.
        The surrounding "I am " lives in the page, so this contributes only the
        role itself — no duplication.
      */}
      <span className="sr-only">{ROLES[0]}.</span>
      <span aria-hidden="true">
        {text}
        {animate && (
          <span className="ml-0.5 inline-block w-[3px] animate-pulse self-stretch bg-accent align-baseline">
            &nbsp;
          </span>
        )}
      </span>
    </>
  );
}
