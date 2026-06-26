import { ArrowUp, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/data/socials";
import type { SocialId } from "@/data/types";
import { useLanguage } from "@/providers/language-provider";

const ICONS: Record<SocialId, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const ARIA_KEYS = {
  github: "aria_github",
  linkedin: "aria_linkedin",
  email: "aria_email",
} as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-4 px-6 pb-6 pt-10 text-center">
      <ul className="flex gap-2.5">
        {socials.map((social) => {
          const Icon = ICONS[social.id];
          const isEmail = social.id === "email";
          return (
            <li key={social.id}>
              <a
                href={social.url}
                aria-label={t(ARIA_KEYS[social.id])}
                {...(isEmail
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className={buttonVariants({ variant: "icon", size: "icon" })}
              >
                <Icon className="size-4" />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-xs text-muted-foreground">
        © {year} Matheus Brito
      </p>

      <a
        href="#hero"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
      >
        <ArrowUp className="size-4" />
        {t("btn_back_to_top")}
      </a>
    </footer>
  );
}
