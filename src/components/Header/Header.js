import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';

import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';
import UserIconLinks from '../UserIconLinks/UserIconLinks';
import Contacts from '../Contacts/Contacts';
import LinkButton from '../UI/LinkButton/LinkButton';
import Dropdown from '../UI/Dropdown/Dropdown';
import useItemsFilter from '../../hooks/useItemsFilter/useItemsFilter';

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
        to: '/collection?all=true',
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

const translate = {
    diagonal: 'Диагональ',
    battery: 'Батарея',
    processor: 'Процессор',
    resolution: 'Разрешение экрана',
    frequency: 'Частота обновлений',
    tv: 'Телевизоры',
    phones: 'Телефоны',
    smartphones: 'Смартфоны',
    categories: 'Категории'
}

export default function Header( props ) {
    // eslint-disable-next-line no-unused-vars
    const [filteredItems, filterItems, availableFilters] = useItemsFilter(props.content);
    const [visible, setVisible] = useState(true)
    console.log(availableFilters)

    


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
                    <div className={`header__wrapper-bottom ${!visible && `header-bottom__hide`}`}>
                        <LinkButton>
                            <Dropdown items={dropdownsData} />
                        </LinkButton>
                        <LinkButton to='/page/about-us'>О компании</LinkButton>
                        <LinkButton to='/page/contacts'>Контакты</LinkButton>
                        <LinkButton to='/page/delivery'>Доставка</LinkButton>
                        <LinkButton to='/page/payment'>Оплата</LinkButton>
                        <LinkButton to='/page/feedback'>Обратная связь</LinkButton>
                        <LinkButton to='/page/offer'>Оферта</LinkButton>
                    </div>
                </div>
            </VisibilitySensor>
            {/* этот заголовок виден когда пользователь скролит вниз */}
            <div className={`header__sticky ${visible && `header-bottom__hide`}`}>
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