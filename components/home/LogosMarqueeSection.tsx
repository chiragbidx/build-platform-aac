import { LogosContent } from "../../content/home";

// Section: Customer logo marquee for social proof
export function LogosMarqueeSection({ content }: { content: LogosContent }) {
  return (
    <section
      className="rounded-2xl border border-[#19aae6]/15 bg-white/70 px-6 py-8 shadow-sm sm:px-10 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(25,170,230,0.11) 0%, rgba(236,247,254,0.50) 55%, rgba(255,255,255,0.97) 100%), radial-gradient(circle at 85% 30%, rgba(7,115,198,0.10), transparent 42%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, right 10% 30%",
        backgroundSize: "100% 100%, 260px 260px",
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0773c6]">{content.title}</p>
          <h3 className="text-xl font-bold text-[#00264d]">{content.subtitle}</h3>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-[#19aae6]/10 bg-transparent px-3 py-4">
          <div className="flex gap-4 animate-marquee">
            {content.logos
              .flatMap((logo) => [logo, logo]) // duplicate for seamless loop
              .map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex h-12 min-w-[120px] items-center justify-center rounded-lg border border-[#19aae6]/10 bg-white/90 px-4 text-sm font-semibold tracking-tight text-[#19aae6] shadow-sm hover:-translate-y-1 transition"
                >
                  {logo}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}