import React from 'react'
import {v4} from 'uuid';

import Label from '../../../Label/label';

import star from '../../../../../assets/rating/stars/star.svg';
import star_empty from '../../../../../assets/rating/stars/star_empty.svg';

import './ItemsCard.css'

export default function ItemsCard( props ) {
    const stars = [];
    let price;
    let label;
    let second_label;

    for (let i = 0; i < props.itemData.stars; i++) {
        stars.push(<img key={v4()} className='ItemsCard_star' src={star} alt='star'></img>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={v4()} className='ItemsCard_star' src={star_empty} alt='star_empty'></img>)
    }
    //если есть старая цена - создать лейбл о скидке + сгенерировать случайный
    //и застилизировать цены
    if(props.itemData.old_price) {
        label = <Label type='red'>{"СКИДКА " + (props.itemData.price/props.itemData.old_price*100).toFixed() + '%'}</Label>
        const generateLabel = Math.random();
        if(generateLabel >= 0.8) second_label = <Label type='blue'>НОВИНКА</Label>
        else if(generateLabel >= 0.5) second_label = <Label type='green'>ХИТ ПРОДАЖ</Label>
        price = (<React.Fragment>
            <span className='ItemsCard_price_discount'>{props.itemData.price + '₴'}</span>
            <span className='ItemsCard_price_before'>{props.itemData.old_price + '₴'}</span>
        </React.Fragment>)
    } else {
        //иначе сгенерировать 1-2 случайных лейбла
        //и застилизировать цену
        price = <span className='ItemsCard_price'>{props.itemData.price + '₴ - ' + (props.itemData.price + props.itemData.price * Math.random()).toFixed() + '₴'}</span>
        const generateLabel = Math.random();
        if(generateLabel >= 0.75) {
            label = <Label type='blue'>НОВИНКА</Label>
            second_label = <Label type='green'>ХИТ ПРОДАЖ</Label>
        } else if(generateLabel >= 0.5) label = <Label type='blue'>НОВИНКА</Label>
        else label = <Label type='green'>ХИТ ПРОДАЖ</Label>
    }

    return (
        <div className='ItemsCard'>
            <a href={props.itemData.to} className='ItemsCard_image-wrapper'>
                <img className='ItemsCard_image-main' src={props.itemData.image_main} alt='card-item-main' />
                <img className='ItemsCard_image-secondary' src={props.itemData.image_secondary} alt='card-item-secondary' />
            </a>
            <a className='ItemsCard_descr' href={props.itemData.to}>{props.itemData.name}</a>
            <div className='ItemsCard_stars'>
                {stars}
            </div>
            <div className='ItemsCard_price-wrapper'>
                {price}
            </div>
            <div className='ItemsCard_labels'>
                {label}
                {second_label}
            </div>
            <div className='ItemsCard_actions'>
                <div>
                    <span></span>
                    <span>Добавить в корзину</span>
                </div>
            </div>
        </div>
    )
}
