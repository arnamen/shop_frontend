import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux';

import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import * as actions from '../../store/actions/auth';

import { useForm } from '../../hooks/useForm/useForm';

import { ReactComponent as ReactGoogle } from '../../assets/social/google.svg';
import { ReactComponent as ReactFacebook } from '../../assets/social/043-facebook-1.svg';
import { ReactComponent as ReactClose } from '../../assets/misc/cross.svg';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_EXACT_LENGTH, VALIDATOR_MINLENGTH } from '../../utils/validator';

import './AuthModal.css';

const AUTH_METHOD_LOGIN = 'login';
const AUTH_METHOD_SIGNUP = 'signup';

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
        console.log(formState.isValid)
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
        // props.onAuth(CURRENT_AUTH_METHOD, authData);
    }

    return (
        <Modal onClose={props.onClose} visible={props.visible}>
            <div className='AuthModal'>
                <div className='AuthModal__title'>
                    {authFormType === AUTH_METHOD_SIGNUP && <h2>Регистрация</h2>}
                    {authFormType === AUTH_METHOD_LOGIN && <h2>Вход</h2>}
                    <span><ReactClose className='AuthModal__close-icon' onClick={props.onClose} /></span>
                </div>
                <div className='AuthModal__content'>
                    <div className='AuthModal__form-wrapper'>
                        <span className='AuthModal__choice-text'>или</span>
                        {showInvalidFormMessage
                            && <span className='AuthModal__invalid-form-label'>Упс, похоже, что в форме есть ошибки. Необходимо их исправить прежде чем завершить регистрацию.</span>}
                        <Form>
                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Фамилия</Form.Label>
                                <Form.TextField id='surname' onInput={inputHandler} initialValid />
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label' required>Имя</Form.Label>
                                <Form.TextField id='name' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_REQUIRE()]} />
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Номер телефона</Form.Label>
                                <Form.TextField id='phone' onInput={inputHandler} mask='+380 (99) 999-99-99' initialValid validators={[VALIDATOR_EXACT_LENGTH(19)]} />
                            </Form.Row>}

                            <Form.Row>
                                <Form.Label for='field' className='AuthModal__label' required>Эл. почта</Form.Label>
                                <Form.TextField id='email' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_EMAIL()]} />
                            </Form.Row>

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label' required>Придумайте пароль</Form.Label>
                                <Form.TextField id='password-signup' type='password' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}/>
                                <Form.Label for='field' className='AuthModal__label'>Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой</Form.Label>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <Button className='AuthModal__submit' onClick={authSubmitHandler}>Зарегистрироваться</Button>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_SIGNUP && <Form.Row>
                                <button className='AuthModal__register' onClick={() => switchAuthType('login')}>Я уже зарегистрирован</button>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_LOGIN && <React.Fragment>
                                <Form.Row>
                                    <Form.Label for='field' className='AuthModal__label'>Пароль</Form.Label>
                                    <Form.TextField id='password-login' type='password' onInput={inputHandler} initialValid validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}/>
                                </Form.Row>

                                <Form.Row>
                                    <div className='AuthModal__restore'>
                                        <Checkbox className='AuthModal__passCheckbox'>Запомнить меня</Checkbox>
                                        <button className='AuthModal__passReset'>Напомнить пароль</button>
                                    </div>
                                </Form.Row>

                                <Form.Row>
                                    <Button className='AuthModal__submit' onClick={authSubmitHandler}>Войти</Button>
                                </Form.Row>

                                <Form.Row>
                                    <button className='AuthModal__register' onClick={() => switchAuthType('signup')}>Зарегистрироваться</button>
                                </Form.Row>

                            </React.Fragment>}
                        </Form>
                    </div>
                    <div className='AuthModal__autoAuth-wrapper'>
                        <div className='AuthModal__autoAuth-title'>Войти как пользователь</div>
                        <button className='AuthModal__autoAuth-button'>
                            <ReactFacebook className='AuthModal__autoAuth-icon' />
                            <span>Facebook</span>
                        </button>
                        <button className='AuthModal__autoAuth-button'>
                            <ReactGoogle className='AuthModal__autoAuth-icon' />
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
        isLoading: state.auth.isLoading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (authMethod, authData) => dispatch(actions.auth(authMethod, authData)),
        // onSetAuthRedirectPath: () => dispatch(actions.authRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)