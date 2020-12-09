import React from 'react'
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import Counter from '../Counter/Counter';

import * as actionTypes from '../../store/actions/actionTypes';

import { ReactComponent as ReactCart } from '../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactTrash } from '../../assets/misc/trash.svg';
import { ReactComponent as ReactCheckmark } from '../../assets/misc/checkmark.svg';
import './Cart.css';

function Cart(props) {

    const content = props.cart.map(item => {
        return <tr className='Cart__item' key={v4()}>
            <td>
            <div className='Cart__item__image-wrapper'>
                <img src={item.images[0]} className='Cart__item__image' alt='item_image' />
            </div>
            </td>
            <td><Link to={'/item/' + item.id.toLowerCase()} className='Cart__item-descr'>{item.name}</Link></td>
            <td>
                <div className='Cart__item__unit-price'>{`${item.amount} × ${item.price}₴`}</div>
                <div className='Cart__item__total-price'>{`${(item.amount * item.price).toFixed()}₴`}</div>
            </td>
            <td className='Cart__amount-wrapper'>
                <Counter defaultValue={item.amount}
                onClickDecrease = {() => props.onDecreaseItemInCart(item)}
                onClickIncrease={() => props.onIncreaseItemInCart(item)}/>
            </td>
            <td onClick={() => props.onRemoveFromCart(item)}>
                <ReactTrash className='Cart__trash-image' />
            </td>
        </tr>
    })

    let totalPrice = 0;
    props.cart.forEach(item => {
        totalPrice += item.price * item.amount;
    });

    const proceedForm = <form className='Cart__checkout'>
        <div className='Cart__checkout-total-wrapper'>
            <span className='Cart__checkout-total'>ИТОГО:</span>
            <span className='Cart__checkout-total Cart__checkout-total__price'>{totalPrice + '₴'}</span>
        </div>
        <div className='Cart__checkout-inner'>
            <div className='Cart__promocode-descr'>Промокод или купон на скидку:</div>
            <div className='Cart__promocode-wrapper'>
                <input className='Cart__promocode-input' type='text' />
                <span className='Cart__promocode-submit'>
                    <ReactCheckmark className='Cart__promocode-submit-image' viewBox="0 0 512 512" />
                </span>
            </div>
            <button className='Cart__checkout-button' onClick={(e) => e.preventDefault()}>оформить заказ</button>
            <button className='Cart__checkout-instant-button' onClick={(e) => e.preventDefault()}>Заказ в один клик</button>
        </div>
    </form>;

    return (
        <div className='Cart'>
            {props.cart.length > 0
                ? <React.Fragment>
                    <h1 className='Cart__title'>Корзина</h1>
                    <div className='Cart__content-wrapper'>
                        <table className='Cart__items-wrapper'>
                            <tbody>
                            {content}
                            </tbody>
                        </table>
                        <div className='Cart__form-wrapper'></div>
                        {proceedForm}
                    </div>
                </React.Fragment>
                : <div className='Cart__empty-wrapper'>
                    <ReactCart className='Cart__empty-img' viewBox="0 0 512 512" />
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