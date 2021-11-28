import * as React from "react";

import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import styles from "./PieChart.module.scss";

export default function PieChart() {
  const arr = [];
  const pieData = JSON.parse(localStorage.getItem("sale")) || [];
  pieData.map((dataItem) =>
    arr.push({ name: dataItem.store, area: dataItem.price })
  );
  return (
    <>
      <Chart
        classname={styles.chart}
        style={{
          width: "10%",
          height: "15%",
          marginLeft: "100px",
          position: "absolute",
        }}
        data={arr}
      >
        <PieSeries valueField="area" argumentField="name" />
        <Animation />
      </Chart>
      <div className={styles.analyticList}>
        {pieData.map((pr) => (
          <p className={styles.analyticItem}>{pr?.store}</p>
        ))}
      </div>
    </>
  );
}
