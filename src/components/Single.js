import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import { connect } from 'react-redux';

const Single = props => {
  const postId = props.location.pathname.slice(6);
  const post = props.posts.find(post => post.code === postId);
  const postComments = props.comments[postId] || [];
  
  return (
    <div className="single-photo">
      <Photo post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  )
};

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

export default connect(mapStateToProps, null)(Single);
