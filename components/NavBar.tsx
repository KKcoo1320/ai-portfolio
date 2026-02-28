import { siteContent, type Language } from "@/data/siteContent";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type SiteContent = typeof siteContent;

type Props = {
  lang: Language;
  content: SiteContent[Language];
  onChangeLanguage: (lang: Language) => void;
};

const ids = ["hero", "about", "projects", "skills", "timeline", "contact"] as const;

export function NavBar({ lang, content, onChangeLanguage }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="hidden w-24 md:block" />
        <nav className="hidden gap-2 md:flex">
          {ids.map((id) => (
            <a key={id} href={`#${id}`} className="nav-chip">
              {content.nav[id]}
            </a>
          ))}
        </nav>
        <LanguageSwitcher current={lang} onChange={onChangeLanguage} />
      </div>
    </header>
  );
}
