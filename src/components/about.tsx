import { Fragment } from "react";
import { Collapsible } from "@/components/ui/collapsible";
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

/** Card colapsável "Mais sobre mim", exibido dentro da tela de Início. */
export function About() {
  const { t } = useLanguage();

  return (
    <Collapsible
      title={t("about_card_title")}
      centerTitle
      className="mx-auto w-full max-w-prose"
    >
      <p className="text-base leading-relaxed text-muted-foreground">
        {renderEmphasis(t("about_body"))}
      </p>
    </Collapsible>
  );
}
