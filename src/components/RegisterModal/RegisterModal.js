import React from 'react'

import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Checkbox from '../UI/Checkbox/Checkbox';
import Button from '../UI/Button/Button';

import { ReactComponent as ReactGoogle } from '../../assets/social/google.svg';
import { ReactComponent as ReactFacebook } from '../../assets/social/043-facebook-1.svg';
import { ReactComponent as ReactClose } from '../../assets/misc/cross.svg';
import './RegisterModal.css';

export default function RegisterModal(props) {
    return (
        <Modal onClose={props.onClose}>
            <div className='RegisterModal'>
                <div className='RegisterModal__title'>
                    <h2>Регистрация</h2>
                    <span><ReactClose className='RegisterModal__close-icon' onClick={props.onClose} /></span>
                </div>
                <div className='RegisterModal__content'>
                    <div className='RegisterModal__form-wrapper'>
                        <span className='RegisterModal__choice-text'>или</span>
                        <Form>
                            <Form.Row>
                                <Form.Label for='field' className='RegisterModal__label'>Фамилия</Form.Label>
                                <Form.TextField id='textField__password' />
                            </Form.Row>
                            <Form.Row>
                                <Form.Label for='field' className='RegisterModal__label'>Имя</Form.Label>
                                <Form.TextField id='textField__password' />
                            </Form.Row>
                            <Form.Row>
                                <Form.Label for='field' className='RegisterModal__label'>Эл. почта или телефон</Form.Label>
                                <Form.TextField id='textField__email' />
                            </Form.Row>
                            <Form.Row>
                                <Form.Label for='field' className='RegisterModal__label'>Придумайте пароль</Form.Label>
                                <Form.TextField id='textField__password' type='password' />
                                <Form.Label for='field' className='RegisterModal__label'>Пароль должен быть не менее 6 символов, содержать цифры и латинские буквы, в том числе заглавные, и не должен совпадать с именем и эл. почтой</Form.Label>
                            </Form.Row>
                            <Form.Row>
                                <Button className='RegisterModal__submit'>Зарегистрироваться</Button>
                            </Form.Row>
                            <Form.Row>
                                <a className='RegisterModal__register'>Я уже зарегистрирован</a>
                            </Form.Row>
                        </Form>
                    </div>
                    <div className='RegisterModal__autoAuth-wrapper'>
                        <div className='RegisterModal__autoAuth-title'>Войти как пользователь</div>
                        <button className='RegisterModal__autoAuth-button'>
                            <ReactFacebook className='RegisterModal__autoAuth-icon' />
                            <span>Facebook</span>
                        </button>
                        <button className='RegisterModal__autoAuth-button'>
                            <ReactGoogle className='RegisterModal__autoAuth-icon' />
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
