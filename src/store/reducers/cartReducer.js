import cloneDeep from 'clone-deep';

import * as actionTypes from '../actions/actionTypes';

const iniialState = {
    cart: []
}

const addToCart = (state, action) => {
    const cart = cloneDeep(state.cart);
    cart.push(action.item);
    return {
        ...state,
        cart
    }
}

const removeFromCart = (state, action) => {
    const cart = cloneDeep(state.cart).filter(item => item.name !== action.item.name);
    return {
        ...state,
        cart
    }
}

const increaseItemInCart = (state, action) => {
    const cart = cloneDeep(state.cart);
    const item = cart.find(item => item.name === action.item.name);
    item.amount++;
    return {
        ...state,
        cart
    }
}

const decreaseItemInCart = (state, action) => {
    const cart = cloneDeep(state.cart);
    const item = cart.find(item => item.name === action.item.name);
    item.amount--
    item.amount = Math.max(item.amount, 1);
    return {
        ...state,
        cart
    }
}

const reducer = (state = iniialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART: return addToCart(state, action)
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action);
        case actionTypes.INCRESE_ITEM_IN_CART: return increaseItemInCart(state, action);
        case actionTypes.DECREASE_ITEM_IN_CART: return decreaseItemInCart(state, action);
        default:
            return state;
    }
}

export default reducer;