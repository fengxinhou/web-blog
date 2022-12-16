import React from "react";
import "./paging.css";
function Paging(props) {
  const { currentPage, pageSize, totalNumber, getPaging } = props;

  const totalPage = Math.ceil(totalNumber / pageSize);

  const changePage = (index) => {
    if (currentPage === 1 && index === -1) {
      return;
    }
    if (currentPage === totalPage && index === 1) {
      return;
    }
    getPaging(Number(currentPage + index));
  };

  return (
    <div className="paging">
      {currentPage === 1 ? (
        <span></span>
      ) : (
        <button className="beforePage" onClick={() => changePage(-1)}>
          上一页
        </button>
      )}
      <span className="pageText">
        第{currentPage}页/共{totalPage}页
      </span>
      <button className="nextPage" onClick={() => changePage(1)}>
        下一页
      </button>
    </div>
  );
}

export default Paging;
