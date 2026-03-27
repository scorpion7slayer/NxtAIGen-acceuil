import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <p
        className={cn(
          "text-base md:text-lg text-foreground-muted",
          centered ? "max-w-2xl mx-auto" : "max-w-xl"
        )}
      >
        {description}
      </p>
    </div>
  );
}
