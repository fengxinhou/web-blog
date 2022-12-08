import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import Paging from "../Paging/Paging";
function Home() {
  const { blogListStore } = useStore();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  useEffect(() => {
    blogListStore.getBlogList().then();
  }, [blogListStore]);

  const getPaging = (page) => {
    setCurrentPage(page);
  };
  const beginIndex = (currentPage - 1) * pageSize;
  const getArticleDetail = () => {
    navigate("./detail");
  };
  return (
    <div className="home">
      <div className="home_header">
        <Link to={"/"}>首页</Link>
        &nbsp;>&nbsp;
        <span>文章列表</span>
      </div>
      <div className="home_content">
        <ol className="article_list">
          {blogListStore.blogList
            .slice(beginIndex, beginIndex + pageSize)
            .map((item) => (
              <li className="article_item" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="article_operator">
                  <time>{item.creationTime}</time>
                  <div className="thumbs">
                    <i className="iconfont">&#xe65d;</i>
                    <span>点赞数:&nbsp;{item.thumbsUp}</span>
                  </div>
                  <button className="continue" onClick={getArticleDetail}>
                    继续阅读
                  </button>
                </div>
                <hr className="article_divide" />
              </li>
            ))}
        </ol>
        <Paging
          currentPage={currentPage}
          pageSize={pageSize}
          totalNumber={blogListStore.blogList.length}
          getPaging={getPaging}
        />
      </div>
    </div>
  );
}

export default observer(Home);
