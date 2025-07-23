import { UserEntry } from "@/app/chart-data";
import { glassPanelClass } from "@/app/css-utils";

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
  const padding = Math.ceil(Math.max(Math.abs(min), Math.abs(max)) * 0.1); // 10% padding

  return {
    minY: min < 0 ? min - padding : 0,
    maxY: max > 0 ? max + padding : 0,
  };
};

export const getCustomTooltipHTML = (
  entry: UserEntry,
  index: number,
  fullData: UserEntry[],
  isCumulative: boolean,
): string => {
  const total = fullData
    .slice(0, index + 1)
    .reduce((sum, e) => sum + e.count, 0);
  const today = entry.count;

  const countDisplay = isCumulative
    ? `
      <div>
        <div class="text-heading text-xl font-bold tracking-tight">${total} users</div>
        <div class="text-subheading text-sm">Today: ${today}</div>
      </div>
    `
    : `<div class="text-heading text-2xl font-bold tracking-tight">${today} users</div>`;

  return `
  <div class="w-max h-max bg-white/60">
    <div class="max-w-[300px] rounded-lg border border-border/50 p-4 shadow-md  bg-glass/5 backdrop-blur-3xl">
      <div class="flex justify-between text-xs font-semibold text-subheading mb-1">
        ${countDisplay}
        <span>${entry.date}</span>
      </div>
      <div class="border-t border-border/20 my-2"></div>
      <div class="flex flex-col gap-1 text-base text-text">
        <div class="text-wrap"><span class="text-subheading font-bold uppercase text-sm underline">Source:</span> ${entry.source}</div>
        <div class="text-wrap"><span class="text-subheading font-bold uppercase text-sm underline">Device:</span> ${entry.device}</div>
        <div class="text-wrap"><span class="text-subheading font-bold uppercase text-sm underline">Location:</span> ${entry.location}</div>
      </div>
    </div>
  </div>
  `;
};

export const getCommonAxisStyle = () => ({
  xaxis: {
    tooltip: { enabled: false },
    labels: {
      style: {
        color: "#004052",
        fontWeight: 500,
        fontSize: "13px",
      },
      offsetY: 4,
    },
    axisBorder: { show: false },
    axisTicks: {
      show: true,
      color: "#c1cdf9",
      offsetY: -2,
    },
  },
  yaxis: {
    tickAmount: 5,
    min: 0,
    labels: {
      style: {
        colors: "#004052",
        fontWeight: 500,
        fontSize: "13px",
      },
    },
    axisBorder: {
      show: true,
      color: "#c1cdf9",
      width: 2,
    },
    axisTicks: {
      show: true,
      color: "#c1cdf9",
      width: 3,
      offsetX: 1,
    },
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#c1cdf9",
  },
});

export const getGradientFill = () => ({
  type: "gradient",
  gradient: {
    shade: "light",
    type: "vertical",
    gradientToColors: ["#bcb6f6", "#9dcced"],
    opacityFrom: 0.9,
    opacityTo: 0.3,
    stops: [0, 75, 100],
  },
});

export const getStroke = (color: string) => ({
  curve: "smooth" as const,
  width: 3,
  colors: [color],
});
