import React, { useEffect } from 'react'
import redirect from 'nextjs-redirect';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/auth';

function Logout(props) {

    const Redirect = redirect('/');

    useEffect(() => {
        props.onLogout();
    }, [])
    return (
        <Redirect>
            <span>
                Redirecting to main page...
            </span>
        </Redirect>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logOut()),
    };
};

export default connect(null, mapDispatchToProps)(Logout)