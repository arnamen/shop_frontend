import React from 'react'

import FooterContacts from './FooterContacts/FooterContacts';
import FooterGoodsList from './FooterGoodsList/FooterGoodsList';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterAboutUs from './FooterAboutUs/FooterAboutUs';

import './Footer.css';

export default function Footer() {
    return (
        <div className='Footer__wrapper'>
            <FooterContacts/>
            <FooterGoodsList/>
            <FooterInfo/>
            <FooterAboutUs/>
        </div>
    )
}
