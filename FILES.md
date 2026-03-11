# FILES.md — Structural & Architectural Index (Next.js App Router Starter)

AI-facing index of the repository as it exists today. Drizzle ORM (PostgreSQL) and auth-ready dependencies are present; routes/auth wiring are not yet added. If something is unclear: **STOP AND ASK**.

---

## 1. High-Level Overview
- Purpose: minimal App Router scaffold for future SaaS UI, now with Drizzle + Postgres base schema.
- Style: file-system routing, server-preferred components.
- Tech: Next.js 16, React 19, TypeScript 5, Tailwind-ready PostCSS, ESLint 9.
- Present: Drizzle schema + initial migration for `users`.
- New: Drizzle schema + migrations for `campaigns`, `recipients`, `events` (Mailvanta SaaS).
- Not present: auth routes/config, API routes, queues, tests.

## 2. Application Entry Points
- `app/layout.tsx`: Root layout; applies globals (Geist fonts removed).
- `app/page.tsx`: Public landing page (server component).
- `app/globals.css`: Global styles; imports Tailwind; defines light/dark CSS variables.
- `next.config.ts`: Minimal Next config placeholder.
- `postcss.config.mjs`: PostCSS with `@tailwindcss/postcss`.
- No `middleware.ts`; requests go straight to App Router.

## 3. Modules / Feature Areas
- `app/`: UI shell and routing.
- `app/(dashboard)/dashboard/`: (Planned) Auth-protected dashboard for campaign management.
- `app/(login)/login/`: (Planned) Login form server/client routes.
- `app/(login)/register/`: (Planned) Registration form server/client routes.
- `app/actions/`: (Planned) API/server actions for authentication and campaign workflows.
- `components/`: Shared UI; home sections live under `components/home/`.
- `content/`: Copy/config for the landing (`home.ts`, exports typed `HomeContent` and defaults).
- `public/`: Static assets (logos/icons).
- `lib/db/`: Drizzle schema and client.
- `drizzle/`: SQL migrations + meta journal.
- Config/tooling: `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts`, `tsconfig.json`, `drizzle.config.ts`.
- No route groups yet; create when needed.

## 4. Routes (Controllers)
- `/` → `app/page.tsx`
  - Panda → Mailvanta-themed landing, modular SaaS sections as before.
- `/login` (Planned) → `app/(login)/login/page.tsx`
  - User authentication/login form.
- `/register` (Planned) → `app/(login)/register/page.tsx`
  - Registration form.
- `/dashboard` (Planned) → `app/(dashboard)/dashboard/page.tsx`
  - Mailvanta user dashboard, campaigns/metrics UI.
- `/dashboard/campaigns` (Planned) → `app/(dashboard)/dashboard/campaigns/page.tsx`
  - Campaign management list/table.
- `/dashboard/campaigns/create` (Planned) → `app/(dashboard)/dashboard/campaigns/create/page.tsx`
  - Step-by-step new campaign flow (compose, upload, schedule/send).
- `/dashboard/recipients` (Planned) → `app/(dashboard)/dashboard/recipients/page.tsx`
  - Mailing list and recipient management.
- `/dashboard/events` (Planned) → `app/(dashboard)/dashboard/events/page.tsx`
  - Campaign event tracking and analytics.

## 5. Services & Providers
- None. Server-only helpers under `lib/` as backend/data is added.

## 6. Data Layer
- ORM/DB: Drizzle ORM + PostgreSQL.
- Schema: `users`, `campaigns`, `recipients`, `events`.
- Migrations: under `drizzle/`.

## 7. DTOs, Schemas & Validation
- None yet. See campaign/recipient/event types in `lib/db/schema.ts`.

## 8. Cross-Cutting Concerns
- Auth, logging, tracing, error filters: not implemented. Centralize under `lib/` and wire via layouts/middleware intentionally.

## 9. Configuration & Environment
- `env.example`: lists needed keys including: SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, DATABASE_URL, etc.

## 10. Async & Background Processing
- Queues/workers/schedulers: none. Add in as-needed for async campaign sending/events.

## 11. Testing Structure
- No tests yet. Use Playwright (e2e) and co-located unit tests by convention.

## 12. File & Directory Index
... (rest unchanged, but add new planned dashboard/auth routes and new schema/migrations)