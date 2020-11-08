import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [],
    tagsFilters: []
}

const addCategory = (state, action) => {
    return {
        ...state,
        categories: [...state.categories, action.category]
    }  
};

const addFilter = (state, action) => {
    const tagsFilters = [...state.tagsFilters, action.filter];
    return {
        ...state,
        tagsFilters
    }
}
const removeCategory = (state, action) => {
    let categories = state.categories.filter(category => category !== action.category);
    return {
        ...state,
        categories
    }  
};
const removeFilter = (state, action) => {
    let tagsFilters = state.tagsFilters.filter(filter => filter !== action.filter);

    return {
        ...state,
        tagsFilters
    }   
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.ADD_CATEGORY: return addCategory(state, action);
        case actionTypes.ADD_FILTER: return addFilter(state, action);
        case actionTypes.REMOVE_FILTER: return removeFilter(state, action);
        case actionTypes.REMOVE_CATEGORY: return removeCategory(state, action);
        default:
            return state;
    }
}

export default reducer;