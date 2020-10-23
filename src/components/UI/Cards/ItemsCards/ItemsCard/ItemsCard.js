import React from 'react'
import {v4} from 'uuid';

import Label from '../../../Label/label';

import star from '../../../../../assets/rating/stars/star.svg';
import star_empty from '../../../../../assets/rating/stars/star_empty.svg';

import './ItemsCard.css'

export default function ItemsCard( props ) {
    const stars = [];
    let price;
    for (let i = 0; i < props.itemData.stars; i++) {
        stars.push(<img key={v4()} className='ItemsCard_star' src={star} alt='star'></img>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={v4()} className='ItemsCard_star' src={star_empty} alt='star_empty'></img>)
    }

    if(props.itemData.discount) {
        price = (<React.Fragment>
            <span className='ItemsCard_price_discount'>{props.itemData.price + '₴'}</span>
            <span className='ItemsCard_price_before'>{(props.itemData.price/props.itemData.discount*100).toFixed(2) + '₴'}</span>
        </React.Fragment>)
    } else {
        price = <span className='ItemsCard_price'>{props.itemData.price + ' - ' + props.itemData.price + '₴'}</span>
    }

    return (
        <div className='ItemsCard'>
            <a href={props.itemData.to} className='ItemsCard_image-wrapper'>
                <img className='ItemsCard_image-main' src={props.itemData.image_main} alt='card-item-main'/>
                <img className='ItemsCard_image-secondary' src={props.itemData.image_secondary} alt='card-item-secondary'/>
            </a>
            <a className='ItemsCard_descr' href={props.itemData.to}>{props.itemData.name}</a>
            <div className='ItemsCard_stars'>
                {stars}
            </div>
            <div className='ItemsCard_price-wrapper'>
                {price}
            </div>
            <Label type='red'>Акция</Label>
        </div>
    )
}
