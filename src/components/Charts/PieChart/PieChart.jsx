import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { product: "#5B6ACD", area: 12 },
  { color: "#5182E7", area: 7 },
  { color: "#1CAF7F", area: 7 },
  { color: "#F4AE43", area: 7 },
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Chart data={chartData}>
        <PieSeries valueField="area" argumentField="color" />
        <PieSeries valueField="area" argumentField="color" color={data} />
        <PieSeries valueField="area" argumentField="color" />
        <Title text="Sales schedule by Day" />
        <Animation />
      </Chart>
    );
  }
}
