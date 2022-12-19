import React, { useEffect, useState } from "react";
import "./publish.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import E from "wangeditor";
import { addArticle, updateArticle } from "../../server/api";
import { http } from "../../utils";

let editor = null;

function Publish() {
  const [content, setContent] = useState("");
  const [articleTitle, setArticleTitle] = useState("");

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    editor = new E("#div1");
    editor.config.onchange = (newHtml) => {
      setContent(newHtml);
    };
    editor.create();
    const loaDetail = async () => {
      const res = await http.get(`/blog/${id}`);
      const { title, content } = res;
      setArticleTitle(title);
      editor.txt.html(content);
    };
    if (id) {
      loaDetail().then();
    }
    return () => {
      editor.destroy();
    };
  }, [id]);

  const handleClickSubmit = async () => {
    if (id) {
      await updateArticle(id, articleTitle, content);
    } else {
      await addArticle(articleTitle, content);
      setArticleTitle("");
      setContent("");
    }
    navigate("/article");
  };
  return (
    <div className="publish">
      <div className="publish_header">
        <Link to={"/"}>首页</Link>
        &nbsp;>&nbsp;
        <span>{id ? "更新" : "发布"}文章</span>
      </div>
      <div className="article_title">
        <label>
          标题：
          <input
            type="text"
            placeholder="请输入文章标题"
            value={articleTitle}
            onChange={(e) => {
              setArticleTitle(e.target.value);
            }}
          />
        </label>
      </div>
      <div id="div1"></div>
      <div className="article_button">
        <button onClick={handleClickSubmit}>
          <span>{id ? "更新" : "发布"}文章</span>
        </button>
      </div>
    </div>
  );
}

export default Publish;
