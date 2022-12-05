import React, { useEffect } from "react";
import "./home.css";
import homeLogo from "../../assets/img/header-img.svg";
import { useStore } from "../../store";
function Home() {
  const { menuStore } = useStore();
  useEffect(() => {
    menuStore.getMenu().then();
    console.log("test");
  }, [menuStore]);

  return (
    <div className="home">
      <header>
        <img src={homeLogo} alt="logo" />
        <h1>Kai's Blog</h1>
      </header>
      <div className="main">
        <aside>
          {menuStore.menu.map((item, index) => {
            return (
              <div key={index} className="menuItem">
                <i className="iconfont">{item.icon}</i>
                <span>{item.title}</span>
              </div>
            );
          })}
        </aside>
        <main>主体部分</main>
      </div>
      <footer>底部</footer>
    </div>
  );
}

export default Home;
