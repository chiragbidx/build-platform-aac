import { HugeiconsIcon } from "@hugeicons/react";
import { Chart01Icon } from "@hugeicons/core-free-icons";
import { MetricsContent } from "../../content/home";
import { GlobeBadgeIllustration } from "../illustrations/GlobeBadgeIllustration";

// Section: Metrics and architecture proof points
export function MetricsSection({ content }: { content: MetricsContent }) {
  return (
    <section
      className="grid gap-6 rounded-2xl border border-[#19aae6]/15 bg-gradient-to-br from-white via-[#ecf7fe] to-white px-6 py-10 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(145deg, rgba(25,170,230,0.10), rgba(236,247,254,0.85)), radial-gradient(circle at 90% 20%, rgba(7,115,198,0.14), transparent 45%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 240px 240px",
        backgroundPosition: "center, right -60px top -40px",
      }}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6]">Operational readiness</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#00264d] sm:text-4xl">
          <HugeiconsIcon icon={Chart01Icon} size={28} color="#0773c6" strokeWidth={1.6} />
          {content.title}
        </h2>
        <p className="text-base text-[#07508a]">{content.blurb}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#19aae6]/15 bg-white/80 p-4 shadow-sm animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-3xl font-black text-[#19aae6]">{stat.value}</p>
              <p className="text-sm font-semibold text-[#07508a]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-xl border border-[#19aae6]/15 bg-white/80 p-6 shadow-sm">
        <p className="text-sm font-semibold text-[#0773c6]">Architecture snapshot</p>
        <div className="flex items-center gap-3 rounded-lg border border-[#19aae6]/15 bg-[#ecf7fe] px-3 py-2">
          <GlobeBadgeIllustration />
          <p className="text-xs text-[#07508a]">Global-ready routing with sensible defaults.</p>
        </div>
        <ul className="space-y-3 text-sm text-[#07508a]">
          {content.snapshot.map((line) => (
            <li key={line} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0773c6]" /> {line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}