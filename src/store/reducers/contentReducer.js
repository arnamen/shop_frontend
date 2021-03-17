
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    content: [
    ],
    loading: false,
    error: null
}

const contentRetrieveStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const contentRetrieveSuccess = (state, action) => {
    
    return {
        ...state,
        loading: false,
        error: null,
        content: action.content
    }
}

const contentRetrieveFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTENT_RETRIEVE_START: return contentRetrieveStart(state, action);
        case actionTypes.CONTENT_RETRIEVE_SUCCESS: return contentRetrieveSuccess(state, action);
        case actionTypes.CONTENT_RETRIEVE_FAIL: return contentRetrieveFail(state, action);
        default:
            return state;
    }
}

export default reducer;