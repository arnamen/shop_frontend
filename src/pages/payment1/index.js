import React from 'react'

import classes from './Payment.module.css';

export default function Payment() {
    return (
        <div className={classes.Payment}>
            <h1>Оплата</h1>
            <span>Разместите на этой странице информацию с описанием способов оплаты, которые использует ваш интернет-магазин.</span>
            <span><strong>Например:</strong></span>
            <span>Вы можете оплатить заказ:</span>
            <ul>
                <li>Наличными курьеру или в пункте выдачи при получении заказа</li>
                <li>Банковской картой Visa, Mastercard через сайт при оформлении заказа</li>
                <li>Наложенным платежом при заказе с доставкой Новой почтой</li>
            </ul>
        </div>
    )
}
