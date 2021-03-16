import React from 'react'
import Link from 'next/link';

import LogoSVG from '../../../public/assets/logo/logo.svg';
import classes from './Logo.module.css';

export default function Logo(props) {
    return (
        <div className={classes['logo__wrapper']}>
            <Link href='/'>
                <a className={classes.logo__link}>
                    <div className={`${classes['logo__image-wrapper']} ${(props.simple && classes['logo__image-wrapper-simple'])}`}>
                        <div className={classes['logo']}>
                            <LogoSVG className={classes.logo}></LogoSVG>
                        </div>
                        <div className={`${classes['logo__title-wrapper']} ${(props.simple && classes['logo__title-wrapper-simple'])}`}>
                            <span className={classes['logo__title']}>
                                <span className={classes['logo__title_1'] + " " + (props.simple ? classes['logo__title_1-simple'] : '')}>Drawer</span>
                                <span className={classes['logo__title_2'] + " " + (props.simple ? classes['logo__title_2-simple'] : '')}>Shop</span>
                            </span>
                            {!props.simple && <span className={classes['logo__subtitle']}>We have what you need</span>}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}
