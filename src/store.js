import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  comments,
  posts
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = createBrowserHistory();

export default store;
