import React from 'react'
import Link from 'next/link';

import classes from './UserIconLink.module.css';

import ReactAccount from '../../../../public/assets/account/account.svg';
import ReactCart from '../../../../public/assets/account/cart.svg';
import ReactCompare from '../../../../public/assets/account/compare.svg';
import ReactHeart from '../../../../public/assets/account/heart.svg';
const iconTypes = {
    account: ReactAccount,
    cart: ReactCart,
    compare: ReactCompare,
    heart: ReactHeart
};

export default function UserIconLink(props) {
    const SVGimage = iconTypes[props.type];
    let ContentMarker = null;
    let className = 'UserIconLink__icon';

    if (props.active && props.activeColor)
        className += ` UserIconLink__icon-active UserIconLink__icon-active-${props.activeColor}`;
    else if (props.active)
        className += ` UserIconLink__icon-active`;

    if (props.markContent && props.active) ContentMarker = <div className={classes.UserIconLink__ContentMarker}>{props.markContent}</div>

    return (
        <div className={classes.UserIconLink__wrapper}>
            {props.active
                ? <Link href={props.to}>
                    {SVGimage && <SVGimage className={className}
                        viewBox="0 0 512 512" />}
                    {ContentMarker}
                </Link>
                : <span>
                    {SVGimage && <SVGimage className={className}
                        viewBox="0 0 512 512" />}
                    {ContentMarker}
                </span>}
            {props.children}
        </div>
    )
}
