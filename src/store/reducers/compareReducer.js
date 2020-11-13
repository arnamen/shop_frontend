import cloneDeep from 'clone-deep';

import * as actionTypes from '../actions/actionTypes';


const iniialState = {
    compare: []
}

const addToCompare = (state, action) => {
    const compare = cloneDeep(state.compare);
    compare.push(action.item);
    return {
        ...state,
        compare
    }
}

const removeFromCompare = (state, action) => {
    const compare = cloneDeep(state.compare).filter(item => item.name !== action.item.name);
    return {
        ...state,
        compare
    }
}



const reducer = (state = iniialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMPARE: return addToCompare(state, action)
        case actionTypes.REMOVE_COMPARE: return removeFromCompare(state, action);
            
    
        default:
            return state;
    }
}

export default reducer;