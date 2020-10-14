import React from 'react'

import classes from './Contacts.module.css';

export default function Contacts() {
    return (
        <div className={classes.Contacts__wrapper}>
            <div className={classes['Contacts__phone-number']}>
                +38 (093) 055-91-47
            </div>
            <div className={classes['Contacts__feedback-wrapper']}>
                <a className={classes['Contacts__get-feedback']} href='/'>
                    Заказать звонок
                </a>
                {/* не получает данные вместе с class из css модуля */}
                <div style={{display: 'flex'}}>
                    <div className={classes.circle}></div>
                    <div className={classes.circle}></div>
                    <div className={classes.circle}></div>
                </div>
            </div>
        </div>
    )
}
