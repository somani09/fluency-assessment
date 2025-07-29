"use client";

import type { ApexOptions } from "apexcharts";
import { useMemo } from "react";
import ApexChart from "./apex-chart";
import { CommunityHealthChartData } from "@/app/types-and-interfaces";
import {
  calculateMinMaxY,
  getCommonAxisStyle,
  getGradientFill,
  getStroke,
  getCustomTooltipHTML,
} from "./chart-utils";

interface LineChartProps {
  data: number[];
  xLabels: string[];
  fullData: CommunityHealthChartData[];
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  isCumulative?: boolean;
}

const axisTitleStyle = {
  color: "#061A40",
  fontSize: "16px",
  fontWeight: 500,
};

const LineChart = ({
  data,
  xLabels,
  fullData,
  title = "New Users",
  xAxisLabel = "New Users",
  yAxisLabel = "New Users",
  isCumulative = false,
}: LineChartProps) => {
  const series = useMemo(() => [{ name: title, data }], [data, title]);
  const { minY, maxY } = useMemo(() => calculateMinMaxY(data), [data]);

  const axisStyle = useMemo(() => getCommonAxisStyle(), []);

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "area",
        toolbar: { show: false },
        fontFamily: "inherit",
        zoom: { enabled: false },
      },
      stroke: getStroke("#8671E1"),
      fill: getGradientFill(),
      colors: ["#8671E1"],
      xaxis: {
        ...axisStyle.xaxis,
        categories: xLabels,
        title: {
          text: xAxisLabel,
          style: axisTitleStyle,
        },
      },
      yaxis: {
        ...axisStyle.yaxis,
        min: minY,
        max: maxY,
        title: {
          text: yAxisLabel,
          style: axisTitleStyle,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            borderColor: "#888",
            strokeDashArray: 4,
            label: {
              borderColor: "#888",
              style: {
                color: "#fff",
                background: "#888",
                fontSize: "10px",
              },
              text: "0",
            },
          },
        ],
      },
      tooltip: {
        enabled: true,
        custom: ({ dataPointIndex }) => {
          const entry = fullData[dataPointIndex];
          if (!entry) return "";
          return getCustomTooltipHTML(
            entry,
            dataPointIndex,
            fullData,
            isCumulative,
          );
        },
      },
      dataLabels: { enabled: false },
      grid: axisStyle.grid,
    }),
    [
      axisStyle,
      xLabels,
      xAxisLabel,
      yAxisLabel,
      minY,
      maxY,
      fullData,
      isCumulative,
    ],
  );

  return (
    <ApexChart
      type="area"
      series={series}
      options={options}
      height="100%"
      width="100%"
    />
  );
};

export default LineChart;
