import React, { useState } from 'react';
import { connect } from 'react-redux';
import { generate as addId } from 'shortid';

import { addComment, removeComment } from '../actions/actionCreators';

const Comments = (props) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const renderComment = (comment) => (
    <div className="comment" key={comment?.id}>
      <p>
        <strong>{comment?.user}</strong>
        {comment?.text}
        <button
          className="remove-comment"
          onClick={() => props.removeComment(props.location.pathname.slice(6), comment?.id)}
        >
          &times;
        </button>
      </p>
    </div>
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (author.length > 0 && comment.length > 0) {
      const postId = props.location.pathname.slice(6);
  
      props.addComment(postId, author, comment, addId());
      setAuthor('');
      setComment('');
    }
  };

  return (
    <div className="comments">
      {props.postComments.map(comment => renderComment(comment))}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={author}
          onChange={({target}) => setAuthor(target.value)}
          placeholder="author"
        />
        <input
          type="text"
          value={comment}
          onChange={({target}) => setComment(target.value)}
          placeholder="comment"
        />
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
