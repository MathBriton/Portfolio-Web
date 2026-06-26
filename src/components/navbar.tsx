import { Github, Linkedin, type LucideIcon } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/data/socials";
import type { SocialId } from "@/data/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";

type NavIcon = { icon: LucideIcon; aria: "aria_github" | "aria_linkedin" };

const NAV_ICONS: Partial<Record<SocialId, NavIcon>> = {
  linkedin: { icon: Linkedin, aria: "aria_linkedin" },
  github: { icon: Github, aria: "aria_github" },
};

export function Navbar() {
  const { t } = useLanguage();

  const links = [
    { href: "#hero", label: t("nav_home") },
    { href: "#skills", label: t("nav_skills") },
    { href: "#projetos", label: t("nav_projects") },
  ];

  // LinkedIn antes do GitHub, na ordem pedida.
  const iconLinks = (["linkedin", "github"] as const)
    .map((id) => ({ ...NAV_ICONS[id]!, social: socials.find((s) => s.id === id) }))
    .filter((item) => item.social);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-3xl items-center gap-6 px-6">
        <a href="#hero" className="font-semibold tracking-tight">
          M. Brito
        </a>

        <ul className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
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

        <div className="ml-auto flex items-center gap-2">
          {iconLinks.map(({ icon: Icon, aria, social }) => (
            <a
              key={social!.id}
              href={social!.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(aria)}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              <Icon className="size-4" />
            </a>
          ))}
          <ThemeToggle />
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
