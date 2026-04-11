# Mavisoft — Corporate Website

> A production-grade corporate website built for **Mavisoft B.V.**, a Dutch AI company headquartered in Rotterdam. Designed and developed end-to-end with a focus on premium aesthetics, cinematic motion design, and scalable architecture.

🔗 **Live Site:** [mavisoft.netlify.app](https://mavisoft.netlify.app/)

---

## Overview

This project is a fully responsive, single-page corporate website. It communicates Mavisoft's brand identity through immersive visuals and sophisticated UI/UX patterns — including scroll-triggered animations, an auto-playing industry carousel, modal-driven content layers, a functional contact form, and full legal documentation (Privacy Policy & Terms of Service) surfaced via accessible dialogs.

The site is optimized for performance, SEO, and accessibility out of the box, leveraging Next.js 15's App Router and React 19's latest features.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| UI Primitives | Headless UI, Heroicons, Lucide React |
| Email | Resend API |
| Linting / Formatting | ESLint, Prettier |

---

## Features

- **Cinematic Hero** — Full-viewport hero with a typewriter headline effect, smooth background scale reveal, and staggered content entrance animations.
- **Scroll-Triggered Animations** — Every section uses `whileInView` variants (slide-in, scale reveal, fade-up, stagger) via a centralized animation library, ensuring a consistent and polished feel throughout.
- **Industry Carousel** — Auto-playing, touch-friendly carousel with manual navigation controls and glassmorphism dot indicators, covering Airports, Ports, Warehouses, and Energy sectors.
- **Modular Section Architecture** — Each page section (`Hero`, `Spectra`, `Solutions`, `Industries`, `Vision`, `Footer`) is an isolated component wired into a single page, making the codebase easy to maintain and extend.
- **Modal Content System** — Company info (About, Mission, Team), Press & Media, Blog, Privacy Policy, and Terms of Service are all surfaced in accessible dialogs without additional routes.
- **Functional Contact Form** — Integrated with the Resend API for email delivery.
- **Reusable UI Component Library** — A full catalog of accessible, headless-first components: `Button`, `Dialog`, `Dropdown`, `Combobox`, `Listbox`, `Badge`, `Avatar`, `Table`, `Pagination`, and more.
- **Performance-Optimized Images** — All images use Next.js `<Image>` with `fill`, `priority`, and `sizes` tuned per context to minimize layout shift and payload.
- **Dark Mode Design System** — Consistent `zinc-950` base with glassmorphism surfaces, translucent borders, gradient overlays, and red/cyan accent palette.

---

## Project Structure

```
src/
├── app/              # Next.js App Router entry: layout, metadata, root page
├── components/       # Reusable, accessible UI component library
├── sections/         # Top-level page sections (Hero, Solutions, Industries…)
├── lib/              # Shared utilities — centralized Framer Motion animation variants
├── data/             # Static content: team members, press items, blog posts, nav links
├── types/            # Shared TypeScript type definitions
└── styles/           # Global CSS and Tailwind configuration
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## License

Licensed under the terms outlined in [`LICENSE.md`](./LICENSE.md).