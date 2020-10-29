import React from 'react'

import './FooterGoodsList.css';

export default function FooterGoodsList() {
    return (
        <div className='FooterGoodsList__wrapper'>
            <ul>
                <li>
                    <span className='FooterGoodsList__title'>Каталог товаров</span>
                </li>
                <li>
                    <a href='/'>Телефоны</a>
                </li>
                <li>
                    <a href='/'>Фото и видео</a>
                </li>
                <li>
                    <a href='/'>Ноутбуки, планшеты, компьютеры</a>
                </li>
                <li>
                    <a href='/'>Наушники</a>
                </li>                
                <li>
                    <a href='/'>Аксессуары</a>
                </li>
                <li>
                    <a href='/'>Игрушки</a>
                </li>
                <li>
                    <a href='/'>Разное</a>
                </li>
            </ul>
        </div>
    )
}
