import React from 'react'

import './Contacts.css';

export default function Contacts(props) {
    return (
        <div className={'Contacts__wrapper'}>
            <div className={'Contacts__phone-number ' + (props.simple && 'Contacts__phone-number-simple')}>
                +38 (093) 055-91-47
            </div>
            <div className={'Contacts__feedback-wrapper ' + (props.simple && 'Contacts__feedback-wrapper-simple')}>
                <a className={'Contacts__get-feedback'} href='/'>
                    Заказать звонок
                </a>
                {/* не получает данные вместе с class из css модуля */}
                {!props.simple && <div style={{display: 'flex'}}>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                </div>}
            </div>
        </div>
    )
}
