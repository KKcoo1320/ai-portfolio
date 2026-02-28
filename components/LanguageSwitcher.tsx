import { Languages } from "lucide-react";
import type { Language } from "@/data/siteContent";

type Props = {
  current: Language;
  onChange: (lang: Language) => void;
};

export function LanguageSwitcher({ current, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-line bg-slate-950/70 p-1">
      <span className="pl-2 text-cyan-200">
        <Languages size={14} />
      </span>
      <button
        className={`rounded-full px-3 py-1 text-xs transition ${
          current === "zh" ? "bg-cyan-400/25 text-cyan-100" : "text-slate-300"
        }`}
        onClick={() => onChange("zh")}
      >
        中
      </button>
      <button
        className={`rounded-full px-3 py-1 text-xs transition ${
          current === "en" ? "bg-cyan-400/25 text-cyan-100" : "text-slate-300"
        }`}
        onClick={() => onChange("en")}
      >
        EN
      </button>
    </div>
  );
}
