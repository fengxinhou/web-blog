import React, { useEffect } from "react";
import "./detail.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

function Detail() {
  const { articleStore } = useStore();
  useEffect(() => {
    articleStore.getArticleDetail().then();
  });
  const { article } = articleStore;
  const GiveThumbs = () => {
    article.thumbsUp = article.thumbsUp + 1;
    //发送请求，修改点赞数
    console.log(article.thumbsUp);
  };
  return (
    <div className="detail">
      {
        <>
          <div className="detail_header">
            <div className="detail_meta">
              <span>创建时间:</span>
              <time>{article.creationTime}</time>
            </div>
            <h1 className="detail_title">{article.title}</h1>
          </div>
          <section className="detail_content">{article.description}</section>
          <div className="detail_remark">
            <span>作者：{article.author.name}</span>
            <div className="thumbs" type="button" onClick={GiveThumbs}>
              <i className="iconfont">&#xe65d;</i>
              <span>点赞</span>
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
