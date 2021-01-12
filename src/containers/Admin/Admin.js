import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux';

import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import Modal from '../../components/UI/Modal/Modal';
import Form from '../../components/UI/Form/Form';
import Button from '../../components/UI/Button/Button';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import * as actions from '../../store/actions/auth';

import { useForm } from '../../hooks/useForm/useForm';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_EXACT_LENGTH, VALIDATOR_MINLENGTH } from '../../utils/validator';

function Admin( props ) {
    return (
        <div>
            IT WORKS
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        content: state.content.content,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onAuth: (authMethod, authData) => dispatch(actions.auth(authMethod, authData)),
        // onSetAuthRedirectPath: () => dispatch(actions.authRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin)