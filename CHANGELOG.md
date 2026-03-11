# CHANGELOG

## 2024-06-01

- Rebranded public landing page to Mailvanta, an email marketing SaaS (Next.js, Drizzle, SendGrid).
- Updated app/page.tsx for Mailvanta brand, new CTAs, and header.
- Overhauled content/home.ts: Mailvanta features, plans, owner/contact info.
- Expanded DB schema (lib/db/schema.ts) for campaigns, recipients, and events; added corresponding migration and journal.
- Added/updated FILES.md and RULES.md for new dashboard/auth structure and DB.
- Updated README.md for branding, planned routes, workflow, and deploy.
- Updated env.example to require SENDGRID_API_KEY, SENDGRID_FROM_EMAIL.
- Initialized CHANGELOG.md for documentation of ongoing changes.