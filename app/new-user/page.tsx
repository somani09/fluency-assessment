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
import AnalyticsCard from "@/components/apex-charts/analytics-cards";
import LineChart from "@/components/apex-charts/line-chart";
import BarChart from "@/components/apex-charts/bar-chart"; // 👈 Import BarChart
import { newUserDataConfig } from "../chart-data";

const CHART_TYPES = ["line", "bar"] as const;
type ChartType = (typeof CHART_TYPES)[number];

const AnalyticsSummaryCards = () => (
  <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
    <AnalyticsCard
      icon={<FiTrendingUp className="h-full w-full" />}
      value="+94.7%"
      title="Weekly Growth"
      subtitle="37 users this week vs. 19 last week"
    />
    <AnalyticsCard
      icon={<FiZap className="h-full w-full" />}
      value="13 users"
      title="Top Performing Day"
      subtitle="Day 9 had the highest signups"
    />
    <AnalyticsCard
      icon={<FiActivity className="h-full w-full" />}
      value="Moderate"
      title="Acquisition Consistency"
      subtitle="7 of 14 days below 3 users"
    />
  </div>
);

const NewUsers = () => {
  const [footerOpen, setFooterOpen] = useState(false);
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
    <div className="relative flex min-h-screen flex-col space-y-8 px-8 py-12">
      <div className="flex w-full items-end justify-between">
        <div>
          <h1 className="text-heading text-4xl font-bold lg:text-6xl">
            New User Growth
          </h1>
          <hr className="border-accent mt-4 mb-4 w-full border-2" />
        </div>
      </div>

      {/* Cards */}
      <div className="hidden lg:block">
        <AnalyticsSummaryCards />
      </div>

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
              Weekly Acquisition Summary
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
                  Overall Score
                </span>
                <span className="bg-primary rounded-full px-4 py-1 text-sm font-medium text-white">
                  8.7 / 10
                </span>
              </div>

              <div className="text-subheading flex flex-wrap items-center gap-6 text-sm">
                <div>
                  <strong className="text-heading">Avg/day:</strong> 4.5 users
                </div>
                <div>
                  <strong className="text-heading">Best day:</strong> Day 9 (13
                  users)
                </div>
                <div>
                  <strong className="text-heading">Low activity days:</strong> 7
                  of 14
                </div>
                <div>
                  <strong className="text-heading">Zero-user days:</strong> 2
                </div>
              </div>

              <div className="text-subheading text-sm leading-snug">
                <strong className="text-heading">Suggestions:</strong> Try
                boosting awareness on low-performing days and track referral
                source data to optimize acquisition strategies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUsers;
