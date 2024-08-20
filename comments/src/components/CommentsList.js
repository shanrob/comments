function CommentsList(props) {
  return (
    <div className="comments-list">
      {props.comments.map((comment, index) => (
        <div key={index} className="comment">
          {comment}
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
