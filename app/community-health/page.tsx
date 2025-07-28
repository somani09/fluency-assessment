"use client";

import { useState } from "react";
import { FiActivity, FiTrendingUp, FiZap } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { cn, getCumulativeData } from "@/app/utils";
import {
  getGlassButtonClasses,
  glassPanelClass,
  secondaryButtonClass,
} from "@/app/css-utils";
import LineChart from "@/components/apex-charts/line-chart";
import BarChart from "@/components/apex-charts/bar-chart"; // 👈 Import BarChart
import { newUserDataConfig } from "../chart-data";
import SummaryCard from "@/components/summary-card";
import {
  campaignActivityData,
  footerSuggestionsAndAnalyticsData,
  summaryCardData,
} from "../community-health-data";
import CampaignActivity from "@/components/campaign-activity";
import FooterPanel from "@/components/footer/footer";

const CHART_TYPES = ["line", "bar"] as const;
type ChartType = (typeof CHART_TYPES)[number];

const CommunityHealth = () => {
  const [chartType, setChartType] = useState<ChartType>("line");
  const [showCumulative, setShowCumulative] = useState(false);

  const rawCounts = newUserDataConfig.map((d) => d.count);
  const counts = showCumulative ? getCumulativeData(rawCounts) : rawCounts;
  const dates = newUserDataConfig.map((d) => d.date);

  const chartProps = {
    data: counts,
    xLabels: dates,
    fullData: newUserDataConfig,
    title: "New Users Over Time",
    xAxisLabel: "Date",
    yAxisLabel: "New Users",
    color: "#a4bff6",
  };

  return (
    <div className="relative flex min-h-screen flex-col space-y-8 p-6">
      <div className="flex h-max w-full gap-5">
        <div className="flex flex-col items-start justify-between lg:w-[60%]">
          <div className="w-max">
            <h1 className="text-heading text-4xl leading-[150%] font-bold lg:text-6xl">
              New User Growth
            </h1>
            <hr className="border-accent mt-4 mb-2 w-full border-2" />
          </div>
          <div className="mb-5 flex text-sm sm:text-base">
            <p className="font-bold">Date Range: &nb </p>
            <p className="font-normal">2025-07-01 - 2025-07-14</p>
          </div>
          <SummaryCard data={summaryCardData} />
        </div>
        <CampaignActivity data={campaignActivityData} />
      </div>
      {/* Cards */}
      <div className="hidden w-[600px] lg:block"></div>

      {/* Chart Controls */}
      <div className="mb-0 flex flex-col space-y-1">
        <h2 className="text-heading text-2xl font-semibold">Chart Type</h2>
        <p className="text-subheading mt-1 text-sm">
          Choose how to visualize new user growth
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4 sm:flex-nowrap sm:items-end">
          <div className="flex flex-wrap items-center gap-4">
            {CHART_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={cn(
                  secondaryButtonClass,
                  chartType === type && "bg-primary text-white",
                )}
              >
                {type === "line"
                  ? "Line Chart"
                  : type === "bar"
                    ? "Bar Chart"
                    : "Line Chart"}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCumulative((prev) => !prev)}
            className={cn(
              getGlassButtonClasses(showCumulative),
              "w-max px-2 py-1",
            )}
          >
            Show Cumulative{" "}
          </button>
        </div>
      </div>

      {/* Chart Display */}
      <div
        className={cn(
          "mt-4 h-[400px] w-full rounded-xl pb-4 pl-4",
          glassPanelClass,
          "bg-glass/5 border-border/50 border-1",
        )}
      >
        {chartType === "line" && (
          <LineChart {...chartProps} isCumulative={showCumulative} />
        )}
        {chartType === "bar" && (
          <BarChart {...chartProps} isCumulative={showCumulative} />
        )}
        {/* Placeholder for now */}
      </div>

      <div className="block lg:hidden">
        <SummaryCard data={summaryCardData} />
      </div>

      {/* Footer */}
      <FooterPanel data={footerSuggestionsAndAnalyticsData} />
    </div>
  );
};

export default CommunityHealth;
