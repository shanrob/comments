function CommentInput(props) {
  function handleAddComment(e) {
    e.preventDefault();
    props.setComments([...props.comments, e.target.comment.value]);
    e.target.comment.value = "";
  }

  return (
    <form className="comment-input" onSubmit={handleAddComment}>
      <input
        name="comment"
        style={{ width: "300px" }}
        type="text"
        placeholder="Add a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentInput;
