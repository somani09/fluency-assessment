// components/ui/button.tsx

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/utils";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  isSelected?: boolean;
  className?: string;
  children: ReactNode;
}

const baseClasses =
  "px-2 py-1 flex flex-row items-center gap-2 text-base cursor-pointer font-normal border rounded-md transition-all duration-200 ease-in-out hover:font-medium  rounded-xl";

const variantStyles: Record<
  Variant,
  {
    default: string;
    selected: string;
    text: string;
    hover: string;
  }
> = {
  primary: {
    default:
      "bg-twilight-blue-400 border-twilight-blue-500 text-white fill-white",
    selected: "bg-midnight-850 border-deepsea-700 text-white fill-white",
    hover: "hover:bg-secondary hover:border-midnight-400",
    text: "text-white fill-white",
  },
  secondary: {
    default:
      "bg-pastel-blue-100 border-twilight-violet-300 text-heading fill-heading",
    selected:
      "bg-pastel-blue-300 border-twilight-blue-violet-400 text-heading fill-heading",
    hover: "hover:bg-pastel-blue-100 hover:border-twilight-violet-500",
    text: "text-heading fill-heading",
  },
};

export const Button = ({
  variant = "primary",
  isSelected = false,
  onClick,
  className,
  children,
  ...props
}: ButtonProps) => {
  const styles = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        isSelected ? "font-medium" : "",
        isSelected ? styles.selected : styles.default,
        styles.text,
        styles.hover,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
