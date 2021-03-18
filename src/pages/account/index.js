import React from 'react'
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AccountHistory from './orders';

import classes from './ClientAccount.module.css';


/**
 * TODO:
 * convert Link to NavLink (to display selected tab)
 * check content display when tab is selected
 */

function ClientAccount(props) {

    const router = useRouter();
    //if there is nothing to wrap this component in - return account history
    if(!props.children) return <AccountHistory historyItems={props.content}/>;

    return (
        <div className={classes.ClientAccount}>
            <div className={classes.ClientAccount__content}>
                {props.children}
            </div>
            <div className={classes.ClientAccount__navigation}>
                <Link href='/account/orders'>
                    <a className={`${classes['ClientAccount__navigation-link']} 
                    ${(router.pathname === '/account/orders' || router.pathname === '/account') && classes['ClientAccount__navigation-link-active']}`}>
                        История заказов
                    </a>
                </Link>
                <Link href='/account/address'>
                    <a className={`${classes['ClientAccount__navigation-link']} 
                    ${router.pathname === '/account/address' && classes['ClientAccount__navigation-link-active']}`}>
                        Адрес доставки
                    </a>
                </Link>
                <Link href='/account/discount'>
                    <a className={`${classes['ClientAccount__navigation-link']} 
                    ${router.pathname === '/account/discount' && classes['ClientAccount__navigation-link-active']}`}>
                        Скидки и бонусы
                        </a>
                </Link>
                <Link href='/account/contacts'>
                    <a className={`${classes['ClientAccount__navigation-link']} 
                    ${router.pathname === '/account/contacts' && classes['ClientAccount__navigation-link-active']}`}>
                        Контактные данные
                        </a>
                </Link>
                <Link href='/account/loguot'>
                    <a className={`${classes['ClientAccount__navigation-link']} 
                    ${router.pathname === '/account/logout' && classes['ClientAccount__navigation-link-active']}`}>
                        Выход
                        </a>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.content.content,
        compare: state.compare.compare,
        favourites: state.favourites.favourites,
        cart: state.cart.cart,
    };
}

export default connect(mapStateToProps)(ClientAccount)