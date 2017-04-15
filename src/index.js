import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import balanceMiddleware from './middlewares/balance';
import timeMiddleware from './middlewares/time';
import * as reducers from './ducks';
import App from './components/App';

const DEV = process.env.NODE_ENV !== 'production';

const store = createStore(
  combineReducers({
    ...reducers
  }),
  applyMiddleware(
    thunk,
    DEV && logger(),
    balanceMiddleware,
    timeMiddleware
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
