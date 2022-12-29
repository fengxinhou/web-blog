import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Paging from "../Paging/Paging";
import { giveThumbUp } from "../../server/api";
import { http } from "../../utils";
function Home() {
  const [blog, setBlog] = useState({
    blogList: [],
    totalNumber: 0,
  });

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    const loadList = async () => {
      const res = await http.get("/blog");
      const { result, count } = res;
      setBlog({
        blogList: result,
        totalNumber: count,
      });
    };
    loadList().then();
  }, []);

  const getPaging = (page) => {
    setCurrentPage(page);
  };
  const beginIndex = (currentPage - 1) * pageSize;
  const getArticleDetail = (id) => {
    try {
      navigate(`/detail?id=${id}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleClickThumb = async (id) => {
    const thumbUpCount = await giveThumbUp(id);
    const modifyBolgThumb = blog.blogList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          thumbUp: thumbUpCount,
        };
      }
      return item;
    });
    setBlog({
      ...blog,
      blogList: modifyBolgThumb,
    });
  };

  return (
    <div className="home">
      {blog.blogList.length === 0 ? (
        <div className="blank_list">
          <p>空空如也😫</p>
          <Link to={"/publish"}>发表新文章&nbsp;👉&nbsp;</Link>
        </div>
      ) : (
        <div className="home_content">
          <ol className="article_list">
            {blog.blogList
              .slice(beginIndex, beginIndex + pageSize)
              .map((item) => (
                <li className="article_item" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="article_operator">
                    <span>作者：{item.auther.name}</span>
                    <div
                      className="thumbs"
                      onClick={() => handleClickThumb(item.id)}
                    >
                      <i className="iconfont">&#xe65d;</i>
                      <button>点赞数:&nbsp;{item.thumbUp}</button>
                    </div>
                    <button
                      className="continue"
                      onClick={() => getArticleDetail(item.id)}
                    >
                      继续阅读
                    </button>
                  </div>
                  <hr className="article_divide" />
                </li>
              ))}
          </ol>
          <Paging
            currentPage={currentPage}
            pageSize={pageSize}
            totalNumber={blog.totalNumber}
            getPaging={getPaging}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
