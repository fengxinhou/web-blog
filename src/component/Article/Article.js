import React, { useEffect, useState } from "react";
import "./article.css";
import Paging from "../Paging/Paging";
import { deleteArticle } from "../../server/api";
import { Link, useNavigate } from "react-router-dom";
import { http } from "../../utils";
import moment from "moment/moment";
function Article() {
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({
    blogList: [],
    totalCount: 0,
  });
  const [params, setParams] = useState({
    page: 1,
    pageSize: 10,
  });

  const [searchType, setSearchType] = useState("title");
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const loadList = async () => {
      const res = await http.get("/blog", { params });
      const { result, count } = res;
      setArticleData({
        blogList: result,
        totalCount: count,
      });
    };
    loadList().then();
  }, [params]);

  const beginIndex = (params.page - 1) * params.pageSize;
  const getPaging = (page) => {
    setParams({
      ...params,
      page,
    });
  };
  const typeChange = (value) => {
    setSearchType(value);
  };
  const filterData = !searchData
    ? articleData.blogList
    : articleData.blogList.filter(
        (item) => JSON.stringify(item[searchType]).indexOf(searchData) !== -1
      );

  const handleClickDelete = async (id) => {
    try {
      await deleteArticle(id);
      setParams({
        ...params,
        page: 1,
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleClickEdit = async (values) => {
    navigate(`/publish?id=${values.id}`);
  };

  return filterData.length === 0 ? (
    <div>
      <div className="blank_article_list">
        <p>空空如也😫</p>
        <Link to={"/publish"}>发表新文章&nbsp;👉&nbsp;</Link>
      </div>
    </div>
  ) : (
    <div className="article">
      <div className="search_article">
        <select name={""} id={""} onChange={(e) => typeChange(e.target.value)}>
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
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filterData
            .slice(beginIndex, beginIndex + params.pageSize)
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{moment(item.createTime).format("YYYY-MM-DD")}</td>
                  <td>
                    <div className="operator_button">
                      <button
                        className="edit"
                        onClick={() => handleClickEdit(item)}
                      >
                        编辑
                      </button>
                      <button
                        className="danger"
                        onClick={() => handleClickDelete(item.id)}
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
        currentPage={params.page}
        pageSize={params.pageSize}
        totalNumber={articleData.totalCount}
        getPaging={getPaging}
      />
    </div>
  );
}

export default Article;
