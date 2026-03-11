-- Migration for campaigns, recipients, and events for Mailvanta email SaaS

CREATE TABLE IF NOT EXISTS "campaigns" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" text NOT NULL REFERENCES "users" ("id"),
  "name" text NOT NULL,
  "subject" text NOT NULL,
  "body" text NOT NULL,
  "status" text NOT NULL,
  "scheduled_at" timestamptz,
  "sent_at" timestamptz,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "recipients" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "campaign_id" text NOT NULL REFERENCES "campaigns" ("id"),
  "email" text NOT NULL,
  "sent" boolean NOT NULL DEFAULT false,
  "opened" boolean NOT NULL DEFAULT false,
  "bounced" boolean NOT NULL DEFAULT false,
  "delivered" boolean NOT NULL DEFAULT false,
  "error" text,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "events" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "recipient_id" text NOT NULL REFERENCES "recipients" ("id"),
  "type" text NOT NULL,
  "payload" jsonb,
  "created_at" timestamptz NOT NULL DEFAULT now()
);