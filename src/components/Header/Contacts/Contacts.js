import React from 'react'

import '../../UI/Popup/PopupSimple/PopupSimple';
import PopupSimple from '../../UI/Popup/PopupSimple/PopupSimple';

import './Contacts.css';
import {ReactComponent as ReactEnvelope} from '../../../assets/footer/envelope.svg';
import {ReactComponent as ReactPlaceLocalizer} from '../../../assets/footer/place-localizer.svg';
import {ReactComponent as ReactClock} from '../../../assets/footer/clock.svg';
import {ReactComponent as ReactVK} from '../../../assets/social/009-vk.svg';
import {ReactComponent as ReactMessenger} from '../../../assets/social/044-messenger.svg';
import {ReactComponent as ReactGooglePlus} from '../../../assets/social/035-google-plus.svg';
import {ReactComponent as ReactTwitter} from '../../../assets/social/013-twitter-1.svg';
import {ReactComponent as ReactWhatsApp} from '../../../assets/social/007-whatsapp.svg';
import {ReactComponent as ReactSkype} from '../../../assets/social/022-skype.svg';

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
                {!props.simple && <div className='Contacts__dots'>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                    <div className={'circle'}></div>
                    <PopupSimple>
                    <ul>
                <li>
                    <ReactEnvelope className='Contacts__icon'/>
                    <a href='mailto:support@drawershop.com'>support@drawershop.com</a>
                </li>
                <li>
                <ReactPlaceLocalizer className='Contacts__icon'/>
                    <span>02000, Украина, Киев <br/> ул. Тарасовская, 18</span>
                </li>
                <li>
                <ReactClock className='Contacts__icon'/>
                    <span>7 дней в неделю с 10 до 18 часов</span>
                </li>
                <li className='Contacts__social-wrapper'>
                    <a href='http://google.com'><ReactGooglePlus className='Contacts__icon'/></a>
                    <a href='http://vk.com'><ReactVK className='Contacts__icon'/></a>
                    <a href='http://messenger.com'><ReactMessenger className='Contacts__icon'/></a>
                    <a href='http://twitter.com'><ReactTwitter className='Contacts__icon'/></a>
                    <a href='http://whatsapp.com'><ReactWhatsApp className='Contacts__icon'/></a>
                    <a href='http://skype.com'><ReactSkype className='Contacts__icon'/></a>
                </li>
            </ul>
                    </PopupSimple>
                </div>}
            </div>
        </div>
    )
}
