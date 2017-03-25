import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import * as reducers from './ducks';
import App from './components/App';

const store = createStore(
  combineReducers({
    ...reducers
  }),
  applyMiddleware(
    thunk,
    logger()
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
