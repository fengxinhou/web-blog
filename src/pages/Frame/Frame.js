import React, { useEffect } from "react";
import "./frame.css";
import homeLogo from "../../assets/img/header-img.svg";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { Link, Outlet, useLocation } from "react-router-dom";
function Frame() {
  const { menuStore } = useStore();
  const { pathname } = useLocation();
  useEffect(() => {
    menuStore.getMenu().then();
  }, [menuStore]);
  return (
    <div className="frame">
      <header>
        <img src={homeLogo} alt="logo" />
        <h1>Web Blog</h1>
      </header>
      <div className="main">
        <aside>
          {menuStore.menu.map((item) => (
            <div className={pathname === item.path ? "highLight" : null}>
              <div key={item.path} className="menuItem">
                <i className="iconfont">{item.icon}</i>
                <Link to={item.path}>{item.title}</Link>
              </div>
            </div>
          ))}
        </aside>
        <div className="frame_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default observer(Frame);
