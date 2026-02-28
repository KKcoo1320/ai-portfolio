import Image from "next/image";

type Props = {
  name: string;
  tagline: string;
  jobTargets: string[];
  intro: string[];
  ctas: {
    projects: string;
    contact: string;
  };
};

export function HeroSection({ name, tagline, jobTargets, intro, ctas }: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="grid-overlay absolute inset-0 -z-20 opacity-30" />
      <div className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="hero-pop max-w-3xl">
            <span className="pill mb-5">AI + Data + Product</span>
            <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-6xl">
              {name}
            </h1>
            <p className="mt-3 text-lg text-cyan-200 md:text-xl">{tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {jobTargets.map((target) => (
                <span key={target} className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  {target}
                </span>
              ))}
            </div>

            <div className="mt-7 space-y-3 text-slate-300">
              {intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                {ctas.projects}
              </a>
              <a href="#contact" className="rounded-full border border-cyan-200/40 px-6 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/10">
                {ctas.contact}
              </a>
            </div>
          </div>

          <div className="hero-pop hero-pop-delay mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-950/50 p-3 shadow-glow">
              <Image
                src={`${basePath}/profile.png`}
                alt="Bozhi Wang avatar"
                width={720}
                height={960}
                priority
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
