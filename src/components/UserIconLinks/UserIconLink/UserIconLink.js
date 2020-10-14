import React from 'react'

import classes from './UserIconLink.module.css';

import account from'../../../assets/account/account.svg';
import cart from'../../../assets/account/cart.svg';
import compare from '../../../assets/account/compare.svg';
import heart from'../../../assets/account/heart.svg';
const iconTypes = {account, cart, compare, heart};

export default function UserIconLink( props ) {
    return (
            <img className={classes.icon} src={iconTypes[props.type]} alt='icon'></img>
    )
}
