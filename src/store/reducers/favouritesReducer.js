import cloneDeep from 'clone-deep';

import * as actionTypes from '../actions/actionTypes';

const iniialState = {
    favourites: [],
}

const addToFavourites = (state, action) => {
    const favourites = cloneDeep(state.favourites);
    favourites.push(action.item);
    return {
        ...state,
        favourites
    }
}

const removeFromFavourites = (state, action) => {
    const favourites = cloneDeep(state.favourites).filter(item => item.name !== action.item.name);
    return {
        ...state,
        favourites
    }
}



const reducer = (state = iniialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_FAVOURITES: return addToFavourites(state, action)
        case actionTypes.REMOVE_FAVOURITES: return removeFromFavourites(state, action);
            
    
        default:
            return state;
    }
}

export default reducer;