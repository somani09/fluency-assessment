import { cn } from "@/app/utils";
import type { CampaignSuggestion } from "@/app/types-and-interfaces";
import GlassLayout from "@/components/layouts/glass-layout";

interface SuggestionsCardProps {
  data: CampaignSuggestion;
}

const SuggestionsCard = ({ data }: SuggestionsCardProps) => {
  const titleId = `suggestion-title-${data.title.replace(/\s+/g, "-").toLowerCase()}`;
  const insightId = `${titleId}-insight`;

  return (
    <GlassLayout
      noImage
      backgroundClassName="bg-white/50 blur-none"
      className="w-max max-w-[400px] min-w-[280px] shrink-0 text-sm backdrop-blur-none"
    >
      <article
        role="article"
        aria-labelledby={titleId}
        aria-describedby={insightId}
        className="flex h-full flex-col justify-between p-4"
      >
        {/* Title and Icon */}
        <div>
          <div
            id={titleId}
            className="text-heading mb-1 flex items-start gap-2 text-base font-medium sm:text-2xl"
          >
            {data.icon && (
              <data.icon
                className={cn("h-9 w-9 shrink-0", data.iconClassName)}
              />
            )}
            {data.title}
          </div>

          <hr className="border-accent mt-2 mb-4 w-full border" />

          {/* Insight Text */}
          <p
            id={insightId}
            className="text-subheading text-xl leading-snug font-normal"
          >
            {data.insight}
          </p>
        </div>

        {/* Footer Anchor */}
        <p className="text-heading mt-3 w-full text-right text-base font-bold underline">
          {data.dataAnchor}
        </p>
      </article>
    </GlassLayout>
  );
};

export default SuggestionsCard;
