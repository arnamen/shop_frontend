import React from 'react'

import classesPopup from './../../UI/Popup/PopupSimple/PopupSimple.module.css';
import PopupSimple from './../../UI/Popup/PopupSimple/PopupSimple';

import classesContacts from './Contacts.module.css';
import {ReactComponent as ReactEnvelope} from '../../../../public/assets/footer/envelope.svg';
import {ReactComponent as ReactPlaceLocalizer} from '../../../../public/assets/footer/place-localizer.svg';
import {ReactComponent as ReactClock} from '../../../../public/assets/footer/clock.svg';
import {ReactComponent as ReactVK} from '../../../../public/assets/social/009-vk.svg';
import {ReactComponent as ReactMessenger} from '../../../../public/assets/social/044-messenger.svg';
import {ReactComponent as ReactGooglePlus} from '../../../../public/assets/social/035-google-plus.svg';
import {ReactComponent as ReactTwitter} from '../../../../public/assets/social/013-twitter-1.svg';
import {ReactComponent as ReactWhatsApp} from '../../../../public/assets/social/007-whatsapp.svg';
import {ReactComponent as ReactSkype} from '../../../../public/assets/social/022-skype.svg';

const classes = {...classesPopup, ...classesContacts}

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
                {!props.simple && <div className={classes.Contacts__dots}>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                    <PopupSimple>
                    <ul>
                <li>
                    <ReactEnvelope className={classes.Contacts__icon}/>
                    <a href='mailto:support@drawershop.com'>support@drawershop.com</a>
                </li>
                <li>
                <ReactPlaceLocalizer className={classes.Contacts__icon}/>
                    <span>02000, Украина, Киев <br/> ул. Тарасовская, 18</span>
                </li>
                <li>
                <ReactClock className={classes.Contacts__icon}/>
                    <span>7 дней в неделю с 10 до 18 часов</span>
                </li>
                <li className={classes['Contacts__social-wrapper']}>
                    <a href='http://google.com'><ReactGooglePlus className={classes.Contacts__icon}/></a>
                    <a href='http://vk.com'><ReactVK className={classes.Contacts__icon}/></a>
                    <a href='http://messenger.com'><ReactMessenger className={classes.Contacts__icon}/></a>
                    <a href='http://twitter.com'><ReactTwitter className={classes.Contacts__icon}/></a>
                    <a href='http://whatsapp.com'><ReactWhatsApp className={classes.Contacts__icon}/></a>
                    <a href='http://skype.com'><ReactSkype className={classes.Contacts__icon}/></a>
                </li>
            </ul>
                    </PopupSimple>
                </div>}
            </div>
        </div>
    )
}
