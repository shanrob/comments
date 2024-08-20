import Comment from "./Comment";

function CommentsList(props) {
  return (
    <div className="comments-list">
      {props.comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          setComments={props.setComments}
          comments={props.comments}
        />
      ))}
    </div>
  );
}

export default CommentsList;
