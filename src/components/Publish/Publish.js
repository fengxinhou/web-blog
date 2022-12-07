import React, { useEffect, useState } from "react";
import "./publish.css";
import { Link } from "react-router-dom";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
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
  const [editor, setEditor] = useState(null);
  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>");
  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>");
    }, 1500);
  }, []);
  const toolbarConfig = {};
  //编辑器配置
  const editorConfig = {
    placeholder: "请输入内容...",
  };
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
  const onFormUpdate = (key, value) => {
    setArticle({
      ...article,
      [key]: value,
    });
  };
  const insertText = () => {
    if (editor == null) return;
    editor.insertText("hello");
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
              <input
                type="text"
                placeholder="请输入文章分类"
                value={article.title}
                onChange={(e) => {
                  onFormUpdate("name", e.target.value);
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
            <button type="submit" onClick={insertText}>
              <span>发布文章</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Publish;
