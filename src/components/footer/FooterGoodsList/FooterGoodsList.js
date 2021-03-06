import React from 'react'

import classes from './FooterGoodsList.module.css';

let contentHref = '/collection';

export default function FooterGoodsList() {
    return (
        <div className={classes.FooterGoodsList__wrapper}>
            <ul>
                <li>
                    <span className={classes.FooterGoodsList__title}>Каталог товаров</span>
                </li>
                <li>
                    <a href={contentHref + '?categories=phones'}>Телефоны</a>
                </li>
                <li>
                    <a href={contentHref}>Фото и видео</a>
                </li>
                <li>
                    <a href={contentHref}>Ноутбуки, планшеты, компьютеры</a>
                </li>
                <li>
                    <a href={contentHref}>Наушники</a>
                </li>                
                <li>
                    <a href={contentHref}>Аксессуары</a>
                </li>
                <li>
                    <a href={contentHref}>Игрушки</a>
                </li>
                <li>
                    <a href={contentHref}>Разное</a>
                </li>
            </ul>
        </div>
    )
}
