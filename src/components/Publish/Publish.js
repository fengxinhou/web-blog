import React, { useEffect, useState } from "react";
import "./publish.css";
import { Link } from "react-router-dom";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
function Publish() {
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

  const handlePublishArticle = (e) => {
    e.preventDefault();
    //获取到文章的title And html
    console.log(articleTitle, html);
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
              <span>发布文章</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Publish;
