import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-mono font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "border border-primary text-primary hover:bg-primary/10",
        secondary:
          "border border-border text-foreground hover:border-primary hover:text-primary",
        ghost:
          "border border-transparent text-muted-foreground hover:text-foreground",
        icon: "border border-border text-foreground hover:border-primary hover:text-primary",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-8 px-3 text-xs",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: never;
  };

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
