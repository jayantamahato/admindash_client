/** @format */
import { useContext } from "react";
import { exportValues } from "../../../App";
import SideNav from "../../SideNav";
import TopNav from "../../topNav";
import Widgets from "../../wigets/wigets";

import "./home.css";

import { XAxis, YAxis, CartesianGrid, AreaChart, Area, Tooltip, } from "recharts";

const Home = () => {
  const data = useContext(exportValues);




  return (
    <div className="home">
      <SideNav />
      <div className="home-container">
        <TopNav />
        <div className="widgets-container">
          <Widgets type="country" />
          <Widgets type="region" />
          <Widgets type="topics" />
        </div>
        <div className="charts">
          <div className="line-chart">
            <AreaChart
              width={1120}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="region" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="intensity"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="relevance"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
