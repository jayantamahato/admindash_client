import React from "react";
import { useContext } from "react";
import { exportValues } from "../../../App";
import SideNav from "../../SideNav";
import TopNav from "../../topNav";

import "./lineChart.css";

import {
  XAxis, YAxis, CartesianGrid, Tooltip, Area, LineChart, Legend, Line, Bar, ComposedChart,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineCharts = () => {
  const data = useContext(exportValues)
  return (
    <div className="linechart">
      <SideNav />
      <div className="linechart-conternts">
        <TopNav />
        <div className="chart-contents">
          <div className="chart1">
            <LineChart
              width={1110}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="impact" stroke="#8884d8" />
              <Line type="monotone" dataKey="intensity" stroke="#82ca9d" />
              <Line type="monotone" dataKey="region" stroke="#0394fc" />
              <Line type="monotone" dataKey="country" stroke="#ff63d6" />
            </LineChart>
          </div>
          <div className="chart2">
            <ComposedChart width={1100} height={250} data={data}>
              <XAxis dataKey="pestle" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                dataKey="sector"
                fill="#45fc03"
                stroke="#8884d8"
              />
              <Line type="monotone" dataKey="relevance" stroke="#ff7300" />
              <Line type="monotone" dataKey="likelihood" stroke="#413ea0" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineCharts;
