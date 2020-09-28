import React from 'react';
import { Link } from 'react-router-dom';

import { increment } from '../actions/actionCreators';
import { connect } from 'react-redux';

const Photo = props => {
  const { post, comments } = props;
  
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post?.code}`}>
          <img src={post?.display_src} alt={post?.caption} className="grid-photo" />
        </Link>
      </div>

      <figcaption className="grid-figcaption">
        <p>{post?.caption}</p>
        <div className="control-buttons">
          <button
            onClick={() => props.increment(post?.id)}
            className="likes"
          >
            &hearts; {post?.likes}
          </button>
          <Link className="button" to={`/view/${post?.code}`}>
            <span className="comment-count">
              <span className="speech-bubble"></span>
              {comments[post?.code] ? comments[post?.code].length : 0 }
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
};

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
