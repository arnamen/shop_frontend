import React from 'react'

import './Offer.css'

export default function Offer() {
    return (
        <div className='Offer'>
            <h1>Политика конфиденциальности и оферта</h1>
            <span>Разместите на этой странице "Политику конфиденциальности" и "Договор-оферту", чтобы ваш интернет-магазин соответствовал требованиям Закона "О персональных данных"</span>
            <span>Примеры документов, которые можно скорректировать под себя и разместить на этой странице, Вы можете скачать по ссылкам:</span>
            <ul>
                <li><a href='https://tilda.cc/ru/privacy-generator/'>Политика конфиденциальности</a></li>
                <li><a href='https://dengionline.com/doc/offer_for_services.pdf'>Договор-оферта</a></li>
            </ul>
        </div>
    )
}
