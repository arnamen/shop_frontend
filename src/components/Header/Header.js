import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';
import UserIconLinks from '../UserIconLinks/UserIconLinks';
import UserIconLink from '../UserIconLinks/UserIconLink/UserIconLink';
import Contacts from './Contacts/Contacts';
import LinkButton from '../UI/LinkButton/LinkButton';
import Dropdown from '../UI/Dropdown/Dropdown';
import Popup from '../UI/Popup/Popup';
import Burger from '../../containers/Burger/Burger';

import * as actionTypes from '../../store/actions/actionTypes';

import useItemsFilter from '../../hooks/useItemsFilter/useItemsFilter';

import './Header.css';

let contentHref = '/page/collection';

const dropdownsData = [
    {
        text: 'Каталог товаров',
        to: contentHref,
        children: [{
            text: 'Категория',
            to: contentHref
        },
        {
            text: 'Телефоны',
            to: contentHref + '?categories=phones,smartphones',
            children: [{
                text: 'Категория',
                to: contentHref
            },
            {
                text: 'Смартфоны',
                to: contentHref + '?categories=smartphones',
                children: [{
                    text: 'Категория',
                    to: contentHref,
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }, {
                    text: 'Категория',
                    to: contentHref
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }, {
                    text: 'Категория',
                    to: contentHref
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }]
            }, {
                text: 'Категория',
                to: contentHref,
                children: [{
                    text: 'Категория',
                    to: contentHref,
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }, {
                    text: 'Категория',
                    to: contentHref,
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }, {
                    text: 'Категория',
                    to: contentHref,
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }]
            },
            {
                text: 'Категория',
                to: contentHref,

            }, {
                text: 'Категория',
                to: contentHref,
            },
            {
                text: 'Категория',
                to: contentHref,

            }]
        },
        {
            text: 'Телевизоры',
            to: contentHref + '?categories=tv',
            children: [
                {
                    text: 'Категория',
                    to: contentHref,

                }, {
                    text: 'Категория',
                    to: contentHref,
                },
                {
                    text: 'Категория',
                    to: contentHref,

                }
            ]
        }]
    },

]

const AccountListData = [
    {
        title: 'История заказов',
        to: '/'
    },
    {
        title: 'Адрес доставки',
        to: '/'
    },
    {
        title: 'Скидки а бонусы',
        to: '/'
    },
    {
        title: 'Контактные данные',
        to: '/'
    },
]

const burgerData = [
    { to: '/', name: 'Главная' },
    { to: '/page/collection', name: 'Каталог товаров' },
    { to: '/page/about-us', name: 'О компании' },
    { to: '/page/contacts', name: 'Контакты' },
    { to: '/page/delivery', name: 'Доставка' },
    { to: '/page/payment', name: 'Оплата' },
    { to: '/page/feedback', name: 'Обратная связь' },
]

function Header(props) {
    // eslint-disable-next-line no-unused-vars
    const [filteredItems, filterItems, availableFilters] = useItemsFilter(props.content);
    const [visible, setVisible] = useState(true)
    const compareActive = props.compare.length > 0;
    const favouritesActive = props.favourites.length > 0;
    const cartActive = props.cart.length > 0;

    return (
        <React.Fragment>
            {/* Этот заголовок видно когда пользователь скролит вниз с телефона */}
            <div className={`Header__wrapper-top-mobile`}>
                <Burger data={burgerData} />
                <UserIconLinks>
                    <UserIconLink type='compare' to='/page/compares' active={compareActive} markContent={props.compare.length} key={v4()}>
                        <Popup items={props.compare} type='compare' redirectButtonNotEmpty onDelete={props.onRemoveFromCompare} />
                    </UserIconLink>
                    <UserIconLink type='heart' to='/page/favourites' active={favouritesActive && 'red'} markContent={props.favourites.length} activeColor='red' key={v4()}>
                        <Popup items={props.favourites} type='favourites' redirectButtonNotEmpty onDelete={props.onRemoveFromFavourites} />
                    </UserIconLink>
                    <UserIconLink type='cart' to='/page/cart' active={cartActive} markContent={props.cart.length} key={v4()}>
                        <Popup items={props.cart} type='cart' redirectButtonNotEmpty actionButtonNotEmpty onDelete={props.onRemoveFromCart} />
                    </UserIconLink>
                    <UserIconLink type='account' to='/' key={v4()} active={props.login} activeColor='orange'>
                        {props.login
                            ? <Popup type='authenticated' actionButton listData={AccountListData} />
                            : <Popup type='account' redirectButton actionButton />}
                    </UserIconLink>
                </UserIconLinks>
            </div>
            {/* этот заголовок виден когда пользователь наверху старницы */}
            <VisibilitySensor partialVisibility onChange={(isVisible) => setVisible(isVisible)}>
                <div className={'Header'}>
                    <div className={`Header__wrapper-top`}>
                        <Burger data={burgerData} />
                        <Logo />
                        <Search />
                        <Contacts />
                        <UserIconLinks>
                            <UserIconLink type='compare' to='/page/compares' active={compareActive} markContent={props.compare.length} key={v4()}>
                                <Popup items={props.compare} type='compare' redirectButtonNotEmpty onDelete={props.onRemoveFromCompare} />
                            </UserIconLink>
                            <UserIconLink type='heart' to='/page/favourites' active={favouritesActive && 'red'} markContent={props.favourites.length} activeColor='red' key={v4()}>
                                <Popup items={props.favourites} type='favourites' redirectButtonNotEmpty onDelete={props.onRemoveFromFavourites} />
                            </UserIconLink>
                            <UserIconLink type='cart' to='/page/cart' active={cartActive} markContent={props.cart.length} key={v4()}>
                                <Popup items={props.cart} type='cart' redirectButtonNotEmpty actionButtonNotEmpty onDelete={props.onRemoveFromCart} />
                            </UserIconLink>
                            <UserIconLink type='account' to='/' key={v4()} active={props.login} activeColor='orange'>
                                {props.login
                                    ? <Popup type='authenticated' actionButton listData={AccountListData} />
                                    : <Popup type='account' redirectButton actionButton />}
                            </UserIconLink>
                        </UserIconLinks>
                    </div>
                    <div className={`Header__wrapper-bottom ${!visible && `Header-bottom__hide`}`}>
                        <Dropdown items={dropdownsData} />
                        <LinkButton to='/page/about-us'>О компании</LinkButton>
                        <LinkButton to='/page/contacts'>Контакты</LinkButton>
                        <LinkButton to='/page/delivery'>Доставка</LinkButton>
                        <LinkButton to='/page/payment'>Оплата</LinkButton>
                        <LinkButton to='/page/feedback'>Обратная связь</LinkButton>
                        <LinkButton to='/page/offer'>Оферта</LinkButton>
                    </div>
                    <div className='Header__bottom-simple'>
                        <Logo />
                    </div>
                </div>

            </VisibilitySensor>
            {/* этот заголовок виден когда пользователь скролит вниз */}
            <div className={`Header__sticky ${visible && `Header-bottom__hide`}`}>
                <Dropdown items={dropdownsData} />
                <LinkButton to='/page/about-us'>О компании</LinkButton>
                <LinkButton to='/page/contacts'>Контакты</LinkButton>
                <LinkButton to='/page/delivery'>Доставка</LinkButton>
                <LinkButton to='/page/payment'>Оплата</LinkButton>
                <LinkButton to='/page/feedback'>Обратная связь</LinkButton>
                <UserIconLinks>
                    <UserIconLink type='compare' to='/page/compares' active={compareActive} markContent={props.compare.length} key={v4()}>
                        <Popup items={props.compare} type='compare' redirectButtonNotEmpty onDelete={props.onRemoveFromCompare} />
                    </UserIconLink>
                    <UserIconLink type='heart' to='/page/favourites' active={favouritesActive && 'red'} markContent={props.favourites.length} activeColor='red' key={v4()}>
                        <Popup items={props.favourites} type='favourites' redirectButtonNotEmpty onDelete={props.onRemoveFromFavourites} />
                    </UserIconLink>
                    <UserIconLink type='cart' to='/page/cart' active={cartActive} markContent={props.cart.length} key={v4()}>
                        <Popup items={props.cart} type='cart' redirectButtonNotEmpty actionButtonNotEmpty onDelete={props.onRemoveFromCart} />
                    </UserIconLink>
                    <UserIconLink type='account' to='/' key={v4()} active={props.login} activeColor='orange'>
                        {props.login
                            ? <Popup type='authenticated' actionButton listData={AccountListData} />
                            : <Popup type='account' redirectButton actionButton />}
                    </UserIconLink>
                </UserIconLinks>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        compare: state.compare.compare,
        favourites: state.favourites.favourites,
        cart: state.cart.cart,
        login: state.login.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromCompare: (item) => dispatch({
            type: actionTypes.REMOVE_COMPARE,
            item,
        }),
        onRemoveFromFavourites: (item) => dispatch({
            type: actionTypes.REMOVE_FAVOURITES,
            item,
        }),
        onRemoveFromCart: (item) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            item,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)