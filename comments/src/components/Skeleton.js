import React from "react";

// This is the Task component that will be used in the ToDoList component
const Skeleton = (props) => {
  return (
    <div className="skeleton">
      <div className="skeleton-div"></div>
      <div className="skeleton-div"></div>
      <div className="skeleton-div"></div>
    </div>
  );
};

export default Skeleton;
