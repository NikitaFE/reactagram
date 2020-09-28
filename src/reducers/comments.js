const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      const { author, comment, commentId } = action;
      return [...state, {
        user: author, 
        text: comment,
        id: commentId,
      }];
    case 'REMOVE_COMMENT':
      return state.filter((comment) => comment.id !== action.commentId);
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
