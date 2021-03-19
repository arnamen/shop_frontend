import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { v4 } from 'uuid';
import Link from 'next/link';

import Label from '../../../components/UI/Label/label';
import Counter from '../../../components/Counter/Counter';
import Button from '../../../components/UI/Button/Button';
import DeliveryCard from '../../../components/UI/Cards/DeliveryCard/DeliveryCard';

import Star from '../../../../public/assets/rating/stars/star.svg';
import starEmpty from '../../../../public/assets/rating/stars/star_empty.svg';

import  ReactChat  from '../../../../public/assets/misc/chat.svg';
import  ReactCart  from '../../../../public/assets/itemsCards/cart-for-card-item.svg';
import  ReactCompare  from '../../../../public/assets/account/compare.svg';
import  ReactHeart  from '../../../../public/assets/account/heart.svg';
import  ReactPiggybank  from '../../../../public/assets/misc/piggy-bank.svg';

import { translate } from '../../../utils/translate';

import classes from './ItemPageGeneral.module.css';

export default function ItemPageGeneral(props) {

    const [itemAmount, setItemAmount] = useState(1);
    const labels = [];
    const itemData = props.itemData;
    const imagesData = [];
    const stars = [];
    const compared = props.compared;
    const favored = props.favored;
    let price = <span className={classes.ItemPageGeneral__price}>{itemData.price + '₴'}</span>;

    imagesData.push({
        original: itemData.images[0],
        thumbnail: itemData.images[0],
    })
    imagesData.push({
        original: itemData.images[1],
        thumbnail: itemData.images[1],
    });

    if (itemData.old_price) {
        labels.push(<Label key={v4()} type='red' className={classes['ItemPageGeneral__label']}>{"СКИДКА " + ((1 - itemData.price / itemData.old_price) * 100).toFixed() + '%'}</Label>);
        price = (<React.Fragment>
            <span className={classes.ItemPageGeneral__price__discount}>{itemData.price + '₴'}</span>
            <span className={classes.ItemPageGeneral__price__before}>{itemData.old_price + '₴'}</span>
        </React.Fragment>)
    }

    if (itemData.labels && itemData.labels.length && itemData.labels.length > 0)
        itemData.labels.forEach(labelName => {
            switch (labelName) {
                case 'new':
                    labels.push(<Label key={v4()} type='blue' className={classes.ItemPageGeneral__label}>НОВИНКА</Label>);
                    break;
                case 'popular':
                    labels.push(<Label key={v4()} type='green' className={classes.ItemPageGeneral__label}>ХИТ ПРОДАЖ</Label>);
                    break;
                default:
                    break;
            }
        })

    for (let i = 0; i < itemData.stars; i++) {
        stars.push(<Star key={v4()} className={classes.ItemPageGeneral__star}></Star>)
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<StarEmpty key={v4()} className={classes.ItemPageGeneral__star}></StarEmpty>)
    }

    return (
        <div className={classes.ItemPageGeneral}>
            <div className={classes.ItemPageGeneral__information}>
            <div className={classes['ItemPageGeneral__information-mobile']}>
                <div className={classes.ItemPageGeneral__itemName}>
                    <h2>{itemData.name}</h2>
                </div>
                <div className={classes.ItemPageGeneral__labels}>
                    {labels}
                </div>
            </div>
                <div className={classes.ItemPageGeneral__carousel}>
                    <ImageGallery items={imagesData}
                        showFullscreenButton={false}
                        showPlayButton={false} />
                </div>
                <div className={classes.ItemPageGeneral__description}>
                    {itemData.description === 'useTags'
                        ? <ul>
                            {Object.keys(itemData.tags).map(tag => <li key={v4()}>{`${translate[tag] || tag}: ${itemData.tags[tag]}`}</li>)}
                        </ul>
                        : itemData.description}
                </div>
            </div>
            <div className={classes.ItemPageGeneral__content}>
                <div className={classes.ItemPageGeneral__labels}>
                    {labels}
                </div>
                <div className={classes.ItemPageGeneral__itemName}>
                    <h2>{itemData.name}</h2>
                </div>
                <div className={classes['ItemPageGeneral__price-wrapper']}>
                    {price}
                </div>
                <div className={classes.ItemPageGeneral__rating}>
                    {stars}
                    <Link href={'/'}>
                        <a className={classes['ItemPageGeneral__reviews-link']}>
                        <ReactChat className={classes['ItemPageGeneral__reviews-link__icon']} />
                        <span>Рейтинг и отзывы</span>
                        </a>
                    </Link>
                </div>
                <div className={classes.ItemPageGeneral__inStockStatus}>
                    {itemData.inStock
                        ? <span className={classes.ItemPageGeneral__inStock}>В наличии</span>
                        : <span className={classes.ItemPageGeneral__notInStock}>Нет в наличии</span>}
                </div>
                <div className={classes.ItemPageGeneral__order}>
                    <div className={classes.ItemPageGeneral__addToCart}>
                        <div className={classes.ItemPageGeneral__addToCart__amount}>
                            <Counter defaultValue={itemAmount}
                                onClickIncrease={() => setItemAmount(itemAmount + 1)}
                                onClickDecrease={() => setItemAmount(Math.max(itemAmount - 1, 1))} />
                        </div>
                        <Button className={classes.ItemPageGeneral__cartButton} onClick={() => {
                                props.inCart
                                    ? props.onRemoveFromCart({ ...props.itemData, amount: 1 })
                                    : props.onAddToCart({ ...props.itemData, amount: 1 });
                            }}>
                            <ReactCart className={classes.ItemPageGeneral__cartIcon} />
                            {props.inCart
                            ? <span>Убрать из корзины</span>
                            : <span>В корину</span>}
                        </Button>
                    </div>
                    <div>
                        <Button className={classes['ItemPageGeneral__cartButton-blue']} onClick={() => alert("Ordered! (test mode)")}>
                            <span>заказ в один клик</span>
                        </Button>
                    </div>
                </div>
                <div className={classes.ItemPageGeneral__actions}>
                    <div className={classes['ItemPageGeneral__action-wrapper'] + ' ' + classes['ItemPageGeneral__action-wrapper__piggy']}>
                        <ReactPiggybank className={classes[`ItemPageGeneral__action-icon`]}
                            onClick={e => { }} />
                        <span>2999 бонусов</span>
                    </div>
                    <div className={classes['ItemPageGeneral__action-wrapper']}
                        onClick={e => {
                            favored
                                ? props.onRemoveFromFavourites(itemData)
                                : props.onAddToFavorites(itemData)
                        }} >
                        <ReactHeart className={`${classes['ItemPageGeneral__action-icon']} ${classes['ItemPageGeneral__action-icon_heart']} ${favored && ' ItemPageGeneral__action-icon-active-red'}`} viewBox="0 0 512 512" />
                        <span className={favored ? classes['ItemPageGeneral__action-active-red'] : ''}>{favored ? 'В избранном' : 'В избранное'}</span>
                    </div>
                    <div className={classes['ItemPageGeneral__action-wrapper']}
                        onClick={e => {
                            compared
                                ? props.onRemoveFromCompare(itemData)
                                : props.onAddToCompare(itemData)
                        }} >
                        <ReactCompare className={`${classes['ItemPageGeneral__action-icon']} ${classes['ItemPageGeneral__action-icon_compare']} ${compared && classes['ItemPageGeneral__action-icon-active']}`} />
                        <span className={compared ? classes['ItemPageGeneral__action-active'] : ''}>{compared ? 'В стравнении' : 'Сравнить'}</span>
                    </div>
                </div>
                <DeliveryCard itemData={itemData} />
            </div>
        </div>
    )
}