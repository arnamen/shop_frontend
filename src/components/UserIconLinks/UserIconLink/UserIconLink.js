import React from 'react'

import './UserIconLink.css';

import { ReactComponent as ReactAccount } from '../../../assets/account/account.svg';
import { ReactComponent as ReactCart } from '../../../assets/account/cart.svg';
import { ReactComponent as ReactCompare } from '../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../assets/account/heart.svg';
const iconTypes = {
    account: ReactAccount,
    cart: ReactCart,
    compare: ReactCompare,
    heart: ReactHeart
};

export default function UserIconLink(props) {
    const SVGimage = iconTypes[props.type];
    let ContentMarker = null;

    if (props.markContent && props.active) ContentMarker = <div className='UserIconLink__ContentMarker'>{props.markContent}</div>

    return (
        <div className='UserIconLink__wrapper'>
            <SVGimage className={`UserIconLink__icon ${props.active && 'UserIconLink__icon-active'}`} 
            viewBox="0 0 512 512" />
            {ContentMarker}
        </div>

    )
}
