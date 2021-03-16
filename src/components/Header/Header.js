import React, { useEffect, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { v4 } from 'uuid';
import { connect, useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';
import UserIconLinks from '../UserIconLinks/UserIconLinks';
import UserIconLink from '../UserIconLinks/UserIconLink/UserIconLink';
import Contacts from './Contacts/Contacts';
import LinkButton from '../UI/LinkButton/LinkButton';
import Dropdown from '../UI/Dropdown/Dropdown';
import Popup from '../UI/Popup/Popup';
import Burger from '../../containers/Burger/Burger';
import AuthModal from '../AuthModal/AuthModal';
import * as actionTypes from '../../store/actions/actionTypes';

import classes from './Header.module.css';
import { authSetIp, logOut } from '../../store/actions/auth';

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

const AdminAccountListData = [
    {
        title: 'Панель администратора',
        to: '/admin'
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

    const [authFormType, setAuthFormType] = useState('login');
    const [visible, setVisible] = useState(true)
    const [showAuthForm, setShowAuthForm] = useState(false);

    const dispatch = useDispatch();

    const compare = useSelector(state => state.compare);
    const favourites = useSelector(state => state.favourites);
    const cart = useSelector(state => state.cart);
    const loggedIn = useSelector(state => !!state.auth.token);
    const ip = useSelector(state => state.auth.ip);

    const compareActive = compare.length > 0;
    const favouritesActive = favourites.length > 0;
    const cartActive = cart.length > 0;

    const currentAccountRoutes = [...AccountListData];

    const onRemoveFromCompare = (item) => dispatch({
        type: actionTypes.REMOVE_COMPARE,
        item,
    });
    const onRemoveFromFavourites = (item) => dispatch({
        type: actionTypes.REMOVE_FAVOURITES,
        item,
    });
    const onRemoveFromCart = (item) => dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        item,
    });
    const onLogout = () => {
        dispatch(logOut())
    };

    const changeVisibility = (isVisible) => {
        if(window) setVisible(isVisible);
    }

    return (
        <React.Fragment>
            {/* Этот заголовок видно когда пользователь скролит вниз с телефона */}
            <div className={classes[`Header__wrapper-top-mobile`]}>
                <Burger data={burgerData} />
                <UserIconLinks>
                    <UserIconLink type='compare' to='/page/compares' active={compareActive} markContent={compare.length} key={v4()}>
                        <Popup items={compare} type='compare' redirectButtonNotEmpty onDelete={onRemoveFromCompare} />
                    </UserIconLink>
                    <UserIconLink type='heart' to='/page/favourites' active={favouritesActive && 'red'} markContent={favourites.length} activeColor='red' key={v4()}>
                        <Popup items={favourites} type='favourites' redirectButtonNotEmpty onDelete={onRemoveFromFavourites} />
                    </UserIconLink>
                    <UserIconLink type='cart' to='/page/cart' active={cartActive} markContent={cart.length} key={v4()}>
                        <Popup items={cart} type='cart' redirectButtonNotEmpty actionButtonNotEmpty onDelete={onRemoveFromCart} />
                    </UserIconLink>
                    <UserIconLink type='account' to='/' key={v4()} active={loggedIn} activeColor='orange'>
                        {loggedIn
                            ? <Popup type='authenticated' actionButton listData={[...AccountListData]} />
                            : <Popup type='account'>
                                <Popup.Button green
                                    onClick={(event) => setShowAuthForm(true)}>
                                    Регистрация
                                    </Popup.Button>
                                <Popup.Button blue
                                    onClick={(event) => setShowAuthForm(true)}>
                                    Авторизация
                                    </Popup.Button>
                            </Popup>}
                    </UserIconLink>
                </UserIconLinks>
            </div>
            {/* этот заголовок виден когда пользователь наверху старницы */}
            <VisibilitySensor partialVisibility onChange={(isVisible) => {changeVisibility(isVisible)}}>
                <div className={classes['Header']}>
                    <div className={`${classes['Header__wrapper-top']} ${!visible && `${classes['Header__wrapper-top-hidden']}`}`}>
                        {/* <Burger data={burgerData} /> ?????*/}
                        <Logo />
                        <Search />
                        <Contacts />
                        <UserIconLinks>
                            <UserIconLink type='compare' to='/page/compares' active={compareActive} markContent={compare.length} key={v4()}>
                                <Popup items={compare} type='compare' onDelete={onRemoveFromCompare}>
                                    {compareActive && <Popup.Button green to='/page/compare'>Перейти к сравнению</Popup.Button>}
                                </Popup>
                            </UserIconLink>
                            <UserIconLink type='heart' to='/page/favourites' active={favouritesActive && 'red'} markContent={favourites.length} activeColor='red' key={v4()}>
                                <Popup items={favourites} type='favourites' onDelete={onRemoveFromFavourites}>
                                    {favouritesActive && <Popup.Button green to='/page/favourites'>Избранное</Popup.Button>}
                                </Popup>
                            </UserIconLink>
                            <UserIconLink type='cart' to='/page/cart' active={cartActive} markContent={props.cart.length} key={v4()}>
                                <Popup items={cart} type='cart' onDelete={onRemoveFromCart}>
                                    {cartActive && <Popup.Button green to='/page/cart'>В корзину</Popup.Button>}
                                </Popup>
                            </UserIconLink>
                            <UserIconLink type='account' to='/account' key={v4()} active={loggedIn} activeColor='orange'>
                                {loggedIn
                                    ? <Popup type='authenticated' listData={AccountListData}>
                                        <Popup.Button blue onClick={() => onLogout()}>Выход</Popup.Button>
                                    </Popup>
                                    : <Popup type='account'>
                                        <Popup.Button green
                                            onClick={(event) => {setShowAuthForm(true); setAuthFormType('signup')}}>
                                            Регистрация
                                    </Popup.Button>
                                        <Popup.Button blue
                                            onClick={(event) => {setShowAuthForm(true); setAuthFormType('login')}}>
                                            Авторизация
                                    </Popup.Button>
                                    </Popup>}
                            </UserIconLink>
                        </UserIconLinks>
                    </div>
                    <div className={`${classes['Header__wrapper-bottom']} ${!visible && `${classes['Header__fixed']}`}`}>
                        <Dropdown items={dropdownsData} />
                        <LinkButton to='/page/about-us'>О компании</LinkButton>
                        <LinkButton to='/page/contacts'>Контакты</LinkButton>
                        <LinkButton to='/page/delivery'>Доставка</LinkButton>
                        <LinkButton to='/page/payment'>Оплата</LinkButton>
                        <LinkButton to='/page/feedback'>Обратная связь</LinkButton>
                        {visible && <LinkButton to='/page/offer'>Оферта</LinkButton>}
                        {!visible && <UserIconLinks>
                            <UserIconLink type='compare' to='/page/compares' active={compareActive} markContent={compare.length} key={v4()}>
                                <Popup items={compare} type='compare' redirectButtonNotEmpty onDelete={onRemoveFromCompare} >
                                    {cartActive && <Popup.Button green to='/page/compares'>Перейти к сравнению</Popup.Button>}
                                </Popup>
                            </UserIconLink>
                            <UserIconLink type='heart' to='/page/favourites' active={favouritesActive && 'red'} markContent={favourites.length} activeColor='red' key={v4()}>
                                <Popup items={favourites} type='favourites' redirectButtonNotEmpty onDelete={onRemoveFromFavourites} >
                                    {favouritesActive && <Popup.Button green to='/page/favourites'>Избранное</Popup.Button>}
                                </Popup>
                            </UserIconLink>
                            <UserIconLink type='cart' to='/page/cart' active={cartActive} markContent={cart.length} key={v4()}>
                                <Popup items={cart} type='cart' redirectButtonNotEmpty actionButtonNotEmpty onDelete={onRemoveFromCart}>
                                    {cartActive && <Popup.Button green to='/page/cart'>В корзину</Popup.Button>}
                                </Popup>
                            </UserIconLink>
                            <UserIconLink type='account' to='/account' key={v4()} active={loggedIn} activeColor='orange'>
                                {loggedIn
                                    ? <Popup type='authenticated' listData={AccountListData}>
                                        <Popup.Button blue onClick={() => onLogout()}>Выход</Popup.Button>
                                    </Popup>
                                    : <Popup type='account'>
                                    <Popup.Button green
                                        onClick={(event) => {setShowAuthForm(true); setAuthFormType('signup')}}>
                                        Регистрация
                                </Popup.Button>
                                    <Popup.Button blue
                                        onClick={(event) => {setShowAuthForm(true); setAuthFormType('login')}}>
                                        Авторизация
                                </Popup.Button>
                                </Popup>}
                            </UserIconLink>
                        </UserIconLinks>}
                    </div>
                    <div className={classes['Header__bottom-simple']}>
                        <Logo />
                    </div>
                </div>
            </VisibilitySensor>
            {showAuthForm && <AuthModal onClose={() => setShowAuthForm(false)} 
            visible={showAuthForm}
            authFormType={authFormType}/>}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        compare: state.compare.compare,
        favourites: state.favourites.favourites,
        cart: state.cart.cart,
        loggedIn: !!state.auth.token,
        ip: state.auth.ip
    };
}

export default connect(mapStateToProps, null)(Header)