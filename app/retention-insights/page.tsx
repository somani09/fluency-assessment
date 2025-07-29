"use client";

import { useMemo, useState } from "react";

import { cn, getCumulativeData } from "@/app/utils";
import LineChart from "@/components/apex-charts/line-chart";
import BarChart from "@/components/apex-charts/bar-chart";
import SummaryCard from "@/components/summary-card";
import {
  campaignActivityData,
  footerSuggestionsAndAnalyticsData,
  summaryCardData,
  retentionInsightsChartData,
} from "../data-files/retention-insights-data";
import CampaignActivity from "@/components/campaign-activity";
import FooterPanel from "@/components/footer/footer";
import GlassLayout from "@/components/layouts/glass-layout";
import { BsGearFill } from "react-icons/bs";
import ChartGearBox from "@/components/apex-charts/chart-gear-box";

type ChartType = "line" | "bar";

const RetentionInsights = () => {
  const [chartType, setChartType] = useState<ChartType>("line");
  const [showCumulative, setShowCumulative] = useState(false);
  const [gearOpen, setGearOpen] = useState(false);

  const rawCounts = useMemo(
    () => retentionInsightsChartData.map((d) => d.count),
    [],
  );
  const dates = useMemo(
    () => retentionInsightsChartData.map((d) => d.date),
    [],
  );
  const counts = useMemo(
    () => (showCumulative ? getCumulativeData(rawCounts) : rawCounts),
    [rawCounts, showCumulative],
  );

  const chartProps = {
    data: counts,
    xLabels: dates,
    fullData: retentionInsightsChartData,
    title: "Net User Change Over Time",
    xAxisLabel: "Date",
    yAxisLabel: "Net Users",
    color: "#8671E1", // twilight-blue-violet-400
  };

  return (
    <div className="relative flex min-h-screen flex-col space-y-8 p-6 pb-12">
      {/* Header & Summary */}
      <div className="flex h-max w-full gap-5">
        <div className="relative flex w-full flex-col items-start justify-start lg:w-[60%]">
          <div className="w-max">
            <h1 className="text-heading text-4xl font-bold sm:text-6xl">
              Retention Insights
            </h1>
            <hr className="border-accent mt-4 mb-2 w-full border-2" />
          </div>
          <div className="mb-5 flex text-sm sm:text-base">
            <p className="font-bold">Date Range:&nbsp;</p>
            <p className="font-normal">2025-07-15 - 2025-07-30</p>
          </div>
          <SummaryCard data={summaryCardData} />
        </div>
        <CampaignActivity
          data={campaignActivityData}
          className="hidden lg:flex"
        />
      </div>

      {/* Chart Panel */}
      <GlassLayout
        className="relative mt-4 w-full"
        backgroundClassName="bg-white/10 blur-[10px]"
        contentClassName="backdrop-blur-[32px] h-[350px]"
      >
        <button
          onClick={() => setGearOpen((prev) => !prev)}
          className={cn(
            "border-secondary hover:border-primary hover:text-primary text-secondary absolute top-4 right-4 z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 shadow transition-all",
            gearOpen && "opacity-50",
          )}
        >
          <BsGearFill className="h-4 w-4" />
        </button>

        {gearOpen && (
          <ChartGearBox
            onClose={() => setGearOpen(false)}
            chartType={chartType}
            setChartType={setChartType}
            showCumulative={showCumulative}
            setShowCumulative={setShowCumulative}
          />
        )}

        {chartType === "line" && (
          <LineChart {...chartProps} isCumulative={showCumulative} />
        )}
        {chartType === "bar" && (
          <BarChart {...chartProps} isCumulative={showCumulative} />
        )}
      </GlassLayout>

      {/* Mobile Campaigns */}
      <CampaignActivity
        data={campaignActivityData}
        className="flex lg:hidden"
      />

      {/* Footer */}
      <FooterPanel data={footerSuggestionsAndAnalyticsData} />
    </div>
  );
};

export default RetentionInsights;
