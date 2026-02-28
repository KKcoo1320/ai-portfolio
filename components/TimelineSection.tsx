import { ScrollReveal } from "@/components/ScrollReveal";

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  summary: string;
};

type Props = {
  title: string;
  items: TimelineItem[];
};

export function TimelineSection({ title, items }: Props) {
  return (
    <section id="timeline" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">{title}</h2>
        </ScrollReveal>

        <ScrollReveal delayMs={120} variant="up">
          <div className="mt-6 section-card p-5 md:p-8">
            <div className="relative border-l border-line pl-6">
              {items.map((item, index) => (
                <article key={`${item.period}-${item.title}`} className={`relative pb-8 ${index === items.length - 1 ? "pb-0" : ""}`}>
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-cyan-200/70 bg-bg" />
                  <p className="text-xs uppercase tracking-wide text-cyan-200">{item.period}</p>
                  <h3 className="mt-1 font-[var(--font-heading)] text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-300">{item.subtitle}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
