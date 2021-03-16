import React from 'react'

import classes from './FooterAboutUs.module.css';

import ReactVK from '../../../../public/assets/social/009-vk.svg';
import ReactMessenger from '../../../../public/assets/social/044-messenger.svg';
import ReactGooglePlus from '../../../../public/assets/social/035-google-plus.svg';
import ReactTwitter from '../../../../public/assets/social/013-twitter-1.svg';
import ReactWhatsApp from '../../../../public/assets/social/007-whatsapp.svg';
import ReactSkype from '../../../../public/assets/social/022-skype.svg';
import ReactTumblr from '../../../../public/assets/social/016-tumblr.svg';
import ReactLinkedin from '../../../../public/assets/social/031-linkedin.svg';

export default function FooterAboutUs() {
    return (
        <div className={classes.FooterAboutUs__wrapper}>
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
                    <div className={classes.FooterAboutUs__social}>
                        <span className={classes.FooterAboutUs__social__title}>Мы в социальных сетях</span>
                        <div className={classes.FooterAboutUs__social__icons}>
                        <a href='http://google.com'><ReactGooglePlus className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://vk.com'><ReactVK className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://messenger.com'><ReactMessenger className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://twitter.com'><ReactTwitter className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://whatsapp.com'><ReactWhatsApp className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://skype.com'><ReactSkype className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://tumblr.com'><ReactTumblr className={classes.FooterAboutUs__icon}/></a>
                        <a href='http://linkedin.com'><ReactLinkedin className={classes.FooterAboutUs__icon}/></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
