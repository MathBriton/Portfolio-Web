import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { useLanguage } from "@/providers/language-provider";

function GroupLabel({ children }: { children: string }) {
  return (
    <h3 className="mb-3.5 text-xs font-medium uppercase tracking-widest text-muted-foreground before:text-primary before:content-['~/_']">
      {children}
    </h3>
  );
}

export function Skills() {
  const { t, language } = useLanguage();

  return (
    <Section id="skills" index={2} title={t("section_skills_title")}>
      <div className="mb-7">
        <GroupLabel>{t("skills_core")}</GroupLabel>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {skills.core.map((skill) => (
            <li key={skill.name}>
              <Card className="hover:border-primary">
                <CardContent>
                  <span className="font-bold">{skill.name}</span>
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
              <Card className="border-l-2 border-l-primary hover:border-primary">
                <CardContent>
                  <span className="flex flex-wrap items-center gap-2.5">
                    <span className="font-bold">{skill.name}</span>
                    <Badge variant="learning">{t("badge_learning")}</Badge>
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

      <div>
        <GroupLabel>{t("skills_foundations")}</GroupLabel>
        <ul className="flex flex-wrap gap-2">
          {skills.foundations.map((name) => (
            <li key={name}>
              <Badge>{name}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
