import React from 'react'

import shopping_cart_out from '../../../public/assets/benefits/shopping-cart-out.svg';
import hours24 from '../../../public/assets/benefits/24-hours.svg';
import free_delivery from '../../../public/assets/benefits/free-delivery.svg';

import classes from './Benefits.module.css';

export default function Benefits() {
    return (
        <div className={classes.benefits_wrapper}>
            <div className={classes['benefits_image-wrapper']}>
                <img src={free_delivery} alt='free_delivery' className={classes.benefits_image}></img>
            </div>
            <div className={classes['benefits_text-wrapper']}>
                <div className={classes['benefits_image-title']}>бесплатная доставка</div>
                <div className={classes['benefits_image-descr']}>
                    <span>Бесплатная доставка при заказе от 3000грн.</span>
                </div>
            </div>
            <div className={classes['benefits_image-wrapper']}>
                <img src={hours24} alt='hours24' className={classes.benefits_image}></img>
            </div>
            <div className={classes['benefits_text-wrapper']}>
                <div className={classes['benefits_image-title']}>Поддержка 24/7</div>
                <div className={classes['benefits_image-descr']}>
                    <span>На связи с клиентами 24 часа в сутки, 7 дней в неделю</span>
                </div>
            </div>

            <div className={classes['benefits_image-wrapper']}>
                <img src={shopping_cart_out} alt='shopping_cart_out' className={classes.benefits_image}></img>
            </div>
            <div className={classes['benefits_text-wrapper']}>
                <div className={classes['benefits_image-title']}>20 дней на возврат</div>
                <div className={classes['benefits_image-descr']}>
                    <span>Простой возврат товара в течение 20 дней с даты покупки</span>
                </div>
            </div>
        </div>
    )
}
