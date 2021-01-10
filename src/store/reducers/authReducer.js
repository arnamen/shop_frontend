import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userId: null,
    token: null,
    isLoading: false,
    error: null
}

const authLogout = (state, action) => {
    return {
        ...state,
        token: null,
        isLoading: false,
        error: null,
        userId: null
    };
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
}

const authSuccess = (state, action) => {
    return {
        ...state,
        userId: action.userId,
        token: action.token,
        error: null,
        loading: false
    };
}

const authFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default:
            return state;
    }
}

export default reducer;