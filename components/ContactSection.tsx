import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

type Props = {
  title: string;
  subtitle: string;
  phone: string;
  wechat: string;
  email: string;
  linkedin: string;
  github: string;
};

export function ContactSection({ title, subtitle, phone, wechat, email, linkedin, github }: Props) {
  return (
    <section id="contact" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="section-card p-6 md:p-10">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <a href={`tel:${phone}`} className="rounded-xl border border-line bg-slate-950/60 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50">
                <div className="mb-2 text-cyan-200">
                  <Phone size={18} />
                </div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-sm text-white">{phone}</p>
                <p className="mt-1 text-xs text-cyan-200/90">微信同号：{wechat}</p>
              </a>

              <a href={`mailto:${email}`} className="rounded-xl border border-line bg-slate-950/60 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50">
                <div className="mb-2 text-cyan-200">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-sm text-white">{email}</p>
              </a>

              <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-line bg-slate-950/60 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50">
                <div className="mb-2 text-cyan-200">
                  <Linkedin size={18} />
                </div>
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="text-sm text-white">{linkedin.replace("https://", "")}</p>
              </a>

              <a href={github} target="_blank" rel="noreferrer" className="rounded-xl border border-line bg-slate-950/60 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50">
                <div className="mb-2 text-cyan-200">
                  <Github size={18} />
                </div>
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="text-sm text-white">{github.replace("https://", "")}</p>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
