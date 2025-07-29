"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/utils";
import GlassLayout from "../layouts/glass-layout";

interface NavigationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  className?: string;
  children: ReactNode;
}

const NavigationButton = ({
  isSelected = false,
  onClick,
  className,
  children,
  ...rest
}: NavigationButtonProps) => {
  return (
    <GlassLayout
      className={cn("transition-all duration-300 ease-in-out", className)}
      backgroundClassName="bg-white/25 blur-[4px]"
      contentClassName={cn(
        "group flex items-center justify-start gap-28 px-5 py-4 pr-8 text-xl font-medium text-primary backdrop-blur-[2px]",
        "transition-all duration-300 ease-in-out",
        "hover:border-border hover:font-bold hover:text-heading",
        isSelected && "bg-heading/95 font-bold text-text-muted",
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-start justify-start gap-4"
        role="link"
        aria-current={isSelected ? "page" : undefined}
        aria-label="Navigation item"
        {...rest}
      >
        {children}
      </button>
    </GlassLayout>
  );
};

export default NavigationButton;
