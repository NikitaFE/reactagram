import React from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      {props.posts.map(post => 
        <Photo {...props} key={post.id} post={post} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(PhotoGrid);
