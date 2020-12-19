import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './ClientAccount.css';

function ClientAccount() {
    return (
        <div className='ClientAccount'>
            <div className='ClientAccount__content'>
                <h1>Содержимое</h1>
            </div>
            <div className='ClientAccount__navigation'>
                <NavLink className='ClientAccount__navigation-link' 
                isActive={(match, location) => {
                    if(match || location.pathname === '/account') return true;
                    return false;
                }}
                activeClassName='ClientAccount__navigation-link-active'
                to='/account/orders'>История заказов</NavLink>
                <NavLink className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                to='/account/delivery'>Адрес доставки</NavLink>
                <NavLink className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                to='/account/discount'>Скидки и бонусы</NavLink>
                <NavLink className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                to='/account/contacts'>Контактные данные</NavLink>
                <NavLink className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                to='/account/loguot'>Выход</NavLink>
            </div>
        </div>
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

export default connect(mapStateToProps)(ClientAccount)