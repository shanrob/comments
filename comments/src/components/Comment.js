function Comment(props) {
  function handleDelete() {
    const newComments = props.comments.filter(
      (comment) => comment !== props.comment
    );
    props.setComments(newComments);
  }

  return (
    <div className="comment">
      <p>{props.comment}</p>
      <div className="comment-buttons">
        <button disabled={true}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button>Reply</button>
      </div>
    </div>
  );
}

export default Comment;
