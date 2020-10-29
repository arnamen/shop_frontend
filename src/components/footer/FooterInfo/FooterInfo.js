import React from 'react'

import './FooterInfo.css';

export default function FooterInfo() {
    return (
        <div className='FooterInfo__wrapper'>
            <ul>
                <li>
                    <span className='FooterGoodsList__title'>Информация</span>
                </li>
                <li>
                    <a href='/'>Часто задаваемые вопросы</a>
                </li>
                <li>
                    <a href='/'>Политика конфиденциальности и оферта</a>
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
                    <a href='/'>Обратная связь</a>
                </li>
                <li>
                    <a href='/'>Доставка</a>
                </li>
                <li>
                    <a href='/'>Оплата</a>
                </li>
                <li>
                    <a href='/'>Контакты</a>
                </li>
            </ul>
        </div>
    )
}
