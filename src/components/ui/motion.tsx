"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

const viewport = { once: true, amount: 0.24 };

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  blur = 10,
}: PropsWithChildren<{ className?: string; delay?: number; y?: number; x?: number; blur?: number }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={viewport}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: PropsWithChildren<{ className?: string; delay?: number; stagger?: number }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  y = 28,
  x = 0,
}: PropsWithChildren<{ className?: string; y?: number; x?: number }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, x, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroCascade({ items, className }: { items: ReactNode[]; className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{items}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: 0.08,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, x: index === 0 ? -28 : 0, y: 24, filter: "blur(10px)" },
            show: {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function HeroVisual({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 34, y: 28, scale: 0.97, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.05, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MotionLine({ className }: HTMLAttributes<HTMLDivElement>) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "center" }}
    />
  );
}
