"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, socialLinks } from "@/content/portfolio";

const NAV = [
  { label: "Home", href: "/#top", icon: "home" },
  { label: "About", href: "/#about", icon: "user" },
  { label: "Experience", href: "/#work", icon: "briefcase" },
  { label: "Projects", href: "/#projects", icon: "grid" },
  { label: "Resume", href: "/resume", icon: "file" },
  { label: "Contact", href: "/#contact", icon: "mail" },
];

/** Minimal line icons, 24x24, stroked. */
const ICONS: Record<string, string> = {
  home: "M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
  briefcase:
    "M3 8.5h18v11H3zM8.5 8.5V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2.5",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  file: "M13 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zM13 3v5h5",
  mail: "M3 6.5h18v11H3zM3 7l9 6 9-6",
};

function NavIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  // Close the mobile drawer on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const initials = "SP";

  return (
    <>
      {/* Mobile bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-ink bg-shell px-4 py-3 text-shell-ink lg:hidden">
        <Link href="/#top" className="font-display text-lg">
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-nav"
          className="rounded-md border-2 border-shell-ink/30 px-3 py-1.5 text-sm font-semibold"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar / drawer */}
      <aside
        id="site-nav"
        className={`${
          open ? "block" : "hidden"
        } fixed inset-x-0 top-[57px] z-40 border-b-2 border-ink bg-shell px-6 py-6 text-shell-ink lg:bottom-0 lg:left-0 lg:right-auto lg:top-0 lg:block lg:w-72 lg:overflow-y-auto lg:border-b-0 lg:border-r-2 lg:px-7 lg:py-9`}
      >
        <div className="hidden flex-col items-center text-center lg:flex">
          <span
            aria-hidden="true"
            className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent bg-shell-ink/10 font-display text-3xl"
          >
            {initials}
          </span>
          <p className="mt-4 font-display text-xl leading-tight">{site.name}</p>
          <p className="mt-1 text-sm text-shell-ink/60">{site.role}</p>
        </div>

        <ul className="mt-0 flex flex-wrap gap-2 lg:mt-6 lg:justify-center">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="block rounded-full border border-shell-ink/25 px-3 py-1 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Main" className="mt-7">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium text-shell-ink/75 transition-colors hover:bg-shell-ink/10 hover:text-accent"
                >
                  <NavIcon name={item.icon} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
