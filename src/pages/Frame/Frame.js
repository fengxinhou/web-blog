import React from "react";
import "./frame.css";
import mainBg from "../../assets/img/mainBg.jpg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../../utils";
function Frame() {
  const { pathname } = useLocation();
  const parseToken = () => {
    const token = getToken();
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };
  const blogMenu = JSON.parse(parseToken());
  return (
    <div className="frame">
      <img className="frame_bg" src={mainBg} alt="mainBg" />
      <div className="main">
        <div className="navBar">
          <div className="userInfo">
            <i className="iconfont">&#xe64d;</i>
            <span>{blogMenu.name}</span>
          </div>
          {blogMenu.permission.map((item) => (
            <div key={item.name} className="menuItem">
              <div className={pathname === item.path ? "highLight" : null}>
                <Link to={item.path}>{item.title}</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="frame_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Frame;
