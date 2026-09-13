"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, socialLinks } from "@/content/portfolio";

const NAV = [
  { label: "Home", href: "/#top", icon: "home" },
  { label: "About", href: "/#about", icon: "user" },
  { label: "Experience", href: "/#work", icon: "briefcase" },
  { label: "Projects", href: "/#projects", icon: "grid" },
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

/** Brand marks for the social row (Simple Icons paths, CC0). */
const SOCIAL: Record<string, string> = {
  GitHub:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  "Stack Overflow":
    "M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852 10.48 2.189.451-2.07-10.478-2.19-.453 2.071zm1.359-5.056 9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785 8.217 6.855 1.359-1.62-8.216-6.86-1.35 1.617-.01.008zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z",
  Email:
    "M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5Zm.9 2.1L12 13.2l9.6-6.6H2.4Z",
};

function SocialIcon({ name }: { name: string }) {
  const path = SOCIAL[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="h-4 w-4"
    >
      <path d={path} />
    </svg>
  );
}

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
        </div>

        <ul className="mt-0 flex gap-2.5 lg:mt-6 lg:justify-center">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                title={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-shell-ink/25 transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon name={link.label} />
                <span className="sr-only">{link.label}</span>
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
