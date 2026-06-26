import { About } from "@/components/about";
import { useLanguage } from "@/providers/language-provider";

const AVATAR_SRC = "/img/avatar/brito1.jpg";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-3xl snap-start flex-col justify-center gap-10 px-6 py-20"
    >
      <div className="flex flex-wrap items-center gap-8">
        <img
          src={AVATAR_SRC}
          width={144}
          height={144}
          alt={t("hero_avatar_alt")}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="size-32 shrink-0 rounded-full border border-border object-cover shadow-sm ring-2 ring-border/60 ring-offset-2 ring-offset-background sm:size-36"
        />

        <div className="min-w-[280px] flex-1">
          <h1 className="mb-1.5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Matheus Brito
          </h1>
          <p className="mb-1 font-medium text-foreground">{t("hero_role")}</p>
          <p className="mb-4 text-sm text-muted-foreground">
            {t("hero_subtitle")}
          </p>
          <p className="max-w-prose text-muted-foreground">
            {t("hero_pitch")}
          </p>
        </div>
      </div>

      <About />
    </section>
  );
}
