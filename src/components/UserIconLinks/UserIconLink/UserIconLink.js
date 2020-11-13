import React from 'react'
import { Link } from 'react-router-dom';

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
    let className = `UserIconLink__icon 
    ${
    (props.white && 'UserIconLink__icon-white') || 
    (props.active && 'UserIconLink__icon-active')
    }`;
    if (props.markContent && props.active) ContentMarker = <div className='UserIconLink__ContentMarker'>{props.markContent}</div>

    return (
        <Link to={props.to} className='UserIconLink__wrapper'>
            <SVGimage className={className} 
            viewBox="0 0 512 512" />
            {ContentMarker}
        </Link>

    )
}
