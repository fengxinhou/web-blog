import React from "react";
import "./detail.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import moment from "moment";

function Detail() {
  const { articleStore } = useStore();
  const { article } = articleStore;
  const GiveThumbs = () => {
    article.thumbUp = article.thumbUp + 1;
    //发送请求，修改点赞数
    console.log(article.thumbUp);
  };
  return !article ? (
    <>Loading...</>
  ) : (
    <div className="detail">
      {
        <>
          <div className="detail_header">
            <div className="detail_meta">
              <span>创建时间:</span>
              <time>{moment(article.createTime).format("YYYY-MM-DD")}</time>
            </div>
            <h1 className="detail_title">{article.title}</h1>
          </div>
          <section className="detail_content">{article.description}</section>
          <div className="detail_remark">
            <span>作者：{article.auther.name}</span>
            <div className="thumbs" type="button" onClick={GiveThumbs}>
              <i className="iconfont">&#xe65d;</i>
              <span>点赞{article.thumbUp}</span>
            </div>
          </div>
          <footer className="switch_article">
            <button>上一篇</button>
            <button>下一篇</button>
          </footer>
        </>
      }
    </div>
  );
}

export default observer(Detail);
