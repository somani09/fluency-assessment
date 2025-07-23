"use client";

import { useState } from "react";
import { FiTrendingUp, FiArrowDown, FiRepeat } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { cn, getCumulativeData } from "@/app/utils";
import {
  getGlassButtonClasses,
  glassPanelClass,
  secondaryButtonClass,
} from "@/app/css-utils";
import AnalyticsCard from "@/components/apex-charts/analytics-cards";
import LineChart from "@/components/apex-charts/line-chart";
import BarChart from "@/components/apex-charts/bar-chart";
import { userChangeDataConfig } from "../chart-data";

const CHART_TYPES = ["line", "bar"] as const;
type ChartType = (typeof CHART_TYPES)[number];

const AnalyticsSummaryCards = () => (
  <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
    <AnalyticsCard
      icon={<FiTrendingUp className="h-full w-full" />}
      value="+7"
      title="Net Growth (7 days)"
      subtitle="Last 7 days combined gain/loss"
    />
    <AnalyticsCard
      icon={<FiArrowDown className="h-full w-full" />}
      value="8 of 16"
      title="Negative/Flat Days"
      subtitle="50% of days saw no or negative growth"
    />
    <AnalyticsCard
      icon={<FiRepeat className="h-full w-full" />}
      value="3 days"
      title="Longest Gain Streak"
      subtitle="Best growth stretch: Day 10–12"
    />
  </div>
);

const UserChange = () => {
  const [footerOpen, setFooterOpen] = useState(false);
  const [chartType, setChartType] = useState<ChartType>("line");
  const [showCumulative, setShowCumulative] = useState(false);

  const rawCounts = userChangeDataConfig.map((d) => d.count);
  const counts = showCumulative ? getCumulativeData(rawCounts) : rawCounts;
  const dates = userChangeDataConfig.map((d) => d.date);

  const chartProps = {
    data: counts,
    xLabels: dates,
    fullData: userChangeDataConfig,
    title: "User Gain / Loss Over Time",
    xAxisLabel: "Date",
    yAxisLabel: "Net User Change",
  };

  return (
    <div className="relative flex min-h-screen flex-col space-y-8 px-8 py-12">
      <div className="flex w-full items-end justify-between">
        <div>
          <h1 className="text-heading text-4xl font-bold lg:text-6xl">
            User Gain / Loss
          </h1>
          <hr className="border-accent mt-4 mb-4 w-full border-2" />
        </div>
        <button className="bg-primary hover:bg-primary/80 h-8 cursor-pointer rounded-2xl px-4 py-0 text-sm text-white">
          Assumptions
        </button>
      </div>

      {/* Cards */}
      <div className="hidden lg:block">
        <AnalyticsSummaryCards />
      </div>

      {/* Chart Controls */}
      <div className="mb-0 flex flex-col space-y-1">
        <h2 className="text-heading text-2xl font-semibold">Chart Type</h2>
        <p className="text-subheading mt-1 text-sm">
          Choose how to visualize gain/loss trends
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
                {type === "line" ? "Line Chart" : "Bar Chart"}
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
            Show Cumulative
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
        {chartType === "line" ? (
          <LineChart {...chartProps} isCumulative={showCumulative} />
        ) : (
          <BarChart {...chartProps} isCumulative={showCumulative} />
        )}
      </div>

      <div className="block lg:hidden">
        <AnalyticsSummaryCards />
      </div>

      {/* Footer */}
      <div
        className={cn(
          "fixed bottom-0 z-40 transition-transform duration-300 ease-in-out",
          "left-0 w-full sm:left-[120px] sm:w-[calc(100%-120px)]",
          footerOpen ? "translate-y-0" : "translate-y-[calc(100%-2.75rem)]",
        )}
      >
        <div
          className={cn(
            "relative flex flex-col backdrop-blur-md",
            glassPanelClass,
            "bg-glass/15 border-border/50 border-t sm:rounded-t-2xl",
          )}
        >
          <div className="flex h-11 items-center justify-between px-6">
            <h3 className="text-heading text-sm font-semibold">
              Weekly Retention Summary
            </h3>
            <button
              className="text-heading cursor-pointer"
              onClick={() => setFooterOpen(!footerOpen)}
              aria-label="Toggle footer"
            >
              {footerOpen ? (
                <MdKeyboardArrowDown size={20} />
              ) : (
                <MdKeyboardArrowUp size={20} />
              )}
            </button>
          </div>

          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300 ease-in-out",
              footerOpen
                ? "max-h-[500px] grid-rows-[1fr] pt-2 pb-5 opacity-100"
                : "max-h-0 grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="flex flex-col gap-4 px-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-heading text-base font-medium">
                  Retention Score
                </span>
                <span className="bg-primary rounded-full px-4 py-1 text-sm font-medium text-white">
                  6.3 / 10
                </span>
              </div>

              <div className="text-subheading flex flex-wrap items-center gap-6 text-sm">
                <div>
                  <strong className="text-heading">Total change:</strong> +16
                </div>
                <div>
                  <strong className="text-heading">Negative days:</strong> 7
                </div>
                <div>
                  <strong className="text-heading">Zero-change days:</strong> 2
                </div>
                <div>
                  <strong className="text-heading">Gain streak:</strong> 3 days
                </div>
              </div>

              <div className="text-subheading text-sm leading-snug">
                <strong className="text-heading">Suggestions:</strong> Focus on
                reducing daily volatility. Investigate churn causes on days with
                user loss. Try lifecycle messaging to retain new users
                post-onboarding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChange;
