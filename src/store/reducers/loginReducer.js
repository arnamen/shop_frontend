import * as actionTypes from '../actions/actionTypes';

const iniialState = {
    login: true,
}

const reducer = (state = iniialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_TEST:
            //НЕ ИЗМЕНЯТЬ state НАПРЯМУЮ
            return {
                ...state,
                login: false
            };
    
        default:
            return state;
    }
}

export default reducer;