<!-- File: Tech-stack.md -->

# Tech Stack

| Layer                   | Technology                        | Reason                                 |
| ----------------------- | --------------------------------- | -------------------------------------- |
| **Frontend**            | Next.js (React)                   | SSR/SSG, great DX                      |
| **Styling**             | Tailwind CSS                      | Utility‑first, rapid prototyping       |
| **Backend / API**       | Next.js API routes + Supabase     | Serverless, real‑time, auth out of box |
| **Database**            | PostgreSQL (via Supabase)         | Reliable, relational                   |
| **Authentication**      | AuthJS (NextAuth) + Supabase Auth | Secure, extensible                     |
| **Payments**            | Stripe                            | Ubiquitous, well‑documented            |
| **Email**               | Resend                            | Simple email link delivery             |
| **Contracts**           | HelloSign API                     | Easy digital signing                   |
| **CI / CD**             | Vercel                            | Zero‑config deploys                    |
| **Monitoring & Alerts** | Sentry (optional)                 | Error tracking                         |

## Why These?

- **Speed of development**: Cursor IDE + Next.js conventions
- **Scalability**: Serverless + managed DB
- **Maintainability**: Clear separation of concerns
