# alemanialloyd.github.io

Lloyd Alemania's portfolio. Built with Next.js (App Router, static export), TypeScript, Tailwind CSS, shadcn/ui and Motion (Framer Motion).

## Stack

- **Next.js 16** — `output: "export"` produces a fully static site in `out/`
- **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** components
- **next-themes** — dark theme by default, with a light theme toggle
- **motion** (Framer Motion) — scroll reveals, hover/tap interactions, the hero orbit

## Adding a project

Everything shown on the site is driven by data in [`src/data/projects.ts`](src/data/projects.ts). To add a new project:

1. Add its screenshots to `public/images/projects/<slug>/` and its logo to `public/images/logos/`.
2. Append a new object to the `projects` array in `src/data/projects.ts` (see [`src/types/project.ts`](src/types/project.ts) for the shape). Keep `images` to 4-8 curated shots — that list drives the detail carousel.

No other file needs to change — the grid, cards and detail dialog all read from that array.

Personal info (name, contact details, social links) lives in [`src/data/profile.ts`](src/data/profile.ts).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs the static site to `out/`.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `out/` via GitHub Pages (Actions deployment). In the repo settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
