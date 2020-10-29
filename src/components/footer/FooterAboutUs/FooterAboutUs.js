import React from 'react'

import './FooterAboutUs.css';

import {ReactComponent as ReactVK} from '../../../assets/social/009-vk.svg';
import {ReactComponent as ReactMessenger} from '../../../assets/social/044-messenger.svg';
import {ReactComponent as ReactGooglePlus} from '../../../assets/social/035-google-plus.svg';
import {ReactComponent as ReactTwitter} from '../../../assets/social/013-twitter-1.svg';
import {ReactComponent as ReactWhatsApp} from '../../../assets/social/007-whatsapp.svg';
import {ReactComponent as ReactSkype} from '../../../assets/social/022-skype.svg';
import {ReactComponent as ReactTumblr} from '../../../assets/social/016-tumblr.svg';
import {ReactComponent as ReactLinkedin} from '../../../assets/social/031-linkedin.svg';

export default function FooterAboutUs() {
    return (
        <div className='FooterAboutUs__wrapper'>
            <ul>
                <li>
                    <span>О нас</span>
                </li>
                <li>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas elit orci, id facilisis dui finibus sed. Nullam consequat sapien.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas elit orci, id facilisis dui finibus sed. Nullam consequat sapien.
                    </span>
                </li>
                <li>
                    <div>
                        <span className='FooterAboutUs__social__title'>Мы в социальных сетях</span>
                        <div className='FooterAboutUs__social__icons'>
                        <ReactGooglePlus className='FooterAboutUs__icon'/>
                        <ReactVK className='FooterAboutUs__icon'/>
                        <ReactMessenger className='FooterAboutUs__icon'/>
                        <ReactTwitter className='FooterAboutUs__icon'/>
                        <ReactWhatsApp className='FooterAboutUs__icon'/>
                        <ReactSkype className='FooterAboutUs__icon'/>
                        <ReactTumblr className='FooterAboutUs__icon'/>
                        <ReactLinkedin className='FooterAboutUs__icon'/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
