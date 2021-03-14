import React from 'react'
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import {Link} from 'next/router';

import Label from '../../../Label/label';
import * as actionTypes from '../../../../../store/actions/actionTypes';

import { ReactComponent as ReactCart } from '../../../../../../public/assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCartFull } from '../../../../../../public/assets/account/cart.svg';
import { ReactComponent as ReactCompare } from '../../../../../../public/assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../../../../public/assets/account/heart.svg';

import star from '../../../../../../public/assets/rating/stars/star.svg';
import star_empty from '../../../../../../public/assets/rating/stars/star_empty.svg';
import imagePlaceholder from '../../../../../../public/assets/misc/image_placeholder.png';

import classes from './ItemsCard.module.css';


function ItemsCard(props) {
    const stars = [];
    let price = <span className={classes.ItemsCard_price}>{props.itemData.price + '₴'}</span>;
    const compared = !!props.compare.find(item => item.name === props.itemData.name);
    const favored = !!props.favourites.find(item => item.name === props.itemData.name);
    const inCart = !!props.cart.find(item => item.name === props.itemData.name);

    const CartIcon = !inCart
        ? <ReactCart className={`ItemsCard_action-icon ItemsCard_action-icon_cart`} />
        : <ReactCartFull className={`ItemsCard_action-icon ItemsCard_action-icon_cart`} />

    for (let i = 0; i < props.itemData.stars; i++) {
        stars.push(<img key={v4()} className={classes.ItemsCard_star} src={star} alt='star'></img>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={v4()} className={classes.ItemsCard_star} src={star_empty} alt='star_empty'></img>)
    }
    //если есть старая цена - создать лейбл о скидке
    //и застилизировать цены
    const labels = [];
    if (props.itemData.oldPrice) {
        labels.push(<Label key={v4()} type='red'>{"СКИДКА " + ((1 - props.itemData.price / props.itemData.oldPrice) * 100).toFixed() + '%'}</Label>);
        price = (<React.Fragment>
            <span className={classes.ItemsCard_price_discount}>{props.itemData.price + '₴'}</span>
            <span className={classes.ItemsCard_price_before}>{props.itemData.oldPrice + '₴'}</span>
        </React.Fragment>)
    }

    if (props.itemData.labels && props.itemData.labels.length && props.itemData.labels.length > 0)
        props.itemData.labels.forEach(labelName => {

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
    let isNoImage = false;
    let isStaticImage = false;
    
    if (!props.itemData.images || !Array.isArray(props.itemData.images)) {isNoImage = true; isStaticImage = true;}
    else if (props.itemData.static || props.itemData.images.length < 2) isStaticImage = true;
 
    return (
        <div className={`ItemsCard ${isStaticImage && ` itemCard__image__static`}`}>
            <Link href={href} className={classes['ItemsCard_image-wrapper']}>
                {isNoImage
                    ? <img className={classes['ItemsCard_image-main']}
                        src={imagePlaceholder}
                        alt='card-item-main' />
                    : <React.Fragment>
                        <img className={classes['ItemsCard_image-main']}
                            src={props.itemData.images[0]}
                            alt='card-item-main' />
                        {props.itemData.images[1] && <img className={classes['ItemsCard_image-secondary']}
                            src={props.itemData.images[1]}
                            alt='card-item-secondary' />}
                    </React.Fragment>
                }

            </Link>
            <Link className={classes.ItemsCard_descr} href={href}>{props.itemData.name}</Link>
            <div className={classes.ItemsCard_stars}>
                {stars}
            </div>
            <div className={classes['ItemsCard_price-wrapper']}>
                {price}
            </div>

            <div className={classes.ItemsCard_actions}>
                <div className={classes['ItemsCard_action-wrapper']} onClick={() => {
                    inCart
                        ? props.onRemoveFromCart({ ...props.itemData, amount: 1 })
                        : props.onAddToCart({ ...props.itemData, amount: 1 });
                }}>
                    {CartIcon}
                    <span>{inCart ? 'Убрать' : 'В корзину'}</span>
                </div>
                <div className={classes['ItemsCard_action-wrapper']}>
                    <ReactHeart className={`ItemsCard_action-icon ItemsCard_action-icon_heart ${favored && 'ItemsCard_action-icon-active-red'}`} viewBox="0 0 512 512"
                        onClick={e => {
                            favored
                                ? props.onRemoveFromFavourites(props.itemData)
                                : props.onAddToFavorites(props.itemData)
                        }} />
                </div>
                <div className={classes['ItemsCard_action-wrapper']}>
                    <ReactCompare className={`ItemsCard_action-icon ItemsCard_action-icon_compare ${compared && 'ItemsCard_action-icon-active'}`}
                        onClick={e => {
                            compared
                                ? props.onRemoveFromCompare(props.itemData)
                                : props.onAddToCompare(props.itemData)
                        }} />
                </div>
            </div>
            <div className={classes.ItemsCard_labels}>
                {labels}
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
        onRemoveFromCart: (item) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            item,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCard)