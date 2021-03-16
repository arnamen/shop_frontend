import React from 'react'

import Logo from '../../Logo/Logo';
import Contacts from '../../Header/Contacts/Contacts';

import classes from './FooterContacts.module.css';

import ReactEnvelope from '../../../../public/assets/footer/envelope.svg';
import ReactPlaceLocalizer from '../../../../public/assets/footer/place-localizer.svg';
import ReactClock from '../../../../public/assets/footer/clock.svg';
import ReactBusinessCard from '../../../../public/assets/footer/business-card.svg';
//
import ReactVK from '../../../../public/assets/social/009-vk.svg';
import ReactMessenger from '../../../../public/assets/social/044-messenger.svg';
import ReactGooglePlus from '../../../../public/assets/social/035-google-plus.svg';
import ReactTwitter from '../../../../public/assets/social/013-twitter-1.svg';
import ReactWhatsApp from '../../../../public/assets/social/007-whatsapp.svg';
import ReactSkype from '../../../../public/assets/social/022-skype.svg';
//
export default function FooterContacts() {
    return (
        <div className={classes.FooterContacts__wrapper}>
            <ul>
                <li>
                    <Logo simple/>
                </li>
                <li>
                    <Contacts simple/>
                </li>
                <li>
                    <ReactEnvelope className={classes.FooterContacts__icon}/>
                    <a href='mailto:support@drawershop.com'>support@drawershop.com</a>
                </li>
                <li>
                <ReactPlaceLocalizer className={classes.FooterContacts__icon}/>
                    <span>02000, Украина, Киев <br/> ул. Тарасовская, 18</span>
                </li>
                <li>
                <ReactClock className={classes.FooterContacts__icon}/>
                    <span>7 дней в неделю с 10 до 18 часов</span>
                </li>
                <li>
                <ReactBusinessCard className={classes.FooterContacts__icon}/>
                    <span>ИП Иванов Иван Иванович <br/> ИНН: 123658954756 <br/>  ОГРН: 562145896523154</span>
                </li>
                <li className={classes['FooterContacts__social-wrapper']}>
                    <a href='http://google.com'><ReactGooglePlus className={classes.FooterContacts__icon}/></a>
                    <a href='http://vk.com'><ReactVK className={classes.FooterContacts__icon}/></a>
                    <a href='http://messenger.com'><ReactMessenger className={classes.FooterContacts__icon}/></a>
                    <a href='http://twitter.com'><ReactTwitter className={classes.FooterContacts__icon}/></a>
                    <a href='http://whatsapp.com'><ReactWhatsApp className={classes.FooterContacts__icon}/></a>
                    <a href='http://skype.com'><ReactSkype className={classes.FooterContacts__icon}/></a>
                </li>
            </ul>
        </div>
    )
}