<!-- File: File-structure.md -->

# File Structure

petno_saas/
├── .next/ # Next.js build output
├── app/ # App directory (Next.js 13+)
│ ├── api/ # Serverless API routes
│ ├── blog/ # Blog pages
│ ├── dashboard/ # Dashboard pages
│ ├── privacy-policy/ # Privacy Policy page
│ ├── signin/ # Sign‑in page
│ ├── tos/ # Terms of Service page
│ ├── apple-icon.png
│ ├── favicon.ico
│ ├── globals.css
│ ├── icon.png
│ ├── layout.js
│ ├── not-found.js
│ ├── error.js
│ ├── opengraph-image.png
│ ├── page.js
│ └── twitter-image.png
├── components/ # Shared React components
├── Documentation/ # Project docs (Markdown)
│ ├── App-flow.md
│ ├── Backend-structure.md
│ ├── File-structure.md
│ ├── frontend-guidelines.md
│ ├── PRD.md
│ └── Tech-stack.md
├── lib/ # Core utilities & low‑level helpers
├── libs/ # Service clients & integrations
│ ├── supabase/ # Supabase client & helpers
│ ├── api.js
│ ├── gpt.js
│ ├── resend.js
│ ├── seo.js
│ └── stripe.js
├── node_modules/ # NPM dependencies
├── public/ # Static assets
├── .env.local # Environment variables (gitignored)
├── .eslintrc.json # ESLint configuration
├── .gitignore
├── components.json # IDE component import settings
├── config.js # Global configuration
├── jsconfig.json # Path aliases & JS/TS settings
├── middleware.js # Next.js middleware
├── next-sitemap.config.js # Sitemap generation config
├── next.config.js # Next.js configuration
├── package.json # Project manifest
├── package-lock.json # Lockfile
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md # Project overview & setup

## Conventions

- **Kebab‑case** for files & directories.
- **PascalCase** for React component filenames.
- Use the **App Router** (`app/`) for pages and layouts.
- Keep shared UI in `components/`.
- Place third‑party service wrappers in `libs/` and generic helpers in `lib/`.
- Static assets live in `public/`.
