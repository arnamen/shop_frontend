import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom'

import './index.css';

import loginReducer from './store/reducers/loginReducer';
import contentReducer from './store/reducers/contentReducer';
import filtersReducer from './store/reducers/filtersReducer';


const rootReducer = combineReducers({
  login: loginReducer,
  content: contentReducer,
  filters: filtersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

