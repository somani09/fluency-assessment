"use client";

import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const node = sidebarRef.current;
    if (!node) return;

    const handleMouseEnter = () => {
      if (window.innerWidth >= 640) setSidebarOpen(true); // Only on sm+
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 640) setSidebarOpen(false); // Only on sm+
    };

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <ThemeProvider
      attribute="class" // Uses `class="light"` or `class="dark"`
      defaultTheme="light" // Force light mode by default
      enableSystem={false} // Disable system theme detection
    >
      <div className="relative flex h-max">
        <button
          onClick={() => setSidebarOpen(true)}
          className={cn(
            "z-50 flex h-16 w-16 items-center justify-center rounded-full sm:hidden",
            "bg-glass/20 border-primary/10 border-2 backdrop-blur-[6px]",
            shadowDepthPrimary,
            "translate-z-0 transition-opacity duration-300 ease-in-out will-change-[opacity]",
            "fixed bottom-2 left-2 sm:top-[161px] sm:bottom-auto sm:left-[34px]",
            sidebarOpen ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <div className="space-y-1">
            <span className="bg-primary block h-0.5 w-6"></span>
            <span className="bg-primary block h-0.5 w-6"></span>
            <span className="bg-primary block h-0.5 w-6"></span>
          </div>
        </button>

        <div
          ref={sidebarRef}
          className={cn(
            "fixed top-0 left-0 z-50 h-full transition-all duration-300 ease-in-out",
            sidebarOpen
              ? "pointer-events-auto w-96 scale-100 sm:w-96"
              : "pointer-events-none w-0 sm:pointer-events-auto sm:w-[120px] sm:scale-100",
            "origin-[30px_calc(100%-30px)] sm:origin-[64px_64px]",
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
