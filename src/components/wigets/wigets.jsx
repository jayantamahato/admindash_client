import React from "react";
import { Link } from 'react-router-dom';
import "./wigets.css";


const Widgets = ({ type }) => {

  let widgetsData
  switch (type) {

    case "country":
      widgetsData = {
        title: "Country",
        data01: "country name",
        data02: "intensity",
        data03: "impact",
        data04: "likelihood",
        link: "/Countrydata"
      };
      break;
    case "region":
      widgetsData = {
        title: "region",
        data01: "region name",
        data02: "intensity",
        data03: "relevance",
        data04: "likelihood",
        link: "/regiondata",
      };
      break;
    case "topics":
      widgetsData = {
        title: "sector",
        data01: "topic name",
        data02: "intensity",
        data03: "relevance",
        data04: "likelihood",
        link: "/sectordata"
      };
      break;
    default:
      break;
  }
  return (
    <div className="wigets">
      <div className="left">
        <div className="title">{widgetsData.title}</div>
        <div className="values">{widgetsData.empty}  {widgetsData.total}</div>
      </div>
      <div className="right">
        <div className="data">
          <div>{widgetsData.data01}</div>
          <div>{widgetsData.data02}</div>
          <div>{widgetsData.data03}</div>
          <div>{widgetsData.data04}</div>

        </div>
        <div className="links"><Link to={widgetsData.link}>See all</Link></div>
      </div>
    </div>
  );
};

export default Widgets;
