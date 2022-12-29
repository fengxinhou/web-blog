import React, { useState } from "react";
import "./frame.css";
import mainBg from "../../assets/img/mainBg.jpg";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../../utils";
import Logout from "../../component/Logout/Logout";
import { useStore } from "../../store";
function Frame() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { loginStore } = useStore();
  const navigate = useNavigate();
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
  const confirmExist = () => {
    loginStore.loginOut();
    navigate("/login");
  };
  return (
    <div className="frame">
      <img className="frame_bg" src={mainBg} alt="mainBg" />
      <div className="main">
        <div className="navBar">
          {blogMenu.permission.map((item) => (
            <div key={item.name} className="menuItem">
              <div className={pathname === item.path ? "highLight" : null}>
                <Link to={item.path}>{item.title}</Link>
              </div>
            </div>
          ))}
          <div className="userInfo">
            <i className="iconfont">&#xe64d;</i>
            <span>{blogMenu.name}</span>
          </div>
          <div className="signOut" onClick={() => setIsOpen(!isOpen)}>
            <i
              className="iconfont"
              // style={{ fontSize: "2rem", color: "#087fe6" }}
            >
              &#xe605;
            </i>
            <Logout
              className="dropDown"
              open={isOpen}
              onClose={() => setIsOpen(false)}
              onConfirm={confirmExist}
            />
          </div>
        </div>
        <div className="frame_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Frame;
