import cloneDeep from 'clone-deep';

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [],
    tagsFilters: {}
}

const addCategory = (state, action) => {
    return {
        ...state,
        categories: [...state.categories, action.category]
    }
};

const removeCategory = (state, action) => {
    let categories = state.categories.filter(category => category !== action.category);
    return {
        ...state,
        categories
    }
};

const addFilters = (state, action) => {
    let addFilters =  cloneDeep(action.filters);
    let tagsFilters = cloneDeep(state.tagsFilters);
    Object.keys(addFilters).forEach((filterName) => {

        if (!tagsFilters[filterName]) tagsFilters[filterName] = [];
        if(!Array.isArray(addFilters[filterName])) addFilters[filterName] = [addFilters[filterName]];

        //объединить существующие фильтры с полученными
        tagsFilters[filterName] = [...new Set([...tagsFilters[filterName], ...addFilters[filterName]])]
    })
    return {
        ...state,
        tagsFilters: tagsFilters
    }
}

const removeFilters = (state, action) => {
    let tagsFilters = cloneDeep(state.tagsFilters);
    let removeFilters =  cloneDeep(action.filters);
    Object.keys(removeFilters).forEach((filterName) => {
        if (!tagsFilters[filterName]) return;
        if(!Array.isArray(removeFilters[filterName])) removeFilters[filterName] = [removeFilters[filterName]];
        //удалить переданные параметры фильтрования из фильтра (одна или несколько категорий фильтрования)
        removeFilters[filterName].forEach(filterString => {
            //отфильтровать данные в каждой категории (по тегам) фильтра
            //категория
            tagsFilters[filterName] = tagsFilters[filterName].filter(appliedFilter => {
                //элементы в категории
                return appliedFilter !== filterString;
            })
        })
    })
    return {
        ...state,
        tagsFilters: tagsFilters
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_CATEGORY: return addCategory(state, action);
        case actionTypes.ADD_FILTERS: return addFilters(state, action);
        case actionTypes.REMOVE_FILTERS: return removeFilters(state, action);
        case actionTypes.REMOVE_CATEGORY: return removeCategory(state, action);
        default:
            return state;
    }
}

export default reducer;