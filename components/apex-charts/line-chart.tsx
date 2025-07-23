"use client";

import type { ApexOptions } from "apexcharts";
import { useMemo } from "react";
import ApexChart from "./apex-chart";
import { UserEntry } from "@/app/chart-data";
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
  fullData: UserEntry[];
  title?: string;
  color?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  isCumulative?: boolean;
}

const LineChart = ({
  data,
  xLabels,
  fullData,
  title = "Line Chart",
  color = "#a4bff6",
  xAxisLabel = "",
  yAxisLabel = "",
  isCumulative = false,
}: LineChartProps) => {
  const series = useMemo(() => [{ name: title, data }], [data, title]);
  const { minY, maxY } = useMemo(() => calculateMinMaxY(data), [data]);

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "area",
        toolbar: { show: false },
        fontFamily: "inherit",
        zoom: { enabled: false },
      },
      stroke: getStroke(color),
      fill: getGradientFill(),
      colors: [color],
      xaxis: {
        ...getCommonAxisStyle().xaxis,
        categories: xLabels,
        title: {
          text: xAxisLabel,
          offsetY: 0,
          style: {
            color: "#004052",
            fontWeight: 500,
            fontSize: "13px",
          },
        },
      },
      yaxis: {
        ...getCommonAxisStyle().yaxis,
        min: minY,
        max: maxY,
        title: {
          text: yAxisLabel,
          style: {
            color: "#004052",
            fontWeight: 500,
            fontSize: "13px",
          },
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
      grid: getCommonAxisStyle().grid,
    }),
    [
      color,
      xLabels,
      xAxisLabel,
      minY,
      maxY,
      yAxisLabel,
      fullData,
      isCumulative,
    ],
  );

  return (
    <ApexChart type="area" series={series} options={options} height="100%" />
  );
};

export default LineChart;
