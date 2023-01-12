import React from "react";
import SideNav from "../../SideNav";
import TopNav from "../../topNav";
import { useContext } from "react";
import { exportValues } from "../../../App";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "./Barchart.css";
import { useState } from "react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];
function Barchart() {

  const data = useContext(exportValues);

  const filterEndData = data.filter(filter)
  function filter(data) {
    if (data.end_year != "")
      return 1
  }
  filterEndData.sort((a, b) => {
    if (a.end_year < b.end_year) return -1
    return a.end_year > b.end_year ? 1 : 0
  });
  const filterStartData = data.filter(filter)
  function filter(data) {
    if (data.start_year != "")
      return 1
  }
  filterStartData.sort((a, b) => {
    if (a.start_year < b.end_year) return -1
    return a.end_year > b.end_year ? 1 : 0
  });

  return (
    <div className="barchart">
      <SideNav />
      <div className="bar-chart-content">
        <TopNav />
        <div className="bar-content">
          <div className="content1">
            <BarChart width={1100} height={250} data={filterEndData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="end_year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="impact" fill="#8884d8" />
              <Bar dataKey="likelihood" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="content2">
            <BarChart width={1100} height={250} data={filterStartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="start_year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="relevance" fill="#8884d8" />
              <Bar dataKey="intensity" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barchart;
