import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'next/router';

import './ClientAccount.css';

/**
 * TODO:
 * convert Link to NavLink (to display selected tab)
 * check content display when tab is selected
 */

function ClientAccount( props ) {
    
    return (
        <div className='ClientAccount'>
            <div className='ClientAccount__content'>
                {props.children}
                {/* <Switch>
                    <Route exact path='/account/address' render={() => <AccountAddress/>}/>
                    <Route exact path='/account/discount' render={() => <AccountDiscount/>}/>
                    <Route exact path='/account/contacts' render={() => <AccountContacts/>}/>
                    <Route><AccountHistory historyItems={props.content}/></Route>
                </Switch> */}
            </div>
            <div className='ClientAccount__navigation'>
                <Link className='ClientAccount__navigation-link' 
                isActive={(match, location) => {
                    if(match || location.pathname === '/account') return true;
                    return false;
                }}
                activeClassName='ClientAccount__navigation-link-active'
                href='/account/orders'>История заказов</Link>
                <Link className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                href='/account/address'>Адрес доставки</Link>
                <Link className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                href='/account/discount'>Скидки и бонусы</Link>
                <Link className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                href='/account/contacts'>Контактные данные</Link>
                <Link className='ClientAccount__navigation-link' 
                activeClassName='ClientAccount__navigation-link-active'
                href='/account/loguot'>Выход</Link>
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