import React from 'react'
import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/Form';
import Checkbox from '../UI/Checkbox/Checkbox';

import './RegisterModal.css';

export default function RegisterModal(props) {
    return (
        <Modal onClose={props.onClose}>
            <div className='RegisterModal'>
                <h2 className='RegisterModal__title'>Вход</h2>
                <div className='RegisterModal__content'>
                    <div className='RegisterModal__form-wrapper'>
                        <Form>
                            <Form.Row>
                                <Form.Label for='field' className='RegisterModal__label'>Эл. почта или телефон</Form.Label>
                                <Form.TextField id='textField__email' />
                            </Form.Row>
                            <Form.Row>
                                <Form.Label for='field' className='RegisterModal__label'>Пароль</Form.Label>
                                <Form.TextField id='textField__password' type='password' />
                            </Form.Row>
                            <Form.Row>
                                <Checkbox className='RegisterModal__passCheckbox'>Запомнить меня</Checkbox>
                            </Form.Row>
                        </Form>
                    </div>
                    <div className='RegisterModal__autoAuth-wrapper'>
                        <span>SOME TEXT</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
