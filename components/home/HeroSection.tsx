import { HeroOrbs } from "../HeroOrbs";
import { HeroContent } from "../../content/home";
import { HeroStackIllustration } from "../illustrations/HeroStackIllustration";

// Section: Hero with interactive orbs and highlighted feature cards
export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      className="relative grid min-h-[680px] gap-10 overflow-hidden rounded-2xl border border-[#19aae6]/15 bg-white/60 px-6 py-12 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center sm:px-10 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(236,247,254,0.9), rgba(255,255,255,0.95)), conic-gradient(from 140deg at 28% 22%, rgba(7,115,198,0.12), rgba(255,255,255,0) 35%, rgba(25,170,230,0.1) 65%, rgba(7,115,198,0.08)), radial-gradient(circle at 15% 20%, rgba(25,170,230,0.14), transparent 38%), radial-gradient(circle at 85% 0%, rgba(7,115,198,0.13), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundSize: "100% 100%, 120% 120%, 320px 320px, 260px 260px",
        backgroundPosition: "center, center, left -60px top -60px, right -30px top 20px",
      }}
    >
      {/* floating gradient accents */}
      <div className="pointer-events-none absolute -left-24 top-12 h-40 w-40 rounded-full bg-[#19aae6]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#0773c6]/15 blur-3xl" />
      {/* floating icon motifs with pointer parallax */}
      <HeroOrbs />

      <div className="space-y-6 relative">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6] shadow-sm">
          {content.eyebrow}
        </p>
        <h1 className="text-4xl font-black leading-tight text-[#00264d] sm:text-5xl">
          {content.title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-zinc-700">
          {content.subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4 w-full">
          <a
            href={content.primaryCta.href}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#0773c6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#065fa6] hover:shadow-md"
          >
                {content.primaryCta.label}
          </a>
          <a
            href={content.secondaryCta.href}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-[#0773c6]/30 bg-white px-5 py-3 text-sm font-semibold text-[#19aae6] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
                {content.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#19aae6]/30 bg-white shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ecf7fe] via-white to-[#e5f3fb] opacity-70" aria-hidden />
        <div className="relative grid gap-4 p-6 sm:grid-cols-2">
          {content.featureCards.map((card, idx) => (
            <div key={card.title} className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#19aae6]/20">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0773c6]">{card.title}</p>
              <p className="mt-2 text-base font-semibold text-[#07508a]">{card.subtitle}</p>
              <p className="text-sm text-zinc-600">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}