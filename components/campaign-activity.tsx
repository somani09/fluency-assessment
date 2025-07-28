import GlassLayout from "@/components/layouts/glass-layout";
import type { CampaignActivityItem } from "@/app/types-and-interfaces";
import { cn } from "@/app/utils";

interface CampaignActivityProps {
  data: CampaignActivityItem[];
  className?: string;
}

export default function CampaignActivity({
  data,
  className,
}: CampaignActivityProps) {
  const columns = {
    type: data.map((item) => ({ icon: item.icon, name: item.name })),
    date: data.map((item) => item.dateRange),
    users: data.map((item) => item.newUsers),
  };

  return (
    <GlassLayout
      className={cn("flex h-auto w-auto flex-1", className)}
      backgroundClassName="bg-white/10"
      contentClassName="flex-1 flex backdrop-blur-[16px]"
    >
      <div className="flex w-full flex-1 flex-col gap-4 p-4">
        <h2 className="text-heading text-xl font-bold underline underline-offset-[6px] sm:text-2xl">
          Campaign Activity
        </h2>

        <div className="border-secondary scrollbar h-full overflow-x-auto rounded-xl border bg-white/30 p-3 sm:p-4">
          <div className="mt-2 flex w-full gap-10 whitespace-nowrap">
            {/* Campaign Type Column */}
            <div className="flex w-max flex-col text-sm sm:text-base">
              <div className="mb-3 w-max font-bold underline">
                Campaign Type
              </div>
              {columns.type.map((item, idx) => (
                <div
                  key={`type-${idx}`}
                  className="text-primary mb-3 flex items-center gap-2 font-medium last:mb-0"
                >
                  {item.icon && (
                    <item.icon className="text-twilight-blue-violet-400 h-5 w-5 shrink-0" />
                  )}
                  <span className="whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Date Range Column */}
            <div className="text-light flex w-max flex-col items-end text-sm sm:text-base">
              <div className="mb-3 font-bold underline">Date Range</div>
              {columns.date.map((date, idx) => (
                <div
                  key={`date-${idx}`}
                  className="mb-3 text-center whitespace-nowrap last:mb-0"
                >
                  {date}
                </div>
              ))}
            </div>

            {/* New Users Column */}
            <div className="flex w-max flex-col items-end text-sm font-light sm:text-base">
              <div className="mb-3 font-bold underline">New Users</div>
              {columns.users.map((count, idx) => (
                <div
                  key={`users-${idx}`}
                  className="mb-3 text-center whitespace-nowrap last:mb-0"
                >
                  {count}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassLayout>
  );
}
