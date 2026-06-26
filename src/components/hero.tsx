import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

const AVATAR_SRC = "/img/avatar/brito1.jpg";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="mx-auto flex max-w-3xl scroll-mt-20 flex-wrap items-center gap-8 px-6 pb-14 pt-12"
    >
      <img
        src={AVATAR_SRC}
        width={132}
        height={132}
        alt={t("hero_avatar_alt")}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="size-28 shrink-0 rounded-md border border-border object-cover grayscale-[0.15] sm:size-32"
      />

      <div className="min-w-[280px] flex-1">
        <p className="mb-2 text-sm text-muted-foreground">
          <span className="text-primary">$</span> {t("hero_prompt")}
        </p>
        <h1 className="mb-1.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Matheus Brito
        </h1>
        <p className="mb-1 font-medium text-primary before:text-primary/70 before:content-['>_']">
          {t("hero_role")}
        </p>
        <p className="mb-4 text-sm text-muted-foreground">
          {t("hero_subtitle")}
        </p>
        <p className="mb-7 max-w-prose text-foreground">{t("hero_pitch")}</p>

        <a href="#projetos" className={buttonVariants({ variant: "primary" })}>
          → {t("btn_view_projects")}
        </a>
      </div>
    </section>
  );
}
