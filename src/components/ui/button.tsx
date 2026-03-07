import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-gold text-ink hover:bg-amber shadow-glow",
  secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white/80 hover:text-white",
};

export function Button({ href, children, className, variant = "primary" }: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return <button className={base}>{children}</button>;
}
