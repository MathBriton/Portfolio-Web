import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

/** Section wrapper with the `[0N] title ────` terminal-style heading. */
export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-3xl scroll-mt-20 px-6 py-14">
      <h2 className="mb-7 flex items-baseline gap-2.5 text-lg font-bold lowercase tracking-tight">
        <span className="font-medium text-primary">
          [{String(index).padStart(2, "0")}]
        </span>
        <span>{title}</span>
        <span aria-hidden className="h-px flex-1 self-center bg-border" />
      </h2>
      {children}
    </section>
  );
}
