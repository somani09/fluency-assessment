"use client";

import { BsBarChartFill, BsGraphUp } from "react-icons/bs";
import { cn } from "@/app/utils";
import { useRef } from "react";
import { useCloseOnOutsideClick } from "@/app/hooks";
import GlassLayout from "../layouts/glass-layout";
import { Button } from "../buttons/button";
import { CgClose } from "react-icons/cg";

interface ChartGearBoxProps {
  onClose: () => void;
  chartType: "line" | "bar";
  setChartType: (type: "line" | "bar") => void;
  showCumulative: boolean;
  setShowCumulative: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const ChartGearBox = ({
  onClose,
  chartType,
  setChartType,
  showCumulative,
  setShowCumulative,
  className,
}: ChartGearBoxProps) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  useCloseOnOutsideClick(panelRef, onClose);

  return (
    <GlassLayout
      noImage
      className={cn(
        "absolute top-[0px] right-0 z-[100] h-max w-[400px] min-w-[300px] rounded-2xl",
        className,
      )}
      backgroundClassName="bg-white/50 border border-primary/20"
      contentClassName=" flex flex-col gap-6 h-max"
    >
      <div ref={panelRef} className="relative w-full p-4">
        <div className="border-secondary hover:border-primary hover:text-primary text-secondary absolute top-4 right-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 shadow">
          <CgClose onClick={onClose} className="h-4 w-4" />
        </div>
        <div className="space-y-4">
          {/* Header */}
          <h2 className="text-heading text-lg font-medium underline sm:text-xl">
            Chart Configurations
          </h2>

          {/* Chart Type Selection */}
          <div>
            <p className="text-secondary line mb-0.5 text-base leading-[100%] font-medium">
              Chart Type:
            </p>
            <p className="text-text text-sm leading-[100%]">
              Choose how to visualize new user growth
            </p>
            <div className="mt-2 flex gap-3">
              <Button
                variant="primary"
                isSelected={chartType === "line"}
                onClick={() => setChartType("line")}
              >
                <BsGraphUp className="h-4 w-4" />
                Line Chart
              </Button>
              <Button
                variant="secondary"
                isSelected={chartType === "bar"}
                onClick={() => setChartType("bar")}
              >
                <BsBarChartFill className="h-4 w-4" />
                Bar Chart
              </Button>
            </div>
          </div>

          {/* Cumulative Toggle */}
          <div>
            <p className="text-primary text-sm leading-[100%] font-semibold">
              View Cumulative Data
            </p>
            <Button
              variant="secondary"
              isSelected={showCumulative}
              onClick={() => setShowCumulative((prev) => !prev)}
              className="mt-2"
            >
              Cumulative Mode
            </Button>
          </div>
        </div>
      </div>
    </GlassLayout>
  );
};

export default ChartGearBox;
