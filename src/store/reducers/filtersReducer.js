import * as actionTypes from '../actions/actionTypes';

const iniialState = {
    category: {
        filters: []
    },
}

const addCategory = (state, action) => {
    return {
        ...state,
        [action.category]: {
            filters: []
        }
    }  
};

const addFilter = (state, action) => {
    const filters = [...state.filters, action.filter];
    return {
        ...state,
        filters
    }
}

const removeFilter = (state, action) => {
    let filters = state.filters.filter(filter => filter !== action.filter);

    return {
        ...state,
        filters
    }   
}


const reducer = (state = iniialState, action) => {
    switch (action.type) {
        
        case actionTypes.ADD_CATEGORY: return addCategory(state, action);
        case actionTypes.ADD_FILTER: return addFilter(state, action);
        case actionTypes.REMOVE_FILTER: return removeFilter(state, action);

        default:
            return state;
    }
}

export default reducer;