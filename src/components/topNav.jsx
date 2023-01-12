/** @format */

import React from "react";
import "./css/topnav.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
const TopNav = () => {


  function profile() {
    alert("staic profile")
  }
  function theme() {
    alert("Only Light Theme Available")
  }
  function notifiation() {
    alert("notification menu")
  }
  return (
    <div className="top-nav">
      <div className="left">
        COMPANY LOGO
      </div>
      <div className="right">
        <div className="item" onClick={notifiation}>
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter"></div>
        </div>
        <div className="item" onClick={profile}>
          <PermIdentityOutlinedIcon className="icon" />
        </div>
        <div className="item" onClick={theme}>
          <SettingsBrightnessOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
