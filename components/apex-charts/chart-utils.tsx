import { CommunityHealthChartData } from "@/app/types-and-interfaces";

export const calculateMaxY = (data: number[]): number => {
  const max = Math.max(...data);
  const padding = Math.ceil(max * 0.1);
  return max + padding;
};

export const calculateMinMaxY = (
  data: number[],
): { minY: number; maxY: number } => {
  const min = Math.min(...data, 0);
  const max = Math.max(...data, 0);
  const padding = Math.ceil(Math.max(Math.abs(min), Math.abs(max)) * 0.1);
  return {
    minY: min < 0 ? min - padding : 0,
    maxY: max > 0 ? max + padding : 0,
  };
};

export const getCustomTooltipHTML = (
  entry: CommunityHealthChartData,
  index: number,
  fullData: CommunityHealthChartData[],
  isCumulative: boolean,
): string => {
  const total = fullData
    .slice(0, index + 1)
    .reduce((sum, e) => sum + e.count, 0);
  const today = entry.count;

  const getOrDash = (val: number | string | null) =>
    val !== null && val !== undefined ? val : "–";

  const countDisplay = isCumulative
    ? `
        <div class="flex flex-col">
          <div class="text-heading text-xl font-bold leading-tight">${total} users</div>
          <div class="text-[0.75rem] font-semibold text-secondary">+${today} today</div>
        </div>
      `
    : `<div class="text-heading text-xl font-bold leading-tight">${today} users</div>`;

  return `
  <div class="relative w-max h-max">
    <div class="absolute inset-0 -z-10 rounded-xl bg-white/70 blur-[10px]"></div>
    <div class="rounded-xl border border-[#cfd8f0] bg-glass/10 backdrop-blur-[32px] p-4 shadow-md">
      <div class="flex items-start justify-between mb-2">
        ${countDisplay}
        <div class="flex items-center gap-1">
          <span class="text-heading font-bold text-lg">${entry.campaign}</span>
        </div>
      </div>

      <div class="border-t border-accent mb-2"></div>

      <ul class="text-base text-heading font-normal space-y-[2px] leading-[1.4]">
        <li><span class="text-secondary">• Avg Time-to-Churn (days):&nbsp;</span> ${getOrDash(entry.avgTimeToChurn)}</li>
        <li><span class="text-secondary">• Unsubscribe Rate (%):&nbsp;</span> ${getOrDash(entry.unsubscribeRate)}</li>
        <li><span class="text-secondary">• Reply Rate (%):&nbsp;</span> ${getOrDash(entry.replyRate)}</li>
        <li><span class="text-secondary">• Retention Curve Slope:&nbsp;</span> ${getOrDash(entry.retentionCurve)}</li>
        <li><span class="text-secondary">• Stickiness Index:&nbsp;</span> ${getOrDash(entry.stickinessIndex)}</li>
      </ul>
    </div>
  </div>
  `;
};

export const getCommonAxisStyle = () => ({
  xaxis: {
    tooltip: { enabled: false },
    labels: {
      style: {
        fontSize: "12px",
        fontWeight: 700,
        colors: "#084B83",
      },
    },
    axisBorder: {
      show: true,
      color: "#BCB6F6",
    },
    axisTicks: {
      show: true,
      color: "#BCB6F6",
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "12px",
        fontWeight: 700,
        colors: "#084B83",
      },
    },
    axisBorder: {
      show: true,
      color: "#BCB6F6",
    },
    axisTicks: {
      show: true,
      color: "#BCB6F6",
    },
  },
  grid: {
    borderColor: "#C1CDF9",
    strokeDashArray: 4,
  },
});

export const getGradientFill = () => ({
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.1,
    stops: [0, 100],
    type: "vertical",

    colorStops: [
      {
        offset: 0,
        color: "#AB71EB",
        opacity: 0.7,
      },
      {
        offset: 100,
        color: "#B69FF2",
        opacity: 0.1,
      },
    ],
  },
});

export const getStroke = (color: string) => ({
  width: 2,
  curve: "smooth" as const,
  colors: [color],
});
