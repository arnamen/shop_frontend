import React from 'react'
import { v4 } from 'uuid';
import { connect } from 'react-redux';

import Label from '../../../Label/label';
import * as actionTypes from '../../../../../store/actions/actionTypes';

import { ReactComponent as ReactCart } from '../../../../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCartFull } from '../../../../../assets/account/cart.svg';
import { ReactComponent as ReactCompare } from '../../../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../../../assets/account/heart.svg';

import star from '../../../../../assets/rating/stars/star.svg';
import star_empty from '../../../../../assets/rating/stars/star_empty.svg';

import './ItemsCard.css'


function ItemsCard(props) {
    const stars = [];
    let price = <span className='ItemsCard_price'>{props.itemData.price + '₴'}</span>;
    const compared = !!props.compare.find(item => item.name === props.itemData.name);
    const favored = !!props.favourites.find(item => item.name === props.itemData.name);
    const inCart = !!props.cart.find(item => item.name === props.itemData.name);

    const CartIcon = !inCart
        ? <ReactCart className={`ItemsCard_action-icon ItemsCard_action-icon_cart`} />
        : <ReactCartFull className={`ItemsCard_action-icon ItemsCard_action-icon_cart`} />

    for (let i = 0; i < props.itemData.stars; i++) {
        stars.push(<img key={v4()} className='ItemsCard_star' src={star} alt='star'></img>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={v4()} className='ItemsCard_star' src={star_empty} alt='star_empty'></img>)
    }
    //если есть старая цена - создать лейбл о скидке
    //и застилизировать цены
    const labels = [];

    if (props.itemData.old_price) {
        labels.push(<Label key={v4()} type='red'>{"СКИДКА " + ((1 - props.itemData.price / props.itemData.old_price) * 100).toFixed() + '%'}</Label>);
        price = (<React.Fragment>
            <span className='ItemsCard_price_discount'>{props.itemData.price + '₴'}</span>
            <span className='ItemsCard_price_before'>{props.itemData.old_price + '₴'}</span>
        </React.Fragment>)
    }

    if (props.itemData.labels && props.itemData.labels.length && props.itemData.labels.length > 0)
        props.itemData.labels.forEach(labelName => {
            console.log(props.itemData.id, labelName)
            switch (labelName) {
                case 'new':
                    labels.push(<Label key={v4()} type='blue'>НОВИНКА</Label>);
                    break;
                case 'popular':
                    labels.push(<Label key={v4()} type='green'>ХИТ ПРОДАЖ</Label>);
                    break;
                default:
                    break;
            }
        })
    const href = `/item/${props.itemData.id.toLowerCase()}`;
    return (
        <div className='ItemsCard'>
            <a href={href} className='ItemsCard_image-wrapper'>
                <img className='ItemsCard_image-main' src={props.itemData.image_main} alt='card-item-main' />
                <img className='ItemsCard_image-secondary' src={props.itemData.image_secondary} alt='card-item-secondary' />
            </a>
            <a className='ItemsCard_descr' href={href}>{props.itemData.name}</a>
            <div className='ItemsCard_stars'>
                {stars}
            </div>
            <div className='ItemsCard_price-wrapper'>
                {price}
            </div>
            <div className='ItemsCard_labels'>
                {labels}
            </div>
            <div className='ItemsCard_actions'>
                <div className='ItemsCard_action-wrapper' onClick={() => {
                    inCart
                        ? props.onRemoveFromFCart({ ...props.itemData, amount: 1 })
                        : props.onAddToCart({ ...props.itemData, amount: 1 });
                }}>
                    {CartIcon}
                    <span>{inCart ? 'Убрать' : 'В корзину'}</span>
                </div>
                <div className='ItemsCard_action-wrapper'>
                    <ReactHeart className={`ItemsCard_action-icon ItemsCard_action-icon_heart ${favored && 'ItemsCard_action-icon-active-red'}`} viewBox="0 0 512 512"
                        onClick={e => {
                            favored
                                ? props.onRemoveFromFavourites(props.itemData)
                                : props.onAddToFavorites(props.itemData)
                        }} />
                </div>
                <div className='ItemsCard_action-wrapper'>
                    <ReactCompare className={`ItemsCard_action-icon ItemsCard_action-icon_compare ${compared && 'ItemsCard_action-icon-active'}`}
                        onClick={e => {
                            compared
                                ? props.onRemoveFromCompare(props.itemData)
                                : props.onAddToCompare(props.itemData)
                        }} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        compare: state.compare.compare,
        favourites: state.favourites.favourites,
        cart: state.cart.cart,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCompare: (item) => dispatch({
            type: actionTypes.ADD_COMPARE,
            item,
        }),
        onRemoveFromCompare: (item) => dispatch({
            type: actionTypes.REMOVE_COMPARE,
            item,
        }),
        onAddToFavorites: (item) => dispatch({
            type: actionTypes.ADD_FAVOURITES,
            item,
        }),
        onRemoveFromFavourites: (item) => dispatch({
            type: actionTypes.REMOVE_FAVOURITES,
            item,
        }),
        onAddToCart: (item) => dispatch({
            type: actionTypes.ADD_TO_CART,
            item,
        }),
        onRemoveFromFCart: (item) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            item,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCard)