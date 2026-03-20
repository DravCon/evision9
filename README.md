# Evision9

The official website for **Evision9** — an independent app studio building iOS apps people love.

🌐 **Live**: [evision9.com](https://evision9.com)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Blog**: Markdown files in `src/content/blog/` with gray-matter frontmatter
- **Hosting**: [Vercel](https://vercel.com/)
- **Domain**: [Cloudflare Registrar](https://domains.cloudflare.com/)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage (hero + products + about preview)
│   ├── layout.tsx            # Root layout with fonts & metadata
│   ├── globals.css           # Global styles + blog prose styles
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual blog post
│   └── products/
│       └── [slug]/page.tsx   # Individual product page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── AppCard.tsx
├── lib/
│   ├── data.ts               # App data & nav links
│   └── blog.ts               # Blog utilities (read markdown, parse frontmatter)
└── content/
    └── blog/                  # Blog posts as .md/.mdx files
        └── hello-world.md
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Writing Blog Posts

Add a `.md` or `.mdx` file to `src/content/blog/` with this frontmatter:

```md
---
title: "Your Post Title"
date: "2025-03-20"
excerpt: "A short summary shown on the blog listing page."
tags: ["changelog", "passit"]
---

Your content here. Supports **markdown** formatting.
```

Posts are sorted by date (newest first) and automatically appear on `/blog`.

## Adding a New App

Edit `src/lib/data.ts` and add a new entry to the `apps` array. The product page at `/products/[slug]` is generated automatically.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — deploy with zero config

### Connect Cloudflare Domain

1. In Cloudflare DNS, add a CNAME record:
   - **Name**: `@` (or `evision9.com`)
   - **Target**: `cname.vercel-dns.com`
   - **Proxy**: DNS only (grey cloud)
2. Add a CNAME for `www`:
   - **Name**: `www`
   - **Target**: `cname.vercel-dns.com`
3. In Vercel project settings → Domains, add `evision9.com` and `www.evision9.com`

## License

© 2025 Evision9. All rights reserved.
