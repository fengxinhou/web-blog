import React, { useState } from "react";
import "./article.css";
import { useStore } from "../../store";
import Paging from "../Paging/Paging";
import { observer } from "mobx-react-lite";
function Article() {
  const { blogListStore } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const getPaging = (page) => {
    setCurrentPage(page);
  };
  const beginIndex = (currentPage - 1) * pageSize;

  return (
    <div className="article">
      <table className={"article_table"}>
        <thead>
          <tr>
            <th>标题</th>
            <th>发布时间</th>
            <th>点赞数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {blogListStore.blogList
            .slice(beginIndex, beginIndex + pageSize)
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.creationTime}</td>
                  <td>{item.thumbsUp}</td>
                  <td>
                    <div className="operator_button">
                      <button className="edit">编辑</button>
                      <button className="danger">删除</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Paging
        currentPage={currentPage}
        pageSize={pageSize}
        totalNumber={blogListStore.blogList.length}
        getPaging={getPaging}
      />
    </div>
  );
}

export default observer(Article);
