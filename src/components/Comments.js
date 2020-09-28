import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment } from '../actions/actionCreators';

const Comments = (props, refs) => {
  const author = useRef('author');
  const comment = useRef('comment');
  const commentForm = useRef('commentForm');

  const renderComment = ({ id, user, text }) => (
    <div className="comment" key={id}>
      <p>
        <strong>{user}</strong>
        {text}
        <button
          className="remove-comment"
          onClick={() => props.removeComment(props.location.pathname, id)}
        >
          &times;
        </button>
      </p>
    </div>
  );

  const handleSubmit = e => {
    e.preventDefault();
    const { postId } = props.location.pathname;

    props.addComment(postId, author, comment);
    commentForm.reset();
  };

  return (
    <div className="comments">
      {props.postComments.map(comment => renderComment(comment))}
      <form ref={commentForm} className="comment-form" onSubmit={handleSubmit}>
        <input type="text" ref={author} placeholder="author" />
        <input type="text" ref={comment} placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = {
  addComment, removeComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
