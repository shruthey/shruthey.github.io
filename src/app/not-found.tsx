import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">
        Page not found<span className="text-accent">.</span>
      </h1>
      <p className="mt-5 text-lg text-muted">
        That link doesn&rsquo;t lead anywhere on this site.
      </p>
      <Link
        href="/"
        className="mt-8 self-start rounded-lg border-2 border-ink bg-ink px-6 py-3 font-display text-paper transition-transform hover:-translate-y-0.5"
      >
        Back home
      </Link>
    </div>
  );
}
