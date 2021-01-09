import * as actionTypes from '../actions/actionTypes';

const iniialState = {
    login: false,
    token: null
}

const reducer = (state = iniialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                login: true,
                token: action.token
            };
    
            case actionTypes.LOGOUT:
                return {
                    ...state,
                    login: false,
                    token: null
                };

        default:
            return state;
    }
}

export default reducer;