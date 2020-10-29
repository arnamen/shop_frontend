import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import './Logo.css';

export default function Logo( props ) {
    return (
        <div className={'logo__wrapper'}>
            <Link to='/'>
            <div className={'logo__image-wrapper'}>
            <div className={'logo'}>
                    <img className={'logo'} src={logo} alt='logo'></img>
            </div>
            <div className={'logo__title-wrapper ' + (props.simple && 'logo__title-wrapper-simple')}>
                <span className={'logo__title'}>
                    <span className={'logo__title_1'}>Drawer</span>
                    <span className={'logo__title_2'}>Shop</span>
                </span>
                <br/>
                {!props.simple && <span className={'logo__subtitle'}>We have what you need</span>}
            </div>
            </div>
        </Link>
        </div>
    )
}
