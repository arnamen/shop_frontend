import React, {useEffect, useState} from 'react'

import * as actionTypes from '../../store/actions/actionTypes';

import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';

import { useForm } from '../../hooks/useForm/useForm';

import { ReactComponent as ReactGoogle } from '../../assets/social/google.svg';
import { ReactComponent as ReactFacebook } from '../../assets/social/043-facebook-1.svg';
import { ReactComponent as ReactClose } from '../../assets/misc/cross.svg';
import './AuthModal.css';
import { connect } from 'react-redux';

const AUTH_METHOD_LOGIN = 'login';
const AUTH_METHOD_LOGIN_URL = 'http://127.0.0.1:5000/api/users/login';

const AUTH_METHOD_REGISTER = 'register';
const AUTH_METHOD_REGISTER_URL = 'http://127.0.0.1:5000/api/users/signup';

function AuthModal(props) {

    const [authFormType, setAuthFormType] = useState(props.authFormType);

    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );

        useEffect(() => {
            setAuthFormType(props.authFormType);
        }, [props.authFormType])

      const switchAuthType = (currentAuthType) => {
        switch (currentAuthType) {
            case 'register':
                setAuthFormType('login');
                setFormData({
                    ...formState.inputs,
                    name: undefined,
                    surname: undefined
                })
                break;

            case 'login':
                setAuthFormType('register');
                setFormData({
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    surname: {
                        value: '',
                        isValid: false
                    }
                })
                break;
            default:
                break;
        }
    }

    const authSubmitHandler = async (event) => {
        
        event.preventDefault();
        let CURRENT_AUTH_METHOD_URL;
        if(authFormType === AUTH_METHOD_LOGIN) CURRENT_AUTH_METHOD_URL = AUTH_METHOD_LOGIN_URL;
        else if (authFormType === AUTH_METHOD_REGISTER) CURRENT_AUTH_METHOD_URL = AUTH_METHOD_REGISTER_URL;
        else throw new Error('Undefined auth method');

        const name = formState.inputs.name ? formState.inputs.name.value : undefined;
        const surname = formState.inputs.surname ? formState.inputs.surname.value : undefined;

        const authData = {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            name,
            surname
        }

        try {
            const JSONresult = await fetch(CURRENT_AUTH_METHOD_URL, {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(authData)
            })

            const result = await JSONresult.json();
            if(!JSONresult.ok) {
                return console.log(result);
            }
            localStorage.setItem('token', result.token);
            console.log(result.token)
            props.onLogin(result.token);
            props.onClose();
        } catch (e) {
            console.log(e)
        }
    }   

    return (
        <Modal onClose={props.onClose} visible={props.visible}>
            <div className='AuthModal'>
                <div className='AuthModal__title'>
                    {authFormType===AUTH_METHOD_REGISTER && <h2>Регистрация</h2>}
                    {authFormType===AUTH_METHOD_LOGIN && <h2>Вход</h2>}
                    <span><ReactClose className='AuthModal__close-icon' onClick={props.onClose} /></span>
                </div>
                <div className='AuthModal__content'>
                    <div className='AuthModal__form-wrapper'>
                        <span className='AuthModal__choice-text'>или</span>
                        <Form>
                            {authFormType === AUTH_METHOD_REGISTER && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Фамилия</Form.Label>
                                <Form.TextField id='surname' onInput={inputHandler}/>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_REGISTER && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Имя</Form.Label>
                                <Form.TextField id='name' onInput={inputHandler} />
                            </Form.Row>}

                            <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Эл. почта или телефон</Form.Label>
                                <Form.TextField id='email' onInput={inputHandler} />
                            </Form.Row>

                            {authFormType === AUTH_METHOD_REGISTER && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Придумайте пароль</Form.Label>
                                <Form.TextField id='password' type='password'  onInput={inputHandler}/>
                                <Form.Label for='field' className='AuthModal__label'>Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой</Form.Label>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_REGISTER && <Form.Row>
                                <Button className='AuthModal__submit' onClick={authSubmitHandler}>Зарегистрироваться</Button>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_REGISTER && <Form.Row>
                                <button className='AuthModal__register' onClick={() => switchAuthType(authFormType)}>Я уже зарегистрирован</button>
                            </Form.Row>}

                            {authFormType === AUTH_METHOD_LOGIN && <React.Fragment>
                                <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Пароль</Form.Label>
                                <Form.TextField id='password' type='password'  onInput={inputHandler}/>
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
                            <button className='AuthModal__register' onClick={() => switchAuthType(authFormType)}>Зарегистрироваться</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch({
            type: actionTypes.LOGIN,
            login: true,
            token: token
        }),
    }
  }
  
  export default connect(null, mapDispatchToProps)(AuthModal)