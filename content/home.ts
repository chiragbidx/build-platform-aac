export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  featureCards: { title: string; subtitle: string; body: string }[];
};

export type LogosContent = {
  title: string;
  subtitle: string;
  logos: string[];
};

export type FeaturesContent = {
  title: string;
  intro: string;
  items: { title: string; body: string }[];
};

export type MetricsContent = {
  title: string;
  blurb: string;
  stats: { label: string; value: string }[];
  snapshot: string[];
};

export type PricingContent = {
  title: string;
  blurb: string;
  ctas: { sales: { label: string; href: string }; terms: { label: string; href: string } };
  plans: { name: string; price: string; desc: string; features: string[]; cta: { label: string; href: string } }[];
};

export type SecurityContent = {
  title: string;
  blurb: string;
  checklist: string[];
  badges: string[];
  cta: { label: string; href: string };
};

export type DocsSupportContent = {
  title: string;
  blurb: string;
  links: { label: string; link: string }[];
  supportBullets: string[];
  supportBadge: string;
  supportCta: { label: string; href: string };
};

export type LegalContent = {
  title: string;
  blurb: string;
  docs: { label: string; link: string; tag?: string }[];
  corporate: string[];
  note: string;
};

export type CtaContent = {
  title: string;
  blurb: string;
  productLinks: { label: string; href: string }[];
  resourceLinks: { label: string; href: string }[];
  footer: string;
};

export type HomeContent = {
  hero: HeroContent;
  logos: LogosContent;
  features: FeaturesContent;
  metrics: MetricsContent;
  pricing: PricingContent;
  security: SecurityContent;
  docs: DocsSupportContent;
  legal: LegalContent;
  cta: CtaContent;
};

export const defaultHomeContent: HomeContent = {
  hero: {
    eyebrow: "Deliver at Scale",
    title: "Bulk Email Marketing, Hassle-Free. Welcome to Mailvanta.",
    subtitle:
      "Send, manage, and track high-volume campaigns with Mailvanta—secure, reliable, and simple to use. Crafted for modern SaaS teams demanding deliverability that works.",
    primaryCta: { label: "See how it works", href: "#features" },
    secondaryCta: { label: "Start sending emails", href: "/register" },
    featureCards: [
      { title: "Mass Campaigns", subtitle: "Send Thousands at Once", body: "Robust sending infrastructure and seamless integration with SendGrid." },
      { title: "Campaign Analytics", subtitle: "Track Every Email", body: "Real-time performance stats, open rates, bounces, and delivery insights." },
      { title: "Audience Lists", subtitle: "Import Contacts in Seconds", body: "CSV upload, dedupe, and segmentation for effortless audience management." },
      { title: "Smart Templates", subtitle: "Personalize at Scale", body: "HTML or drag-n-drop editing, with dynamic merge tags." },
    ],
  },
  logos: {
    title: "Trusted by Growing SaaS Teams",
    subtitle: "Delivering emails for top startups and side-projects worldwide",
    logos: ["SendGrid", "Stripe", "Segment", "Vercel", "Notion", "OpenAI", "Linear", "Figma", "Salesforce"],
  },
  features: {
    title: "Your Email Operations Stack",
    intro: "An opinionated toolkit tuned for deliverability, compliance, and bulk management. Get up and running in minutes.",
    items: [
      { title: "Bulk Campaigns", body: "Compose, test, and send high-volume blasts without limits." },
      { title: "Drag & Drop Editor", body: "Design beautiful emails with full HTML customization and branding tools." },
      { title: "List Management", body: "Easy CSV import, smart dedupe, and advanced segmentation baked in." },
      { title: "Analytics", body: "Track opens, bounces, and campaign performance at-a-glance." },
      { title: "Security", body: "SOC2-ready patterns, audit logs, and signup/abuse protection by default." },
      { title: "API Access", body: "Integrate email into your workflow—REST APIs & webhook events included." },
    ],
  },
  metrics: {
    title: "Scale with Confidence",
    blurb: "Robust delivery, actionable analytics, and resilient architecture. Everything you need—and nothing you don’t.",
    stats: [
      { label: "Emails per hour", value: "60,000+" },
      { label: "Avg. Deliverability", value: "99.3%" },
      { label: "Setup Time", value: "5 min" },
      { label: "Open Rate Insights", value: "Real Time" },
    ],
    snapshot: [
      "SendGrid integration for industry-best reliability",
      "CSV list management with smart validation",
      "Analytics endpoints for opens, clicks, bounces",
      "Compliance patterns: bounce-handling, unsubscribe links",
      "API endpoints for campaign trigger & reporting",
    ],
  },
  pricing: {
    title: "Plans built for every sender",
    blurb: "Transparent pricing. Start free, grow with your team, and never worry about hidden fees.",
    ctas: {
      sales: { label: "Contact sales", href: "mailto:chirag@bidx.ai" },
      terms: { label: "See terms", href: "#legal" },
    },
    plans: [
      {
        name: "Free",
        price: "$0",
        desc: "Get started. Perfect for early startups and solo founders.",
        features: ["Up to 2,500 emails/month", "Unlimited lists", "Email support", "Basic campaign analytics"],
        cta: { label: "Sign up", href: "/register" },
      },
      {
        name: "Growth",
        price: "$49/mo",
        desc: "For teams scaling campaigns and automation.",
        features: ["50k emails/month", "Segmentation & API access", "Advanced analytics", "Priority support"],
        cta: { label: "Upgrade now", href: "/register" },
      },
      {
        name: "Enterprise",
        price: "Custom",
        desc: "For high-volume, advanced compliance, and integrations.",
        features: ["Dedicated IPs", "Deliverability SLAs", "SSO & audit trails", "Premium onboarding"],
        cta: { label: "Contact sales", href: "mailto:chirag@bidx.ai" },
      },
    ],
  },
  security: {
    title: "Deliverability & Security by Design",
    blurb: "No shortcuts: encryption, compliance, and controls that scale as you do.",
    checklist: [
      "Encrypted-at-rest with audit log",
      "Verified sending domains",
      "Abuse & bounce detection",
      "EU and US data residency options",
    ],
    badges: ["SOC2", "GDPR", "CAN-SPAM Compliant", "CCPA"],
    cta: { label: "Learn more", href: "#features" },
  },
  docs: {
    title: "All you need, all documented",
    blurb: "Developer-first guides, detailed API docs, and premium onboarding when you need a hand.",
    links: [
      { label: "API reference", link: "https://mailvanta.com/docs" },
      { label: "Demo video", link: "https://mailvanta.com/demo" },
      { label: "Status page", link: "https://status.mailvanta.com" },
      { label: "Integration guides", link: "https://mailvanta.com/integrations" },
    ],
    supportBullets: [
      "Priority email support for all paid plans",
      "Integration help directly from our engineering team",
      "Guided onboarding for organizations",
      "24/7 incident response for enterprise customers",
    ],
    supportBadge: "24/7 premium (Enterprise)",
    supportCta: { label: "Contact support", href: "mailto:chirag@bidx.ai" },
  },
  legal: {
    title: "Crystal Clear Legal",
    blurb: "Policies, compliance documents, and support—ready for procurement and privacy teams.",
    docs: [
      { label: "Terms of Service", link: "https://mailvanta.com/terms", tag: "PDF" },
      { label: "Privacy Policy", link: "https://mailvanta.com/privacy", tag: "PDF" },
      { label: "Anti-Spam Policy", link: "https://mailvanta.com/antispam", tag: "PDF" },
    ],
    corporate: [
      "Mailvanta owned by Chirag Dodiya – chirag@bidx.ai",
      "HQ: Remote / India",
      "VAT, GST & W-9 ready for instant onboarding",
      "Vendor security packet available on request",
      "Accessibility commitment: WCAG 2.1 AA",
    ],
    note: "Need special paperwork? Email chirag@bidx.ai and you'll get a lightning fast reply.",
  },
  cta: {
    title: "Deliver Your Next Campaign — It's Free.",
    blurb: "Bulk campaign sends, beautiful analytics, and pro support. Try Mailvanta now.",
    productLinks: [
      { label: "Get Started", href: "/register" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    resourceLinks: [
      { label: "Guides", href: "https://mailvanta.com/docs" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "Contact", href: "mailto:chirag@bidx.ai" },
    ],
    footer: "Mailvanta SaaS – Created by Chirag Dodiya • MIT • Ready to deliver your next campaign.",
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}