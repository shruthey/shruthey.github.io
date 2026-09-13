import Link from "next/link";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight hover:text-accent"
        >
          Shruthi<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-medium sm:gap-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-1.5 transition-colors hover:bg-ink hover:text-paper sm:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
