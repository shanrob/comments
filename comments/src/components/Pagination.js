import React from "react";

const Pagination = (props) => {
  const paginationNumbers = [];
  for (let i = 1; i <= Math.ceil(props.length / props.postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  const nextPage = () => {
    props.setCurrentPage(props.currentPage + 1);
  };

  const prevPage = () => {
    if (props.currentPage === 1) return;
    props.setCurrentPage(props.currentPage - 1);
  };

  return (
    <div className="pagination">
      <button onClick={props.setCurrentPage(1)}>
        <span>First</span>
      </button>
      <button onClick={prevPage}>Prev</button>
      {paginationNumbers.map((number) => (
        <button onClick={props.setCurrentPage(number)} key={number}>
          {number}
        </button>
      ))}
      <button onClick={nextPage}>Next</button>
      <button onClick={props.setCurrentPage(paginationNumbers.length)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
