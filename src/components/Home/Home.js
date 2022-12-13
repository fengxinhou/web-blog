import React, { useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import Paging from "../Paging/Paging";
import { giveThumbUp } from "../../server/api";
function Home() {
  const { blogListStore, articleStore } = useStore();
  const { blogList, totalNumber } = blogListStore;

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const getPaging = (page) => {
    setCurrentPage(page);
  };
  const beginIndex = (currentPage - 1) * pageSize;
  const getArticleDetail = (id) => {
    try {
      articleStore.getArticleDetail(id).then();
      alert("即将跳转至页面详情页，请点击确认");
      navigate("./detail");
    } catch (error) {
      alert(error);
    }
  };

  const handleClickThumb = (id) => {
    giveThumbUp(id).then();
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
          {blogList.slice(beginIndex, beginIndex + pageSize).map((item) => (
            <li className="article_item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="article_operator">
                <span>作者：{item.auther.name}</span>
                <div
                  className="thumbs"
                  onClick={() => handleClickThumb(item.id)}
                >
                  <i className="iconfont">&#xe65d;</i>
                  <button>点赞数:&nbsp;{item.thumbUp}</button>
                </div>
                <button
                  className="continue"
                  onClick={() => getArticleDetail(item.id)}
                >
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
          totalNumber={totalNumber}
          getPaging={getPaging}
        />
      </div>
    </div>
  );
}

export default observer(Home);
