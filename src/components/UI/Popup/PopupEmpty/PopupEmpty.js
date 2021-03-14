import React from 'react'
import { v4 } from 'uuid';


import { ReactComponent as ReactCart } from '../../../../../public/assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCompare } from '../../../../../public/assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../../../public/assets/account/heart.svg';
import { ReactComponent as ReactAccount } from '../../../../../public/assets/account/account.svg';

import { popupMessages } from '../../../../utils/popup_messages';

import classes from './PopupEmpty.module.css';

const typeImages = {
    cart: ReactCart,
    compare: ReactCompare,
    favourites: ReactHeart,
    account: ReactAccount
}

export default function PopupEmpty( props ) {

    const ReactSVG = typeImages[props.type];
    let ImageEmpty = <React.Fragment/>;
    
    if(ReactSVG) ImageEmpty = <ReactSVG className={classes.PopupEmpty__img} viewBox="0 0 512 512" />;

    return (
        <div key={v4()}>
            <div className={classes.PopupEmpty__wrapper}>
                {ImageEmpty}
                <div className={classes.PopupEmpty__message}>{popupMessages.empty[props.type || 'default']}</div>
            </div>
        </div>
    )
}
