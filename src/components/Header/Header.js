import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';

import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';
import UserIconLinks from '../UserIconLinks/UserIconLinks';
import Contacts from '../Contacts/Contacts';
import LinkButton from '../UI/Button/LinkButton/LinkButton';
import Dropdown from '../UI/Dropdown/Dropdown';

import './Header.css';

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
            text: 'first',
            to: '/',
            children: [{
                text: 'first',
                to: '/'
            },
            {
                text: 'second',
                to: '/',
                children: [{
                    text: 'first',
                    to: '/'
                },
                {
                    text: 'testукеукеуке2',
                    to: '/',

                }, {
                    text: 'teее1',
                    to: '/'
                },
                {
                    text: 'teецукеst2',
                    to: '/',

                }, {
                    text: 'test1',
                    to: '/'
                },
                {
                    text: 'test2',
                    to: '/',

                }]
            }, {
                text: 'third',
                to: '/',
                children: [{
                    text: 'first',
                    to: '/'
                },
                {
                    text: 'test2',
                    to: '/',

                }, {
                    text: 'test1',
                    to: '/'
                },
                {
                    text: 'test2',
                    to: '/',

                }, {
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

            }, {
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

    const [visible, setVisible] = useState(true)
    //добавить sticky header с z-index 999
    return (
        <React.Fragment>
            {/* этот заголовок виден когда пользователь наверху старницы */}
            <VisibilitySensor partialVisibility onChange={(isVisible) => setVisible(isVisible)}>
                <div className={'header'}>
                    <div className={`header__wrapper-top`}>
                        <Logo />
                        <Search />
                        <Contacts />
                        <div className={`header_UserIconLinks-wrapper`}>
                            <UserIconLinks iconData={UserIconLinksData} />
                        </div>
                    </div>
                    <div className={`header__wrapper-bottom ${!visible && `header__hide`}`}>
                        <Dropdown items={dropdownsData} />
                        <LinkButton to='/page/about-us'>О компании</LinkButton>
                        <LinkButton to='/page/contacts'>Контакты</LinkButton>
                        <LinkButton to='/page/delivery'>Доставка</LinkButton>
                        <LinkButton to='/page/payment'>Оплата</LinkButton>
                        <LinkButton to='/page/feedback'>Обратная связь</LinkButton>
                        <LinkButton to='/page/offer'>Оферта</LinkButton>
                    </div>
                </div>
            </VisibilitySensor>
            {/* этот заголовок видим когда пользователь скролит вниз */}
            <div className={`header__sticky ${visible && `header__hide`}`}>
                <Dropdown items={dropdownsData} />
                <LinkButton to='/page/about-us'>О компании</LinkButton>
                <LinkButton to='/page/contacts'>Контакты</LinkButton>
                <LinkButton to='/page/delivery'>Доставка</LinkButton>
                <LinkButton to='/page/payment'>Оплата</LinkButton>
                <LinkButton to='/page/feedback'>Обратная связь</LinkButton>
                <LinkButton to='/page/offer'>Оферта</LinkButton>
            </div>
        </React.Fragment>
    )
}
