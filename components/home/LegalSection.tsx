import { HugeiconsIcon } from "@hugeicons/react";
import { FileBadgeIcon } from "@hugeicons/core-free-icons";
import { LegalContent } from "../../content/home";

// Section: Legal docs and company details
export function LegalSection({ content }: { content: LegalContent }) {
  return (
    <section
      id="legal"
      className="grid gap-8 rounded-2xl border border-[#19aae6]/15 bg-gradient-to-br from-white via-[#ecf7fe] to-white px-6 py-10 shadow-sm sm:grid-cols-[1fr_1fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(25,170,230,0.09) 0%, rgba(236,247,254,0.48) 60%, rgba(255,255,255,0.96) 100%), radial-gradient(circle at 90% 10%, rgba(7,115,198,0.10), transparent 36%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 220px 220px",
        backgroundPosition: "center, right -60px top -20px",
      }}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6]">Legal</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#00264d] sm:text-4xl">
          <HugeiconsIcon icon={FileBadgeIcon} size={28} color="#0773c6" strokeWidth={1.6} />
          {content.title}
        </h2>
        <p className="text-base text-[#07508a]">{content.blurb}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.docs.map((doc, i) => (
            <a
              key={doc.label}
              href={doc.link}
              className="flex items-center justify-between rounded-lg border border-[#19aae6]/20 bg-white/80 px-4 py-3 text-sm font-semibold text-[#19aae6] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md animate-fade-slide"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span>{doc.label}</span>
              <span className="text-xs text-[#07508a]">{doc.tag ?? "PDF"}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-xl border border-[#19aae6]/15 bg-white/80 p-6 shadow-sm">
        <p className="text-sm font-semibold text-[#07508a]">Corporate details</p>
        <ul className="space-y-2 text-sm text-[#07508a]">
          {content.corporate.map((item) => (
            <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0773c6]" /> {item}</li>
          ))}
        </ul>
        <div className="rounded-lg border border-[#19aae6]/15 bg-[#ecf7fe] px-4 py-3 text-sm text-[#07508a]">
          {content.note}
        </div>
      </div>
    </section>
  );
}