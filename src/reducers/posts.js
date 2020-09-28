const posts = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const id = action.postId;
      return state.map(post => 
        post.id === id ? {...post, likes: post.likes + 1} : post);
    default:
      return state;
  };
};

export default posts;
