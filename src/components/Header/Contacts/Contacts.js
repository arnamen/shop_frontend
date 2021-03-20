import React from 'react'

import classesPopup from './../../UI/Popup/PopupSimple/PopupSimple.module.css';
import PopupSimple from './../../UI/Popup/PopupSimple/PopupSimple';

import classesContacts from './Contacts.module.css';
import ReactEnvelope from '../../../../public/assets/footer/envelope.svg';
import ReactPlaceLocalizer from '../../../../public/assets/footer/place-localizer.svg';
import ReactClock from '../../../../public/assets/footer/clock.svg';
import ReactVK from '../../../../public/assets/social/009-vk.svg';
import ReactMessenger from '../../../../public/assets/social/044-messenger.svg';
import ReactGooglePlus from '../../../../public/assets/social/035-google-plus.svg';
import ReactTwitter from '../../../../public/assets/social/013-twitter-1.svg';
import ReactWhatsApp from '../../../../public/assets/social/007-whatsapp.svg';
import ReactSkype from '../../../../public/assets/social/022-skype.svg';

const classes = {...classesPopup, ...classesContacts}

export default function Contacts(props) {
    return (
        <div className={classes['Contacts__wrapper']}>
            <div className={`${classes['Contacts__phone-number']} ${(props.simple && classes['Contacts__phone-number-simple'])}`}>
                +38 (093) 055-91-47
            </div>
            <div className={`${classes['Contacts__feedback-wrapper']} ${(props.simple && classes['Contacts__feedback-wrapper-simple'])}`}>
                <button className={classes['Contacts__get-feedback']} href='/' onClick={(e) => e.preventDefault()}>
                    Заказать звонок
                </button>
                {!props.simple && <div className={classes.Contacts__dots}>
                    <div className={classes['circle']}></div>
                    <div className={classes['circle']}></div>
                    <div className={classes['circle']}></div>
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
