import React, { useState } from "react";
import "./publish.css";
import { Link } from "react-router-dom";
function Publish() {
  const [article, setArticle] = useState({
    id: 0,
    userId: 0,
    url: "",
    tag: "",
    title: "",
    content: "",
    pubDate: "",
    status: "",
  });
  const onFormUpdate = (key, value) => {
    setArticle({
      ...article,
      [key]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="publish">
      <div className="publish_content">
        <div className="publish_header">
          <Link to={"/"}>首页</Link>
          &nbsp;>&nbsp;
          <span>发布文章</span>
        </div>
        <form onSubmit={handleSubmit} className="publish_form">
          <div className="article_title">
            <label>
              标题：
              <input
                type="text"
                placeholder="请输入文章标题"
                value={article.title}
                onChange={(e) => {
                  onFormUpdate("name", e.target.value);
                }}
              />
            </label>
          </div>
          <div className="article_category">
            <label>
              分类：
              <section>
                <option></option>
              </section>
            </label>
          </div>
          <div className="article_pic">
            <label>
              封面：
              <input
                type="text"
                value={article.url}
                onChange={(e) => {
                  onFormUpdate("name", e.target.value);
                }}
              />
            </label>
          </div>
          <div className="article_content">
            <label>
              内容：
              <input
                type="text"
                value={article.content}
                onChange={(e) => {
                  onFormUpdate("name", e.target.value);
                }}
              />
            </label>
          </div>
          <div className="article_button">
            <button type="submit">
              <span>发布文章</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Publish;
