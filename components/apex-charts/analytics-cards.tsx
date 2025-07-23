import { cn } from "@/app/utils";
import { glassPanelClass } from "@/app/css-utils";
import { type ReactNode } from "react";

interface AnalyticsCardProps {
  icon: ReactNode;
  value: string;
  title: string;
  subtitle: string;
  timeframe?: string;
}

const AnalyticsCard = ({
  icon,
  value,
  title,
  subtitle,
  timeframe = "Last 7 days",
}: AnalyticsCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex min-w-64 flex-col justify-between gap-2 rounded-2xl px-5 py-4 transition-all duration-200 hover:scale-[1.015]",
        glassPanelClass,
        "border-border/50 hover:border-border/70",
      )}
    >
      {/* Icon & Timeframe Row */}
      <div className="flex items-start justify-between">
        <div className="text-accent group-hover:text-heading h-10 w-10 shrink-0 transition">
          {icon}
        </div>
        <span className="text-subheading text-xs font-semibold">
          {timeframe}
        </span>
      </div>

      {/* Main Metric */}
      <div className="flex flex-col">
        <span className="text-heading text-4xl font-bold tracking-tight">
          {value}
        </span>
        <span className="text-subheading text-sm font-medium tracking-wide">
          {title}
        </span>
      </div>

      {/* Divider */}
      <div className="border-border/20 my-1 w-full border-t" />

      {/* Supporting Insight */}
      <div className="text-text text-sm leading-snug">{subtitle}</div>
    </div>
  );
};

export default AnalyticsCard;
