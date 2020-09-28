// increment
export const increment = (postId) => ({
  type: 'INCREMENT_LIKES',
  postId
});

// add comment
export const addComment = (postId, author, comment, commentId) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
  commentId
});

// remove comment
export const removeComment = (postId, commentId) => ({
  type: 'REMOVE_COMMENT',
  postId,
  commentId
});
