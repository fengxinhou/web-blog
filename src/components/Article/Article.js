import React, { useState } from "react";
import "./article.css";
import { useStore } from "../../store";
import Paging from "../Paging/Paging";
import { observer } from "mobx-react-lite";
function Article() {
  const { blogListStore } = useStore();
  const { blogList, totalNumber } = blogListStore;
  const [currentPage, setCurrentPage] = useState(1);

  const [searchType, setSearchType] = useState("title");
  const [searchData, setSearchData] = useState("");
  const pageSize = 10;

  const getPaging = (page) => {
    setCurrentPage(page);
  };
  const beginIndex = (currentPage - 1) * pageSize;

  const filterData = !searchData
    ? blogList
    : blogList.filter(
        (item) => JSON.stringify(item[searchType]).indexOf(searchData) !== -1
      );

  const deleteArticle = (id) => {
    blogList.splice(id, 1);
    //调用删除接口
    //重新刷新列表
  };

  return (
    <div className="article">
      <div className="search_article">
        <select
          name={""}
          id={""}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value={"title"}>文章标题</option>
          <option value={"creationTime"}>创建时间</option>
        </select>
        <input
          type={"text"}
          placeholder={"请输入搜索内容"}
          onBlur={(e) => setSearchData(e.target.value)}
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
      <table className={"article_table"}>
        <thead>
          <tr>
            <th>标题</th>
            <th>点赞数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filterData.slice(beginIndex, beginIndex + pageSize).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.thumbsUp}</td>
                <td>
                  <div className="operator_button">
                    <button className="edit">编辑</button>
                    <button
                      className="danger"
                      onClick={() => deleteArticle(item.id)}
                    >
                      删除
                    </button>
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
        totalNumber={totalNumber}
        getPaging={getPaging}
      />
    </div>
  );
}

export default observer(Article);
