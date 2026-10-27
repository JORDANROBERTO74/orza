import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
  outline:
    "border border-border bg-card text-foreground hover:border-foreground/40",
  light: "bg-background text-foreground hover:bg-accent hover:text-white",
} as const;

export function CtaLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof variants }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
