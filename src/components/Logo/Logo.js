import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import classes from './Logo.module.css';

export default function Logo() {
    return (
        <div className={classes.logo__wrapper}>
            <Link to='/'>
            <div className={classes['logo__image-wrapper']}>
            <div className={classes.logo}>
                    <img className={classes.logo} src={logo} alt='logo'></img>
            </div>
            <div className={classes['logo__title-wrapper']}>
                <span className={classes.logo__title}>
                    <span className={classes.logo__title_1}>Drawer</span>
                    <span className={classes.logo__title_2}>Shop</span>
                </span>
                <br/>
                <span className={classes.logo__subtitle}>We have what you need</span>
            </div>
            </div>
        </Link>
        </div>
    )
}
