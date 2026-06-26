import { Github } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/data/socials";
import { useLanguage } from "@/providers/language-provider";

export function Navbar() {
  const { t } = useLanguage();
  const github = socials.find((s) => s.id === "github");

  const links = [
    { href: "#sobre", label: t("nav_about") },
    { href: "#skills", label: t("nav_skills") },
    { href: "#projetos", label: t("nav_projects") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-3xl items-center gap-4 px-6">
        <a href="#hero" className="font-bold tracking-tight">
          <span className="text-primary">~/</span>matheus-brito
        </a>

        <ul className="ml-auto hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_github")}
              className={buttonVariants({ variant: "icon", size: "icon" }) + " size-9"}
            >
              <Github className="size-4" />
            </a>
          )}
          <ThemeToggle />
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
