import { ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CollapsibleProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Centralize o título (chevron fica fixo à direita). */
  centerTitle?: boolean;
  className?: string;
};

/** Cor dourada usada nos títulos dos cards colapsáveis. */
const GOLD = "text-[var(--gold)]";

/**
 * Card colapsável: cabeçalho com um chevron `>` que gira ao abrir e
 * expande/retrai o conteúdo com animação suave (grid-rows 0fr ↔ 1fr).
 */
export function Collapsible({
  title,
  children,
  defaultOpen = false,
  centerTitle = false,
  className,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card
      className={cn(
        "animated-border animated-border-gold overflow-hidden",
        className,
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "relative flex w-full cursor-pointer items-center gap-3 p-5 font-medium",
          centerTitle ? "justify-center text-center" : "justify-between",
        )}
      >
        <span className={cn("font-semibold", GOLD)}>{title}</span>
        <ChevronRight
          aria-hidden
          className={cn(
            "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
            centerTitle && "absolute right-5 top-1/2 -translate-y-1/2",
            open && "rotate-90",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 pb-5 pt-5">{children}</div>
        </div>
      </div>
    </Card>
  );
}
