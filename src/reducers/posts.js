const posts = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return state.map((post, index) => 
        index === i ? {...post, likes: post.likes + 1} : post);
    default:
      return state;
  };
};

export default posts;
