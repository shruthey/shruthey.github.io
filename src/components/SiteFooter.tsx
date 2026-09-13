import { site, socialLinks } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-xl">
          {site.name}
          <span className="text-accent">.</span>
        </p>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-paper/60 sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
      </div>
    </footer>
  );
}
