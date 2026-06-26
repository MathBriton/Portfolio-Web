import { Fragment } from "react";
import { Section } from "@/components/section";
import { useLanguage } from "@/providers/language-provider";

/** Renders a string with **bold** markdown segments emphasized. */
function renderEmphasis(text: string) {
  return text.split("**").map((segment, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold text-foreground">
        {segment}
      </strong>
    ) : (
      <Fragment key={index}>{segment}</Fragment>
    ),
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="sobre" index={1} title={t("section_about_title")}>
      <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
        {renderEmphasis(t("about_body"))}
      </p>
    </Section>
  );
}
