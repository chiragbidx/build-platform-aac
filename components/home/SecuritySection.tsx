import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon } from "@hugeicons/core-free-icons";
import { SecurityContent } from "../../content/home";

// Section: Security, compliance posture, and CTA
export function SecuritySection({ content }: { content: SecurityContent }) {
  return (
    <section
      className="grid gap-6 rounded-2xl border border-[#19aae6]/15 bg-white/80 px-6 py-10 shadow-sm sm:grid-cols-[1fr_1fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(7,115,198,0.11) 0%, rgba(236,247,254,0.41) 60%, rgba(255,255,255,0.96) 100%), radial-gradient(circle at 90% 10%, rgba(25,170,230,0.12), transparent 40%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, right -20px top 10px",
        backgroundSize: "100% 100%, 200px 200px",
      }}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6]">Security</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#00264d] sm:text-4xl">
          <HugeiconsIcon icon={Shield01Icon} size={28} color="#0773c6" strokeWidth={1.6} />
          {content.title}
        </h2>
        <p className="text-base text-[#07508a]">{content.blurb}</p>
        <ul className="space-y-2 text-sm text-[#07508a]">
          {content.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0773c6]" /> {item}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-4 rounded-xl border border-[#19aae6]/15 bg-gradient-to-br from-white via-[#ecf7fe] to-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#07508a]">Compliance posture</span>
          <span className="rounded-full bg-[#ecf7fe] px-3 py-1 text-xs font-semibold text-[#0773c6]">In progress</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-[#07508a] sm:grid-cols-3">
          {content.badges.map((badge) => (
            <div key={badge} className="rounded-lg border border-[#19aae6]/10 bg-white/80 px-3 py-2 text-center shadow-sm">
              {badge}
            </div>
          ))}
        </div>
        <p className="text-xs text-[#07508a]">Need something specific? Share your latest security questionnaire and we will map controls.</p>
        <a
          href={content.cta.href}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#0773c6] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#065fa6] hover:shadow-md"
        >
          {content.cta.label}
        </a>
      </div>
    </section>
  );
}