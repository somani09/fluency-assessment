"use client";

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { cn } from "@/app/utils";
import { glassPanelClass, secondaryButtonClass } from "@/app/css-utils";
import type { FooterSuggestionsAndAnalytics } from "@/app/types-and-interfaces";
import SuggestionsCard from "./suggestion-card";
import AnalyticsCard from "./analytics-card";

interface FooterPanelProps {
  data: FooterSuggestionsAndAnalytics;
}

const FooterPanel = ({ data }: FooterPanelProps) => {
  const [footerOpen, setFooterOpen] = useState(true);
  const [view, setView] = useState<"suggestions" | "analytics">("suggestions");

  return (
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
        {/* Top Bar */}
        <div className="flex h-11 items-center justify-between px-6">
          <h3 className="text-heading text-2xl font-semibold underline">
            {data.sectionTitle}
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

        {/* Expandable Content */}
        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300 ease-in-out",
            footerOpen
              ? "max-h-[500px] grid-rows-[1fr] pt-2 pb-6 opacity-100"
              : "max-h-0 grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="flex max-w-full flex-col gap-4 overflow-hidden px-6">
            {/* Toggle Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("suggestions")}
                className={cn(
                  secondaryButtonClass,
                  view === "suggestions" && "bg-primary text-white",
                )}
              >
                Show Suggestions
              </button>
              <button
                onClick={() => setView("analytics")}
                className={cn(
                  secondaryButtonClass,
                  view === "analytics" && "bg-primary text-white",
                )}
              >
                Show Analytics
              </button>
            </div>
            {/* Description */}
            <p className="text-subheading text-sm">
              {view === "suggestions"
                ? data.suggestionsDescription
                : data.analyticsDescription}
            </p>
            {/* Cards Grid */}{" "}
            <div className="scrollbar flex justify-start gap-4 overflow-x-auto scroll-smooth px-1 pt-1 pb-1">
              {view === "suggestions" &&
                data.suggestions.map((item, idx) => (
                  <SuggestionsCard key={`sugg-${idx}`} data={item} />
                ))}
              {view === "analytics" &&
                data.analytics.map((item, idx) => (
                  <AnalyticsCard key={`ana-${idx}`} data={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPanel;
