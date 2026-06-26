import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible } from "@/components/ui/collapsible";
import { skills } from "@/data/skills";
import { useLanguage } from "@/providers/language-provider";

function GroupLabel({ children }: { children: string }) {
  return (
    <h3 className="mb-3 text-center text-sm font-medium text-muted-foreground">
      {children}
    </h3>
  );
}

export function Skills() {
  const { t, language } = useLanguage();

  return (
    <Section id="skills" title={t("section_skills_title")} panel>
      <div className="mb-7">
        <GroupLabel>{t("skills_core")}</GroupLabel>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {skills.core.map((skill) => (
            <li key={skill.name}>
              <Card className="animated-border h-full">
                <CardContent className="items-center text-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="text-xs text-muted-foreground">
                    {skill.level[language]} · {skill.years} {t("years_label")}
                  </span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-7">
        <GroupLabel>{t("skills_learning")}</GroupLabel>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {skills.learning.map((skill) => (
            <li key={skill.name}>
              <Card className="animated-border h-full">
                <CardContent className="items-center text-center">
                  <span className="flex flex-wrap items-center justify-center gap-2.5">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      title={skill.name}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 object-contain"
                    />
                    <Badge variant="outline">{t("badge_learning")}</Badge>
                  </span>
                  <span className="text-sm leading-snug text-muted-foreground">
                    {skill.focus[language]}
                  </span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <Collapsible title={t("skills_stack_title")} centerTitle>
        {skills.stack.map((group) => (
          <div key={group.labelKey} className="mb-7 last:mb-0">
            <GroupLabel>{t(group.labelKey)}</GroupLabel>
            <ul className="flex flex-wrap justify-center gap-2">
              {group.items.map((item) => {
                const label =
                  typeof item.name === "string"
                    ? item.name
                    : item.name[language];
                return (
                  <li key={label}>
                    {item.color ? (
                      <Badge
                        variant="outline"
                        className="gap-1.5 border-2"
                        style={{ borderColor: item.color }}
                      >
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        {label}
                      </Badge>
                    ) : (
                      <Badge>{label}</Badge>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Collapsible>
    </Section>
  );
}
