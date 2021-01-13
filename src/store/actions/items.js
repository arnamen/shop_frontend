import axios from 'axios';

import * as actionTypes from './actionTypes';

export const contentRetrieveStart = () => {
    return {
        type: actionTypes.CONTENT_RETRIEVE_START,
        loading: true
    }
}

export const contentRetrieveSuccess = (content) => {

    content = content.map(item => {
        item.categories = JSON.parse(item.categories);
        item.tags = JSON.parse(item.tags);
        item.labels = JSON.parse(item.labels);
        item.id = item._id;
        item._id = undefined;
        return item;
    });

    return {
        type: actionTypes.CONTENT_RETRIEVE_SUCCESS,
        loading: false,
        error: null,
        content: content
    }
}

export const contentRetrieveFail = (error) => {
    return {
        type: actionTypes.CONTENT_RETRIEVE_FAIL,
        loading: false,
        error: error
    }
}

export const updateContent = () => {
    return dispatch => {
        dispatch(contentRetrieveStart());
        axios.get('http://80.78.240.76:5001/api/items')
        .then(response => {
            dispatch(contentRetrieveSuccess(response.data));
        })
        .catch(error => {
            const response = error.response;
            console.log(error);
            dispatch(contentRetrieveSuccess(response ? response.data : 'Невозможно подключиться к серверу'));
        })
    }
}