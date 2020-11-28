import React, { useState } from 'react'
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import { v4 } from 'uuid';

import Label from '../../components/UI/Label/label';
import Counter from '../../components/Counter/Counter';
import Button from '../../components/UI/Button/Button';

import star from '../../assets/rating/stars/star.svg';
import star_empty from '../../assets/rating/stars/star_empty.svg';

import { ReactComponent as ReactChat } from '../../assets/misc/chat.svg';
import { ReactComponent as ReactCart } from '../../assets/itemsCards/cart-for-card-item.svg';

import * as actionTypes from '../../store/actions/actionTypes';

import './ItemPage.css';


function ItemPage(props) {

    const [itemAmount, setItemAmount] = useState(1);
    const labels = [];
    const itemId = props.location.pathname.split('/').pop();
    const itemData = props.content.filter(item => item.id.toLowerCase() === itemId)[0];
    const imagesData = [];
    const stars = [];

    let price = <span className='ItemPage__price'>{itemData.price + '₴'}</span>;

    imagesData.push({
        original: itemData.image_main,
        thumbnail: itemData.image_main,
    })
    imagesData.push({
        original: itemData.image_secondary,
        thumbnail: itemData.image_secondary,
    });

    if (itemData.old_price) {
        labels.push(<Label key={v4()} type='red' className='ItemPage__label'>{"СКИДКА " + ((1 - itemData.price / itemData.old_price) * 100).toFixed() + '%'}</Label>);
        price = (<React.Fragment>
            <span className='ItemPage__price__discount'>{itemData.price + '₴'}</span>
            <span className='ItemPage__price__before'>{itemData.old_price + '₴'}</span>
        </React.Fragment>)
    }

    if (itemData.labels && itemData.labels.length && itemData.labels.length > 0)
        itemData.labels.forEach(labelName => {
            switch (labelName) {
                case 'new':
                    labels.push(<Label key={v4()} type='blue' className='ItemPage__label'>НОВИНКА</Label>);
                    break;
                case 'popular':
                    labels.push(<Label key={v4()} type='green' className='ItemPage__label'>ХИТ ПРОДАЖ</Label>);
                    break;
                default:
                    break;
            }
        })

    for (let i = 0; i < itemData.stars; i++) {
        stars.push(<img key={v4()} className='ItemPage__star' src={star} alt='star'></img>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={v4()} className='ItemPage__star' src={star_empty} alt='star__empty'></img>)
    }

    return (
        <div className='ItemPage'>
            <div className='ItemPage__carousel'>
                <ImageGallery items={imagesData}
                    showFullscreenButton={false}
                    showPlayButton={false} />
            </div>
            <div className='ItemPage__content'>
                <div className='ItemPage__labels'>
                    {labels}
                </div>
                <div className='ItemPage__itemName'>
                    <h2>{itemData.name}</h2>
                </div>
                <div className='ItemPage__price-wrapper'>
                    {price}
                </div>
                <div className='ItemPage__rating'>
                    {stars}
                    <a className='ItemPage__reviews-link' href={'/'}>
                        <ReactChat className='ItemPage__reviews-link__icon' />
                        <span>Рейтинг и отзывы</span>
                    </a>
                </div>
                <div className='ItemPage__inStockStatus'>
                    <span className='ItemPage__inStock'>В наличии</span>
                </div>
                <div className='ItemPage__order'>
                    <div className='ItemPage__addToCart'>
                        <div className='ItemPage__addToCart__amount'>
                            <Counter defaultValue={itemAmount}
                                onClickIncrease={() => setItemAmount(itemAmount + 1)}
                                onClickDecrease={() => setItemAmount(Math.max(itemAmount - 1, 1))} />
                        </div>
                        <Button className='ItemPage__cartButton' onClick={() => { }}>
                            <ReactCart className='ItemPage__cartIcon' />
                            <span>В корину</span>
                        </Button>
                    </div>
                    <div>
                        <Button className='ItemPage__cartButton-blue' onClick={() => { }}>
                            <span>заказ в один клик</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
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
        onIncreaseItemInCart: (item) => dispatch({
            type: actionTypes.INCRESE_ITEM_IN_CART,
            item,
        }),
        onDecreaseItemInCart: (item) => dispatch({
            type: actionTypes.DECREASE_ITEM_IN_CART,
            item,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)