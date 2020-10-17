import React from 'react'

import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';
import UserIconLinks from '../UserIconLinks/UserIconLinks';
import Contacts from '../Contacts/Contacts';
import LinkButton from '../UI/Button/LinkButton/LinkButton';
import Dropdown from '../UI/Dropdown/Dropdown';

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

const dropdownsData = [
    {
        text: 'Каталог товаров',
        to: '#',
        children: [{
            text: 'cart',
            to: '/'
        },
        {
            text: 'heart',
            to: '/',
            children: [{
                text: 'test1',
                to: '/'
            },
            {
                text: 'test2',
                to: '/',
                
            },{
                text: 'test1',
                to: '/',
                children: [{
                    text: 'test1',
                    to: '/'
                },
                {
                    text: 'test2',
                    to: '/',
                    
                },{
                    text: 'test1',
                    to: '/'
                },
                {
                    text: 'test2',
                    to: '/',
                    
                },{
                    text: 'test1',
                    to: '/'
                },
                {
                    text: 'test2',
                    to: '/',
                    
                }]
            },
            {
                text: 'test2',
                to: '/',
                
            },{
                text: 'test1',
                to: '/'
            },
            {
                text: 'test2',
                to: '/',
                
            }]
        }]
    },
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
            <div className={classes['header__wrapper-bottom']}>
                <Dropdown items={dropdownsData}/>
                <LinkButton to='/'>О компании</LinkButton>
                <LinkButton to='/'>Контакты</LinkButton>
                <LinkButton to='/'>Доставка</LinkButton>
                <LinkButton to='/'>Оплата</LinkButton>
                <LinkButton to='/'>Обратная связь</LinkButton>
                <LinkButton to='/'>Оферта</LinkButton>
            </div>
        </div>
    )
}
