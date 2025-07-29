"use client";

import GlassLayout from "@/components/layouts/glass-layout";
import type { CampaignInsightCard } from "@/app/types-and-interfaces";

interface AnalyticsCardProps {
  data: CampaignInsightCard;
}

export default function AnalyticsCard({ data }: AnalyticsCardProps) {
  return (
    <GlassLayout
      noImage
      backgroundClassName="bg-white/50 blur-none"
      contentClassName="p-4 h-full"
      className="w-max max-w-[400px] min-w-[280px] shrink-0 shadow-2xl backdrop-blur-none"
    >
      <div role="region" aria-label={`${data.campaign} insights`}>
        <div className="text-heading mb-1 flex items-center gap-2 text-base font-medium sm:text-2xl">
          {data.icon && (
            <data.icon
              className="text-twilight-blue-violet-400 h-6 w-6 shrink-0"
              aria-hidden="true"
            />
          )}
          {data.campaign}
        </div>

        <hr className="border-accent mt-2 mb-3 w-full border" />

        <ul className="text-text list-disc space-y-1 pl-4 text-xl leading-snug font-light">
          {data.insights.map((insight, idx) => (
            <li key={idx}>{insight}</li>
          ))}
        </ul>
      </div>
    </GlassLayout>
  );
}
