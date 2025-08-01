"use client";

import type { ApexOptions } from "apexcharts";
import { useMemo } from "react";
import ApexChart from "./apex-chart";
import {
  calculateMinMaxY,
  getCommonAxisStyle,
  getGradientFill,
  getCustomTooltipHTML,
} from "./chart-utils";
import { CommunityHealthChartData } from "@/app/types-and-interfaces";

interface BarChartProps {
  data: number[];
  xLabels: string[];
  fullData: CommunityHealthChartData[];
  title?: string;
  color?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  isCumulative?: boolean;
}

const axisTitleStyle = {
  color: "#061A40",
  fontSize: "16px",
  fontWeight: 500,
};

const BarChart = ({
  data,
  xLabels,
  fullData,
  title = "New Users",
  color = "#a4bff6",
  xAxisLabel = "New Users",
  yAxisLabel = "New Users",
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
  const axisStyle = useMemo(() => getCommonAxisStyle(), []);

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
    <ApexChart
      type="bar"
      series={series}
      options={options}
      height="100%"
      width="100%"
    />
  );
};

export default BarChart;
