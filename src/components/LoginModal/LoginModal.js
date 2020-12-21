import React from 'react'
import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Checkbox from '../UI/Checkbox/Checkbox';
import Button from '../UI/Button/Button';

import {ReactComponent as ReactGoogle} from '../../assets/social/google.svg';
import {ReactComponent as ReactFacebook} from '../../assets/social/043-facebook-1.svg';
import {ReactComponent as ReactClose} from '../../assets/misc/cross.svg';

import './LoginModal.css';

export default function LoginModal(props) {

    return (
        <Modal onClose={props.onClose} visible={props.visible}>
            <div className='LoginModal'>
                <div className='LoginModal__title'>
                    <h2>Вход</h2>
                    <span><ReactClose className='LoginModal__close-icon' onClick={props.onClose}/></span>
                </div>
                <div className='LoginModal__content'>
                    <div className='LoginModal__form-wrapper'>
                    <span className='LoginModal__choice-text'>или</span>
                        <Form>
                            <Form.Row>
                                <Form.Label for='field' className='LoginModal__label'>Эл. почта или телефон</Form.Label>
                                <Form.TextField id='textField__email' />
                            </Form.Row>
                            <Form.Row>
                                <Form.Label for='field' className='LoginModal__label'>Пароль</Form.Label>
                                <Form.TextField id='textField__password' type='password' />
                            </Form.Row>
                            <Form.Row>
                                <div className='LoginModal__restore'>
                                <Checkbox className='LoginModal__passCheckbox'>Запомнить меня</Checkbox>
                                <a className='LoginModal__passReset'>Напомнить пароль</a>
                                </div>
                            </Form.Row>
                            <Form.Row>
                            <Button className='LoginModal__submit'>Войти</Button>
                            </Form.Row>
                            <Form.Row>
                            <a className='LoginModal__register'>Зарегистрироваться</a>
                            </Form.Row>
                        </Form>
                    </div>
                    <div className='LoginModal__autoAuth-wrapper'>
                        <div className='LoginModal__autoAuth-title'>Войти как пользователь</div>
                        <button className='LoginModal__autoAuth-button'>
                            <ReactFacebook className='LoginModal__autoAuth-icon'/>
                            <span>Facebook</span>
                        </button>
                        <button className='LoginModal__autoAuth-button'>
                            <ReactGoogle className='LoginModal__autoAuth-icon'/>
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
