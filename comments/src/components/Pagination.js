import React from "react";

const Pagination = (props) => {
  const nextPage = () => {
    console.log(props.currentPage);
    console.log("next page is!", props.currentPage + 1);
    props.setCurrentPage(props.currentPage + 1);
  };

  const prevPage = () => {
    if (props.currentPage === 1) return;
    props.setCurrentPage(props.currentPage - 1);
    console.log(props.currentPage);
  };

  return (
    <div className="pagination">
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
