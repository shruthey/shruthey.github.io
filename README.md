# shruthey.github.io

Personal portfolio — [shruthey.github.io](https://shruthey.github.io/)

Next.js (App Router, static export) · React · TypeScript · Tailwind CSS

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → out/
```

The build has no server component: `output: 'export'` writes plain HTML/CSS/JS
to `out/`, which GitHub Pages serves directly.

## Deploying

Push to `main`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds the site and publishes it to GitHub Pages. No manual deploy step, and
nothing to commit to a separate branch.

## Editing content

**All text lives in [`src/content/portfolio.ts`](src/content/portfolio.ts).**
Experience, education, projects, skills, and contact details are typed objects
there — edit that one file rather than hunting through components.

Adding another project takes two steps:

1. Add an entry to `projects` in `src/content/portfolio.ts` (add its slug to
   `ProjectSlug` in `types.ts`).
2. Copy `src/app/projects/guard-ai/` to a new directory named for the slug and
   update the two `slug` references inside.
3. Add it to `src/app/sitemap.ts` — actually automatic, since the sitemap maps
   over `projects`.

Literal route directories are used instead of a `[slug]` dynamic route so the
per-page link-preview images generate reliably under static export.

## Adding a skill icon

Skill glyphs are inline SVG, generated from the `simple-icons` package and
committed to `src/components/SkillIcon.tsx` — the package itself is not a
dependency, so the build doesn't pull it.

```bash
npm install --no-save simple-icons
node scripts/gen-icons.mjs
```

Add the icon to the `want` map in that script (key = the `icon` value you use
in `portfolio.ts`, value = the exact Simple Icons title), or to `custom` if
Simple Icons doesn't carry the mark — as with Java and AWS, which were removed
for trademark reasons, and concepts like RAG that aren't products.

## Updating the resume

`/resume` is a **real HTML page**, not a PDF — there's no file to swap and
nothing to regenerate. It renders from the same `src/content/portfolio.ts`
data as the home page, so editing `experiences`, `schools`, or `skillGroups`
updates both at once.

That also means the resume is indexable by search engines, readable on a phone,
and accessible to screen readers — none of which is true of a PDF in an
`<iframe>` (which iOS Safari renders unreliably anyway).

## Environment variables

Copy `.env.example` to `.env.local`. Both features degrade gracefully when
unset: analytics renders nothing, and the contact form shows a message
pointing at the email address.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form delivery ([web3forms.com](https://web3forms.com)) |
| `NEXT_PUBLIC_UMAMI_SRC` | Umami analytics script URL |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Umami site ID |

In CI these come from repository secrets named `WEB3FORMS_KEY`, `UMAMI_SRC`,
and `UMAMI_WEBSITE_ID`.

Every `NEXT_PUBLIC_*` value is compiled into the client bundle and is public.
The Web3Forms key is designed to be public — it only identifies the destination
inbox. **Never put an actual secret in one of these.**

## Notable implementation details

- **`scripts/fix-og-extensions.mjs`** runs after every build. Next exports the
  generated preview images as extensionless files; GitHub Pages sets
  `Content-Type` from the file extension, so without the rename they'd be served
  as `application/octet-stream` and Slack/LinkedIn would refuse to render them.
- **Scroll animations never gate content.** `Reveal` renders visible by default
  and only hides content once JS confirms `IntersectionObserver` support, so a
  script failure can't leave the page blank. Motion is also disabled under
  `prefers-reduced-motion`.
- **Skill icons are inline SVG** (`src/components/SkillIcon.tsx`) rather than a
  Font Awesome CDN stylesheet — one less render-blocking third-party request.
