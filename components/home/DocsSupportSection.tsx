import { HugeiconsIcon } from "@hugeicons/react";
import { Book02Icon } from "@hugeicons/core-free-icons";
import { DocsSupportContent } from "../../content/home";

// Section: Documentation links and support tiers
export function DocsSupportSection({ content }: { content: DocsSupportContent }) {
  return (
    <section
      className="grid gap-6 rounded-2xl border border-[#19aae6]/15 bg-white/80 px-6 py-10 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(236,247,254,0.9) 0%, rgba(255,255,255,0.98) 70%), radial-gradient(circle at 15% 30%, rgba(7,115,198,0.13), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 240px 240px",
        backgroundPosition: "center, left -40px top -20px",
      }}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6]">Docs & Support</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#00264d] sm:text-4xl">
          <HugeiconsIcon icon={Book02Icon} size={28} color="#0773c6" strokeWidth={1.6} />
          {content.title}
        </h2>
        <p className="text-base text-[#07508a]">{content.blurb}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.links.map((item, i) => (
            <a
              key={item.label}
              href={item.link}
              className="flex items-center justify-between rounded-lg border border-[#19aae6]/20 bg-white/80 px-4 py-3 text-sm font-semibold text-[#19aae6] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md animate-fade-slide"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span>{item.label}</span>
              <span className="text-xs text-[#07508a]">Open</span>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-xl border border-[#19aae6]/15 bg-gradient-to-br from-white via-[#ecf7fe] to-white p-6 shadow-sm hover-lift">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[#07508a]">Support tiers</p>
          <span className="rounded-full bg-[#ecf7fe] px-3 py-1 text-xs font-semibold text-[#0773c6]">{content.supportBadge}</span>
        </div>
        <ul className="space-y-2 text-sm text-[#07508a]">
          {content.supportBullets.map((item) => (
            <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0773c6]" /> {item}</li>
          ))}
        </ul>
        <a
          href={content.supportCta.href}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#0773c6] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#065fa6] hover:shadow-md"
        >
          {content.supportCta.label}
        </a>
      </div>
    </section>
  );
}