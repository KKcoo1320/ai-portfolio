"use client";

import { useMemo, useState } from "react";
import { siteContent, type Language } from "@/data/siteContent";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";

export function PortfolioPage() {
  const [lang, setLang] = useState<Language>("zh");
  const content = useMemo(() => siteContent[lang], [lang]);

  return (
    <div>
      <NavBar lang={lang} content={content} onChangeLanguage={setLang} />
      <main>
        <HeroSection {...content.hero} />
        <AboutSection {...content.about} />
        <ProjectsSection {...content.projects} />
        <SkillsSection {...content.skills} />
        <TimelineSection {...content.timeline} />
        <ContactSection {...content.contact} />
      </main>
      <footer className="border-t border-line/60 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {lang === "zh" ? "王渤智" : "Bozhi Wang"}.
      </footer>
    </div>
  );
}
