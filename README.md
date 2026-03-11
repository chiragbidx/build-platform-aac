# Mailvanta – Email Marketing SaaS (Next.js, Drizzle ORM, PostgreSQL)

This repository is a production-grade Next.js 16 (App Router) email marketing starter featuring user authentication, a ready-to-use dashboard, campaign creation, and SendGrid-powered bulk email. Intended for rapid SaaS launch with branding, security, and metrics baked in.

---

## 1. Current Scope
- Brand: Mailvanta – Bulk email, beautiful analytics, scalable SaaS boilerplate.
- Data: Drizzle ORM with PostgreSQL. `users` base schema; now includes `campaigns`, `recipients`, `events` for marketing workflow.
- Auth: NextAuth.js (to be wired); login/register flows scaffolded in `app/(login)/`.
- Campaigns: Dashboard will support campaign creation, scheduling, CSV import, rich editor, SendGrid delivery, and analytics.
- Env vars required: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `DATABASE_URL`, `AUTH_SECRET`, etc. See `env.example`.

## 2. Technology Stack
- Next.js 16 App Router.
- React 19, TypeScript 5.
- TailwindCSS/PostCSS, ESLint 9.
- Data: Drizzle ORM + PostgreSQL, full migration workflow.
- Auth: NextAuth.js (server only, not yet active).
- SendGrid email delivery (via env).
- Tooling: scripts/dev-supervisor, Dockerfile (optional).

## 3. Project Structure
```
app/
  layout.tsx             # Root layout, Mailvanta branding
  page.tsx               # Public SaaS landing page
  (login)/login/page.tsx # Login UI (planned)
  (login)/register/page.tsx # Registration UI (planned)
  (dashboard)/dashboard/ # Dashboard shell (planned)
content/
  home.ts                # Landing copy, features, CTAs
components/
  home/                  # Modular SaaS/marketing sections
lib/db/
  schema.ts              # Drizzle schema: users, campaigns, recipients, events
  client.ts              # Drizzle/Postgres client
drizzle/
  0000_init.sql
  0001_campaigns_recipients_events.sql
  meta/_journal.json
...
```
(More planned in FILES.md)

## 4. Install & Run
```bash
npm install
npm run dev
```
DB setup/migrate:
```bash
DATABASE_URL="postgresql://user:pass@host:5432/db" npm run db:migrate
```

## 5. Routing & Components
- `/` Mailvanta landing (marketing, features)
- `/login`, `/register`, `/dashboard` (planned)

## 6. Styling
- Tailwind/global CSS.
- Brand palette: Mailvanta blue, action orange, soft gradients.
- Accessible, responsive.

## 7. Environment & Secrets
- Must set: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `DATABASE_URL`, `AUTH_SECRET`.
- See `env.example`.
- Add further keys as product grows.

## 8. Data & Backend
- See `lib/db/schema.ts` for all tables.
- Drizzle migrations must match schema/sql/journal.

## 9. Server vs Client Components (Guardrails)
- Default server; use `"use client"` only for interactive widgets (CSV upload, drag-drop, etc.).
- All mutations via server actions or API routes—never in client code.

## 10. Testing (Not Present)
- None active; add with Playwright/jest if needed.

## 11. Change Guidelines
- Document all new routes/files in FILES.md.
- Never edit README/FILES/RULES outside planned boundaries.

## 12. Hard Stops
- Unclear requirements.
- Any insecure handling of secrets/user data.

## 13. Deployment
- Vercel (default); also works in Docker/Node 18+.
- Migrations/DB required on first run (see above).