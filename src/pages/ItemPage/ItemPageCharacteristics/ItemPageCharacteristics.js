import React from 'react';
import { v4 } from 'uuid';

import Button from '../../../components/UI/Button/Button';
import Logo from '../../../components/Logo/Logo';

import './ItemPageCharacteristics.css';

import { ReactComponent as ReactCart } from '../../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCartFull } from '../../../assets/account/cart.svg';
import { ReactComponent as ReactCompare } from '../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../assets/account/heart.svg';

import { translate } from '../../../utils/translate';

const ItemPageCharacteristics = (props) => {
    const itemData = props.itemData;

    let compareParams = {};

    //получить из предмета тега и сформировать из них таблицу
    Object.keys(itemData.tags).forEach(tag => {
        if (!compareParams[tag]) compareParams[tag] = [];
    })
    const tableBody = Object.keys(compareParams).map(tag => {
        return <tr key={v4()}>
            <td><span className='ItemPageCharacteristics__tag'>{translate[tag] || tag}</span></td>
            <td key={v4()}><span>{(itemData.tags[tag] || '-')}</span></td>

        </tr>
    })


    const compared = props.compared || false;
    const favored = props.favored || false;
    const inCart = props.inCart || false;

    const CartIcon = !inCart
        ? <ReactCart className={`ItemsCard_action-icon`} />
        : <ReactCartFull className={`ItemsCard_action-icon ItemsCard_action-icon_cart`} />

    return (
        <div className='ItemPageCharacteristics-wrapper' style={{display: 'flex'}}>
            <div className='ItemPageCharacteristics__info'>
                <table className='ItemPageCharacteristics__info__table'>
                    <thead>
                        <tr>
                            <th>
                                <span className='ItemPageCharacteristics__info-header'> {' ' + props.itemData.name}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
            <div className='ItemPageCharacteristics__carriage'>
                <div className='ItemPageCharacteristics__carriage__name'>
                    <div className='ItemPageCharacteristics__carriage__name__image'>
                        <img src={itemData.images[0]} alt='item' />
                    </div>
                    <div className='ItemPageCharacteristics__carriage__name-text'>{itemData.name}</div>
                </div>
                <div className='ItemPageGeneral__inStockStatus'>
                    {itemData.inStock
                        ? <span className='ItemPageGeneral__inStock'>В наличии</span>
                        : <span className='ItemPageGeneral__notInStock'>Нет в наличии</span>}
                </div>
                <div className='ItemPageCharacteristics__carriage__buy'>
                    <div className='ItemPageCharacteristics__carriage__buy-top'>
                        <div className='ItemPageCharacteristics__carriage__buy-status__price'>
                            <div>{itemData.price}<span>₴</span></div>
                            {itemData.old_price && <div className='ItemPageCharacteristics__carriage__buy-status__old-price'>{itemData.old_price}<span>₴</span></div>}
                        </div>
                        <div className='ItemPageCharacteristics__carriage__actions'>
                            <div className='ItemPageCharacteristics__carriage__action-wrapper' onClick={() => {
                                inCart
                                    ? props.onRemoveFromCart({ ...props.itemData, amount: 1 })
                                    : props.onAddToCart({ ...props.itemData, amount: 1 });
                            }}>
                                {CartIcon}
                            </div>
                            <div className='ItemPageCharacteristics__carriage__action-wrapper'>
                                <ReactHeart className={`ItemsCard_action-icon ItemsCard_action-icon_heart ${favored && 'ItemsCard_action-icon-active-red'}`} viewBox="0 0 512 512"
                                    onClick={e => {
                                        favored
                                            ? props.onRemoveFromFavourites(props.itemData)
                                            : props.onAddToFavorites(props.itemData)
                                    }} />
                            </div>
                            <div className='ItemPageCharacteristics__carriage__action-wrapper'>
                                <ReactCompare className={`ItemsCard_action-icon ItemsCard_action-icon_compare ${compared && 'ItemsCard_action-icon-active'}`}
                                    onClick={e => {
                                        compared
                                            ? props.onRemoveFromCompare(props.itemData)
                                            : props.onAddToCompare(props.itemData)
                                    }} />
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => 0} className='ItemPageCharacteristics__carriage__buy__button'>
                        <span>
                            <ReactCart className={`ItemsCard_action-icon ItemPageCharacteristics_action-icon_cart`} />
                        </span>
                        <span>Купить</span>
                    </Button>
                </div>
                <div className='ItemPageCharacteristics__carriage__seller'>
                    <div>
                        <span>Продавец:</span>
                        <span className='ItemPageCharacteristics__carriage__seller-name'>DrawerShop</span>
                    </div>
                    <div className='ItemPageCharacteristics__carriage__seller-logo'>
                            <Logo simple/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPageCharacteristics;