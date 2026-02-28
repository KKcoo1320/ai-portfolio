"use client";

import { useRef } from "react";
import { BarChart3, BrainCircuit, BriefcaseBusiness, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

type Project = {
  title: string;
  background: string;
  stack: string[];
  role: string;
  impact: string[];
};

type Props = {
  title: string;
  items: Project[];
};

const icons = [BarChart3, BrainCircuit, BriefcaseBusiness];

export function ProjectsSection({ title, items }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.round(node.clientWidth * 0.9);
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">{title}</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="slide left"
                onClick={() => scrollByCard("left")}
                className="rounded-full border border-line bg-slate-950/70 p-2 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="slide right"
                onClick={() => scrollByCard("right")}
                className="rounded-full border border-line bg-slate-950/70 p-2 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div ref={scrollerRef} className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth">
          {items.map((project, index) => {
            const Icon = icons[index % icons.length];
            const variant = index % 2 === 0 ? "up" : "right";
            return (
              <ScrollReveal key={project.title} delayMs={index * 80} variant={variant}>
                <article className="section-card w-[86vw] max-w-[420px] shrink-0 snap-start p-5 transition hover:-translate-y-1 md:w-[420px] md:p-6">
                  <div className="mb-4 flex items-center gap-2 text-cyan-200">
                    <Icon size={18} />
                    <h3 className="font-[var(--font-heading)] text-lg font-semibold text-white">{project.title}</h3>
                  </div>

                  <p className="text-sm leading-6 text-slate-300">{project.background}</p>

                  <p className="mt-4 text-xs uppercase tracking-wide text-cyan-200/90">Tech Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-wide text-cyan-200/90">My Role</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{project.role}</p>

                  <p className="mt-4 text-xs uppercase tracking-wide text-cyan-200/90">Impact</p>
                  <ul className="mt-2 space-y-1 text-sm text-emerald-200">
                    {project.impact.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
