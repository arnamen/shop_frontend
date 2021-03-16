import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from '../store/reducers/authReducer';
import contentReducer from './reducers/contentReducer';
import filtersReducer from './reducers/filtersReducer';
import compareReducer from './reducers/compareReducer';
import favouritesReducer from './reducers/favouritesReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer,
  filters: filtersReducer,
  compare: compareReducer,
  favourites: favouritesReducer,
  cart: cartReducer
});

const middleware = [thunk];

const initialState = {
 
}

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
