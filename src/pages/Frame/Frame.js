import React, { useEffect } from "react";
import "./frame.css";
import mainBg from "../../assets/img/mainBg.jpg";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { Link, Outlet, useLocation } from "react-router-dom";
function Frame() {
  const { menuStore, blogListStore } = useStore();
  const { pathname } = useLocation();
  useEffect(() => {
    menuStore.getMenuList().then();
  }, [menuStore, blogListStore]);

  return (
    <div className="frame">
      <img src={mainBg} alt="mainBg" />
      <div className="main">
        <div className="navBar">
          {menuStore.menuList.map((item) => (
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

export default observer(Frame);
