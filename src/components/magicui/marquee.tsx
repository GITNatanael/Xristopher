import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const getAnimationClass = (vertical: boolean, reverse: boolean) => {
    if (vertical && reverse) return "animate-marquee-vertical-reverse";
    if (vertical && !reverse) return "animate-marquee-vertical";
    if (!vertical && reverse) return "animate-marquee-reverse";
    return "animate-marquee";
  };

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              getAnimationClass(vertical, reverse),
              {
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "flex-col": vertical,
                "flex-row": !vertical,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
