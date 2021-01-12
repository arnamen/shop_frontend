import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
        loading: true
    };
};

export const authSuccess = (token, userId) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const authSetIp = (ip) => {
    return {
        type: actionTypes.AUTH_SET_IP,
        ip: ip,
    };
};

export const logOut = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')

    return { type: actionTypes.AUTH_LOGOUT }
}

export const checkAuthTimeOut = (expirationTime) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, expirationTime);
    }
}

export const authRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logOut())
        } else {
            const expirationTime = new Date(localStorage.getItem('expirationDate'));

            if (expirationTime > new Date()) {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));

                dispatch(checkAuthTimeOut(expirationTime.getTime() - new Date().getTime()));

            }
            else {
                dispatch(logOut());
            }
        }
    }
}


export const auth = (authMethod, authData) => {
    return dispatch => {
        dispatch(authStart());

        let url;

        if (authMethod === 'signup') url = 'http://127.0.0.1:5000/api/users/signup';
        else if (authMethod === 'login') url = 'http://127.0.0.1:5000/api/users/login';
        else return dispatch(authFail('Ошибка аутентификации'));

        axios.post(url, authData)
            .then(response => {

                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn);

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', response.data.userId)

                dispatch(authSuccess(response.data.token, response.data.userId));
                dispatch(checkAuthTimeOut(response.data.expiresIn));

            })
            .catch(err => {
                const response = err.response;
                console.log(response);
                console.log(err);
                dispatch(authFail(response ? response.data : { message: 'Невозможно подключиться к серверу' }));
            });
    };
};