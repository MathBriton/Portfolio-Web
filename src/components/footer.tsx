import {
  ArrowUp,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
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
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const email = socials.find((s) => s.id === "email")?.url.replace("mailto:", "");

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="flex flex-col items-center gap-4 px-6 pb-8 pt-12 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {socials.map((social) => {
          const Icon = ICONS[social.id];
          const isEmail = social.id === "email";
          return (
            <a
              key={social.id}
              href={social.url}
              aria-label={t(ARIA_KEYS[social.id])}
              {...(isEmail
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className={buttonVariants({ variant: "outline", size: "icon" })}
            >
              <Icon className="size-4" />
            </a>
          );
        })}

        {email && (
          <Button variant="outline" size="sm" onClick={copyEmail}>
            {copied ? (
              <Check className="size-3.5" />
            ) : (
              <Copy className="size-3.5" />
            )}
            {copied ? t("btn_copied") : t("btn_copy_email")}
          </Button>
        )}
      </div>

      <p className="text-xs text-muted-foreground">© {year} Matheus Brito</p>

      <a
        href="#hero"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowUp className="size-3.5" />
        {t("btn_back_to_top")}
      </a>
    </footer>
  );
}
