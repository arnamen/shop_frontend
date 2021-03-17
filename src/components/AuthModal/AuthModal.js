import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux';

import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import * as actions from '../../store/actions/auth';

import { useForm } from '../../hooks/useForm/useForm';

import ReactGoogle from '../../../public/assets/social/google.svg';
import ReactFacebook from '../../../public/assets/social/043-facebook-1.svg';
import ReactClose from '../../../public/assets/misc/cross.svg';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_EXACT_LENGTH, VALIDATOR_MINLENGTH } from '../../utils/validator';

import classes from './AuthModal.module.css';

const AUTH_METHOD_LOGIN = 'login';
const AUTH_METHOD_SIGNUP = 'signup';

/**
 * TODO: fix form submit
 */

function AuthModal(props) {

    const [authFormType, setAuthFormType] = useState(props.authFormType);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
    }, false);
    const [showInvalidFormMessage, setShowInvalidFormMessage] = useState(false);

    const switchAuthType = useCallback((currentAuthType) => {

        setShowInvalidFormMessage(false);

        switch (currentAuthType) {
            case 'login':
                if (authFormType === 'login') return;
                setAuthFormType('login');
                setFormData({
                    ...formState.inputs,
                    name: undefined,
                    surname: undefined,
                    phone: undefined
                }, false)
                break;

            case 'signup':
                if (authFormType === 'signup') return;
                setAuthFormType('signup');
                setFormData({
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    surname: {
                        value: '',
                        isValid: true
                    },
                    phone: {
                        value: '',
                        isValid: true
                    }
                }, false)
                break;
            default:
                break;
        }
    }, [formState, setFormData, authFormType]);

    useEffect(() => {
        switchAuthType(props.authFormType);
    }, []);

    const authSubmitHandler = async (event) => {

        event.preventDefault();

        if (!formState.isValid) return setShowInvalidFormMessage(true);
        else if (formState.isValid && showInvalidFormMessage) setShowInvalidFormMessage(false);

        let CURRENT_AUTH_METHOD;
        if (authFormType === AUTH_METHOD_LOGIN) CURRENT_AUTH_METHOD = AUTH_METHOD_LOGIN;
        else if (authFormType === AUTH_METHOD_SIGNUP) CURRENT_AUTH_METHOD = AUTH_METHOD_SIGNUP;
        else throw new Error('Undefined auth method');

        const name = formState.inputs.name ? formState.inputs.name.value : undefined;
        const surname = formState.inputs.surname ? formState.inputs.surname.value : undefined;
        const phoneNumber = formState.inputs.phone ? formState.inputs.phone.value : undefined;

        const authData = {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            name,
            surname,
            phoneNumber
        }

            props.onAuth(CURRENT_AUTH_METHOD, authData);
            if(!props.uathError) props.onClose();
    }

    if(props.authError && !showInvalidFormMessage) setShowInvalidFormMessage(true);

    return (
        <Modal onClose={props.onClose} visible={props.visible}>
            <div className={classes.AuthModal}>
                <div className={classes.AuthModal__title}>
                    {authFormType === AUTH_METHOD_SIGNUP && <h2>Регистрация</h2>}
                    {authFormType === AUTH_METHOD_LOGIN && <h2>Вход</h2>}
                    <span><ReactClose className={classes['AuthModal__close-icon']} onClick={props.onClose} /></span>
                </div>
                <div className={classes.AuthModal__content}>
                    <div className={classes['AuthModal__form-wrapper']}>
                        <span className={classes['AuthModal__choice-text']}>или</span>
                        {/* Error messages that will appear on different form errors */}
                        {showInvalidFormMessage && !formState.isValid &&  authFormType === AUTH_METHOD_SIGNUP
                            && <span className={classes['AuthModal__invalid-form-label']}>Упс, похоже, что в форме есть ошибки. Необходимо их исправить перед тем как завершить регистрацию.</span>}
                            {showInvalidFormMessage && !formState.isValid && authFormType === AUTH_METHOD_LOGIN
                            && <span className={classes['AuthModal__invalid-form-label']}>Данные для входа заполнены с ошибками.</span>}
                            {showInvalidFormMessage && props.authError
                            && <span className={classes['AuthModal__invalid-form-label']}>{props.authError.message}</span>}
                        {/*  */}
                        <Form>
                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className={classes.AuthModal__label}>Фамилия</Form.Label>
                                <Form.TextField id={classes.surname} onInput={inputHandler} initialValid />
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className={classes.AuthModal__label} required>Имя</Form.Label>
                                <Form.TextField id={classes.name} onInput={inputHandler} initialValid={false} validators={[VALIDATOR_REQUIRE()]} />
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className={classes.AuthModal__label}>Номер телефона</Form.Label>
                                <Form.TextField id={classes['phone']} onInput={inputHandler} mask='+380 (99) 999-99-99' initialValid validators={[VALIDATOR_EXACT_LENGTH(19)]} />
                            </Form.Row>}

                            <Form.Row>
                                <Form.Label for='field' className={classes.AuthModal__label} required>Эл. почта</Form.Label>
                                <Form.TextField id={classes.email} onInput={inputHandler} initialValid={false} validators={[VALIDATOR_EMAIL()]} />
                            </Form.Row>

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className={classes.AuthModal__label} required>Придумайте пароль</Form.Label>
                                <Form.TextField id={classes.password} type='password' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}/>
                                <Form.Label for='field' className={classes.AuthModal__label}>Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой</Form.Label>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Button className={classes.AuthModal__submit} onClick={authSubmitHandler}>{props.loading ? <LoadingSpinner/> : 'Зарегистрироваться'}</Button>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <button className={classes.AuthModal__register} onClick={() => switchAuthType('login')}>Я уже зарегистрирован</button>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_LOGIN && <React.Fragment>
                                <Form.Row>
                                    <Form.Label for='field' className={classes.AuthModal__label} required>Пароль</Form.Label>
                                    <Form.TextField id={classes.password} type='password' onInput={inputHandler} initialValid validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}/>
                                </Form.Row>

                                <Form.Row>
                                    <div className={classes.AuthModal__restore}>
                                        <Checkbox className={classes.AuthModal__passCheckbox}>Запомнить меня</Checkbox>
                                        <button className={classes.AuthModal__passReset}>Напомнить пароль</button>
                                    </div>
                                </Form.Row>

                                <Form.Row>
                                    <Button className={classes.AuthModal__submit} onClick={authSubmitHandler}>{props.loading ? <LoadingSpinner/> : 'Войти'}</Button>
                                </Form.Row>

                                <Form.Row>
                                    <button className={classes.AuthModal__register} onClick={() => switchAuthType('signup')}>Зарегистрироваться</button>
                                </Form.Row>

                            </React.Fragment>}
                        </Form>
                    </div>
                    <div className={classes['AuthModal__autoAuth-wrapper']}>
                        <div className={classes['AuthModal__autoAuth-title']}>Войти как пользователь</div>
                        <button className={classes['AuthModal__autoAuth-button']}>
                            <ReactFacebook className={classes['AuthModal__autoAuth-icon']} />
                            <span>Facebook</span>
                        </button>
                        <button className={classes['AuthModal__autoAuth-button']}>
                            <ReactGoogle className={classes['AuthModal__autoAuth-icon']} />
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        loading: state.auth.loading,
        authError: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (authMethod, authData) => dispatch(actions.auth(authMethod, authData)),
        // onSetAuthRedirectPath: () => dispatch(actions.authRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)