import React from 'react';
import { v4 } from 'uuid';

import Button from '../../../components/UI/Button/Button';
import Logo from '../../../components/Logo/Logo';

import classesCharacteristics from './ItemPageCharacteristics.module.css';
import classesGeneral from '../ItemPageGeneral/ItemPageGeneral.module.css';

import  ReactCart  from '../../../../public/assets/itemsCards/cart-for-card-item.svg';
import  ReactCartFull  from '../../../../public/assets/account/cart.svg';
import  ReactCompare  from '../../../../public/assets/account/compare.svg';
import  ReactHeart  from '../../../../public/assets/account/heart.svg';

import { translate } from '../../../utils/translate';

const classes = {...classesGeneral, ...classesCharacteristics};

const ItemPageCharacteristics = (props) => {
    const itemData = props.itemData;

    let compareParams = {};

    //получить из предмета тега и сформировать из них таблицу
    Object.keys(itemData.tags).forEach(tag => {
        if (!compareParams[tag]) compareParams[tag] = [];
    })
    const tableBody = Object.keys(compareParams).map(tag => {
        return <tr key={v4()}>
            <td><span className={classes.ItemPageCharacteristics__tag}>{translate[tag] || tag}</span></td>
            <td key={v4()}><span>{(itemData.tags[tag] || '-')}</span></td>

        </tr>
    })


    const compared = props.compared || false;
    const favored = props.favored || false;
    const inCart = props.inCart || false;

    const CartIcon = !inCart
        ? <ReactCart className={classes[`ItemPageCharacteristics_action-icon`]} viewBox="0 0 512 512"/>
        : <ReactCartFull className={`${classes[`ItemPageCharacteristics_action-icon`]} ${classes[`ItemPageCharacteristics_action-icon-active`]}`} viewBox="0 0 512 512"/>

    return (
        <div className={classes['ItemPageCharacteristics-wrapper']} style={{display: 'flex'}}>
            <div className={classes.ItemPageCharacteristics__info}>
                <table className={classes.ItemPageCharacteristics__info__table}>
                    <thead>
                        <tr>
                            <th>
                                <span className={classes['ItemPageCharacteristics__info-header']}> {' ' + props.itemData.name}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
            <div className={classes.ItemPageCharacteristics__carriage}>
                <div className={classes.ItemPageCharacteristics__carriage__name}>
                    <div className={classes.ItemPageCharacteristics__carriage__name__image}>
                        <img src={itemData.images[0]} alt='item' />
                    </div>
                    <div className={classes['ItemPageCharacteristics__carriage__name-text']}>{itemData.name}</div>
                </div>
                <div className={classes.ItemPageGeneral__inStockStatus}>
                    {itemData.inStock
                        ? <span className={classes.ItemPageGeneral__inStock}>В наличии</span>
                        : <span className={classes.ItemPageGeneral__notInStock}>Нет в наличии</span>}
                </div>
                <div className={classes.ItemPageCharacteristics__carriage__buy}>
                    <div className={classes['ItemPageCharacteristics__carriage__buy-top']}>
                        <div className={classes['ItemPageCharacteristics__carriage__buy-status__price']}>
                            <div>{itemData.price}<span>₴</span></div>
                            {itemData.old_price && <div className={classes['ItemPageCharacteristics__carriage__buy-status__old-price']}>{itemData.old_price}<span>₴</span></div>}
                        </div>
                        <div className={classes.ItemPageCharacteristics__carriage__actions}>
                            <div className={classes['ItemPageCharacteristics__carriage__action-wrapper']} onClick={() => {
                                inCart
                                    ? props.onRemoveFromCart({ ...props.itemData, amount: 1 })
                                    : props.onAddToCart({ ...props.itemData, amount: 1 });
                            }}>
                                {CartIcon}
                            </div>
                            <div className={classes['ItemPageCharacteristics__carriage__action-wrapper']}>
                                <ReactHeart className={`${classes['ItemPageCharacteristics_action-icon']} ${classes['ItemPageCharacteristics_action-icon_heart']} ${favored && classes['ItemPageCharacteristics_action-icon-active-red']}`} viewBox="0 0 512 512"
                                    onClick={e => {
                                        favored
                                            ? props.onRemoveFromFavourites(props.itemData)
                                            : props.onAddToFavorites(props.itemData)
                                    }} />
                            </div>
                            <div className={classes['ItemPageCharacteristics__carriage__action-wrapper']}>
                                <ReactCompare className={`${classes['ItemPageCharacteristics_action-icon']} ${classes['ItemPageCharacteristics_action-icon_compare']} ${compared && classes['ItemPageCharacteristics_action-icon-active']}`}
                                    onClick={e => {
                                        compared
                                            ? props.onRemoveFromCompare(props.itemData)
                                            : props.onAddToCompare(props.itemData)
                                    }} />
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => alert("ordered! (test mode)")} className={classes.ItemPageCharacteristics__carriage__buy__button}>
                        <span>
                            <ReactCart className={`${classes['ItemPageCharacteristics_action-icon']} ${classes['ItemPageCharacteristics_action-icon_cart']}`} />
                        </span>
                        <span>Купить</span>
                    </Button>
                </div>
                <div className={classes.ItemPageCharacteristics__carriage__seller}>
                    <div>
                        <span>Продавец:</span>
                        <span className={classes['ItemPageCharacteristics__carriage__seller-name']}>DrawerShop</span>
                    </div>
                    <div className={classes['ItemPageCharacteristics__carriage__seller-logo']}>
                            <Logo simple/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPageCharacteristics;
