import React, { useState } from 'react'
import Calendar from 'react-calendar';

import ClientAccount from '..';
import Form from '../../../components/UI/Form/Form';
import Button from '../../../components/UI/Button/Button';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';

import {useForm} from '../../../hooks/useForm/useForm';

import classes from './AccountContacts.module.css';




export default function AccountContacts(props) {

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    return (
        <ClientAccount>
            <div className={classes.AccountContacts} /* onClick={() => setShowCalendar(false)} */>
                <h1>Контанты</h1>
                <Form>
                    <Form.Row className={`${classes['AccountContacts__formRow']} 
                    ${fullName === '' 
                    ? classes['AccountContacts__formRow-empty'] 
                    : classes['AccountContacts__formRow-full']}`}>
                        <span className={`${classes['AccountContacts__input-title']}`}>Контактное лицо (ФИО)</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        initialValid
                        id={'input-fullname'} 
                        onInput={(id, value) => setFullName(value)}/>
                    </Form.Row>
                    <Form.Row className={`${classes['AccountContacts__formRow']} 
                    ${phoneNumber === '' ? 
                    classes['AccountContacts__formRow-empty'] : 
                    classes['AccountContacts__formRow-full']}`}>
                        <span className={`${classes['AccountContacts__input-title']}`}>Контактный телефон</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        initialValid
                        id={'input-phone-number'} 
                        onInput={(id, value) => setPhoneNumber(value)}/>
                    </Form.Row>
                    <Form.Row className={`${classes['AccountContacts__formRow']} 
                    ${email === '' 
                    ? classes['AccountContacts__formRow-empty'] 
                    : classes['AccountContacts__formRow-full']}`}>
                        <span className={`${classes['AccountContacts__input-title']} ${classes['AccountContacts__input-title-required']}`}>E-mail</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        required
                        id={'input-email'} 
                        onInput={(id, value) => setEmail(value)}/>
                    </Form.Row>
                    <Form.Row className={`${classes['AccountContacts__formRow']} 
                    ${birthDate === '' 
                    ? classes['AccountContacts__formRow-empty'] 
                    : classes['AccountContacts__formRow-full']}`}>
                        <span className={classes['AccountContacts__input-title']}>Дата рождения</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        initialValid
                        id={'input-birthdate'} 
                        value={birthDate.toJSON().slice(0, 10)} 
                        onClick={e => setShowCalendar(true)}/>
                        <Calendar 
                        value={birthDate} 
                        autoupdate 
                        onChange={(date) => { setBirthDate(date); setShowCalendar(false) }}
                            className={(!showCalendar ? classes['AccountContacts__calendar-hide'] : classes['AccountContacts__calendar'])} />
                    </Form.Row>
                    <Form.Row className={classes[`AccountContacts__formRow`]}>
                        <Checkbox onChange={() => setChangePassword(!changePassword)}>Сменить пароль</Checkbox>
                    </Form.Row>
                    <Form.Row className={`${classes[`AccountContacts__formRow`]} 
                ${!changePassword && classes['AccountContacts__formRow-hide']}
                ${!oldPassword ? classes['AccountContacts__formRow-empty'] : classes['AccountContacts__formRow-full']}`}>
                        <span className={`${classes['AccountContacts__input-title']} ${classes['AccountContacts__input-title-required']}`}>Старый пароль</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        required={changePassword}
                        id={'input-old-pass'} 
                        onInput={(id, value) => setOldPassword(value)} />
                    </Form.Row>
                    <Form.Row className={`${classes[`AccountContacts__formRow`]} 
                ${!changePassword && classes['AccountContacts__formRow-hide']}
                ${!newPassword ? classes['AccountContacts__formRow-empty'] : classes['AccountContacts__formRow-full']}`}>
                        <span className={`${classes['AccountContacts__input-title']} ${classes['AccountContacts__input-title-required']}`}>Новый пароль</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        required={changePassword}
                        id={'input-new-pass'} 
                        onInput={(id, value) => setNewPassword(value)} />
                    </Form.Row>
                    <Form.Row className={`${classes[`AccountContacts__formRow`]} 
                ${!changePassword && classes['AccountContacts__formRow-hide']}
                ${!repeatNewPassword ? classes['AccountContacts__formRow-empty'] : classes['AccountContacts__formRow-full']}`}>
                        <span className={`${classes['AccountContacts__input-title']} 
                        ${classes['AccountContacts__input-title-required']}`}>Повторите пароль</span>
                        <Form.TextField className={classes['AccountContacts__TextField']} 
                        required={changePassword}
                        id={'input-repeat-pass'} 
                        onInput={(id, value) => setRepeatNewPassword(value)} />
                    </Form.Row>
                    <Form.Row>
                        <Button className={classes.AccountContacts__submit} 
                        onClick={e => {e.preventDefault(); alert('Submitted! (test mode)')}}>Сохранить изменения</Button>
                    </Form.Row>
                </Form>
            </div>
        </ClientAccount>
    )
}
