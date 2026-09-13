import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { site, socialLinks } from "@/content/portfolio";
import { Sidebar } from "@/components/Sidebar";
import { SiteFooter } from "@/components/SiteFooter";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  // Required: without it OG image URLs emit as relative paths and crawlers
  // reject them.
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: "shruthey98@gmail.com",
    sameAs: socialLinks
      .filter((l) => !l.href.startsWith("mailto:"))
      .map((l) => l.href),
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Texas at Dallas" },
      { "@type": "CollegeOrUniversity", name: "Christ University" },
    ],
    worksFor: { "@type": "Organization", name: "MyDirectives" },
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Sidebar />
        <div className="lg:pl-72">
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
