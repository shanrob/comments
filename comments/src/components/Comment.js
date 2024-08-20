import React from "react";
import { useState, useEffect } from "react";

function Comment(props) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = React.createRef();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  });

  const edit = () => {
    setIsEditing(true);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const newComments = props.comments.map((comment) => {
      if (comment === props.comment) {
        return {
          ...comment,
          commentText: e.target.value,
          commentDate: formatDate(Date.now()),
        };
      }
      return comment;
    });
    props.setComments(newComments);
  };

  function handleDelete() {
    const newComments = props.comments.filter(
      (comment) => comment !== props.comment
    );
    props.setComments(newComments);
  }

  function formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleTimeString() + " " + dateObj.toLocaleDateString();
  }

  return (
    <div className="comment">
      {isEditing ? (
        <form onSubmit={handleInputSubmit}>
          <input
            type="text"
            ref={inputRef}
            name="edit-comment"
            defaultValue={props.comment.fact}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </form>
      ) : (
        <div style={{ textAlign: "left" }}>
          <p>{props.comment.fact}</p>
        </div>
      )}
      <div className="comment-buttons">
        <button onClick={edit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button>Reply</button>
      </div>
    </div>
  );
}

export default Comment;
