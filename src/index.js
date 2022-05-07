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
    if (action.payload > 0 && action.payload <= 5) {
      return [action.payload];
    } else {
      alert('Please select a number 1 through 5.');
    }
  }
  return state;
};

const understandingReducer = (state = [], action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    if (action.payload > 0 && action.payload <= 5) {
      return [action.payload];
    } else {
      alert('Please select a number 1 through 5.');
    }
  }
  return state;
};

const supportReducer = (state = [], action) => {
  if (action.type === 'SET_SUPPORT') {
    if (action.payload > 0 && action.payload <= 5) {
      return [action.payload];
    } else {
      alert('Please select a number 1 through 5.');
    }
  }
  return state;
};

const commentReducer = (state = [], action) => {
  if (action.type === 'SET_COMMENT') {
    return action.payload;
  }
  return state;
};

const reviewReducer = (state = [], action) => {
  if (action.type === 'SET_REVIEW') {
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
    reviewReducer,
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
