import React from 'react'
import { v4 } from 'uuid';


import { ReactComponent as ReactCart } from '../../../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCompare } from '../../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../../assets/account/heart.svg';
import { ReactComponent as ReactAccount } from '../../../../assets/account/account.svg';

import { popupMessages } from '../../../../utils/popup_messages';

import './PopupEmpty.css';

const typeImages = {
    cart: ReactCart,
    compare: ReactCompare,
    favourites: ReactHeart,
    account: ReactAccount
}

export default function PopupEmpty( props ) {

    const ReactSVG = typeImages[props.type];
    let ImageEmpty = <React.Fragment/>;
    
    if(ReactSVG) ImageEmpty = <ReactSVG className='PopupEmpty__img' viewBox="0 0 512 512" />;

    return (
        <div key={v4()}>
            <div className='PopupEmpty__wrapper'>
                {ImageEmpty}
                <div className='PopupEmpty__message'>{popupMessages.empty[props.type || 'default']}</div>
            </div>
        </div>
    )
}
