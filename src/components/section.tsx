import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title?: string;
  /** Renderiza a seção como uma "tela" de altura total, com snap de rolagem. */
  panel?: boolean;
  children: ReactNode;
};

export function Section({ id, title, panel, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-3xl px-6",
        panel
          ? "flex min-h-[calc(100dvh-4rem)] snap-start flex-col justify-center py-20"
          : "scroll-mt-20 py-14",
      )}
    >
      {title && (
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
