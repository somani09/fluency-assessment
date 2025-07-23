"use client";

import type { ApexOptions } from "apexcharts";
import { useMemo } from "react";
import ApexChart from "./apex-chart";
import { UserEntry } from "@/app/chart-data";
import {
  calculateMinMaxY,
  getCommonAxisStyle,
  getGradientFill,
  getCustomTooltipHTML,
} from "./chart-utils";

interface BarChartProps {
  data: number[];
  xLabels: string[];
  fullData: UserEntry[];
  title?: string;
  color?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  isCumulative?: boolean;
}

const BarChart = ({
  data,
  xLabels,
  fullData,
  title = "Bar Chart",
  color = "#a4bff6",
  xAxisLabel = "",
  yAxisLabel = "",
  isCumulative = false,
}: BarChartProps) => {
  const sanitizedData = useMemo(
    () => data.map((v) => (v === 0 ? null : v)),
    [data],
  );

  const series = useMemo(
    () => [{ name: title, data: sanitizedData }],
    [sanitizedData, title],
  );

  const { minY, maxY } = useMemo(() => calculateMinMaxY(data), [data]);

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        toolbar: { show: false },
        fontFamily: "inherit",
        zoom: { enabled: false },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
          columnWidth: "50%",
          barHeight: "100%",
        },
      },
      fill: getGradientFill(),
      stroke: {
        show: true,
        width: 2,
        colors: [color],
      },
      states: {
        normal: { filter: { type: "none" } },
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } },
      },
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
      xLabels,
      color,
      xAxisLabel,
      yAxisLabel,
      fullData,
      isCumulative,
      minY,
      maxY,
    ],
  );

  return (
    <ApexChart type="bar" series={series} options={options} height="100%" />
  );
};

export default BarChart;
