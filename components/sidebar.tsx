/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/utils";
import { FiChevronsLeft, FiUsers } from "react-icons/fi";
import { MdGroupAdd } from "react-icons/md";
import { TbCircleLetterF, TbSquareRoundedLetterF } from "react-icons/tb";
import {
  glassPanelClass,
  getGlassButtonClasses,
  secondaryButtonClass,
} from "@/app/css-utils";

interface SidebarProps {
  className?: string;
  onClose?: () => void;
  open?: boolean;
}

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

  const navItems = [
    {
      href: "/new-user",
      label: "New User",
      icon: MdGroupAdd,
    },
    {
      href: "/user-change",
      label: "User Gain/Loss",
      icon: FiUsers,
    },
  ];

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        "relative flex h-screen w-full flex-col justify-between overflow-hidden p-6",
        glassPanelClass,
        "border-0 border-r-2",
        className,
      )}
    >
      <FiChevronsLeft
        onClick={() => onClose?.()}
        className="text-heading absolute -right-2 bottom-8 block h-10 w-10 cursor-pointer sm:hidden"
        role="button"
        aria-label="Close sidebar"
      />

      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center justify-center">
          <TbSquareRoundedLetterF
            className={cn(
              "text-heading ml-2 shrink-0 transition-all duration-300 ease-in-out",
              "h-[90px] w-[90px] stroke-[1]",
            )}
          />
          <span
            className={cn(
              "text-heading overflow-hidden text-4xl leading-[150%] font-bold whitespace-nowrap transition-all duration-300 ease-in-out lg:text-6xl",
              open ? "max-w-max opacity-100" : "opacity-0",
            )}
          >
            Fluency
          </span>
        </div>
        <hr className="border-accent mt-2 mb-4 w-full border-2" />
      </div>

      <nav className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 flex-col items-center gap-10 p-6">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                getGlassButtonClasses(isActive),
                "flex items-center gap-3 transition-all duration-300 ease-in-out",
              )}
            >
              <Icon
                className={cn(
                  "h-8 w-8 shrink-0 transition",
                  isActive
                    ? "text-heading"
                    : "text-subheading group-hover:text-heading group-active:text-heading",
                )}
              />
              <span
                className={cn(
                  "overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out",
                  open ? "max-w-xs pl-1 opacity-100" : "max-w-0 pl-0 opacity-0",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div>
        <div
          className={cn(
            "flex items-end space-x-4 overflow-hidden pb-2 transition-all duration-300 ease-in-out",
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
          >
            View Projects
          </Link>
        </div>

        <hr className="border-accent-1 mb-4 border-1" />

        <div className="flex flex-col justify-start space-y-2">
          <div className={cn("flex space-x-6 transition-all duration-300")}>
            <div className="border-border bg-subheading relative h-15 w-15 shrink-0 overflow-hidden rounded-full border-2">
              <img
                src="/avatar.jpeg"
                alt="Avatar"
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
  );
};

export default Sidebar;
