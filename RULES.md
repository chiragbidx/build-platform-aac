# RULES.md — Change Boundaries & Placement (Mailvanta SaaS)

## 1) Routing & Placement
- Public/marketing pages: `app/`
- Auth: `app/(login)/login/`, `app/(login)/register/` — UI/forms and actions together.
- Dashboard: `app/(dashboard)/dashboard/` and subroutes — all Mailvanta user features, campaign mgmt, list mgmt, analytics.
- All Phoenix-authenticated and campaign mgmt pages are in dashboard group, strict use of layouts.

## 2) Dashboard Page Pattern
- Use `app/(dashboard)/dashboard/` for protected, logged-in user app.
- All dashboard pages = Server Components unless client hooks required; use `"use client"` if needed.
- Navigation/sidebars only in main dashboard layout, not per page.
- Client-side tables/forms for campaign composer, CSV upload, etc.

## 3) Backend & Data
- Drizzle schema: `lib/db/schema.ts` contains `users`, `campaigns`, `recipients`, `events`.
- Migrations: in `drizzle/`, update `_journal.json` as changes land.
- Never hand-edit SQL migrations; always pair SQL/journal entries.

## 4) Auth & Security
- Auth uses NextAuth.js. Flows/pages/handlers in `app/(login)/`.
- All mutations/actions require user validation; never accept userId via client input.
- Use validated wrappers for campaign creation, sending, list editing, etc.

## 5) Infrastructure & Scripts
- Scripts in `scripts/` infra only.
- Never import server logic into client/interactive components.
- Use `lib/` for backend/data helpers, never mix with UI.

## 6) Coordination
- Document major new routes/files in FILES.md.
- Never create new *.md explainer docs unless explicitly instructed; update only README/FILES/RULES.
- Never use double quotes in BuildArtifact titles.

## Server/Client Component Rules
- Default server; use `"use client"` only for hooks, browser APIs, interactive components.
- All server actions: `app/actions/`, with `"use server"` at top.
- Forms/UI in dashboard import and use server actions for mutations.

- Review FILES.md for planned pages: `/login`, `/register`, `/dashboard*`, `/dashboard/campaigns*`, `/dashboard/recipients`, `/dashboard/events`.