import React from 'react'

import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';
import UserIconLinks from '../UserIconLinks/UserIconLinks';
import Contacts from '../Contacts/Contacts';

import classes from './Header.module.css';

const UserIconLinksData = [
    {
        type: 'compare',
        to: '/'
    },
    {
        type: 'heart',
        to: '/'
    },
    {
        type: 'cart',
        to: '/'
    },
    {
        type: 'account',
        to: '/'
    }
]

export default function Header() {

    return (
        <div className={classes.header}>
            <div className={classes['header__wrapper-top']}>
                <Logo/>
                <Search/>
                <Contacts/>
                <div className={classes['header_UserIconLinks-wrapper']}>
                    <UserIconLinks iconData={UserIconLinksData}/>
                </div>
            </div>
            
        </div>
    )
}
