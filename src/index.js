import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {HashRouter} from 'react-router-dom'

import './index.css';

import authReducer from './store/reducers/authReducer';
import contentReducer from './store/reducers/contentReducer';
import filtersReducer from './store/reducers/filtersReducer';
import compareReducer from './store/reducers/compareReducer';
import favouritesReducer from './store/reducers/favouritesReducer';
import cartReducer from './store/reducers/cartReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
  filters: filtersReducer,
  compare: compareReducer,
  favourites: favouritesReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);

