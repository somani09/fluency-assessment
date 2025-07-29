/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/utils";
import { FiChevronsLeft } from "react-icons/fi";
import { MdGroups3, MdInsights } from "react-icons/md";
import { TbSquareRoundedLetterF } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { secondaryButtonClass } from "@/app/css-utils";
import GlassLayout from "./layouts/glass-layout";
import NavigationButton from "./buttons/navigation-button";

interface SidebarProps {
  className?: string;
  onClose?: () => void;
  open?: boolean;
}

const navItems = [
  {
    href: "/community-health",
    label: "Community Health",
    icon: MdGroups3,
  },
  {
    href: "/retention-insights",
    label: "Retention Insights",
    icon: MdInsights,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ className, onClose, open }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <GlassLayout
      backgroundClassName="bg-white/50 border-0"
      contentClassName="border-0 border-l-2 sm:border-r-2 sm:border-l-0"
      noImage
    >
      <aside
        ref={sidebarRef}
        className={cn(
          "relative flex h-screen w-full flex-col justify-between overflow-hidden p-6",
          className,
        )}
        aria-label="Sidebar Navigation"
      >
        {/* Close button for sm+ */}
        {open && (
          <FiChevronsLeft
            onClick={() => onClose?.()}
            className="border-secondary hover:border-primary hover:text-primary text-secondary absolute right-2 bottom-8 hidden h-10 w-10 cursor-pointer sm:block"
            role="button"
            aria-label="Collapse Sidebar"
          />
        )}

        {/* Mobile close button */}
        <div
          className="border-secondary hover:border-primary hover:text-primary text-secondary absolute top-[84px] right-[14px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 shadow sm:hidden"
          role="button"
          aria-label="Close Sidebar"
          onClick={onClose}
        >
          <CgClose className="h-6 w-6" />
        </div>

        {/* Logo & Title */}
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center">
            <TbSquareRoundedLetterF
              className={cn(
                "text-heading shrink-0 transition-all duration-300 ease-in-out",
                "h-[36px] w-[36px] stroke-[1] sm:h-[60px] sm:w-[60px]",
              )}
              aria-hidden
            />
            <span
              className={cn(
                "text-heading overflow-hidden text-4xl leading-[100%] font-bold whitespace-nowrap transition-all duration-300 ease-in-out sm:text-6xl",
                open ? "max-w-max opacity-100" : "opacity-0",
              )}
            >
              Fluency
            </span>
          </div>
          <hr className="border-accent mt-4 mb-2 w-full border-2" />
        </div>

        {/* Navigation Links */}
        <nav
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 flex-col items-center gap-10 p-6"
          aria-label="Main Navigation"
        >
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className="w-full">
                <NavigationButton isSelected={isActive}>
                  <Icon
                    className={cn(
                      "h-8 w-8 shrink-0 transition",
                      isActive
                        ? "text-muted"
                        : "text-primary group-hover:text-heading",
                    )}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "whitespace-nowrap",
                      isActive
                        ? "text-muted font-bold"
                        : "text-primary font-medium",
                    )}
                  >
                    {label}
                  </span>
                </NavigationButton>
              </Link>
            );
          })}
        </nav>

        {/* Footer - Projects + Avatar */}
        <div>
          <div
            className={cn(
              "flex items-end justify-end space-x-2 overflow-visible pb-2 transition-all duration-300 ease-in-out sm:justify-start",
              open ? "max-w-full opacity-100" : "max-w-0 opacity-0",
            )}
          >
            <span className="text-subheading text-base font-semibold whitespace-nowrap">
              My other projects:
            </span>
            <Link
              href="https://vaibhav-somani.vercel.app/projects"
              target="_blank"
              className={cn(secondaryButtonClass, "min-w-max font-semibold")}
              aria-label="View other projects"
            >
              View Projects
            </Link>
          </div>

          <hr className="border-accent-1 mb-4 border-1" />

          {/* Profile */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex space-x-6">
              <div
                className="border-border bg-subheading relative h-15 w-15 shrink-0 overflow-hidden rounded-full border-2"
                role="img"
                aria-label="Profile Avatar"
              >
                <img
                  src="/avatar.jpeg"
                  alt="Vaibhav Somani"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  open ? "max-w-full opacity-100" : "opacity-0",
                )}
              >
                <p className="text-heading text-xl font-bold whitespace-nowrap">
                  Vaibhav Somani
                </p>
                <p className="text-subheading text-base font-semibold whitespace-nowrap">
                  Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </GlassLayout>
  );
};

export default Sidebar;
