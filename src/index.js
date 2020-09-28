import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import store, { history } from './store';

import './styles/style.scss';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
