import React from 'react'

import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';

import { ReactComponent as ReactGoogle } from '../../assets/social/google.svg';
import { ReactComponent as ReactFacebook } from '../../assets/social/043-facebook-1.svg';
import { ReactComponent as ReactClose } from '../../assets/misc/cross.svg';
import './AuthModal.css';
const AUTH_METHOD_LOGIN = 'login';
const AUTH_METHOD_REGISTER = 'register';
export default function AuthModal(props) {

    return (
        <Modal onClose={props.onClose} visible={props.visible}>
            <div className='AuthModal'>
                <div className='AuthModal__title'>
                    {props.authMethod===AUTH_METHOD_REGISTER && <h2>Регистрация</h2>}
                    {props.authMethod===AUTH_METHOD_LOGIN && <h2>Вход</h2>}
                    <span><ReactClose className='AuthModal__close-icon' onClick={props.onClose} /></span>
                </div>
                <div className='AuthModal__content'>
                    <div className='AuthModal__form-wrapper'>
                        <span className='AuthModal__choice-text'>или</span>
                        <Form>
                            {props.authMethod === AUTH_METHOD_REGISTER && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Фамилия</Form.Label>
                                <Form.TextField id='textField__password' />
                            </Form.Row>}
                            {props.authMethod === AUTH_METHOD_REGISTER && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Имя</Form.Label>
                                <Form.TextField id='textField__password' />
                            </Form.Row>}
                            <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Эл. почта или телефон</Form.Label>
                                <Form.TextField id='textField__email' />
                            </Form.Row>
                            {props.authMethod === AUTH_METHOD_REGISTER && <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Придумайте пароль</Form.Label>
                                <Form.TextField id='textField__password' type='password' />
                                <Form.Label for='field' className='AuthModal__label'>Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой</Form.Label>
                            </Form.Row>}
                            {props.authMethod === AUTH_METHOD_REGISTER && <Form.Row>
                                <Button className='AuthModal__submit'>Зарегистрироваться</Button>
                            </Form.Row>}
                            {props.authMethod === AUTH_METHOD_REGISTER && <Form.Row>
                                <button className='AuthModal__register' onClick={() => props.switchAuthType(props.authMethod)}>Я уже зарегистрирован</button>
                            </Form.Row>}
                            {props.authMethod === AUTH_METHOD_LOGIN && <React.Fragment>
                                <Form.Row>
                                <Form.Label for='field' className='AuthModal__label'>Пароль</Form.Label>
                                <Form.TextField id='textField__password' type='password' />
                            </Form.Row>
                            <Form.Row>
                                <div className='AuthModal__restore'>
                                <Checkbox className='AuthModal__passCheckbox'>Запомнить меня</Checkbox>
                                <button className='AuthModal__passReset'>Напомнить пароль</button>
                                </div>
                            </Form.Row>
                            <Form.Row>
                            <Button className='AuthModal__submit'>Войти</Button>
                            </Form.Row>
                            <Form.Row>
                            <button className='AuthModal__register' onClick={() => props.switchAuthType(props.authMethod)}>Зарегистрироваться</button>
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
