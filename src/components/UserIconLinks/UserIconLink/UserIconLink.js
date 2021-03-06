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
    let className = [classes['UserIconLink__icon']];

    if (props.active && props.activeColor)
        className.push(classes[`UserIconLink__icon-active`], classes[`UserIconLink__icon-active-${props.activeColor}`]);
    else if (props.active)
        className.push(classes[`UserIconLink__icon-active`]);

    if (props.markContent && props.active) ContentMarker = <div className={classes.UserIconLink__ContentMarker}>{props.markContent}</div>

    return (
        <div className={classes.UserIconLink__wrapper}>
            {props.active
                ? <Link href={props.to}>
                    <a>
                        {SVGimage && <SVGimage className={className.join(' ')}
                            viewBox="0 0 512 512" />}
                        {ContentMarker}
                    </a>
                </Link>
                : <span>
                    {SVGimage && <SVGimage className={className.join(' ')}
                        viewBox="0 0 512 512" />}
                    {ContentMarker}
                </span>}
            {props.children}
        </div>
    )
}
