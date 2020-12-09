import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { v4 } from 'uuid';
import {Link} from 'react-router-dom';

import Label from '../../../components/UI/Label/label';
import Counter from '../../../components/Counter/Counter';
import Button from '../../../components/UI/Button/Button';
import DeliveryCard from '../../../components/UI/Cards/DeliveryCard/DeliveryCard';

import star from '../../../assets/rating/stars/star.svg';
import star_empty from '../../../assets/rating/stars/star_empty.svg';

import { ReactComponent as ReactChat } from '../../../assets/misc/chat.svg';
import { ReactComponent as ReactCart } from '../../../assets/itemsCards/cart-for-card-item.svg';
import { ReactComponent as ReactCompare } from '../../../assets/account/compare.svg';
import { ReactComponent as ReactHeart } from '../../../assets/account/heart.svg';
import { ReactComponent as ReactPiggybank } from '../../../assets/misc/piggy-bank.svg';

import {translate} from '../../../utils/translate';

import './ItemPageGeneral.css';

export default function ItemPageGeneral( props ) {

    const [itemAmount, setItemAmount] = useState(1);
    const labels = [];
    const itemData = props.itemData;
    const imagesData = [];
    const stars = [];
    const compared = props.compared;
    const favored = props.favored;
    let price = <span className='ItemPageGeneral__price'>{itemData.price + '₴'}</span>;

    imagesData.push({
        original: itemData.images[0],
        thumbnail: itemData.images[0],
    })
    imagesData.push({
        original: itemData.images[1],
        thumbnail: itemData.images[1],
    });

    if (itemData.old_price) {
        labels.push(<Label key={v4()} type='red' className='ItemPageGeneral__label'>{"СКИДКА " + ((1 - itemData.price / itemData.old_price) * 100).toFixed() + '%'}</Label>);
        price = (<React.Fragment>
            <span className='ItemPageGeneral__price__discount'>{itemData.price + '₴'}</span>
            <span className='ItemPageGeneral__price__before'>{itemData.old_price + '₴'}</span>
        </React.Fragment>)
    }

    if (itemData.labels && itemData.labels.length && itemData.labels.length > 0)
        itemData.labels.forEach(labelName => {
            switch (labelName) {
                case 'new':
                    labels.push(<Label key={v4()} type='blue' className='ItemPageGeneral__label'>НОВИНКА</Label>);
                    break;
                case 'popular':
                    labels.push(<Label key={v4()} type='green' className='ItemPageGeneral__label'>ХИТ ПРОДАЖ</Label>);
                    break;
                default:
                    break;
            }
        })

    for (let i = 0; i < itemData.stars; i++) {
        stars.push(<img key={v4()} className='ItemPageGeneral__star' src={star} alt='star'></img>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={v4()} className='ItemPageGeneral__star' src={star_empty} alt='star__empty'></img>)
    }

    return (
        <div className='ItemPageGeneral'>
            <div className='ItemPageGeneral__information'>
                <div className='ItemPageGeneral__carousel'>
                    <ImageGallery items={imagesData}
                        showFullscreenButton={false}
                        showPlayButton={false} />
                </div>
                <div className='ItemPageGeneral__description'>
                    {itemData.description === 'useTags'
                        ? <ul>
                            {Object.keys(itemData.tags).map(tag => <li key={v4()}>{`${translate[tag] || tag}: ${itemData.tags[tag]}`}</li>)}
                        </ul>
                        : itemData.description}
                </div>
            </div>
            <div className='ItemPageGeneral__content'>
                <div className='ItemPageGeneral__labels'>
                    {labels}
                </div>
                <div className='ItemPageGeneral__itemName'>
                    <h2>{itemData.name}</h2>
                </div>
                <div className='ItemPageGeneral__price-wrapper'>
                    {price}
                </div>
                <div className='ItemPageGeneral__rating'>
                    {stars}
                    <Link className='ItemPageGeneral__reviews-link' to={'/'}>
                        <ReactChat className='ItemPageGeneral__reviews-link__icon' />
                        <span>Рейтинг и отзывы</span>
                    </Link>
                </div>
                <div className='ItemPageGeneral__inStockStatus'>
                    {itemData.inStock 
                    ? <span className='ItemPageGeneral__inStock'>В наличии</span>
                    : <span className='ItemPageGeneral__notInStock'>Нет в наличии</span>}
                </div>
                <div className='ItemPageGeneral__order'>
                    <div className='ItemPageGeneral__addToCart'>
                        <div className='ItemPageGeneral__addToCart__amount'>
                            <Counter defaultValue={itemAmount}
                                onClickIncrease={() => setItemAmount(itemAmount + 1)}
                                onClickDecrease={() => setItemAmount(Math.max(itemAmount - 1, 1))} />
                        </div>
                        <Button className='ItemPageGeneral__cartButton' onClick={() => { }}>
                            <ReactCart className='ItemPageGeneral__cartIcon' />
                            <span>В корину</span>
                        </Button>
                    </div>
                    <div>
                        <Button className='ItemPageGeneral__cartButton-blue' onClick={() => { }}>
                            <span>заказ в один клик</span>
                        </Button>
                    </div>
                </div>
                <div className='ItemPageGeneral__actions'>
                    <div className='ItemPageGeneral__action-wrapper ItemPageGeneral__action-wrapper__piggy'>
                        <ReactPiggybank className={`ItemPageGeneral__action-icon`}
                            onClick={e => { }} />
                        <span>2999 бонусов</span>
                    </div>
                    <div className='ItemPageGeneral__action-wrapper'
                        onClick={e => {
                            favored
                                ? props.onRemoveFromFavourites(itemData)
                                : props.onAddToFavorites(itemData)
                        }} >
                        <ReactHeart className={`ItemPageGeneral__action-icon ItemPageGeneral__action-icon_heart ${favored && 'ItemPageGeneral__action-icon-active-red'}`} viewBox="0 0 512 512" />
                        <span className={favored ? 'ItemPageGeneral__action-active-red' : ''}>{favored ? 'В избранном' : 'В избранное'}</span>
                    </div>
                    <div className='ItemPageGeneral__action-wrapper'
                        onClick={e => {
                            compared
                                ? props.onRemoveFromCompare(itemData)
                                : props.onAddToCompare(itemData)
                        }} >
                        <ReactCompare className={`ItemPageGeneral__action-icon ItemPageGeneral__action-icon_compare ${compared && 'ItemPageGeneral__action-icon-active'}`} />
                        <span className={compared ? 'ItemPageGeneral__action-active' : ''}>{compared ? 'В стравнении' : 'Сравнить'}</span>
                    </div>
                </div>
                <DeliveryCard itemData={itemData} />
            </div>
        </div>
    )
}