import React from "react";
import "./home.css";
import homeLogo from "../../assets/img/header-img.svg";
function Home() {
  return (
    <div className="home">
      <header>
        <img src={homeLogo} alt="logo" />
        <h1>Kai's Blog</h1>
      </header>
      <div className="main">
        <aside>
          <div>数据概览</div>
          <div>内容管理</div>
          <div>发布文章</div>
        </aside>
        <main>主体部分</main>
      </div>
      <footer>底部</footer>
    </div>
  );
}

export default Home;
