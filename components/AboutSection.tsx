import { ScrollReveal } from "@/components/ScrollReveal";

type Props = {
  title: string;
  story: string[];
};

export function AboutSection({ title, story }: Props) {
  return (
    <section id="about" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="left">
          <div className="section-card p-6 md:p-10">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">{title}</h2>
            <div className="mt-5 space-y-4 text-slate-300">
              {story.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
