import React from 'react'

import Link from 'next/link';

import classes from './FooterInfo.module.css';

let contentHref = '/';

export default function FooterInfo() {
    return (
        <div className={classes.FooterInfo__wrapper}>
            <ul>
                <li>
                    <span className={classes.FooterGoodsList__title}>Информация</span>
                </li>
                <li>
                    <Link href={'/'}><a>Часто задаваемые вопросы</a></Link>
                </li>
                <li>
                    <Link href={contentHref + 'offer'}><a>Политика конфиденциальности и оферта</a></Link>
                </li>
                <li>
                    <Link href='/'><a>Пользовательское соглашение</a></Link>
                </li>
                <li>
                    <Link href='/'><a>Условия обмена и возврата</a></Link>
                </li>                
                <li>
                    <Link href='/'><a>Статьи</a></Link>
                </li>
                <li>
                    <Link href={contentHref + 'feedback'}><a>Обратная связь</a></Link>
                </li>
                <li>
                    <Link href={contentHref + 'delivery'}><a>Доставка</a></Link>
                </li>
                <li>
                    <Link href={contentHref + 'payment'}><a>Оплата</a></Link>
                </li>
                <li>
                    <Link href={contentHref + 'contacts'}><a>Контакты</a></Link>
                </li>
            </ul>
        </div>
    )
}
