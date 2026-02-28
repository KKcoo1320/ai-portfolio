import { Cpu, Database, Gauge, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

type SkillCategory = {
  name: string;
  items: { label: string; level: number }[];
};

type Props = {
  title: string;
  categories: SkillCategory[];
};

const categoryIcons = [Cpu, Database, Gauge, Wrench];

export function SkillsSection({ title, categories }: Props) {
  return (
    <section id="skills" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">{title}</h2>
        </ScrollReveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <ScrollReveal key={category.name} delayMs={index * 80} variant={index % 2 === 0 ? "left" : "right"}>
                <article className="section-card p-5 transition hover:-translate-y-1 md:p-6">
                  <h3 className="mb-5 flex items-center gap-2 font-[var(--font-heading)] text-lg font-semibold text-white">
                    <Icon size={18} className="text-cyan-200" />
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <div key={skill.label}>
                        <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                          <span>{skill.label}</span>
                          <span className="text-cyan-200">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-900">
                          <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
