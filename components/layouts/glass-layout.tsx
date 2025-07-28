"use client";

import { cn } from "@/app/utils";
import Image from "next/image";
import { ReactNode } from "react";
import bgLine from "@/components/icons/bg-line.svg";
interface GlassLayoutProps {
  children: ReactNode;
  backgroundClassName?: string;
  contentClassName?: string;
  disableBackgroundStyles?: boolean;
  disableContentStyles?: boolean;
}

export default function GlassLayout({
  children,
  backgroundClassName = "",
  contentClassName = "",
  disableBackgroundStyles = false,
  disableContentStyles = false,
}: GlassLayoutProps) {
  return (
    <div className="shadow-primary/50 relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full rounded-2xl p-4",
          !disableBackgroundStyles &&
            "border-border/50 bg-glass/05 border blur-[6px]",
          backgroundClassName,
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={bgLine}
            alt="Background Graphic"
            fill
            className="pointer-events-none object-fill select-none"
            priority
            draggable={false}
          />
        </div>
      </div>

      <div
        className={cn(
          "relative z-10 rounded-2xl",
          !disableContentStyles &&
            "border-border/50 bg-glass/10 border backdrop-blur-[10px]",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
