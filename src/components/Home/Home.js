import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
function Home() {
  const { blogListStore } = useStore();
  useEffect(() => {
    blogListStore.getBlogList().then();
  }, [blogListStore]);
  return (
    <div className="home">
      <div className="home_header">
        <Link to={"/"}>首页</Link>
        &nbsp;>&nbsp;
        <span>文章列表</span>
      </div>
      <div className="home_content">
        <ol className="article_list">
          {blogListStore.blogList.map((item) => (
            <li className="article_item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="article_operator">
                <time>{item.creationTime}</time>
                <div className="thumbs">
                  <i className="iconfont">&#xe65d;</i>
                  <span>点赞数</span>
                </div>
                <button className="continue">继续阅读</button>
              </div>
              <hr className="article_divide" />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default observer(Home);
