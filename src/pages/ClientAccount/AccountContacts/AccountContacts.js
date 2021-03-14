import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Form from '../../UI/Form/Form';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';

import './AccountContacts.css';

export default function AccountContacts( props ) {

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
        <div className='AccountContacts' onClick={() => setShowCalendar(false)}>
            <h1>Контанты</h1>
            <Form>
                <Form.Row className={`AccountContacts__formRow ${fullName === '' && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Контактное лицо (ФИО)</span>
                    <Form.TextField id='input-fullname' required/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow ${phoneNumber === '' && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Контактный телефон</span>
                    <Form.TextField id='input-phone-number' required/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow ${email === '' && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title'>E-mail</span>
                    <Form.TextField id='input-email'/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow ${birthDate === '' && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title'>Дата рождения</span>
                    <Form.TextField id='input-birthdate' value={birthDate.toJSON().slice(0,10)} onClick={e => {setShowCalendar(true)}}/>
                    <Calendar value={birthDate} autoupdate onChange={(date) => {setBirthDate(date); setShowCalendar(false)}} 
                    className={(!showCalendar ? 'AccountContacts__calendar-hide' : 'AccountContacts__calendar') }/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow`}>
                    <Checkbox onChange={() => setChangePassword(!changePassword)}>Сменить пароль</Checkbox>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow 
                ${!changePassword && 'AccountContacts__formRow-hide'}
                ${!oldPassword && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Старый пароль</span>
                    <Form.TextField required id='input-old-pass' onChange={e => setOldPassword(e.target.value)}/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow 
                ${!changePassword && 'AccountContacts__formRow-hide'}
                ${!newPassword && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Новый пароль</span>
                    <Form.TextField required id='input-new-pass' onChange={e => setNewPassword(e.target.value)}/>
                </Form.Row>
                <Form.Row className={`AccountContacts__formRow 
                ${!changePassword && 'AccountContacts__formRow-hide'}
                ${!repeatNewPassword && 'AccountContacts__formRow-empty'}`}>
                    <span className='AccountContacts__input-title AccountContacts__input-title-required'>Повторите пароль</span>
                    <Form.TextField required id='input-repeat-pass' onChange={e => setRepeatNewPassword(e.target.value)}/>
                </Form.Row>
                <Form.Row>
                    <Button className='AccountContacts__submit'>Сохранить изменения</Button>
                </Form.Row>
            </Form>
        </div>
    )
}
