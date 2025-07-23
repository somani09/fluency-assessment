"use client";

import { useState } from "react";
import { FiActivity, FiTrendingUp, FiZap } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { cn } from "@/app/utils";
import { glassPanelClass, secondaryButtonClass } from "@/app/css-utils";
import AnalyticsCard from "@/components/analytics-cards";

const NewUsers = () => {
  const [footerOpen, setFooterOpen] = useState(true);

  return (
    <div className="relative flex min-h-screen flex-col space-y-10 px-8 py-12">
      <div className="mb-12 flex w-full items-end justify-between">
        <div>
          <h1 className="text-heading text-4xl font-bold lg:text-6xl">
            New User Growth
          </h1>
          <hr className="border-accent mt-4 mb-4 w-full border-2" />
        </div>
        <button className="bg-primary hover:bg-primary/80 h-8 cursor-pointer rounded-2xl px-4 py-0 text-sm text-white">
          Assumptions
        </button>
      </div>

      <div className="grid w-full grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
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

      <div className="mt-6 mb-0 flex flex-col space-y-1">
        <h2 className="text-heading text-2xl font-semibold">Chart Type</h2>
        <p className="text-subheading mt-1 text-sm">
          Choose how to visualize new user growth
        </p>
        <div className="flex flex-wrap items-center justify-start gap-4">
          <button className={secondaryButtonClass}>Line Chart</button>
          <button className={secondaryButtonClass}>Bar Chart</button>
          <button className={secondaryButtonClass}>Area Chart</button>
        </div>
      </div>

      <div className="border-border mt-8 h-[400px] w-full rounded-xl border-2 border-dashed">
        <p className="text-subheading pt-32 text-center">
          [Chart will render here]
        </p>
      </div>

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
