import { cn } from "@/lib/utils";
import { MotionReveal } from "@/components/ui/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <MotionReveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 md:text-lg">{description}</p> : null}
    </MotionReveal>
  );
}
