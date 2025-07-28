"use client";

import { useState } from "react";

import { cn, getCumulativeData } from "@/app/utils";
import LineChart from "@/components/apex-charts/line-chart";
import BarChart from "@/components/apex-charts/bar-chart"; // commented out
import SummaryCard from "@/components/summary-card";
import {
  campaignActivityData,
  footerSuggestionsAndAnalyticsData,
  summaryCardData,
  communityChartData,
} from "../community-health-data";
import CampaignActivity from "@/components/campaign-activity";
import FooterPanel from "@/components/footer/footer";
import GlassLayout from "@/components/layouts/glass-layout";
import { BsGearFill } from "react-icons/bs";
import ChartGearBox from "@/components/apex-charts/chart-gear-box";

type ChartType = "line" | "bar";

const CommunityHealth = () => {
  const [chartType, setChartType] = useState<ChartType>("line");
  const [showCumulative, setShowCumulative] = useState(false);
  const [gearOpen, setGearOpen] = useState(false);

  const rawCounts = communityChartData.map((d) => d.count);
  const counts = showCumulative ? getCumulativeData(rawCounts) : rawCounts;
  const dates = communityChartData.map((d) => d.date);

  const chartProps = {
    data: counts,
    xLabels: dates,
    fullData: communityChartData,
    title: "New Users Over Time",
    xAxisLabel: "Date",
    yAxisLabel: "New Users",
    color: "#8671E1", // twilight-blue-violet-400
  };

  return (
    <div className="relative flex min-h-screen flex-col space-y-8 p-6 pb-12">
      <div className="flex h-max w-full gap-5">
        <div className="flex flex-col items-start justify-between lg:w-[60%]">
          <div className="w-max">
            <h1 className="text-heading text-4xl font-bold lg:text-6xl">
              New User Growth
            </h1>
            <hr className="border-accent mt-4 mb-2 w-full border-2" />
          </div>
          <div className="mb-5 flex text-sm sm:text-base">
            <p className="font-bold">Date Range:&nbsp;</p>
            <p className="font-normal">2025-07-01 - 2025-07-14</p>
          </div>
          <SummaryCard data={summaryCardData} />
        </div>
        <CampaignActivity data={campaignActivityData} />
      </div>

      {/* Chart Display with Glass Panel */}
      <GlassLayout
        className="relative mt-4 w-full"
        backgroundClassName="bg-white/10 blur-[10px]"
        contentClassName="backdrop-blur-[32px] h-[350px]"
      >
        {/* Gear Icon */}
        <button
          onClick={() => setGearOpen((prev) => !prev)}
          className={cn(
            "border-secondary hover:border-primary hover:text-primary text-secondary absolute top-4 right-4 z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 shadow transition-all",
            gearOpen && "opacity-50",
          )}
        >
          <BsGearFill className="h-4 w-4" />
        </button>

        {/* Config Panel */}
        {gearOpen && (
          <ChartGearBox
            onClose={() => setGearOpen(false)}
            chartType={chartType}
            setChartType={setChartType}
            showCumulative={showCumulative}
            setShowCumulative={setShowCumulative}
          />
        )}

        {/* Chart */}
        {chartType === "line" && (
          <LineChart {...chartProps} isCumulative={showCumulative} />
        )}
        {chartType === "bar" && (
          <BarChart {...chartProps} isCumulative={showCumulative} />
        )}
      </GlassLayout>

      {/* Summary card for mobile */}
      <div className="block lg:hidden">
        <SummaryCard data={summaryCardData} />
      </div>

      {/* Footer Panel */}
      <FooterPanel data={footerSuggestionsAndAnalyticsData} />
    </div>
  );
};

export default CommunityHealth;
