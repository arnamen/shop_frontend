import React from 'react'
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import Link from 'next/link';

import Counter from '../Counter/Counter';

import * as actionTypes from '../../store/actions/actionTypes';

import  ReactCart  from '../../public/assets/itemsCards/cart-for-card-item.svg';
import  ReactTrash  from '../../public/assets/misc/trash.svg';
import  ReactCheckmark  from '../../public/assets/misc/checkmark.svg';
import classes from './Cart.module.css';

function Cart(props) {

    const content = props.cart.map(item => {
        return <div className={classes.Cart__item} key={v4()}>
            <div className={classes['Cart__item__image-wrapper']}>
                <img src={item.images[0]} className={classes.Cart__item__image} alt='item_image' />
            </div>
            <div><Link href={'/item/' + item.id.toLowerCase()} className={classes['Cart__item-descr']}>{item.name}</Link></div>
            <div>
                <div className={classes['Cart__item__unit-price']}>{`${item.amount} × ${item.price}₴`}</div>
                <div className={classes['Cart__item__total-price']}>{`${(item.amount * item.price).toFixed()}₴`}</div>
            </div>
            <div className={classes['Cart__amount-wrapper']}>
                <Counter defaultValue={item.amount}
                onClickDecrease = {() => props.onDecreaseItemInCart(item)}
                onClickIncrease={() => props.onIncreaseItemInCart(item)}/>
            </div>
            <div onClick={() => props.onRemoveFromCart(item)}>
                <ReactTrash className={classes['Cart__trash-image']} />
            </div>
        </div>
    })

    let totalPrice = 0;
    props.cart.forEach(item => {
        totalPrice += item.price * item.amount;
    });

    const proceedForm = <form className={classes.Cart__checkout}>
        <div className={classes['Cart__checkout-total-wrapper']}>
            <span className={classes['Cart__checkout-total']}>ИТОГО:</span>
            <span className={classes['Cart__checkout-total'] + ' ' + classes['Cart__checkout-total__price']}>{totalPrice + '₴'}</span>
        </div>
        <div className={classes['Cart__checkout-inner']}>
            <div className={classes['Cart__promocode-descr']}>Промокод или купон на скидку:</div>
            <div className={classes['Cart__promocode-wrapper']}>
                <input className={classes['Cart__promocode-input']} type='text' />
                <span className={classes['Cart__promocode-submit']}>
                    <ReactCheckmark className={classes['Cart__promocode-submit-image']} viewBox="0 0 512 512" />
                </span>
            </div>
            <button className={classes['Cart__checkout-button']} onClick={(e) => e.preventDefault()}>оформить заказ</button>
            <button className={classes['Cart__checkout-instant-button']} onClick={(e) => e.preventDefault()}>Заказ в один клик</button>
        </div>
    </form>;

    return (
        <div className={classes.Cart}>
            {props.cart.length > 0
                ? <React.Fragment>
                    <h1 className={classes.Cart__title}>Корзина</h1>
                    <div className={classes['Cart__content-wrapper']}>
                        <div className={classes['Cart__items-wrapper']}>
                            <div>
                            {content}
                            </div>
                        </div>
                        <div className={classes['Cart__form-wrapper']}></div>
                        {proceedForm}
                    </div>
                </React.Fragment>
                : <div className={classes['Cart__empty-wrapper']}>
                    <ReactCart className={classes['Cart__empty-img']} viewBox="0 0 512 512" />
                    <p>В вашей корзине пока пусто</p>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromCart: (item) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart)