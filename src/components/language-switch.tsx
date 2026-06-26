import { LANGUAGES, type Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";

const LABELS: Record<Language, string> = {
  "pt-br": "PT",
  en: "EN",
};

export function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("aria_language")}
      className="inline-flex items-center gap-0.5 rounded-md border border-border p-0.5"
    >
      {LANGUAGES.map((lang) => {
        const isActive = lang === language;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={isActive}
            className={cn(
              "inline-flex h-6 min-w-7 items-center justify-center rounded-sm px-1.5 text-xs font-semibold tracking-wide transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {LABELS[lang]}
          </button>
        );
      })}
    </div>
  );
}
