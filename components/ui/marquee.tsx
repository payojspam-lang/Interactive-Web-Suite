import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      style={{ "--duration": "40s", "--gap": "1.5rem", gap: "var(--gap)", ...props.style } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "flex-row": !vertical,
              "flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
            style={{ 
              gap: "var(--gap)",
              animation: vertical 
                  ? `marquee-vertical var(--duration) linear infinite ${reverse ? 'reverse' : 'normal'}` 
                  : `marquee var(--duration) linear infinite ${reverse ? 'reverse' : 'normal'}` 
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
