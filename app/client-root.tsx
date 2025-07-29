"use client";

import { useRef, useState } from "react";
import Sidebar from "@/components/sidebar";
import { cn } from "./utils";
import { ThemeProvider } from "next-themes";
import { shadowDepthPrimary } from "./css-utils";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      setSidebarOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setSidebarOpen(false);
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="bg-surface-alt/20 relative flex h-max">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className={cn(
            "z-50 flex h-10 w-10 items-center justify-center rounded-full sm:hidden",
            "bg-glass/20 border-primary/10 border-2 backdrop-blur-[6px]",
            shadowDepthPrimary,
            "translate-z-0 transition-opacity duration-300 ease-in-out will-change-[opacity]",
            "fixed top-20 right-[10px]",
            sidebarOpen ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <div className="space-y-1">
            <span className="bg-secondary block h-0.5 w-6"></span>
            <span className="bg-secondary block h-0.5 w-6"></span>
            <span className="bg-secondary block h-0.5 w-6"></span>
          </div>
        </button>

        <div
          ref={sidebarRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "fixed top-0 z-50 h-full transition-all duration-300 ease-in-out",
            sidebarOpen
              ? "pointer-events-auto right-0 w-80 scale-100 sm:left-0 sm:w-96"
              : "pointer-events-none right-0 w-0 sm:pointer-events-auto sm:left-0 sm:w-[120px] sm:scale-100",
            "origin-[calc(100%-30px)_100px] sm:origin-[64px_64px]",
            !sidebarOpen && "scale-0 sm:scale-100",
          )}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} open={sidebarOpen} />
        </div>

        <main className="h-max w-full flex-1 sm:pl-[120px]">{children}</main>
      </div>
    </ThemeProvider>
  );
}
