import React, { useEffect } from "react";
import "./frame.css";
import homeLogo from "../../assets/img/header-img.svg";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { Link, Outlet } from "react-router-dom";
function Frame() {
  const { menuStore } = useStore();
  useEffect(() => {
    menuStore.getMenu().then();
  }, [menuStore]);
  return (
    <div className="frame">
      <header>
        <img src={homeLogo} alt="logo" />
        <h1>Kai's Blog</h1>
      </header>
      <div className="main">
        <aside>
          {menuStore.menu.map((item) => (
            <div key={item.path} className="menuItem">
              <i className="iconfont">{item.icon}</i>
              <Link to={item.path}>{item.title}</Link>
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
