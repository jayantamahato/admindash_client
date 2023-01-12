import React from "react";
import { Link } from "react-router-dom";

import "./css/sidenav.css";

import ProfilePic from "../assets/profile_pic.jpg";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
function SideNav() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="profile">
          <img src={ProfilePic} alt="" />
          <div className="details">
            <p>jayanta mahato</p>
            <p>admin</p>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="title"> dashboard</div>
        <div className="elements">
          <ul>
            <li>
              <Link to="/">
                <span>
                  <OtherHousesOutlinedIcon className="icon" />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/data-list">
                <span>
                  <FactCheckOutlinedIcon className="icon" />
                </span>
                Data list
              </Link>
            </li>
            <li>
              <Link to="/form">
                <span>
                  <ListAltOutlinedIcon className="icon" />
                </span>
                Data from
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="title"> Data Analysis</div>
        <div className="elements">
          <ul>
            <li>
              <Link to="/bar-chart">
                <span>
                  <InsertChartOutlinedIcon className="icon" />
                </span>
                Analysis-1
              </Link>
            </li>
            <li>
              <Link to="/line-chart">
                <span>
                  <SsidChartOutlinedIcon className="icon" />
                </span>
                Analysis-2
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
