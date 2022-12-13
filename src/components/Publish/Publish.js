import React, { useEffect, useState } from "react";
import "./publish.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { addArticle, updateArticle } from "../../server/api";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { http } from "../../utils";
function Publish() {
  const { articleStore } = useStore();
  const navigate = useNavigate();
  const [articleTitle, setArticleTitle] = useState("");
  const [editor, setEditor] = useState(null);

  const [html, setHtml] = useState("<p>hello</p>");

  const toolbarConfig = {};
  const editorConfig = {
    placeholder: "请输入内容...",
  };
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    const loaDetail = async () => {
      const res = await articleStore.getArticleDetail(id);
      setArticleTitle(res.title);
      setHtml(res.description);
    };
    if (id) {
      loaDetail().then();
    }
  }, [articleStore, id]);

  const handlePublishArticle = async (e) => {
    e.preventDefault();
    console.log(articleTitle, html);
    if (id) {
      // await updateArticle(id, articleTitle, html);
      await http.put(`/blog/${id}`, { id, articleTitle, html });
      alert("更新成功!");
      navigate("/article");
    } else {
      await addArticle(articleTitle, html);
      alert("发布成功！");
      setArticleTitle("");
      setHtml("");
      navigate("/article");
    }
  };
  return (
    <div className="publish">
      <div className="publish_content">
        <div className="publish_header">
          <Link to={"/"}>首页</Link>
          &nbsp;>&nbsp;
          <span>发布文章</span>
        </div>
        <form onSubmit={handlePublishArticle} className="publish_form">
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
          <div className="article_content">
            <Toolbar
              className="toolbar"
              editor={editor}
              defaultConfig={toolbarConfig}
              mode="default"
            />
            <Editor
              className="editor"
              defaultConfig={editorConfig}
              value={html}
              onCreated={setEditor}
              onChange={(editor) => setHtml(editor.getHtml())}
              mode="default"
            />
          </div>
          <div className="article_button">
            <button type="submit">
              <span>{id ? "更新" : "发布"}文章</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default observer(Publish);
