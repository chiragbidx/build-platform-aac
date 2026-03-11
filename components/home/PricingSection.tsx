import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardIcon } from "@hugeicons/core-free-icons";
import { PricingContent } from "../../content/home";

// Section: Pricing plans grid with CTAs
export function PricingSection({ content }: { content: PricingContent }) {
  return (
    <section
      className="rounded-2xl border border-[#19aae6]/15 bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(236,247,254,0.82) 0%, rgba(255,255,255,0.97) 60%), radial-gradient(circle at 18% 18%, rgba(7,115,198,0.14), transparent 36%), radial-gradient(circle at 82% 82%, rgba(25,170,230,0.13), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6]">Pricing</p>
          <h2 className="flex items-center gap-3 text-3xl font-bold text-[#00264d] sm:text-4xl">
            <HugeiconsIcon icon={CreditCardIcon} size={28} color="#0773c6" strokeWidth={1.6} />
            {content.title}
          </h2>
          <p className="text-base text-[#07508a]">{content.blurb}</p>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <a href={content.ctas.sales.href} className="rounded-lg bg-[#0773c6] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#065fa6] hover:shadow-md">
            {content.ctas.sales.label}
          </a>
          <a href={content.ctas.terms.href} className="rounded-lg border border-[#0773c6]/30 bg-white px-4 py-2 text-sm font-semibold text-[#19aae6] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            {content.ctas.terms.label}
          </a>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {content.plans.map((plan) => (
          <div key={plan.name} className="flex flex-col gap-4 rounded-xl border border-[#19aae6]/15 bg-white p-5 shadow-sm">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#19aae6]">{plan.name}</p>
              <p className="text-2xl font-black text-[#00264d]">{plan.price}</p>
              <p className="text-sm text-[#07508a]">{plan.desc}</p>
            </div>
            <ul className="space-y-2 text-sm text-[#07508a]">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#0773c6]" /> {feat}</li>
              ))}
            </ul>
            <a
              href={plan.cta.href}
              className="mt-auto inline-flex items-center justify-center rounded-lg border border-[#0773c6]/30 bg-[#ecf7fe] px-3 py-2 text-sm font-semibold text-[#0773c6] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {plan.cta.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}