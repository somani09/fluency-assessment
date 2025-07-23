import { cn } from "@/app/utils";

export const shadowDepthPrimary =
  "shadow-[0_2px_6px_rgba(0,53,89,0.15),_0_6px_12px_rgba(0,53,89,0.2),_0_12px_24px_rgba(0,53,89,0.25),_0_20px_32px_rgba(0,53,89,0.2),_0_32px_48px_rgba(0,53,89,0.15)]";

// For full glass containers like sidebar or cards
export const glassPanelClass = cn(
  "bg-glass/10",
  "border-primary/10 border-2",
  "backdrop-blur-[6px]",
  shadowDepthPrimary,
);

// For interactive elements like nav buttons, clickable cards, etc.
export const glassButtonBase = cn(
  "group flex w-full items-center justify-start space-x-4 rounded-xl px-4 py-4 text-sm font-medium transition-all duration-200 ease-in-out",
  "border-2",
  "backdrop-blur-[6px]",
  shadowDepthPrimary,
);

// Pass active state
export function getGlassButtonClasses(isActive: boolean) {
  return cn(
    glassButtonBase,
    isActive
      ? "bg-glass/30 border-border text-heading font-semibold"
      : "bg-glass/10 border-border/50 text-text hover:text-heading hover:border-border active:bg-glass/30 active:text-heading active:font-semibold",
  );
}

export const secondaryButtonClass = cn(
  "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
  "bg-glass/5 hover:bg-glass/10 active:bg-glass/20",
  "border border-border/30 hover:border-border/60",
  "text-subheading hover:text-heading",
  "backdrop-blur-[4px]",
  shadowDepthPrimary,
);
