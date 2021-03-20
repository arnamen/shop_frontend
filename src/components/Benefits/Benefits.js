import React from 'react'

import ShoppingCartOut from '../../../public/assets/benefits/shopping-cart-out.svg';
import Hours24 from '../../../public/assets/benefits/24-hours.svg';
import FreeDelivery from '../../../public/assets/benefits/free-delivery.svg';

import classes from './Benefits.module.css';

export default function Benefits() {
    return (
        <div className={classes.benefits_wrapper}>
            <div className={classes['benefits_image-wrapper']}>
                <FreeDelivery className={classes.benefits_image}></FreeDelivery>
            </div>
            <div className={classes['benefits_text-wrapper']}>
                <div className={classes['benefits_image-title']}>бесплатная доставка</div>
                <div className={classes['benefits_image-descr']}>
                    <span>Бесплатная доставка при заказе от 3000грн.</span>
                </div>
            </div>
            <div className={classes['benefits_image-wrapper']}>
                <Hours24 className={classes.benefits_image}></Hours24>
            </div>
            <div className={classes['benefits_text-wrapper']}>
                <div className={classes['benefits_image-title']}>Поддержка 24/7</div>
                <div className={classes['benefits_image-descr']}>
                    <span>На связи с клиентами 24 часа в сутки, 7 дней в неделю</span>
                </div>
            </div>

            <div className={classes['benefits_image-wrapper']}>
                <ShoppingCartOut className={classes.benefits_image}></ShoppingCartOut>
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
