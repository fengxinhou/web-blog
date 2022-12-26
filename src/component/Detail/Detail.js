import React, { useEffect, useState } from "react";
import "./detail.css";
import { http } from "../../utils";
import { Link, useSearchParams } from "react-router-dom";
import moment from "moment";

function Detail() {
  const [articleDetail, setArticleDetail] = useState({
    id: "",
    title: "",
    auther: {
      name: "",
      password: "",
    },
    thumbUp: 0,
    content: "",
    createTime: "",
    updateTime: "",
  });
  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const loadArticle = async () => {
      const res = await http.get(`/blog/${id}`);
      const { title, auther, content, thumbUp, createTime, updateTime } = res;
      setArticleDetail({
        id: id,
        title,
        auther,
        content,
        thumbUp,
        createTime,
        updateTime,
      });
    };
    loadArticle().then();
  }, [id]);

  const GiveThumbs = (id) => {
    console.log(articleDetail.thumbUp);
    setArticleDetail({
      ...articleDetail,
      thumbUp: articleDetail.thumbUp + 1,
    });
  };
  return (
    <div className="detail">
      {
        <>
          <div className="detail_header">
            <div className="detail_meta">
              <div className="article_time">
                <span>创建时间:</span>
                <time>
                  {moment(articleDetail.createTime).format("YYYY-MM-DD")}
                </time>
              </div>
              <div className="article_time">
                <span>更新时间:</span>
                <time>
                  {moment(articleDetail.updateTime).format("YYYY-MM-DD")}
                </time>
              </div>
            </div>
            <h1 className="detail_title">{articleDetail.title}</h1>
          </div>
          <section
            className="detail_content"
            dangerouslySetInnerHTML={{ __html: articleDetail.content }}
          ></section>
          <div className="detail_remark">
            <span>作者：{articleDetail.auther.name}</span>
            <div
              className="thumbs"
              onClick={() => GiveThumbs(articleDetail.id)}
            >
              <i className="iconfont">&#xe65d;</i>
              <span>点赞{articleDetail.thumbUp}</span>
            </div>
          </div>
          <footer>
            <Link to={"/"}>返回首页</Link>
          </footer>
        </>
      }
    </div>
  );
}

export default Detail;
