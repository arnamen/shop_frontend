import React from 'react'
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';

import AccountHistory from './AccountHistory/AccountHistory';
import AccountAddress from './AccountAddress/AccountAddress';

import './ClientAccount.css';

function ClientAccount( props ) {
    return (
        <div className='ClientAccount'>
            <div className='ClientAccount__content'>
                <Switch>
                    <Route exact path='/account/address'>{<AccountAddress/>}</Route>
                    <Route><AccountHistory historyItems={props.content}/></Route>
                </Switch>
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
                to='/account/address'>Адрес доставки</NavLink>
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
        content: state.content.content,
        compare: state.compare.compare,
        favourites: state.favourites.favourites,
        cart: state.cart.cart,
        login: state.login.login
    };
}

export default connect(mapStateToProps)(ClientAccount)