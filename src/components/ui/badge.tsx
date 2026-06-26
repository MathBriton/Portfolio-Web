import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border font-mono font-medium leading-none",
  {
    variants: {
      variant: {
        default:
          "border-border bg-muted px-2 py-1 text-xs text-primary before:mr-0.5 before:text-primary/60 before:content-['#']",
        learning:
          "border-primary bg-transparent px-2 py-1 text-[0.66rem] uppercase tracking-wide text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
