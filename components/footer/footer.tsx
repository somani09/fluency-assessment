"use client";

import { useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import { cn } from "@/app/utils";
import GlassLayout from "@/components/layouts/glass-layout";
import type { FooterSuggestionsAndAnalytics } from "@/app/types-and-interfaces";
import SuggestionsCard from "./suggestion-card";
import AnalyticsCard from "./analytics-card";
import { Button } from "../buttons/button";
import { useCloseOnEscape, useCloseOnOutsideClick } from "@/app/hooks";

interface FooterPanelProps {
  data: FooterSuggestionsAndAnalytics;
}

const FooterPanel = ({ data }: FooterPanelProps) => {
  const [footerOpen, setFooterOpen] = useState(false);
  const [view, setView] = useState<"suggestions" | "analytics">("suggestions");

  const ref = useRef<HTMLDivElement | null>(null);
  useCloseOnOutsideClick(ref, () => setFooterOpen(false));
  useCloseOnEscape(() => setFooterOpen(false));

  const toggleView = () => {
    setView((prev) => (prev === "suggestions" ? "analytics" : "suggestions"));
  };

  const isSuggestionsView = view === "suggestions";
  const ToggleIcon = isSuggestionsView ? BsBarChartFill : TbBulbFilled;
  const toggleText = isSuggestionsView ? "Show Analytics" : "Show Suggestions";

  return (
    <div
      ref={ref}
      className={cn(
        "fixed bottom-0 z-40 transition-transform duration-300 ease-in-out",
        "left-0 w-full sm:left-[120px] sm:w-[calc(100%-120px)]",
        footerOpen ? "translate-y-0" : "translate-y-[calc(100%-4rem)]",
      )}
    >
      <GlassLayout
        backgroundClassName="bg-white/50 rounded-b-none"
        contentClassName="backdrop-blur-[24px] rounded-b-none"
        className="rounded-b-none"
      >
        {/* Header Bar */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFooterOpen(!footerOpen)}
          className="flex h-16 cursor-pointer items-center justify-between px-6"
          aria-label={
            footerOpen ? "Collapse footer panel" : "Expand footer panel"
          }
        >
          <h3 className="text-heading text-2xl font-semibold underline">
            {data.sectionTitle}
          </h3>
          {footerOpen ? (
            <MdKeyboardArrowDown size={20} />
          ) : (
            <MdKeyboardArrowUp size={20} />
          )}
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
            {/* Toggle Button */}
            <div className="flex flex-wrap items-start justify-between sm:flex-nowrap">
              {/* Description */}
              <p className="text-subheading text-lg font-light sm:text-xl">
                {isSuggestionsView
                  ? data.suggestionsDescription
                  : data.analyticsDescription}
              </p>
              <Button
                variant="secondary"
                isSelected
                onClick={toggleView}
                aria-label={toggleText}
                className="whitespace-nowrap"
              >
                <ToggleIcon className="h-4 w-4 shrink-0" />
                {toggleText}
              </Button>
            </div>

            {/* Card Section */}
            <div
              role="region"
              aria-label={
                isSuggestionsView ? "Suggestions list" : "Analytics list"
              }
              className="scrollbar flex justify-start gap-4 overflow-x-auto scroll-smooth px-1 pt-1 pb-1"
            >
              {isSuggestionsView
                ? data.suggestions.map((item, idx) => (
                    <SuggestionsCard key={`sugg-${idx}`} data={item} />
                  ))
                : data.analytics.map((item, idx) => (
                    <AnalyticsCard key={`ana-${idx}`} data={item} />
                  ))}
            </div>
          </div>
        </div>
      </GlassLayout>
    </div>
  );
};

export default FooterPanel;
