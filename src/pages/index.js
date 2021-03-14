import React from 'react';
import ReactDOM from 'react-dom';
import App from './_app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../store/reducers/authReducer';
import contentReducer from '../store/reducers/contentReducer';
import filtersReducer from '../store/reducers/filtersReducer';
import compareReducer from '../store/reducers/compareReducer';
import favouritesReducer from '../store/reducers/favouritesReducer';
import cartReducer from '../store/reducers/cartReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
  filters: filtersReducer,
  compare: compareReducer,
  favourites: favouritesReducer,
  cart: cartReducer
});

let composeEnhancers = compose;

const store = createStore(rootReducer,
  applyMiddleware(thunk));

/* ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
 */
