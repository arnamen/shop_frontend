import React from 'react'

import classes from './FooterInfo.module.css';

let contentHref = '/page/';

export default function FooterInfo() {
    return (
        <div className={classes.FooterInfo__wrapper}>
            <ul>
                <li>
                    <span className={classes.FooterGoodsList__title}>Информация</span>
                </li>
                <li>
                    <a href={'/'}>Часто задаваемые вопросы</a>
                </li>
                <li>
                    <a href={contentHref + 'offer'}>Политика конфиденциальности и оферта</a>
                </li>
                <li>
                    <a href='/'>Пользовательское соглашение</a>
                </li>
                <li>
                    <a href='/'>Условия обмена и возврата</a>
                </li>                
                <li>
                    <a href='/'>Статьи</a>
                </li>
                <li>
                    <a href={contentHref + 'feedback'}>Обратная связь</a>
                </li>
                <li>
                    <a href={contentHref + 'delivery'}>Доставка</a>
                </li>
                <li>
                    <a href={contentHref + 'payment'}>Оплата</a>
                </li>
                <li>
                    <a href={contentHref + 'contacts'}>Контакты</a>
                </li>
            </ul>
        </div>
    )
}
