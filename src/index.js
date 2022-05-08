import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feelingReducer = (state = [], action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = [], action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = [], action) => {
  if (action.type === 'SET_SUPPORT') {
    return action.payload;
  }
  return state;
};

const commentReducer = (state = '', action) => {
  if (action.type === 'SET_COMMENT') {
    return action.payload;
  }
  return state;
};

const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
