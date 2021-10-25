import * as React from "react";
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

export default function BarChart() {
  const arr = [];
  const pieData = JSON.parse(localStorage.getItem("products")) || [];
  pieData.map((dataItem) =>
    arr.push({ price: dataItem.store, area: dataItem.price })
  );
  return (
    <Chart style={{ marginTop: "2%" }} data={arr}>
      <ArgumentAxis />
      <ValueAxis max={100} />
      <BarSeries
        valueField="area"
        argumentField="price"
        color={"#5865d5"}
        barWidth={0.8}
      />
      <Animation />
    </Chart>
  );
}
