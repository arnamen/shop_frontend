import React from 'react'
import { connect } from 'react-redux';

import './ClientAccount.css';

function ClientAccount() {
    return (
        <div className='ClientAccount'>
            <div className='ClientAccount__content'>
                <h1>Содержимое</h1>
            </div>
            <div className='ClientAccount__navigation'></div>
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