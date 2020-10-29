import React from 'react'

import Logo from '../../Logo/Logo';
import Contacts from '../../Contacts/Contacts';

import './FooterContacts.css';

import {ReactComponent as ReactEnvelope} from '../../../assets/footer/envelope.svg';
import {ReactComponent as ReactPlaceLocalizer} from '../../../assets/footer/place-localizer.svg';
import {ReactComponent as ReactClock} from '../../../assets/footer/clock.svg';
import {ReactComponent as ReactBusinessCard} from '../../../assets/footer/business-card.svg';
//
import {ReactComponent as ReactVK} from '../../../assets/social/009-vk.svg';
import {ReactComponent as ReactMessenger} from '../../../assets/social/044-messenger.svg';
import {ReactComponent as ReactGooglePlus} from '../../../assets/social/035-google-plus.svg';
import {ReactComponent as ReactTwitter} from '../../../assets/social/013-twitter-1.svg';
import {ReactComponent as ReactWhatsApp} from '../../../assets/social/007-whatsapp.svg';
import {ReactComponent as ReactSkype} from '../../../assets/social/022-skype.svg';
//
export default function FooterContacts() {
    return (
        <div className='FooterContacts__wrapper'>
            <ul>
                <li>
                    <Logo simple/>
                </li>
                <li>
                    <Contacts simple/>
                </li>
                <li>
                    <ReactEnvelope className='FooterContacts__icon'/>
                    <a href='mailto:support@drawershop.com'>support@drawershop.com</a>
                </li>
                <li>
                <ReactPlaceLocalizer className='FooterContacts__icon'/>
                    <span>02000, Украина, Киев <br/> ул. Тарасовская, 18</span>
                </li>
                <li>
                <ReactClock className='FooterContacts__icon'/>
                    <span>7 дней в неделю с 10 до 18 часов</span>
                </li>
                <li>
                <ReactBusinessCard className='FooterContacts__icon'/>
                    <span>ИП Иванов Иван Иванович <br/> ИНН: 123658954756 <br/>  ОГРН: 562145896523154</span>
                </li>
                <li className='FooterContacts__social-wrapper'>
                    <a href='/'>
                    <ReactGooglePlus className='FooterContacts__icon'/>
                    </a>
                    <a href='/'>
                        <ReactVK className='FooterContacts__icon'/>
                    </a>
                    <ReactMessenger className='FooterContacts__icon'/>
                    <ReactTwitter className='FooterContacts__icon'/>
                    <ReactWhatsApp className='FooterContacts__icon'/>
                    <ReactSkype className='FooterContacts__icon'/>
                </li>
            </ul>
        </div>
    )
}
