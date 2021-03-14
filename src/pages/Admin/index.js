import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux';

import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import Form from '../../components/UI/Form/Form';
import Button from '../../components/UI/Button/Button';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

import { useForm } from '../../hooks/useForm/useForm';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_EXACT_LENGTH, VALIDATOR_MINLENGTH } from '../../utils/validator';

import './Admin.css';

function Admin( props ) {

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


    const authSubmitHandler = async (event) => {

        event.preventDefault();

        if (!formState.isValid) return setShowInvalidFormMessage(true);
        else if (formState.isValid && showInvalidFormMessage) setShowInvalidFormMessage(false);

        const itemData = {}

            // if(!props.uathError) props.onClose();
    }

    if(props.authError && !showInvalidFormMessage) setShowInvalidFormMessage(true);

    return (
        <div className='Admin'>
            <div className='Admin__form-wrapper'>
                        {/* Error messages that will appear on different form errors */}
                            {showInvalidFormMessage && !formState.isValid
                            && <span className='Admin__invalid-form-label'>Данные для создания товара заполнены с ошибками.</span>}
                            {showInvalidFormMessage && props.authError
                            && <span className='Admin__invalid-form-label'>{props.authError.message}</span>}
                        {/*  */}
                        <Form>
                            {<Form.Row>
                                <Form.Label for='field' className='Admin__label'>Название</Form.Label>
                                <Form.TextField id='surname' onInput={inputHandler} initialValid />
                            </Form.Row>}

                            {<Form.Row>
                                <Form.Label for='field' className='Admin__label' required>Описание</Form.Label>
                                <Form.TextField id='name' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_REQUIRE()]} />
                            </Form.Row>}

                            {<Form.Row>
                                <Form.Label for='field' className='Admin__label'>Категории (через пробел)</Form.Label>
                                <Form.TextField id='phone' onInput={inputHandler} mask='+380 (99) 999-99-99' initialValid validators={[VALIDATOR_EXACT_LENGTH(19)]} />
                            </Form.Row>}

                            <Form.Row>
                                <Form.Label for='field' className='Admin__label' required>Теги</Form.Label>
                                <Form.TextField id='email' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_EMAIL()]} />
                            </Form.Row>

                            {<Form.Row>
                                <Form.Label for='field' className='Admin__label' required>Поле</Form.Label>
                                <Form.TextField id='password' type='password' onInput={inputHandler} initialValid={false} validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}/>
                                <Form.Label for='field' className='Admin__label'>Описание поля</Form.Label>
                            </Form.Row>}

                            {<Form.Row>
                                <Button className='Admin__submit' onClick={authSubmitHandler}>{props.loading ? <LoadingSpinner/> : 'Создать'}</Button>
                            </Form.Row>}

                            {<Form.Row>
                                <button className='Admin__register' onClick={() => switchAuthType('login')}>Создать</button>
                            </Form.Row>}

                            {<React.Fragment>
                                <Form.Row>
                                    <Form.Label for='field' className='Admin__label' required>Поле</Form.Label>
                                    <Form.TextField id='password' type='password' onInput={inputHandler} initialValid validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}/>
                                </Form.Row>

                                <Form.Row>
                                    <Button className='Admin__submit' onClick={authSubmitHandler}>{props.loading ? <LoadingSpinner/> : 'Кнопка'}</Button>
                                </Form.Row>


                            </React.Fragment>}
                        </Form>
                    </div>
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