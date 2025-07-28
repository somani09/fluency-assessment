"use client";

import { useState } from "react";
import { cn } from "@/app/utils";
import GlassLayout from "@/components/layouts/glass-layout";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TbTriangle } from "react-icons/tb";
import type { SummaryCard } from "@/app/types-and-interfaces";

interface SummaryCardProps {
  data: SummaryCard;
}

export default function SummaryCard({ data }: SummaryCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggleCard = () => setFlipped((prev) => !prev);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className="text-twilight-violet-400 h-5 w-5 sm:h-6 sm:w-6"
        />,
      );
    }

    if (hasHalf) {
      stars.push(
        <FaStarHalfAlt
          key="half"
          className="text-twilight-violet-400 h-5 w-5 sm:h-6 sm:w-6"
        />,
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className="text-twilight-violet-400 h-5 w-5 sm:h-6 sm:w-6"
        />,
      );
    }

    return <div className="ml-2 flex items-center gap-[2px]">{stars}</div>;
  };

  return (
    <GlassLayout>
      <div
        className={cn(
          "relative flex transition-transform duration-300 ease-in-out",
          flipped ? "-translate-x-full" : "translate-x-0",
        )}
        onTouchStart={(e) => {
          const touchStartX = e.changedTouches[0].clientX;
          const handleTouchEnd = (endEvent: TouchEvent) => {
            const touchEndX = endEvent.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;
            if (deltaX < -50) setFlipped(true); // swipe left
            if (deltaX > 50) setFlipped(false); // swipe right
            document.removeEventListener("touchend", handleTouchEnd);
          };
          document.addEventListener("touchend", handleTouchEnd);
        }}
      >
        {/* Front Side */}

        <div className="relative flex min-w-full p-4 pr-6">
          <button
            onClick={toggleCard}
            className="bg-glass/20 absolute top-1/2 right-0 flex h-full w-4 -translate-y-1/2 items-center justify-center backdrop-blur-[10px] 2xl:hidden"
            aria-label="View insights"
          >
            <TbTriangle className="text-secondary h-3.5 w-3.5 rotate-90" />
          </button>
          <div className="relative w-max">
            <div className="mb-4 flex items-start justify-between pr-5">
              <div className="text-heading flex items-center text-lg font-bold sm:text-xl">
                <>{data.title}: </> {renderStars(data.rating)}
              </div>
            </div>

            <div className="xs:flex-row item-start xs:items-end flex h-max min-h-0 flex-col items-stretch gap-4 sm:gap-6">
              <div className="flex items-end gap-1">
                <p className="text-6xl font-bold text-green-600 sm:text-8xl">
                  {data.heroStat}
                </p>
                <p className="text-sm font-normal whitespace-nowrap sm:text-base">
                  {data.heroLabel}
                </p>
              </div>
              <hr className="border-accent xs:h-24 hidden h-16 border-1 sm:block" />

              <div className="flex items-end gap-1">
                <p className="text-3xl font-normal text-red-500 sm:text-5xl">
                  {data.secondaryStat}
                </p>
                <p className="text-xs font-normal whitespace-nowrap sm:text-base">
                  {data.secondaryLabel}
                </p>
              </div>
            </div>

            <div className="border-border mt-1 border-t pt-4 text-sm">
              <span className="font-semibold">Highlight : </span>
              <span className="text-muted-foreground">{data.insight}</span>
            </div>
          </div>
          <hr className="border-accent mx-4 hidden h-full border-1 2xl:block" />

          <div className="relative ml-2 hidden w-max 2xl:block">
            <p className="text-secondary text-lg font-medium sm:text-xl">
              {data.swipeInsight.highlight}
            </p>
            <p className="text-secondary text-base font-light sm:text-lg">
              {data.swipeInsight.description}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="relative flex min-w-full flex-col p-4 pl-8 2xl:hidden">
          <button
            onClick={toggleCard}
            className="bg-glass/20 absolute top-1/2 left-0 flex h-full w-4 -translate-y-1/2 items-center justify-center backdrop-blur-[10px] 2xl:hidden"
            aria-label="Back to stats"
          >
            <TbTriangle className="text-secondary h-3.5 w-3.5 -rotate-90" />
          </button>

          <p className="text-heading mb-2 text-lg font-bold sm:mb-4 sm:text-xl">
            Overview :
          </p>

          <p className="text-secondary text-lg font-medium sm:text-xl">
            {data.swipeInsight.highlight}
          </p>
          <p className="text-secondary text-base font-light sm:text-lg">
            {data.swipeInsight.description}
          </p>
        </div>
      </div>
    </GlassLayout>
  );
}
