import { cn } from "@/app/utils";
import type { CampaignSuggestion } from "@/app/types-and-interfaces";

interface SuggestionsCardProps {
  data: CampaignSuggestion;
}

const SuggestionsCard = ({ data }: SuggestionsCardProps) => {
  return (
    <div className="bg-glass/40 border-border/30 flex w-max max-w-[400px] min-w-[280px] shrink-0 flex-col justify-between rounded-xl border p-4 text-sm shadow-sm">
      <div>
        <div className="text-heading mb-1 flex items-start gap-2 text-base font-medium sm:text-2xl">
          {data.icon && (
            <data.icon className={cn("h-9 w-9 shrink-0", data.iconClassName)} />
          )}
          {data.title}
        </div>

        <hr className="border-accent mt-2 mb-4 w-full border" />

        <p className="text-subheading text-xl leading-snug font-normal">
          {data.insight}
        </p>
      </div>
      <p className="text-heading mt-3 w-full text-right text-base font-bold underline">
        {data.dataAnchor}
      </p>
    </div>
  );
};

export default SuggestionsCard;
