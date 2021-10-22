import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { day: "Monday".split("").slice(0, 3).join(""), price: 800 },
  { day: "Tuesday".split("").slice(0, 3).join(""), price: 600 },
  { day: "Tuesday".split("").slice(0, 3).join(""), price: 400 },
  { day: "Thursday".split("").slice(0, 3).join(""), price: 500 },
  { day: "Wednesday".split("").slice(0, 3).join(""), price: 300 },
  { day: "Saturday".split("").slice(0, 3).join(""), price: 200 },
  { day: "Wednesday".split("").slice(0, 3).join(""), price: 700 },
];

export default class BarChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }
  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={10} />

          <BarSeries
            valueField="price"
            argumentField="day"
            color={"#5865d5"}
            barWidth={1}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
