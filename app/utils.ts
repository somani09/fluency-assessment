import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function getCumulativeData(data: number[]): number[] {
  return data.reduce<number[]>((acc, curr, i) => {
    acc.push((acc[i - 1] ?? 0) + curr);
    return acc;
  }, []);
}
