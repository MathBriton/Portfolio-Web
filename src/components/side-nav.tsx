import { useEffect, useState } from "react";
import type { TranslationKey } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";

const SECTIONS: { id: string; key: TranslationKey }[] = [
  { id: "hero", key: "nav_home" },
  { id: "skills", key: "nav_skills" },
  { id: "projetos", key: "nav_projects" },
];

/**
 * Navegação lateral em "riscos" (estilo ChatGPT): fixa à direita e
 * centralizada na vertical. Cada risco corresponde a uma tela (Início,
 * Experiência, Projetos) e destaca a seção atualmente visível via
 * IntersectionObserver. O rótulo aparece ao passar o mouse.
 */
export function SideNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    const elements = SECTIONS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={t("aria_sidenav")}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
    >
      {SECTIONS.map(({ id, key }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={t(key)}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2 py-1"
          >
            <span
              className={cn(
                "text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                isActive ? "text-[var(--gold)]" : "text-muted-foreground",
              )}
            >
              {t(key)}
            </span>
            <span
              className={cn(
                "h-0.5 rounded-full transition-all duration-300",
                isActive
                  ? "w-8 bg-[var(--gold)]"
                  : "w-4 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-foreground",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
