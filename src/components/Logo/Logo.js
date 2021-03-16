import React from 'react'
import Link from 'next/link';

import LogoSVG from '../../../public/assets/logo/logo.svg';
import classes from './Logo.module.css';

export default function Logo( props ) {
    return (
        <div className={'logo__wrapper'}>
            <Link className={classes.logo__link} href='/'>
            <div className={'logo__image-wrapper ' + (props.simple ? 'logo__image-wrapper-simple' : '')}>
            <div className={'logo'}>
                    <LogoSVG className={classes.logo}></LogoSVG>
            </div>
            <div className={'logo__title-wrapper ' + (props.simple ? 'logo__title-wrapper-simple' : '')}>
                <span className={'logo__title'}>
                    <span className={classes['logo__title_1']+ " " + (props.simple ? classes['logo__title_1-simple'] : '')}>Drawer</span>
                    <span className={classes['logo__title_2']+ " " + (props.simple ? classes['logo__title_2-simple'] : '')}>Shop</span>
                </span>
                {!props.simple && <span className={'logo__subtitle'}>We have what you need</span>}
            </div>
            </div>
        </Link>
        </div>
    )
}
