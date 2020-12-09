import React from 'react'

import './FooterGoodsList.css';

let contentHref = '/page/collection';

export default function FooterGoodsList() {
    return (
        <div className='FooterGoodsList__wrapper'>
            <ul>
                <li>
                    <span className='FooterGoodsList__title'>Каталог товаров</span>
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
