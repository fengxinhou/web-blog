import React, { useMemo } from "react";
import "./paging.css";
function Paging(props) {
  const { currentPage, pageSize, totalNumber, getPaging } = props;

  const totalPage = useMemo(() => {
    return Math.ceil(totalNumber / pageSize);
  }, [pageSize, totalNumber]);
  const Paging = useMemo(() => {
    let pageArray = [];
    for (let index = 0; index < totalPage; index++) {
      pageArray.push(
        <span data-index={index + 1} key={index} className="pageNum">
          {index + 1}
        </span>
      );
    }
    return pageArray;
  }, [totalPage]);
  const changePage = (e) => {
    let page = e.target.getAttribute("data-index");
    getPaging(page);
  };
  return (
    <div className="paging">
      <span>
        当前{currentPage}页/共{totalPage}页
      </span>
      <div className="pages" onClick={changePage}>
        {Paging}
      </div>
    </div>
  );
}

export default Paging;
