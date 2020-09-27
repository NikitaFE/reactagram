const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      const { author, comment } = action;
      return [...state, {
        user: author, 
        text: comment
      }];
    case 'REMOVE_COMMENT':
      return state.filter((comment, i) => i !== action.index);
    default:
      return state;
  };
};

const comments = (state = [], action) => {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  };
  return state;
};

export default comments;
