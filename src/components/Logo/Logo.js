import React from 'react'
import { Link } from 'next/router';

import logo from '../../assets/logo/logo.svg';
import './Logo.css';

export default function Logo( props ) {
    return (
        <div className={'logo__wrapper'}>
            <Link className='logo__link' href='/'>
            <div className={'logo__image-wrapper ' + (props.simple ? 'logo__image-wrapper-simple' : '')}>
            <div className={'logo'}>
                    <img className={'logo'} src={logo} alt='logo'></img>
            </div>
            <div className={'logo__title-wrapper ' + (props.simple ? 'logo__title-wrapper-simple' : '')}>
                <span className={'logo__title'}>
                    <span className={'logo__title_1 '+ (props.simple ? 'logo__title_1-simple' : '')}>Drawer</span>
                    <span className={'logo__title_2 '+ (props.simple ? 'logo__title_2-simple' : '')}>Shop</span>
                </span>
                {!props.simple && <span className={'logo__subtitle'}>We have what you need</span>}
            </div>
            </div>
        </Link>
        </div>
    )
}
