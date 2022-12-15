import React, { useEffect, useState } from "react";
import "./detail.css";
import moment from "moment";
import { http } from "../../utils";
import { Link, useSearchParams } from "react-router-dom";

function Detail() {
  const [articleDetail, setArticleDetail] = useState({
    id: "",
    title: "",
    description: "",
    auther: {
      name: "",
      password: "",
    },
    thumbUp: 0,
    createTime: "",
  });
  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const loadArticle = async () => {
      const res = await http.get(`/blog/${id}`);
      const { title, auther, description, thumbUp, createTime } = res;
      setArticleDetail({
        id: id,
        title,
        auther,
        description,
        thumbUp,
        createTime,
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
              <span>创建时间:</span>
              <time>
                {moment(articleDetail.createTime).format("YYYY-MM-DD")}
              </time>
            </div>
            <h1 className="detail_title">{articleDetail.title}</h1>
          </div>
          <section className="detail_content">
            {articleDetail.description}
          </section>
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
