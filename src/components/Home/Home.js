import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Img1 from "../../assets/img/1.png";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <Link to={"/"}>首页</Link>
        &nbsp;>&nbsp;
        <span>文章列表</span>
      </div>
      <div className="home_content">
        <div className="article_list">
          <div className="article_item">
            <img src={Img1} alt="article" />
            <h3>优站精选</h3>
            <span>Bootstrap 网站实例</span>
            <p>
              Bootstrap 优站精选频道收集了众多基于 Bootstrap
              构建、设计精美的、有创意的网站。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
