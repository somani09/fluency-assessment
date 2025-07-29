import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import { JSX, memo } from "react";

// Lazy-load Chart to avoid hydration mismatch
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ApexChartProps {
  options: ApexOptions;
  series: ApexAxisChartSeries;
  type: "line" | "bar" | "area";
  height?: number | string;
  width?: number | string;
}

const ApexChart = ({
  options,
  series,
  type,
  height = "100%",
  width = "100%",
}: ApexChartProps): JSX.Element => {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height}
      width={width}
    />
  );
};

export default memo(ApexChart);
