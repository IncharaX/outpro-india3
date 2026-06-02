import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
}

export function Surface({
  children,
  className,
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border bg-card shadow-sm transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}